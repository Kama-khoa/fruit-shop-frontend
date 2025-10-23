'use client';

import React from 'react';
import Image from 'next/image';
import { useAuth } from '@/lib/hooks/useAuth';
import { useNavigation } from '@/lib/utils/navigation';
import { ROUTES } from '@/lib/utils/routes';
import { 
    ProfileOrdersIcon, 
    ProfileCouponIcon, 
    ProfileSettingsIcon, 
    ProfileHelpIcon,
    ProfileLogoutIcon,
    ProfileAddressIcon
} from '@/components/ui/ProfileIcons';
import ProfileMenuItem from './ProfileMenuItem';
import { UserIcon } from '../ui/UserIcons';
import { Bell } from 'lucide-react';

type MenuItemKey = 'details' | 'orders' | 'addresses' | 'notifications' | 'coupons' | 'settings' | 'help';

interface ProfileMenuProps {
  activeView: MenuItemKey;
  setActiveView: (view: MenuItemKey) => void;
}

// Cấu hình các mục menu
const menuItems = [
  { key: 'details', label: 'Thông tin tài khoản', icon: <UserIcon /> },
  { key: 'orders', label: 'Đơn hàng', icon: <ProfileOrdersIcon /> },
  { key: 'addresses', label: 'Địa chỉ', icon: <ProfileAddressIcon /> },
  { key: 'notifications', label: 'Thông báo', icon: <Bell /> },
  { key: 'coupons', label: 'Coupons', icon: <ProfileCouponIcon /> },
];

const bottomMenuItems = [
  { key: 'settings', label: 'Đổi mật khẩu', icon: <ProfileSettingsIcon /> },
  { key: 'help', label: 'Trung tâm hỗ trợ', icon: <ProfileHelpIcon /> },
];

const ProfileMenu: React.FC<ProfileMenuProps> = ({ activeView, setActiveView }) => {
  const { user, logout } = useAuth();
  const { navigateTo } = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigateTo(ROUTES.HOME);
  };

  return (
    <div className="self-stretch p-4 bg-slate-50 rounded-3xl inline-flex flex-col justify-start items-start gap-6">
        {/* User Info */}
        <div className="flex items-center gap-3 p-2">
            <Image 
                className="w-12 h-12 rounded-full object-cover" 
                src={user?.avatar || '/images/default-user.jpg'}
                alt={user?.name || 'Avatar'}
                width={48}
                height={48}
            />
            <div className="text-gray-900 text-base font-semibold leading-snug">{user?.name || 'User'}</div>
        </div>
        
        {/* Menu Items */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
            {menuItems.map(item => (
                <ProfileMenuItem
                    key={item.key}
                    label={item.label}
                    icon={item.icon}
                    isActive={activeView === item.key}
                    onClick={() => setActiveView(item.key as MenuItemKey)}
                />
            ))}
        </div>
        
        <hr className="self-stretch h-px border-gray-200" />
        
        {/* Bottom Menu Items */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
            {bottomMenuItems.map(item => (
                <ProfileMenuItem
                    key={item.key}
                    label={item.label}
                    icon={item.icon}
                    isActive={activeView === item.key}
                    onClick={() => setActiveView(item.key as MenuItemKey)}
                />
            ))}
        </div>

        {/* Logout Button */}
        <div className="w-full mt-4 pt-4 border-t border-gray-200">
             <button 
                onClick={handleLogout}
                className="group w-full h-10 px-4 py-2 rounded-[32px] inline-flex justify-start items-center gap-2 overflow-hidden text-gray-500 hover:text-red-600 transition-colors duration-200"
            >
                <div className="transition-colors duration-200">
                    <ProfileLogoutIcon />
                </div>
                <div className="justify-start text-base font-semibold leading-snug transition-colors duration-200">
                    Logout
                </div>
            </button>
        </div>
    </div>
  );
};

export default ProfileMenu;