'use client';

import { useState, useMemo, useEffect } from 'react';
import { Coupon } from '@/types/index';
import { CartItem } from '@/types/cart';
import { CheckoutIcon, PlusIcon } from '@/components/ui/Icons';
import CouponModal from '@/components/promotions/CouponModal';
import { CustomerAddress } from '@/types/customers';
import { ShippingItem } from '@/types/shipping';
import { calculateShippingFee } from '@/lib/api/shipping';
import { createOrder } from '@/lib/api/orders';
import PaymentSelector from '@/components/orders/PaymentSelector';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/utils/routes';
import toast from 'react-hot-toast';
import { OrderShippingOption, PaymentMethod } from '@/types/order';

interface CartCheckoutProps {
  items: CartItem[];
  coupons: Coupon[];
  selectedAddress: CustomerAddress | undefined;
  onCheckoutSuccess: () => void; 
}

const formatCurrency = (amount: number | null) => {
    if (amount === null) return '...';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const CartCheckout: React.FC<CartCheckoutProps> = ({ items, coupons, selectedAddress, onCheckoutSuccess }) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
    const [isCalculatingFee, setIsCalculatingFee] = useState(false);
    const [shippingOption, setShippingOption] = useState<OrderShippingOption | null>(null);
    
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>('cod');
    const [notes, setNotes] = useState('');
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    useEffect(() => {
        if (selectedAddress && items.length > 0) {
            const calculateFee = async () => {
                setIsCalculatingFee(true);
                setShippingOption(null);
                try {
                    const shippingItems: ShippingItem[] = items.map(item => ({
                        variant_id: item.variant.id,
                        quantity: item.quantity,
                        price: item.variant.price,
                        // weight: item.variant.weight || 200,
                        weight: 200,
                    }));

                    const payload = {
                        carrierCode: "ghn",
                        to_district_id: selectedAddress.district_code,
                        to_ward_code: selectedAddress.ward_code,
                        items: shippingItems,
                    };
                    
                    const response = await calculateShippingFee(payload);
                    if (response && response.length > 0) {
                        const firstOption = response[0];
                        setShippingOption({
                            fee: firstOption.fee,
                            service_id: firstOption.service_id,
                            service_type_id: 2 // Giả sử service_type_id là 2
                        });
                    } else {
                        setShippingOption({ fee: 0, service_id: 0, service_type_id: 0 });
                    }
                } catch (error) {
                    console.error("Lỗi khi tính phí vận chuyển:", error);
                    setShippingOption({ fee: 0, service_id: 0, service_type_id: 0 });
                } finally {
                    setIsCalculatingFee(false);
                }
            };
            calculateFee();
        }
    }, [items, selectedAddress]);

    const subtotal = useMemo(() => 
        items
            .filter(item => item.variant) // Filter out items with undefined products
            .reduce((total, item) => 
                total + ((item.variant?.price) * item.quantity)
            , 0),
    [items]);

    const discountAmount = useMemo(() => {
        if (!appliedCoupon) return 0;
        if (appliedCoupon.type === 'percentage') {
            return subtotal * (appliedCoupon.value / 100);
        }
        return appliedCoupon.value;
    }, [appliedCoupon, subtotal]);

    const shippingFee = shippingOption?.fee || 0;
    const total = shippingFee !== null ? subtotal + shippingFee - discountAmount : subtotal - discountAmount;

    const handleCheckout = async () => {
        if (!selectedAddress) {
            toast.error('Vui lòng chọn địa chỉ giao hàng.');
            return;
        }
        if (!shippingOption) {
            toast.error('Không thể tính phí vận chuyển, vui lòng thử lại.');
            return;
        }
        if (!paymentMethod) {
            toast.error('Vui lòng chọn phương thức thanh toán.');
            return;
        }

        setIsPlacingOrder(true);
        try {
            const payload = {
                addressId: selectedAddress.id,
                shippingOption: shippingOption,
                paymentMethod: paymentMethod,
                notes: notes,
            };
            
            const response = await createOrder(payload);

            if (response.success) {
                onCheckoutSuccess(); // Báo cho cha biết để xóa giỏ hàng
                
                sessionStorage.setItem('latestOrderDetails', JSON.stringify(response));
                
                if (paymentMethod === 'cod') {
                    router.push(ROUTES.MAIN.CHECKOUT.SUCCESS);
                } else if (response.paymentUrl) {
                    window.location.href = response.paymentUrl;
                }
            } else {
                toast.error(response.message || 'Đặt hàng thất bại.');
            }
        } catch (error) {
            toast.error('Đã xảy ra lỗi khi đặt hàng.');
        } finally {
            setIsPlacingOrder(false);
        }
    };

  return (
    <>
        <div className="w-full h-full p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6">
            {/* Order Summary */}
            <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold font-['IBM_Plex_Serif'] text-gray-900">Đơn hàng</h3>
                <div className="space-y-2 text-base font-['IBM_Plex_Serif']">
                    <div className="flex justify-between">
                        <span className="text-gray-700">Tạm tính</span>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">Phí vận chuyển</span>
                        <span>{isCalculatingFee ? 'Đang tính...' : formatCurrency(shippingFee)}</span>
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

            <PaymentSelector 
                selectedMethod={paymentMethod}
                onMethodChange={setPaymentMethod}
                notes={notes}
                onNotesChange={setNotes}
            />

            <hr className="border-gray-200" />

            {/* Subtotal */}
            <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-gray-900">Tổng cộng</span>
                <span className="text-xl font-bold text-gray-900">{formatCurrency(total)}</span>
            </div>

            {/* Checkout Button */}
            <button 
                onClick={handleCheckout}
                disabled={isCalculatingFee || isPlacingOrder || !selectedAddress} 
                className="w-full px-6 py-4 bg-green-600 text-white rounded-full flex items-center justify-between text-base font-semibold font-['IBM_Plex_Serif'] hover:bg-green-700 transition disabled:bg-gray-400"
            >
                <div className="flex items-center gap-2">
                    <CheckoutIcon className="w-6 h-6" />
                    <span>{isPlacingOrder ? 'Đang xử lý...' : 'Thanh toán'}</span>
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
