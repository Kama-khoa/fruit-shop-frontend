"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, ShoppingCart, Bell, User, Menu, X, ChevronDown, LogOut, UserCircle, Package } from 'lucide-react';
import PromoTimer from './PromoTimer';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  const navigationItems = [
    { id: 'products', label: 'Sản phẩm', href: '/products' },
    { id: 'about', label: 'Giới thiệu', href: '/about' },
    { id: 'contact', label: 'Liên hệ', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserDropdown(false);
      toast.success('Đăng xuất thành công!');
      router.push('/');
    } catch (error) {
      toast.error('Có lỗi xảy ra khi đăng xuất');
    }
  };

  const getUserDisplayName = () => {
    if (!user || !user.name) return 'Khách';
    // Lấy tên đầu tiên
    return user.name.split(' ')[0];
  };

  const getUserRole = () => {
    if (!user) return '';
    switch (user.role_id) {
      case 1:
        return 'Admin';
      case 2:
        return 'Thành viên';
      default:
        return 'Thành viên';
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('user-dropdown');
      const button = document.getElementById('user-dropdown-button');
      if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Promo Banner */}
      <PromoTimer />
      
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-green-400 text-5xl font-normal font-['Dharrochy']">
                Plantea
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActiveRoute(href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Action Icons */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Search size={24} className="md:hidden" />
                </button>
                
                {isAuthenticated && (
                  <>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Bell size={24} />
                    </button>
                    <Link href="/cart" className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative">
                      <ShoppingCart size={24} />
                      {/* Cart badge */}
                      <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        0
                      </span>
                    </Link>
                  </>
                )}
              </div>

              {/* User Profile or Auth Buttons */}
              {!isLoading && (
                <>
                  {isAuthenticated && user ? (
                    /* Authenticated User Profile */
                    <div className="relative">
                      <button
                        id="user-dropdown-button"
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        className="hidden sm:flex items-center bg-white rounded-3xl shadow-sm px-4 py-2 space-x-3 hover:shadow-md transition-shadow"
                      >
                        <div className="text-right">
                          <div className="text-sm font-normal">
                            <span className="text-black">Xin chào, </span>
                            <span className="text-black font-medium">{getUserDisplayName()}</span>
                          </div>
                          <div className="text-xs text-green-500 font-normal tracking-tight">
                            {getUserRole()}
                          </div>
                        </div>
                        <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
                          <User className="text-white" size={20} />
                        </div>
                        <ChevronDown size={16} className="text-gray-500" />
                      </button>

                      {/* Desktop Dropdown Menu */}
                      {showUserDropdown && (
                        <div id="user-dropdown" className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border z-50">
                          <div className="px-4 py-3 border-b">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                          
                          <Link
                            href="/profile"
                            onClick={() => setShowUserDropdown(false)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <UserCircle size={16} className="mr-3" />
                            Thông tin cá nhân
                          </Link>
                          
                          <Link
                            href="/orders"
                            onClick={() => setShowUserDropdown(false)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Package size={16} className="mr-3" />
                            Đơn hàng của tôi
                          </Link>
                          
                          <div className="border-t my-1"></div>
                          
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            <LogOut size={16} className="mr-3" />
                            Đăng xuất
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Guest User - Login/Register Buttons */
                    <div className="hidden sm:flex items-center space-x-3">
                      <Link
                        href="/auth/login"
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        href="/auth/register"
                        className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Đăng ký
                      </Link>
                    </div>
                  )}
                </>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {/* Mobile Search */}
            <div className="px-4 py-3 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActiveRoute(href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Mobile Auth Links */}
              {isAuthenticated && user && (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  >
                    Thông tin cá nhân
                  </Link>
                  <Link
                    href="/orders"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  >
                    Đơn hàng của tôi
                  </Link>
                </>
              )}
            </div>

            {/* Mobile User Profile */}
            <div className="px-4 py-3 border-t bg-gray-50">
              {!isLoading && (
                <>
                  {isAuthenticated && user ? (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <User className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-xs text-green-500">{getUserRole()}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          handleLogout();
                        }}
                        className="flex items-center space-x-2 text-red-600 text-sm font-medium"
                      >
                        <LogOut size={16} />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-3">
                      <Link
                        href="/auth/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 px-4 py-2 text-center border border-green-500 text-green-500 rounded-lg hover:bg-green-50"
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        href="/auth/register"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 px-4 py-2 text-center bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Đăng ký
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;