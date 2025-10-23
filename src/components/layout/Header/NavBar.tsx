'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';
import { getCategories } from '@/lib/api/categories';
import { Category } from '@/types/category';
import CategoryDropdown from '@/components/ui/CategoryDropdown';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className="w-full h-14 bg-gradient-to-r from-green-200 to-green-100 border border-green-300 
                    rounded-b-2xl shadow-md flex items-center justify-center gap-8 px-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div
            key={item.label}
            className="relative flex items-center h-full group"
            onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
            onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300
                ${item.isPromo
                  ? 'text-red-600 font-bold hover:text-red-700'
                  : 'text-gray-800 font-semibold hover:text-green-800'}
                ${isActive ? 'text-green-800 underline underline-offset-4 decoration-green-600' : ''}
              `}
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180 text-green-700' : 'text-gray-500'
                  }`}
                />
              )}
            </Link>

            {item.isPromo && (
              <span className="ml-1 bg-gradient-to-r from-red-500 to-orange-400 text-white text-[10px] font-bold px-2 py-[2px] rounded-full shadow-sm">
                SALE
              </span>
            )}

            {/* Hiệu ứng dropdown xuất hiện mượt */}
            <AnimatePresence>
              {item.hasDropdown && isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2"
                >
                  <CategoryDropdown categories={categories} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;
