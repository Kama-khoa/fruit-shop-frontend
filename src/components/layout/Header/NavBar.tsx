'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';
import { getCategories } from '@/lib/api/categories';
import { Category } from '@/types/category';
import CategoryDropdown from '@/components/ui/CategoryDropdown';

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
  { label: 'Sản phẩm nổi bật', href: `${ROUTES.MAIN.PRODUCTS.LIST}?isFeatured=true` },
  { label: 'Khuyến mãi', href: ROUTES.MAIN.PROMOTIONS, isPromo: true },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <nav className="w-full h-12 bg-[#BAFD91] rounded-bl-[20px] rounded-br-[20px] flex items-center justify-center gap-8 px-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
            <div 
                key={item.label} 
                className="relative flex items-center h-full"
                onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
            >
                <Link
                    href={item.href}
                    className={`flex items-center gap-1 h-full px-2 transition-colors duration-200
                        ${item.isPromo ? 'text-red-600 font-semibold' : 'font-semibold hover:text-green-700'}
                        ${isActive ? 'text-green-700' : 'text-gray-900'}
                    `}
                >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                </Link>

                {item.isPromo && (
                    <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded flex items-center justify-center ml-1">
                        <span className="text-white text-[10px] font-bold">SALE</span>
                    </div>
                )}

                {/* Show dropdown for categories */}
                {item.hasDropdown && isDropdownOpen && (
                    <CategoryDropdown categories={categories} />
                )}
            </div>
        );
      })}
    </nav>
  );
};

export default NavBar;