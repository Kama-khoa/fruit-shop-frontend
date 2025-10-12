'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isPromo?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: ROUTES.ROOT },
  { label: 'Danh mục', href: ROUTES.MAIN.CATEGORIES.LIST, hasDropdown: true },
  { label: 'Sản phẩm', href: ROUTES.MAIN.PRODUCTS.LIST },
  { label: 'Đồ uống', href: ROUTES.MAIN.CATEGORIES.DRINKS },
  { label: 'Blog', href: ROUTES.MAIN.NEWS.LIST },
  { label: 'Liên hệ', href: ROUTES.MAIN.CONTACT },
  { label: 'Sản phẩm nổi bật', href: ROUTES.MAIN.PRODUCTS.LIST + '?featured=true' },
  { label: 'Khuyến mãi', href: ROUTES.MAIN.PROMOTIONS, isPromo: true },
];

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Trang chủ');

  return (
    <nav className="w-full h-12 bg-green-300 rounded-bl-[20px] rounded-br-[20px] flex items-center justify-center gap-8 px-4">
      {navItems.map((item) => (
        <div key={item.label} className="relative flex items-center">
          <Link
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={`flex items-center gap-1 h-11 px-2 transition-colors ${
              item.isPromo
                ? 'text-red-600 text-base font-semibold font-["Inter"] leading-[48px]'
                : 'text-gray-950 text-base font-semibold font-["Inter"] leading-[48px] hover:text-green-700'
            }`}
          >
            {item.label}
            
            {item.hasDropdown && (
              <ChevronDown className="w-4 h-4 ml-1" />
            )}
          </Link>

          {/* Sale Badge for Promo */}
          {item.isPromo && (
            <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded flex items-center justify-center ml-2">
              <span className="text-white text-[10px] font-bold font-['Inter'] leading-[10px]">
                SALE
              </span>
            </div>
          )}

          {/* Active Indicator */}
          {activeItem === item.label && !item.isPromo && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-[5px] bg-gray-950 rounded-full" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;