'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { getAllCoupons, getCart } from "@/lib/api/cart";
import { getUserAddresses } from "@/lib/api/users";
import CartContent from "@/components/cart/CartContent";
import CartCheckout from "@/components/cart/CartCheckout";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Coupon } from '@/types/index';
import { CustomerAddress } from '@/types/customers';
import { Cart, CartItem } from '@/types/cart';

export default function CartPage() {
 const { user, isLoading: isAuthLoading } = useAuth();
    
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [addresses, setAddresses] = useState<CustomerAddress[]>([]);
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    // Tạo hàm để có thể gọi lại API lấy địa chỉ
    const refetchAddresses = useCallback(async () => {
        if (user && user.customer_id) {
            try {
                const addressData = await getUserAddresses();
                setAddresses(addressData || []);
            } catch (error) {
                console.error("Lỗi khi tải lại địa chỉ:", error);
            }
        }
    }, [user]);

    useEffect(() => {
        if (!isAuthLoading && user) {
            const fetchData = async () => {
                setIsLoadingData(true);
                try {
                    const [cartData, addressData, couponData] = await Promise.all([
                        getCart(),
                        getUserAddresses(),
                        getAllCoupons()
                    ]);

                    setCartItems(cartData.items || []);
                    setAddresses(addressData || []);
                    setCoupons(couponData || []);
                } catch (error) {
                    console.error("Lỗi khi tải dữ liệu giỏ hàng:", error);
                } finally {
                    setIsLoadingData(false);
                }
            };

            fetchData();
        } else if (!isAuthLoading && !user) {
            setIsLoadingData(false);
        }
    }, [user, isAuthLoading]);

    const breadcrumbItems = [
        { label: 'Giỏ hàng' }
    ];

    if (isAuthLoading || isLoadingData) {
        return <div className="text-center py-20">Đang tải giỏ hàng...</div>;
    }

    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-3xl font-bold my-6">Giỏ hàng của bạn</h1>

                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <CartContent initialItems={cartItems} addresses={addresses} onAddressUpdate={refetchAddresses} />
                        </div>
                        <div className="lg:col-span-1">
                            <CartCheckout items={cartItems} coupons={coupons} />
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-lg">
                        <p>Giỏ hàng của bạn đang trống.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
