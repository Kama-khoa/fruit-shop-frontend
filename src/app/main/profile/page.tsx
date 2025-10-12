import { Metadata } from 'next';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { ProfileContent } from '@/components/profile/ProfileContent';

export const metadata: Metadata = {
  title: 'Thông tin cá nhân - Plantea',
  description: 'Quản lý thông tin cá nhân và tài khoản',
};

export default function ProfilePage() {
  return (
    <AuthGuard requireAuth={true}>
      <ProfileContent />
    </AuthGuard>
  );
}