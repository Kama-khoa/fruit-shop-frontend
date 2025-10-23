import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import { ShoppingCart, MessageCircle, Bell } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';

const TopBar: React.FC = () => {
  return (
    <header className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-4 lg:px-10 border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center shrink-0">
        <Link href={ROUTES.ROOT} className="block">
          <Image
            src="/tam_dat_ngang.jpg"
            alt="Tâm Đạt Logo"
            width={300}
            height={80}
            priority
            className="h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-[680px] mx-6">
        <SearchBar />
      </div>

      {/* Action Icons & User Menu */}
      <div className="flex items-center gap-5">
        {/* Shopping Cart */}
        <Link
          href={ROUTES.MAIN.CART}
          aria-label="Giỏ hàng"
          className="relative group"
        >
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-all duration-200">
            <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
          </div>
        </Link>

        {/* Messages */}
        <button
          aria-label="Tin nhắn"
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-all duration-200 group"
        >
          <MessageCircle className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
        </button>

        {/* Notifications */}
        <button
          aria-label="Thông báo"
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-all duration-200 group relative"
        >
          <Bell className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
        </button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
};

export default TopBar;
