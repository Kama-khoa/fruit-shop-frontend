'use client';

import { useState } from 'react';
import ProfileMenu from '@/components/profile/ProfileMenu';
import ProfileContent from '@/components/profile/ProfileContent';
// import MyOrders from '@/components/profile/MyOrders';
// import MyAddresses from '@/components/profile/MyAddresses';

// Định nghĩa các view có thể có
type ProfileView = 'details' | 'orders' | 'addresses' | 'notifications' | 'coupons' | 'recipes' | 'settings' | 'help';

// Placeholder cho các component chưa được tạo
const MyOrders = () => <div className="p-6 bg-white rounded-lg shadow">Nội dung Đơn hàng của tôi</div>;
const MyAddresses = () => <div className="p-6 bg-white rounded-lg shadow">Nội dung Địa chỉ của tôi</div>;
const Notifications = () => <div className="p-6 bg-white rounded-lg shadow">Nội dung Cài đặt Thông báo</div>;
const Coupons = () => <div className="p-6 bg-white rounded-lg shadow">Nội dung Coupons</div>;
const Settings = () => <div className="p-6 bg-white rounded-lg shadow">Nội dung Cài đặt Tài khoản</div>;
const Help = () => <div className="p-6 bg-white rounded-lg shadow">Nội dung Trung tâm Hỗ trợ</div>;

export default function ProfilePage() {
    const [activeView, setActiveView] = useState<ProfileView>('details');

    const renderView = () => {
        switch (activeView) {
            case 'details':
                return <ProfileContent />;
            case 'orders':
                return <MyOrders />;
            case 'addresses':
                return <MyAddresses />;
            case 'notifications':
                return <Notifications />;
            case 'coupons':
                return <Coupons />;
            case 'settings':
                return <Settings />;
            case 'help':
                return <Help />;
            default:
                return <ProfileContent />;
        }
    };

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    
                    {/* Cột Menu bên trái */}
                    <div className="lg:col-span-1">
                        <ProfileMenu activeView={activeView} setActiveView={setActiveView} />
                    </div>
                    
                    {/* Cột Nội dung bên phải */}
                    <div className="lg:col-span-3">
                        {renderView()}
                    </div>
                </div>
            </div>
        </div>
    );
}