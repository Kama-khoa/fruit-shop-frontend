'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { resetPassword } from '@/lib/api/auth';
import { ROUTES } from '@/lib/utils/routes';
import { EyeIcon, EyeOffIcon } from '@/components/ui/Icons';
import toast from 'react-hot-toast';

function ResetPasswordFormComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (!token) {
            toast.error("Token không hợp lệ hoặc đã hết hạn.");
            router.push(ROUTES.AUTH.FORGOT_PASSWORD);
        }
    }, [token, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp.");
            return;
        }
        if (!token) {
            toast.error("Thiếu token xác thực.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await resetPassword({ token, password });
            toast.success(response.message || "Mật khẩu đã được cập nhật thành công!");
            router.push(ROUTES.AUTH.LOGIN);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    const inputStyles = "w-full h-12 px-4 bg-neutral-50 rounded-lg text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 ease-in-out";

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
            <div className="w-full max-w-[540px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(12,143,3,0.25)] p-8">
                <h1 className="text-center text-gray-900 text-3xl font-semibold font-['Inter'] leading-10 mb-8">
                    Đặt lại mật khẩu
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-black text-sm font-semibold mb-2 block">Mật khẩu mới</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className={inputStyles} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                {showPassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                            </button>
                        </div>
                    </div>
                     <div>
                        <label className="text-black text-sm font-semibold mb-2 block">Xác nhận mật khẩu mới</label>
                        <div className="relative">
                            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className={inputStyles} />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                {showConfirmPassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
                            </button>
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full py-3 bg-Button-Auth text-white text-sm font-semibold rounded-full hover:opacity-90 transition disabled:bg-gray-400">
                        {isLoading ? 'Đang xử lý...' : 'Cập nhật mật khẩu'}
                    </button>
                </form>
            </div>
        </div>
    );
}


// Bọc component chính trong Suspense để có thể sử dụng useSearchParams
export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div className="text-center py-20">Đang tải...</div>}>
            <ResetPasswordFormComponent />
        </Suspense>
    );
}
