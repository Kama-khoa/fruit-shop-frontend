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
    <div className="space-y-4">
      <h3 className="text-gray-900 text-sm font-semibold font-['Inter'] leading-none">
        Hỗ trợ
      </h3>
      
      <ul className="space-y-3.5">
        {supportLinks.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href}
              className="text-gray-600 text-xs font-normal font-['Inter'] leading-tight hover:text-gray-900 transition-colors"
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