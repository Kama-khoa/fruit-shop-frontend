'use client';

import React from 'react';
import { Order } from '@/types/order';
import OrderStatusStep from './OrderStatusStep';

interface OrderStatusTrackerProps {
  order: Order;
}

// Định nghĩa tất cả các bước có thể có theo thứ tự
const ALL_STEPS: { key: string, label: string }[] = [
  { key: 'pending', label: 'Đang xử lý' },
  { key: 'confirmed', label: 'Đã xác nhận' },
  { key: 'processing', label: 'Đang đóng hàng' },
  { key: 'shipped', label: 'Đang vận chuyển' },
  { key: 'completed', label: 'Đã nhận hàng' },
];

// Hàm helper để dịch trạng thái (nếu cần)
const formatOrderStatus = (status: string): string => {
    switch (status.toLowerCase()) {
        case 'pending': return 'Đang xử lý';
        case 'confirmed': return 'Đã xác nhận';
        case 'processing': return 'Đang đóng hàng';
        case 'shipped': return 'Đang vận chuyển';
        case 'delivered':
        case 'completed': return 'Đã nhận hàng';
        case 'cancelled': return 'Đã hủy';
        default: return status;
    }
};

const OrderStatusTracker: React.FC<OrderStatusTrackerProps> = ({ order }) => {
  
  // Tìm bước hiện tại
  const currentStatusIndex = ALL_STEPS.findIndex(step => step.key === order.order_status);

  // Tạo một map để tra cứu thời gian từ lịch sử đơn hàng
  const historyMap = new Map<string, string>();
  if (order.history) {
    order.history.forEach(h => {
      historyMap.set(h.to_status, h.created_at);
    });
  }
  
  // Tìm thời gian của sự kiện cuối cùng
  const lastUpdate = order.history ? order.history[order.history.length - 1] : null;
  const lastUpdateDate = lastUpdate ? new Date(lastUpdate.created_at).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }) : '';

  // Xử lý trường hợp đơn hàng bị HỦY
  if (order.order_status === 'cancelled') {
    return (
        <div className="w-full p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-red-600">Đơn hàng đã bị hủy</h2>
                    <p className="text-sm text-gray-500">
                        {lastUpdateDate ? `Vào lúc ${lastUpdateDate}` : ''}
                    </p>
                </div>
                <div className="px-3 py-2 bg-red-100 text-red-700 border border-red-500 rounded-lg text-sm font-medium">
                    Đã hủy
                </div>
            </div>
            <p className="text-gray-600">{order.cancel_reason || 'Đơn hàng đã được hủy theo yêu cầu.'}</p>
        </div>
    );
  }

  return (
    <div className="w-full p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {formatOrderStatus(order.order_status)}
          </h2>
          <p className="text-sm text-gray-500">
            {lastUpdateDate ? `Cập nhật lần cuối: ${lastUpdateDate}` : ''}
          </p>
        </div>
        <div className="px-3 py-2 bg-blue-100 text-blue-700 border border-blue-500 rounded-lg text-sm font-medium">
          {formatOrderStatus(order.order_status)}
        </div>
      </div>

      {/* Thanh tiến trình */}
      <div className="flex items-start">
        {ALL_STEPS.map((step, index) => {
          const isCompleted = index <= currentStatusIndex;
          const isCurrent = index === currentStatusIndex;
          const timestamp = historyMap.get(step.key) || null;

          return (
            <React.Fragment key={step.key}>
              <OrderStatusStep
                label={step.label}
                timestamp={timestamp}
                isCurrent={isCurrent}
                isCompleted={isCompleted}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusTracker;