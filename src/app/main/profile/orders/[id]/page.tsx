'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getMyOrderDetail, cancelOrder } from '@/lib/api/orders';
import { Order } from '@/types/order';
import { ROUTES } from '@/lib/utils/routes';
import { Loader2, ChevronLeft, HelpCircle } from 'lucide-react';
import OrderStatusTracker from '@/components/orders/OrderStatusTracker';
import OrderDetailSummary from '@/components/orders/OrderDetailSummary';
import OrderProductList from '@/components/orders/OrderProductList';
import ConfirmationDialog from '@/components/common/ConfirmationDialog';
import toast from 'react-hot-toast';

export default function OrderDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params; // Lấy ID đơn hàng từ URL

  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // Tải dữ liệu đơn hàng khi component được mount
  useEffect(() => {
    if (typeof id === 'string') {
      setIsLoading(true);
      getMyOrderDetail(id)
        .then(data => {
          if (data) {
            setOrder(data);
          } else {
            toast.error('Không tìm thấy đơn hàng.');
            router.replace(ROUTES.MAIN.PROFILE.BASE);
          }
        })
        .catch(() => {
          toast.error('Lỗi khi tải chi tiết đơn hàng.');
          router.replace(ROUTES.MAIN.PROFILE.BASE);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id, router]);

  // Hàm xử lý hủy đơn hàng
  const handleCancelOrder = async () => {
    if (!order) return;

    setIsCancelling(true);
    try {
      const updatedOrder = await cancelOrder(order.id);
      setOrder(updatedOrder); // Cập nhật state với đơn hàng đã bị hủy
      toast.success('Đã hủy đơn hàng thành công.');
    } catch (error) {
      toast.error('Hủy đơn hàng thất bại. Vui lòng thử lại.');
    } finally {
      setIsCancelling(false);
      setIsConfirmOpen(false);
    }
  };

  // Hiển thị loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-12 min-h-[500px]">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );
  }

  // Hiển thị khi không có đơn hàng
  if (!order) {
    return (
      <div className="text-center py-20">
        <p>Không tìm thấy thông tin đơn hàng.</p>
      </div>
    );
  }

  // Điều kiện hiển thị nút hủy
  const canCancel = order.order_status === 'pending' || order.order_status === 'confirmed';

  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header của trang */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => router.push(ROUTES.MAIN.PROFILE.BASE)} 
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              Quay lại Đơn hàng
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
              <HelpCircle className="w-4 h-4" />
              Trợ giúp
            </button>
          </div>

          {/* Grid Layout chính */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Cột trái (Nội dung chính) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <OrderStatusTracker order={order} />
              <OrderProductList items={order.items || []} />
            </div>

            {/* Cột phải (Tóm tắt) */}
            <div className="lg:col-span-1">
              <OrderDetailSummary order={order} />
            </div>
          </div>

          {/* Nút Hủy đơn hàng */}
          {canCancel && (
            <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-8 flex justify-between items-center">
              <p className="text-sm text-gray-600">Bạn có thể hủy đơn hàng này trước khi được chuẩn bị.</p>
              <button 
                onClick={() => setIsConfirmOpen(true)}
                disabled={isCancelling}
                className="px-6 py-2 bg-red-100 text-red-700 font-semibold rounded-full border border-red-200 hover:bg-red-200 transition disabled:opacity-50"
              >
                {isCancelling ? 'Đang hủy...' : 'Hủy đơn hàng'}
              </button>
            </div>
          )}

        </div>
      </div>

      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleCancelOrder}
        title="Xác nhận hủy đơn hàng"
        message={`Bạn có chắc chắn muốn hủy đơn hàng #${order.order_number}? Hành động này không thể hoàn tác.`}
        isLoading={isCancelling}
        confirmText="Xác nhận Hủy"
      />
    </>
  );
}