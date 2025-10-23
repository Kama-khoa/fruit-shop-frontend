'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/utils/routes';
import { CreateOrderResponse } from '@/types/order';
import OrderSuccessDisplay from '@/components/orders/OrderSuccessDisplay';
import Link from 'next/link';

function CheckoutSuccessContent() {
    const [orderResponse, setOrderResponse] = useState<CreateOrderResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true); 
    const router = useRouter();

    useEffect(() => {
        const orderDataString = sessionStorage.getItem('latestOrderDetails');
        
        if (orderDataString) {
            setOrderResponse(JSON.parse(orderDataString));
            sessionStorage.removeItem('latestOrderDetails');
        } 
        setIsLoading(false); 
    }, [router]);

    if (isLoading) {
        return <div className="text-center py-20">Đang tải chi tiết đơn hàng...</div>;
    }

    if (!orderResponse) {
        return (
            <div className="text-center py-20 bg-white rounded-lg max-w-2xl mx-auto shadow-lg">
                <p className="text-lg text-gray-700 mb-6">Đơn hàng đã được xử lý.</p>
                <Link 
                    href={ROUTES.ROOT} 
                    className="bg-Button-Auth text-white px-8 py-3 rounded-full font-semibold hover:bg-Button-Auth-hover transition"
                >
                    Tiếp tục mua sắm
                </Link>
            </div>
        );
    }
        
    return <OrderSuccessDisplay orderResponse={orderResponse} />;
}

export default function CheckoutSuccessPage() {
    return (
        <div className="bg-gray-50 py-12">
            <Suspense fallback={<div className="text-center py-20">Đang tải...</div>}>
                <CheckoutSuccessContent />
            </Suspense>
        </div>
    );
}