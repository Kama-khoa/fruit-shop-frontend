'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { OrderListSummary } from '@/types/order';
import { ROUTES } from '@/lib/utils/routes';
import { WalletIcon, ArrowUpRightIcon } from '@/components/ui/Icons';
import { ProfileOrdersIcon } from '../ui/ProfileIcons';

interface OrderItemProps {
  order: OrderListSummary;
}

// Hàm định dạng tiền tệ
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// Hàm định dạng ngày
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatPaymentStatus = (status: string): string => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'Chưa thanh toán';
        case 'paid':
        case 'completed': // Thêm 'completed' cho an toàn
            return 'Đã thanh toán';
        case 'failed':
            return 'Thanh toán thất bại';
        case 'refunded':
            return 'Đã hoàn tiền';
        default:
            return status; // Trả về trạng thái gốc nếu không khớp
    }
};

const formatOrderStatus = (status: string): string => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'Đang xử lý';
        case 'confirmed':
            return 'Xác nhận';
        case 'processing':
            return 'Đóng hàng';
        case 'shipped':
            return 'Vận chuyển';
        case 'delivered':
            return 'Đã nhận';
        case 'cancelled':
            return 'Đã hủy';
        default:
            return status;
    }
};

const formatOrderLabel = (status: string): string => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'Đơn hàng đang xử lý';
        case 'confirmed':
            return 'Đơn hàng đã xác nhận';
        case 'processing':
            return 'Đơn hàng đang được đóng';
        case 'shipped':
            return 'Đơn hàng đang vận chuyển';
        case 'delivered':
            return 'Đơn hàng đã nhận';
        case 'cancelled':
            return 'Đơn hàng đã hủy';
        default:
            return status;
    }
};
// Hàm helper để lấy style cho tag trạng thái
const getStatusClasses = (status: string, type: 'payment' | 'order') => {
  status = status.toLowerCase();
  
  if (status === 'delivered' || status === 'paid') {
    return 'bg-Completed-back text-Completed border-Completed'; 
  }
  if (status === 'cancelled' || status === 'pending' &&  type ==='payment') {
    return 'bg-Cancelled-back text-Cancelled border-Cancelled'; 
  }
  if (status === 'shipped') {
    return 'bg-Shipped-back text-Shipped border-Shipped'; 
  }
  if (status === 'processing') {
    return 'bg-Processing-back text-Processing border-Processing'; 
  }
  if (status === 'confirmed') {
    return 'bg-Confirmed-back text-Confirmed border-Confirmed'; 
  }

  return 'bg-yellow-100 text-yellow-700 border-yellow-500';
};

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const router = useRouter();
  
  // Tính tổng số lượng sản phẩm
  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleViewDetails = () => {
    router.push(ROUTES.MAIN.PROFILE.ORDER_DETAIL(order.id));
  };

  return (
    <div className="w-full px-6 py-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      
      {/* Thông tin chính */}
      <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-4">
        
        {/* Chi tiết đơn hàng */}
        <div className="flex-1 flex flex-col justify-between items-start min-w-[150px]">
          <div className="text-gray-900 text-lg font-semibold font-['Inter'] leading-loose tracking-tight">
            {formatOrderLabel(order.order_status)}
          </div>
          <div className="text-gray-600 text-base font-normal leading-snug tracking-tight">
            {formatDate(order.order_date)}
          </div>
        </div>

        {/* Thông tin thanh toán */}
        <div className="flex items-center gap-4">
          <div className="p-1 bg-green-50 rounded-full flex justify-center items-center">
            <WalletIcon className="w-6 h-6 text-gray-800" />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="text-gray-900 text-lg font-semibold font-['Inter'] leading-normal tracking-tight">
              {formatCurrency(order.total_amount)}
            </div>
            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-snug tracking-tight uppercase">
              {order.payment_method}
            </div>
          </div>
        </div>
      </div>

      {/* Trạng thái và Nút hành động */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <div 
          className={`px-3 py-2 rounded-lg border text-sm font-medium ${getStatusClasses(order.payment_status, 'payment')}`}
        >
          {formatPaymentStatus(order.payment_status)}
        </div>
        <div 
          className={`px-3 py-2 rounded-lg border text-sm font-medium ${getStatusClasses(order.order_status, 'order')}`}
        >
          {formatOrderStatus(order.order_status)}
        </div>
        <button 
          onClick={handleViewDetails}
          className="flex justify-center items-center gap-2 text-gray-800 text-base font-semibold hover:text-green-600 transition-colors"
        >
          Xem chi tiết
          <ArrowUpRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OrderItem;