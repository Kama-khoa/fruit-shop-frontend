'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { UserProfile, UpdateUserProfilePayload } from '@/types/user';
import { getUserProfile, updateUserProfile } from '@/lib/api/users';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

// Định dạng tiền tệ
const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(amount));
};

// Component con cho các ô thống kê
const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold text-green-600">{value}</p>
    </div>
);

export default function ProfileContent() {
    const { user } = useAuth(); // Dùng refreshUser để cập nhật AuthContext
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Tải dữ liệu hồ sơ khi component được mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getUserProfile();
                setProfile(profileData);
                setFormData({
                    name: profileData.name || '',
                    phone: profileData.phone || '',
                });
            } catch (error) {
                toast.error("Không thể tải thông tin tài khoản.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const updatedProfile = await updateUserProfile({
                name: formData.name,
                phone: formData.phone,
            });
            setProfile(updatedProfile);
            toast.success("Cập nhật thông tin thành công!");
        } catch (error) {
            toast.error("Cập nhật thất bại. Vui lòng thử lại.");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-12 bg-white rounded-lg shadow">
                <Loader2 className="w-8 h-8 animate-spin text-green-600" />
            </div>
        );
    }

    if (!profile) {
        return <div className="p-6 bg-white rounded-lg shadow">Không thể tải thông tin hồ sơ.</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Chi tiết Tài khoản</h2>

            {/* Thống kê đơn hàng */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard label="Tổng chi tiêu" value={formatCurrency(profile.total_spent)} />
                <StatCard label="Tổng đơn hàng" value={profile.order_count} />
                <StatCard label="Đơn hàng cuối" value={profile.last_order_date ? new Date(profile.last_order_date).toLocaleDateString('vi-VN') : 'Chưa có'} />
            </div>

            {/* Form chỉnh sửa thông tin */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-4">
                    <Image
                        src={profile.avatar || user?.avatar || '/images/default-user.png'}
                        alt="Avatar"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                    />
                    <button type="button" className="text-sm font-semibold text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-50">
                        Đổi ảnh đại diện
                    </button>
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={profile.email}
                        disabled // Không cho phép sửa email
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 text-gray-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Chưa có số điện thoại"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
                    >
                        {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Lưu thay đổi'}
                    </button>
                </div>
            </form>
        </div>
    );
}