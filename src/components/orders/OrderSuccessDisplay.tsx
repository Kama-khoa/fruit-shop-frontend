'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';
import { CreateOrderResponse } from '@/types/order';
import { CheckCircleIcon } from '@/components/ui/Icons';
import Image from 'next/image';

const formatCurrency = (amount: number | string) => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericAmount);
};

interface OrderSuccessDisplayProps {
  orderResponse: CreateOrderResponse;
}

const OrderSuccessDisplay: React.FC<OrderSuccessDisplayProps> = ({ orderResponse }) => {
  const { order, shipment } = orderResponse;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
      <CheckCircleIcon className="w-16 h-16" />
      <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Đặt hàng thành công!</h1>
      <p className="text-sm text-gray-600 mb-6">
        Cảm ơn bạn đã mua sắm. <br /> Đơn hàng của bạn <span className="font-semibold text-green-600">#{order.order_number}</span> đã được đặt thành công.
      </p>

      {/* Chi tiết đơn hàng */}
      <div className="w-full text-left bg-gray-50 p-6 rounded-lg border">
        <h2 className="text-lg font-semibold mb-4">Chi tiết đơn hàng</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Tổng cộng:</span>
            <span className="font-semibold">{formatCurrency(order.total_amount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Địa chỉ giao hàng:</span>
            <span className="font-semibold text-right max-w-xs truncate">{order.shipping_address}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phương thức thanh toán:</span>
            <span className="font-semibold capitalize">{order.payment_method}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Mã vận đơn (GHN):</span>
            <span className="font-semibold text-green-600">{shipment.tracking_number}</span>
          </div>
        </div>
      </div>
      
      <Link href={ROUTES.ROOT} className="w-full">
        <button
          className="w-full mt-8 py-3 bg-Button-Auth text-white text-sm font-semibold rounded-full hover:bg-Button-Auth-hover transition"
        >
          Tiếp tục mua sắm
        </button>
      </Link>
    </div>
  );
};

export default OrderSuccessDisplay;