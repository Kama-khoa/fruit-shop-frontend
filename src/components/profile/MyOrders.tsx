'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { getMyOrders } from '@/lib/api/orders';
import { OrderListSummary } from '@/types/order';
import { Loader2 } from 'lucide-react';
import OrderTabs, { OrderStatusFilter } from '@/components/orders/OrderTabs';
import OrderItem from '@/components/orders/OrderItem';
import SimplePagination from '@/components/common/SimplePagination';

const ITEMS_PER_PAGE = 6;

// Hàm map trạng thái từ backend sang các tab
const mapStatusToTab = (status: string): OrderStatusFilter => {
  status = status.toLowerCase();
  if (status === 'pending' || status === 'processing' || status === 'shipping') {
    return 'processing';
  }
  if (status === 'delivered' || status === 'completed') {
    return 'delivered';
  }
  if (status === 'cancelled' || status === 'failed') {
    return 'cancelled';
  }
  return 'all'; // Fallback
};

export default function MyOrders() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [allOrders, setAllOrders] = useState<OrderListSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<OrderStatusFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (user && user.customer_id) {
      setIsLoading(true);
      getMyOrders()
        .then(data => {
          setAllOrders(data);
        })
        .catch(err => {
          console.error("Lỗi khi tải lịch sử đơn hàng:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  // Lọc danh sách đơn hàng dựa trên tab đang chọn
  const filteredOrders = useMemo(() => {
    if (activeTab === 'all') {
      return allOrders;
    }
    return allOrders.filter(order => mapStatusToTab(order.order_status) === activeTab);
  }, [allOrders, activeTab]);

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredOrders.slice(startIndex, endIndex);
  }, [filteredOrders, currentPage]);

  const handleTabChange = (tab: OrderStatusFilter) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset về trang 1 khi đổi tab
  };

  if (isLoading || isAuthLoading) {
    return (
      <div className="flex justify-center items-center p-12 bg-white rounded-lg shadow min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-start gap-8">
        <h2 className="text-black text-2xl font-semibold font-['Inter'] leading-loose tracking-wide">Đơn hàng của tôi</h2>
        <OrderTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <div className="w-full mt-6 inline-flex flex-col justify-start items-start gap-6">
        {paginatedOrders.length > 0 ? (
          paginatedOrders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))
        ) : (
          <div className="w-full text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p>Không có đơn hàng nào trong mục này.</p>
          </div>
        )}
      </div>

      <SimplePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}