import React from 'react';
import Link from 'next/link';

const supportLinks = [
  { label: 'Đơn hàng của bạn', href: '/don-hang' },
  { label: 'Hoàn hàng và đổi trả', href: '/hoan-tra' },
  { label: 'Chính sách giao hàng', href: '/chinh-sach-giao-hang' },
  { label: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' },
  { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
  { label: 'Trung tâm hỗ trợ', href: '/ho-tro' },
];

const SupportLinks: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* Tiêu đề */}
      <h3 className="text-gray-800 text-base font-semibold font-['Inter'] tracking-wide">
        Hỗ trợ
      </h3>

      {/* Danh sách liên kết */}
      <ul className="space-y-3">
        {supportLinks.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href}
              className="text-gray-600 text-sm font-normal font-['Inter'] hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportLinks;
