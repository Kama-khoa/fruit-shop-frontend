'use client';

import { Coupon } from '@/types/index';
import { useState } from 'react';

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  coupons: Coupon[];
  onApplyCoupon: (coupon: Coupon) => void;
}

const CouponModal: React.FC<CouponModalProps> = ({ isOpen, onClose, coupons, onApplyCoupon }) => {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  if (!isOpen) return null;

  const handleApply = () => {
    if (selectedCoupon) {
      onApplyCoupon(selectedCoupon);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold mb-4">Chọn mã khuyến mãi</h3>
        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {coupons.length > 0 ? coupons.map((coupon) => (
            <div 
              key={coupon.id} 
              className={`p-4 border rounded-lg cursor-pointer flex items-center gap-4 ${selectedCoupon?.id === coupon.id ? 'border-green-600 bg-green-50' : 'border-gray-200'}`}
              onClick={() => setSelectedCoupon(coupon)}
            >
              <input 
                type="radio"
                name="coupon"
                checked={selectedCoupon?.id === coupon.id}
                onChange={() => setSelectedCoupon(coupon)}
                className="h-4 w-4 text-green-600 focus:ring-green-500"
              />
              <div>
                <p className="font-bold text-green-700">{coupon.name}</p>
                <p className="text-sm text-gray-600">{coupon.description}</p>
              </div>
            </div>
          )) : <p className="text-gray-500">Không có mã khuyến mãi nào.</p>}
        </div>
        <div className="mt-6 flex gap-4">
            <button onClick={onClose} className="flex-1 py-2 bg-gray-200 rounded-lg">Hủy</button>
            <button onClick={handleApply} disabled={!selectedCoupon} className="flex-1 py-2 bg-green-600 text-white rounded-lg disabled:bg-gray-400">Áp dụng</button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;