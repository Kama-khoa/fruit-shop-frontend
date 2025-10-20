'use client';

import { useState, useMemo } from 'react';
import { Coupon } from '@/types/index';
import { CartItem } from '@/types/cart';
import { CheckoutIcon, PlusIcon } from '@/components/ui/Icons';
import CouponModal from '@/components/promotions/CouponModal';

interface CartCheckoutProps {
  items: CartItem[];
  coupons: Coupon[];
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const CartCheckout: React.FC<CartCheckoutProps> = ({ items, coupons }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

    const subtotal = useMemo(() => 
        items
            .filter(item => item.variant) // Filter out items with undefined products
            .reduce((total, item) => 
                total + ((item.variant?.price || 0) * item.quantity)
            , 0),
    [items]);
    
    // Giả sử phí vận chuyển là cố định
    const shippingFee = 30000;

    const discountAmount = useMemo(() => {
        if (!appliedCoupon) return 0;
        if (appliedCoupon.type === 'percentage') {
            return subtotal * (appliedCoupon.value / 100);
        }
        return appliedCoupon.value;
    }, [appliedCoupon, subtotal]);

    const total = subtotal + shippingFee - discountAmount;

  return (
    <>
        <div className="w-full h-full p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6">
            {/* Order Summary */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold font-['IBM_Plex_Serif'] text-gray-900">Tóm tắt đơn hàng</h3>
                <div className="space-y-2 text-base font-['IBM_Plex_Serif']">
                    <div className="flex justify-between">
                        <span className="text-gray-700">Tạm tính</span>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">Phí vận chuyển</span>
                        <span>{formatCurrency(shippingFee)}</span>
                    </div>
                     {appliedCoupon && (
                        <div className="flex justify-between text-green-600">
                            <span className="font-semibold">Giảm giá ({appliedCoupon.name})</span>
                            <span className="font-semibold">- {formatCurrency(discountAmount)}</span>
                        </div>
                    )}
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Promotions */}
            <div>
                <h3 className="text-xl font-semibold font-['IBM_Plex_Serif'] text-gray-900 mb-3">Khuyến Mãi</h3>
                <div className="w-full h-12 px-4 bg-gray-50 rounded-lg flex items-center justify-between gap-2">
                    <span className="text-gray-400 font-['IBM_Plex_Serif']">
                        {appliedCoupon ? `Đã áp dụng: ${appliedCoupon.name}` : 'Nhập mã khuyến mãi'}
                    </span>
                    <button onClick={() => setIsModalOpen(true)} className="w-8 h-8 bg-white rounded-full border border-green-600 flex items-center justify-center">
                        <PlusIcon className="w-5 h-5 text-green-600" />
                    </button>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Subtotal */}
            <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-gray-900">Tổng cộng</span>
                <span className="text-xl font-bold text-gray-900">{formatCurrency(total)}</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full px-6 py-4 bg-green-600 text-white rounded-full flex items-center justify-between text-base font-semibold font-['IBM_Plex_Serif'] hover:bg-green-700 transition">
                <div className="flex items-center gap-2">
                    <CheckoutIcon className="w-6 h-6" />
                    <span>Thanh toán</span>
                </div>
                <span>{formatCurrency(total)}</span>
            </button>
        </div>

        <CouponModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            coupons={coupons}
            onApplyCoupon={setAppliedCoupon}
        />
    </>
  );
};

export default CartCheckout;
