'use client';

import React from 'react';
import { CheckCircleIcon } from '@/components/ui/Icons';

interface OrderStatusStepProps {
  label: string;
  timestamp: string | null;
  isCurrent: boolean;
  isCompleted: boolean;
}

const OrderStatusStep: React.FC<OrderStatusStepProps> = ({ label, timestamp, isCurrent, isCompleted }) => {
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col justify-start items-center gap-4 flex-1">
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300
          ${isCompleted ? 'bg-green-100' : 'bg-gray-100'}
        `}
      >
        {isCompleted ? (
          <CheckCircleIcon className="w-8 h-8 text-green-600" />
        ) : (
          <div className={`w-6 h-6 rounded-full ${isCurrent ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <span 
          className={`text-center text-base font-semibold leading-normal tracking-tight
            ${isCurrent || isCompleted ? 'text-gray-900' : 'text-gray-500'}
          `}
        >
          {label}
        </span>
        <span className="text-center text-sm font-normal text-gray-500 leading-tight mt-2">
            {formatDate(timestamp)}
        </span>
      </div>
    </div>
  );
};

export default OrderStatusStep;
