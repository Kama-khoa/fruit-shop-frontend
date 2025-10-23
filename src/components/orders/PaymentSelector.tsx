'use client';

import { PaymentMethod } from '@/types/order';
import { RadioOnIcon, RadioOffIcon, CodIcon, MomoIcon } from '@/components/ui/Icons';
import React from 'react';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod | null;
  onMethodChange: (method: PaymentMethod) => void;
  notes: string;
  onNotesChange: (notes: string) => void;
}

const PaymentSelector: React.FC<PaymentMethodSelectorProps> = ({ selectedMethod, onMethodChange, notes, onNotesChange }) => {
  const paymentOptions = [
    { id: 'cod', name: 'Thanh toán khi nhận hàng', icon: <CodIcon className="w-6 h-6" /> },
    { id: 'momo', name: 'Ví điện tử Momo', icon: <MomoIcon /> },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold font-['IBM_Plex_Serif'] text-gray-900">Phương thức thanh toán</h3>
      <div className="space-y-3">
        {paymentOptions.map((option) => {
          const isSelected = selectedMethod === option.id;
          return (
            <div
              key={option.id}
              onClick={() => onMethodChange(option.id as PaymentMethod)}
              className={`p-4 flex items-center gap-4 rounded-lg border cursor-pointer ${
                isSelected ? 'bg-green-50 border-green-600' : 'bg-white border-gray-200'
              }`}
            >
              {isSelected ? <RadioOnIcon className="w-5 h-5" /> : <RadioOffIcon className="w-5 h-5" />}
              {option.icon}
              <span className="text-sm font-medium text-gray-800">{option.name}</span>
            </div>
          );
        })}
      </div>

      {/* Hiển thị ô ghi chú nếu là COD */}
      {selectedMethod === 'cod' && (
        <div className="mt-2">
          <label htmlFor="notes" className="text-sm font-semibold text-gray-900 mb-2 block">
            Ghi chú cho đơn hàng
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="Ví dụ: Vui lòng gọi trước khi giao..."
            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            rows={3}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentSelector;