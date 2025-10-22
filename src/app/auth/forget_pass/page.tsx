'use client';

import { useState } from 'react';
import { forgotPassword } from '@/lib/api/auth';
import toast from 'react-hot-toast';
import { ROUTES } from '@/lib/utils/routes';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await forgotPassword(email);
      router.push(ROUTES.AUTH.FORGOT_PASSWORD_SUCCESS);
    } catch (error) {
      toast.error('Đã xảy ra lỗi. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles = "w-full h-12 px-4 bg-neutral-50 rounded-lg text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 ease-in-out";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
      <div className="w-full max-w-[540px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(12,143,3,0.25)] p-8">
        <h1 className="text-center text-gray-900 text-3xl font-semibold font-['Inter'] leading-10 mb-4">
          Quên mật khẩu
        </h1>
        <p className="text-zinc-500 text-base font-normal font-['Open_Sans'] leading-normal tracking-tight text-center mb-8">
          Nhập vào email để nhận mã xác nhận, chúng tôi sẽ gửi mã về email của bạn.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-black text-sm font-semibold font-['Inter'] leading-tight">
              Email
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Nhập email của bạn" 
              className={inputStyles}
            />
          </div>
          <div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3 bg-Button-Auth text-white text-sm font-semibold rounded-full hover:opacity-90 transition disabled:bg-gray-400"
            >
              {isLoading ? 'Đang gửi...' : 'Xác nhận'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}