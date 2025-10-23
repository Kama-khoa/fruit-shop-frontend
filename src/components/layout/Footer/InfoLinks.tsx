import React from 'react';
import Link from 'next/link';

const infoLinks = [
  { label: 'Cơ hội việc làm tại Fruity Fruit', href: '/tuyen-dung' },
  { label: 'Về Fruity Fruit', href: '/gioi-thieu' },
  { label: 'Các nhà đầu tư', href: '/nha-dau-tu' },
  { label: 'Đánh giá khách hàng', href: '/danh-gia' },
  { label: 'Trách nhiệm cộng đồng', href: '/trach-nhiem-cong-dong' },
  { label: 'Các cơ sở cửa hàng', href: '/cua-hang' },
];

const InfoLinks: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* Tiêu đề */}
      <h3 className="text-gray-800 text-sm font-semibold font-['Inter'] uppercase tracking-wide">
        Thông tin
      </h3>

      {/* Danh sách liên kết */}
      <ul className="space-y-3">
        {infoLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-gray-600 text-[13px] font-normal font-['Inter'] leading-snug hover:text-gray-900 hover:translate-x-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoLinks;
