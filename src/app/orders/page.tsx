import { AuthGuard } from '@/components/auth/AuthGuard';
import { AuthLoadingScreen } from '@/components/auth/AuthLoadingScreen';

export default function OrdersPage() {
  return (
    <AuthGuard 
      requireAuth={true} 
      fallback={<AuthLoadingScreen />}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Đơn hàng của tôi
        </h1>
        {/* Orders content here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            Bạn chưa có đơn hàng nào
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}