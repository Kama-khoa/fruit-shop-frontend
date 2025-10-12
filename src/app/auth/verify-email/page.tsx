import Link from 'next/link';
import { MailCheck } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';

export default function VerifyEmailPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
      <div className="w-full max-w-[540px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(12,143,3,0.25)] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <MailCheck className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-2xl font-bold font-['IBM_Plex_Serif'] text-gray-900">
          Xác thực tài khoản của bạn
        </h1>
        <p className="mt-4 text-sm text-gray-600 font-['Inter']">
          Chúng tôi đã gửi một email kích hoạt đến địa chỉ email bạn đã đăng ký. Vui lòng kiểm tra hộp thư đến (và cả thư mục spam) rồi nhấp vào liên kết để hoàn tất quá trình đăng ký.
        </p>
        <div className="mt-8">
          <Link
            href={ROUTES.AUTH.LOGIN}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Quay về trang Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}