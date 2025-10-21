'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { getAllCoupons, getCart, removeCartItem, updateCartItemQuantity } from "@/lib/api/cart";
import { getUserAddresses } from "@/lib/api/users";
import CartContent from "@/components/cart/CartContent";
import CartCheckout from "@/components/cart/CartCheckout";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Coupon } from '@/types/index';
import { CustomerAddress } from '@/types/customers';
import { Cart, CartItem } from '@/types/cart';
import toast from 'react-hot-toast';
import { ROUTES } from '@/lib/utils/routes';
import Link from 'next/link';

export default function CartPage() {
    const { user, isLoading: isAuthLoading } = useAuth();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [addresses, setAddresses] = useState<CustomerAddress[]>([]);
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [selectedAddress, setSelectedAddress] = useState<CustomerAddress | undefined>();

    const fetchData = async () => {
        if (user?.customer_id) {
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
                setSelectedAddress(addressData.find(a => a.is_default) || addressData[0]);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu giỏ hàng:", error);
                toast.error("Không thể tải dữ liệu giỏ hàng.");
            } finally {
                setIsLoadingData(false);
            }
        } else {
            setIsLoadingData(false);
        }
    };

    // Fetch data on initial load and when auth state changes
    useEffect(() => {
        if (!isAuthLoading) {
            fetchData();
        }
    }, [user, isAuthLoading]);

    const handleUpdateQuantity = async (itemId: number, newQuantity: number) => {
        await updateCartItemQuantity(itemId, newQuantity);
        // Update the local state to reflect the change immediately
        setCartItems(prevItems => 
          prevItems.map(item => parseFloat(item.id) === itemId ? { ...item, quantity: newQuantity } : item)
        );
    };

    const handleRemoveItem = async (itemId: number) => {
        await removeCartItem(itemId);
        // Update the local state to remove the item immediately
        setCartItems(prevItems => prevItems.filter(item => parseFloat(item.id) !== itemId));
    };

    const handleAddressUpdate = () => {
        fetchData();
    };

    const handleSelectAddress = (address: CustomerAddress) => {
        setSelectedAddress(address);
    };

    const breadcrumbItems = [
        { label: 'Giỏ hàng' }
    ];

    if (isAuthLoading || isLoadingData) {
        return <div className="text-center py-20">Đang tải giỏ hàng...</div>;
    }

    if (!user) {
         return (
            <div className="text-center py-20 bg-white rounded-lg max-w-7xl mx-auto my-12">
                <p className="mb-4">Vui lòng đăng nhập để xem giỏ hàng của bạn.</p>
                <Link href={ROUTES.AUTH.LOGIN} className="bg-Button-Auth text-white px-6 py-2 rounded-lg">
                    Đăng nhập
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-3xl font-bold my-6">Giỏ hàng của bạn</h1>

                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <CartContent 
                                items={cartItems} 
                                addresses={addresses}
                                selectedAddress={selectedAddress}
                                onSelectAddress={handleSelectAddress}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemoveItem={handleRemoveItem}
                                onAddressUpdate={handleAddressUpdate}
                            />
                        </div>
                        <div className="lg:col-span-1">
                            {/* This component will now automatically re-render with new totals */}
                            <CartCheckout 
                                items={cartItems} 
                                coupons={coupons}
                                selectedAddress={selectedAddress}
                            />
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
