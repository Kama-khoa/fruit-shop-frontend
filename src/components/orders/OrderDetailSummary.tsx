'use client';

import React from 'react';
import { Order } from '@/types/order';
import { MapPinIcon, CopyIcon, MomoIcon, CodIcon } from '@/components/ui/Icons';
import toast from 'react-hot-toast';

interface OrderDetailSummaryProps {
  order: Order;
}

const formatCurrency = (amount: string | number) => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) return 'N/A';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericAmount);
};

// Component con cho từng khối thông tin
const InfoBlock: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="w-full p-6 bg-gray-50 rounded-2xl shadow-sm">
        <h3 className="text-gray-900 text-base font-semibold font-['Inter'] leading-snug mb-4">
            {title}
        </h3>
        {children}
    </div>
);

const OrderDetailSummary: React.FC<OrderDetailSummaryProps> = ({ order }) => {
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Đã sao chép mã đơn hàng!");
  };

  const getPaymentMethod = () => {
    if (order.payment_method === 'cod') {
        return { icon: <CodIcon className="w-5 h-5 text-green-600" />, name: 'Thanh toán khi nhận hàng' };
    }
    if (order.payment_method === 'momo') {
        return { icon: <MomoIcon />, name: 'Ví điện tử Momo' };
    }
    return { icon: null, name: order.payment_method };
  };

  const payment = getPaymentMethod();
  const fullAddress = `${order.shipping_address}, ${order.shipping_ward}, ${order.shipping_district}, ${order.shipping_province}`;

  return (
    <div className="w-full lg:w-96 flex flex-col gap-6">
      
      {/* Tóm tắt đơn hàng */}
      <InfoBlock title="Đơn hàng">
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Mã hóa đơn</span>
                <div 
                    onClick={() => copyToClipboard(order.order_number)}
                    className="flex items-center gap-1.5 text-green-600 font-semibold cursor-pointer"
                >
                    <CopyIcon className="w-4 h-4 text-Button-Auth" />
                    <span>#{order.order_number}</span>
                </div>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Giá hàng</span>
                <span className="text-gray-900">{formatCurrency(order.subtotal)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Phí giao hàng</span>
                <span className="text-gray-900">{formatCurrency(order.shipping_fee)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-gray-900">Tổng cộng</span>
                <span className="text-base font-semibold text-gray-900">{formatCurrency(order.total_amount)}</span>
            </div>
        </div>
      </InfoBlock>

      {/* Phương thức thanh toán */}
      <InfoBlock title="Thanh toán với">
        <div className="flex items-center gap-2">
            {payment.icon}
            <span className="text-base font-medium text-gray-900">{payment.name}</span>
        </div>
      </InfoBlock>

      {/* Địa chỉ giao hàng */}
      <InfoBlock title="Địa chỉ">
        <div className="flex items-start gap-2">
            <MapPinIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-base font-medium text-gray-900">
                {fullAddress}
            </span>
        </div>
      </InfoBlock>

    </div>
  );
};

export default OrderDetailSummary;