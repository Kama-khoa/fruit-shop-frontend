import { Metadata } from 'next';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { CartContent } from '@/components/cart/CartContent';

export const metadata: Metadata = {
  title: 'Giỏ hàng - Plantea',
  description: 'Xem và quản lý sản phẩm trong giỏ hàng',
};

export default function CartPage() {
  return (
    <AuthGuard requireAuth={true}>
      <CartContent />
    </AuthGuard>
  );
}