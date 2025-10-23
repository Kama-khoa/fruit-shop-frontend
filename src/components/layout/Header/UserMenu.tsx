'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserIcon, LogoutIcon, DashboardIcon, GemIcon } from '@/components/ui/UserIcons';
import { useAuth } from '@/lib/hooks/useAuth';
import { ROUTES } from '@/lib/utils/routes';
import { useNavigation } from '@/lib/utils/navigation';
import Image from 'next/image';

const UserMenu: React.FC = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const { navigateTo } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    navigateTo(ROUTES.HOME);
  };

  if (!isMounted || isLoading) {
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
          className="w-52 h-14 bg-white rounded-3xl shadow-[0px_4px_4px_0px_rgba(218,218,218,0.25)] flex items-center px-4 gap-2 text-left cursor-pointer"
        >
          <div className="flex-1 overflow-hidden">
            <p className="text-green-600 text-base font-['IBM_Plex_Serif'] truncate">
              <span className="font-normal">Xin chào, </span>
              <span className="font-bold">{user.name}</span>
            </p>
            <p className="text-amber-400 text-xs font-light font-['IBM_Plex_Serif'] tracking-tight flex items-center gap-1">
              Thành viên Gold <GemIcon className="w-3 h-3 inline-block" />
            </p>
          </div>
          <div className="relative w-10 h-10 ml-2 flex-shrink-0">
            <Image 
                src={user.avatar || `/images/default-user.jpg`}
                alt={user.name}
                fill
                className="rounded-full object-cover"
            />
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
              <DashboardIcon className="w-4 h-4" />
              <span>Trang cá nhân</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <LogoutIcon className="w-4 h-4"/>
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
      <div className="flex flex-col gap-1 px-4">
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
        <UserIcon className="w-5 h-5 text-gray-950" />
      </div>
    </div>
  );
};

export default UserMenu;