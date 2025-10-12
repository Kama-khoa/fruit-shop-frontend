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
    <div className="space-y-4">
      <h3 className="text-gray-900 text-sm font-semibold font-['Inter'] leading-none">
        Thông tin
      </h3>
      
      <ul className="space-y-3.5">
        {infoLinks.map((link, index) => (
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

export default InfoLinks;