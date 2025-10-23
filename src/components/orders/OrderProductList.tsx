'use client';

import React, { useState, useMemo } from 'react';
import OrderProductItem from './OrderProductItem';
import SimplePagination from '@/components/common/SimplePagination';
import { OrderItem } from '@/types/order';

interface OrderProductListProps {
  items: OrderItem[]; // Nhận toàn bộ danh sách item từ component cha
}

const ITEMS_PER_PAGE = 6; // Hiển thị 6 sản phẩm mỗi trang

const OrderProductList: React.FC<OrderProductListProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán tổng số trang
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage]);

  return (
    <div className="self-stretch px-6 py-8 bg-white rounded-2xl border border-gray-100 shadow-sm inline-flex flex-col justify-center items-center gap-6">
        
        {/* Header của danh sách */}
        <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex-1 justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-7">
                Tên sản phẩm
            </div>
            <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-normal text-right">
                Số lượng
            </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
            {paginatedItems.map((item) => (
                <OrderProductItem key={item.id} item={item} />
            ))}
        </div>

        {/* Phân trang */}
        {totalPages > 1 && (
             <SimplePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        )}
    </div>
  );
};

export default OrderProductList;