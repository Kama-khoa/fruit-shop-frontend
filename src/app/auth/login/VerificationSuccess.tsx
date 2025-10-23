'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/utils/routes'; 
import { CheckCircleIcon } from '@/components/ui/Icons';

export default function VerificationSuccess() {
  const router = useRouter();
    const [countdown, setCountdown] = useState(5);
  // Tự động chuyển hướng về trang đăng nhập (bản sạch) sau 5 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      // Dùng router.push để xóa query params khỏi URL
      router.push(ROUTES.AUTH.LOGIN);
    }, 5000); // 5 giây

    // Hủy timer khi component unmount
    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    // Nếu đếm ngược về 0, không làm gì nữa
    if (countdown === 0) return;

    // Tạo một interval chạy mỗi 1 giây
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Dọn dẹp interval khi component unmount hoặc countdown thay đổi
    return () => clearInterval(interval);
  }, [countdown]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-md w-full text-center">
        
        {/* Icon (Style dựa theo ảnh) */}
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 ring-8 ring-green-50">
          <CheckCircleIcon className="w-12 h-12 text-green-600" />
        </div>
        
        {/* Text Content (Dựa theo yêu cầu "xác thực" của bạn) 
          Nếu bạn muốn text "Đổi mật khẩu", chỉ cần thay đổi nội dung 2 thẻ <h1_ và <p>
        */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-3">
          Xác thực thành công
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Email của bạn đã được xác thực thành công!
        </p>

        {/* Nút "Tiếp tục" (Style dựa theo ảnh) */}
        <Link
          href={ROUTES.AUTH.LOGIN}
          className="w-full inline-block text-white py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 bg-Button-Auth"
        >
          Tiếp tục
        </Link>

        <p className="text-xs text-gray-400 mt-4">
          Sẽ tự động chuyển hướng sau {countdown > 0 ? countdown : 0} giây...
        </p>
      </div>
    </div>
  );
}