'use client';

import React from 'react';

export type OrderStatusFilter = 'all' | 'pending' | 'confirmed' | 'processing' | 'shipped' | 'completed' | 'cancelled';

interface OrderTabsProps {
  activeTab: OrderStatusFilter;
  onTabChange: (tab: OrderStatusFilter) => void;
}

const tabs: { key: OrderStatusFilter; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'pending', label: 'Đang xử lý' },
  { key: 'confirmed', label: 'Xác nhận' },
  { key: 'processing', label: 'Đóng hàng' },
  { key: 'shipped', label: 'Vận chuyển' },
  { key: 'completed', label: 'Đã nhận' },
  { key: 'cancelled', label: 'Đã hủy' },
];

const OrderTabs: React.FC<OrderTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="inline-flex justify-start items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-6 py-3 rounded-xl border transition-colors duration-200 ${
            activeTab === tab.key
              ? 'bg-green-50 border-green-600 text-green-700 font-semibold'
              : 'bg-neutral-50 border-gray-200 text-gray-600 font-medium hover:bg-gray-100'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default OrderTabs;