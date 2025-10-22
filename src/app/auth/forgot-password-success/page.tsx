'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';
import { MailIcon } from '@/components/ui/Icons';

export default function ForgotPasswordSuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
      <div className="w-full max-w-[540px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(12,143,3,0.25)] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <MailIcon className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-center text-gray-900 text-2xl font-semibold font-['Inter'] leading-10 mt-6">
          Kiểm tra Email của bạn
        </h1>
        <p className="text-zinc-500 text-base font-normal font-['Open_Sans'] leading-normal tracking-tight text-center my-4">
          Chúng tôi đã gửi một liên kết khôi phục mật khẩu đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư (bao gồm cả thư mục spam).
        </p>
        <Link href={ROUTES.AUTH.LOGIN}>
            <button className="w-full py-3 bg-Button-Auth text-white text-sm font-semibold rounded-full hover:opacity-90 transition mt-4">
                Quay về trang đăng nhập
            </button>
        </Link>
      </div>
    </div>
  );
}