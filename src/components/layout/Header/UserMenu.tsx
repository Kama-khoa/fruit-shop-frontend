'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { ROUTES } from '@/lib/utils/routes';
import { useNavigation } from '@/lib/utils/navigation';

const UserMenu: React.FC = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const { navigateTo } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Xử lý đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
    // Sau khi logout, chuyển hướng về trang chủ
    navigateTo(ROUTES.HOME);
  };

  // --- Trạng thái Loading ---
  if (isLoading) {
    return (
      <div className="w-52 h-14 bg-white rounded-3xl shadow-[0px_4px_4px_0px_rgba(218,218,218,0.25)] flex items-center justify-between px-4 animate-pulse">
        <div className="flex flex-col gap-1.5">
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    );
  }

  // --- Trạng thái Đã Đăng Nhập ---
  if (isAuthenticated && user) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-52 h-14 bg-white rounded-3xl shadow-[0px_4px_4px_0px_rgba(218,218,218,0.25)] flex items-center justify-between px-4 text-right cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            <span className="text-gray-900 text-sm font-medium font-['IBM_Plex_Serif'] truncate" title={user.name}>
              {user.name}
            </span>
            <span className="text-neutral-500 text-xs font-normal font-['IBM_Plex_Serif']">
              Tài khoản
            </span>
          </div>
          <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-gray-950" />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 py-2 border">
            <Link
              href={ROUTES.MAIN.PROFILE.BASE}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LayoutDashboard size={16} />
              <span>Trang cá nhân</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <LogOut size={16} />
              <span>Đăng xuất</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // --- Trạng thái Chưa Đăng Nhập ---
  return (
    <div className="w-52 h-14 bg-white rounded-3xl shadow-[0px_4px_4px_0px_rgba(218,218,218,0.25)] flex items-center justify-between px-4">
      <div className="flex flex-col gap-1">
        <Link
          href={ROUTES.AUTH.LOGIN}
          className="text-green-500 text-base font-medium font-['IBM_Plex_Serif'] hover:text-green-600 transition-colors"
        >
          Đăng Nhập
        </Link>
        <Link
          href={ROUTES.AUTH.REGISTER}
          className="text-neutral-500 text-xs font-normal font-['IBM_Plex_Serif'] hover:text-neutral-600 transition-colors"
        >
          Đăng Ký
        </Link>
      </div>
      <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-gray-950" />
      </div>
    </div>
  );
};

export default UserMenu;