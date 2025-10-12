import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import { ShoppingCart, MessageCircle, Bell } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';

const TopBar: React.FC = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between px-4 lg:px-14">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <h1 className="text-green-600 text-5xl font-normal font-['Dharrochy']">
          FRUITY FRUIT
        </h1>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-[677px] mx-8">
        <SearchBar />
      </div>

      {/* Action Icons & User Menu */}
      <div className="flex items-center gap-6">
        {/* Shopping Cart */}
        <Link
          href={ROUTES.MAIN.CART}
          className="w-9 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Giỏ hàng"
        >
          <ShoppingCart className="w-6 h-6 text-gray-950" />
        </Link>

        {/* Messages */}
        <button 
          className="w-9 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Tin nhắn"
        >
          <MessageCircle className="w-6 h-6 text-gray-950" />
        </button>

        {/* Notifications */}
        <button 
          className="w-9 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Thông báo"
        >
          <Bell className="w-6 h-6 text-gray-950" />
        </button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </div>
  );
};

export default TopBar;