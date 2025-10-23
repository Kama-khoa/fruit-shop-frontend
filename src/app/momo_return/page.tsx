'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ROUTES } from '@/lib/utils/routes';
import { CheckCircleIcon, XCircleIcon } from '@/components/ui/Icons';

// Component con để đọc query params
function MomoReturnContent() {
    const searchParams = useSearchParams();

    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [message, setMessage] = useState('');
    const [orderInfo, setOrderInfo] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const resultCode = searchParams.get('resultCode');
        const displayMessage = searchParams.get('message') || 'Giao dịch không thành công';
        const orderInfoText = searchParams.get('orderInfo') || '';
        const amountText = searchParams.get('amount') || '';

        if (resultCode === '0') {
            setIsSuccess(true);
            setMessage('Thanh toán của bạn đã được xử lý thành công!');
            setOrderInfo(orderInfoText);
            setAmount(amountText);
            
            // Xóa giỏ hàng hoặc thực hiện hành động thành công ở đây
            // clearCart(); // Ví dụ

        } else {
            // Các mã lỗi khác (như 1006 - Bị từ chối)
            setIsSuccess(false);
            setMessage(displayMessage); // Hiển thị lỗi do Momo trả về
        }
    }, [searchParams]);

    // Định dạng tiền tệ
    const formatCurrency = (value: string) => {
        const numericAmount = parseInt(value, 10);
        if (isNaN(numericAmount)) return '';
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericAmount);
    };

    // Giao diện khi đang chờ xử lý
    if (isSuccess === null) {
        return <div className="text-center py-20">Đang xử lý thanh toán...</div>;
    }

    // Giao diện khi thành công hoặc thất bại
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
            <div className="w-full max-w-[540px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(12,143,3,0.25)] p-8 text-center flex flex-col items-center">
                
                {isSuccess ? (
                    <CheckCircleIcon className="w-16 h-16" />
                ) : (
                    <XCircleIcon className="w-16 h-16" />
                )}

                <h1 className={`text-2xl font-bold mt-6 mb-2 ${isSuccess ? 'text-gray-900' : 'text-red-600'}`}>
                    {isSuccess ? 'Thanh toán thành công!' : 'Thanh toán thất bại'}
                </h1>
                
                <p className="text-sm text-gray-600 mb-6">
                    {message}
                </p>

                {isSuccess && (
                    <div className="w-full text-left bg-gray-50 p-4 rounded-lg border mb-6">
                        <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Đơn hàng:</span>
                            <span className="font-semibold">{orderInfo}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600">Tổng tiền:</span>
                            <span className="font-semibold">{formatCurrency(amount)}</span>
                        </div>
                    </div>
                )}

                <div className="w-full flex flex-col sm:flex-row gap-4 mt-4">
                    <Link href={ROUTES.MAIN.CART} className="flex-1">
                        <button className="w-full py-3 bg-gray-200 text-gray-800 text-sm font-semibold rounded-full hover:bg-gray-300 transition">
                            Quay lại giỏ hàng
                        </button>
                    </Link>
                    <Link href={ROUTES.MAIN.PROFILE.BASE} className="flex-1">
                        <button className="w-full py-3 bg-teal-500 text-white text-sm font-semibold rounded-full hover:bg-teal-600 transition">
                            Lịch sử đơn hàng
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Trang `momo_return` cần được bọc trong Suspense để sử dụng `useSearchParams`
export default function MomoReturnPage() {
    return (
        <Suspense fallback={<div className="text-center py-20">Đang tải...</div>}>
            <MomoReturnContent />
        </Suspense>
    );
}