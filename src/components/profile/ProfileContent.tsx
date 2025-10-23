'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { UserProfile } from '@/types/user';
import { getUserProfile, updateUserProfile } from '@/lib/api/users';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { PencilIcon } from '@/components/ui/Icons'; // Import icon Sửa

// Component con để hiển thị thông tin
const InfoBox: React.FC<{ label: string; value: string | null }> = ({ label, value }) => (
    <div className="w-full p-4 bg-white rounded-2xl border border-gray-200">
        <div className="flex flex-col gap-0.5">
            <span className="text-gray-900 text-base font-semibold font-['Inter'] leading-snug">{label}</span>
            <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">{value || 'Chưa cập nhật'}</span>
        </div>
    </div>
);

export default function ProfileContent() {
    const { user, updateAuthUser } = useAuth();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
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
            if (user) {
                // Tạo đối tượng user mới cho context
                const updatedUserContext = { ...user, ...updatedProfile };
                updateAuthUser(updatedUserContext);
            }

            setIsEditing(false); // Quay lại chế độ xem
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

    const inputStyles = "w-full h-12 px-4 bg-neutral-50 rounded-lg text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 ease-in-out";

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg border border-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose tracking-wide">
                    Thông tin tài khoản
                </h2>
                {!isEditing && (
                    <button 
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-green-600 font-semibold text-sm hover:bg-green-50 transition-colors"
                    >
                        <PencilIcon className="w-4 h-4" />
                        Sửa
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cột trái: Avatar */}
                <div className="md:col-span-1 flex flex-col items-center gap-4">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden">
                        <Image
                            src={profile.avatar || user?.avatar || '/images/default-user.jpg'}
                            alt="Avatar"
                            fill
                            className="object-cover"
                            sizes="160px"
                        />
                    </div>
                    <button type="button" className="px-4 py-2 border border-gray-300 rounded-full text-stone-950 text-sm font-medium hover:bg-gray-50">
                        Đổi ảnh đại diện
                    </button>
                </div>

                {/* Cột phải: Thông tin */}
                <div className="md:col-span-2">
                    {isEditing ? (
                        // --- Chế độ CHỈNH SỬA ---
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-black text-sm font-semibold font-['Inter'] leading-tight">Họ và tên</label>
                                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputStyles}/>
                            </div>
                             <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-black text-sm font-semibold font-['Inter'] leading-tight">Số điện thoại</label>
                                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Chưa có số điện thoại" className={inputStyles}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-black text-sm font-semibold font-['Inter'] leading-tight">Email</label>
                                <input id="email" name="email" type="email" readOnly disabled value={profile.email} className={`${inputStyles} bg-gray-200 text-gray-500 cursor-not-allowed`}/>
                            </div>
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-6 py-2 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="px-6 py-2 rounded-full bg-Button-Auth text-white font-semibold hover:opacity-90 disabled:bg-gray-400"
                                >
                                    {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Lưu'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        // --- Chế độ HIỂN THỊ ---
                        <div className="space-y-4">
                            <InfoBox label="Họ và tên" value={profile.name} />
                            <InfoBox label="Số điện thoại" value={profile.phone} />
                            <InfoBox label="Email" value={profile.email} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}