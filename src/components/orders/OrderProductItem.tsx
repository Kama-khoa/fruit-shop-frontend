'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem } from '@/types/cart';
import { ROUTES } from '@/lib/utils/routes';
import { OrderItem } from '@/types/order';

// Hàm tiện ích để định dạng tiền tệ
const formatCurrency = (amount: number | string) => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericAmount);
};

// Hàm tiện ích để lấy URL ảnh
const getImageUrl = (imageJson: string | null, fallback: string | null = null): string => {
    if (!imageJson) return fallback || '/images/default.png';
    try {
        const images = JSON.parse(imageJson);
        if (Array.isArray(images) && images.length > 0) {
            return images[0];
        }
    } catch (e) {
        // Nếu không phải JSON, nó là một URL string đơn
        return imageJson;
    }
    return fallback || '/images/default.png';
};

interface OrderProductItemProps {
  item: OrderItem; // Sử dụng lại type CartItem vì nó có cấu trúc lồng nhau
}

const OrderProductItem: React.FC<OrderProductItemProps> = ({ item }) => {
  const initialImageUrl = getImageUrl(item.image);
  const [imageSrc, setImageSrc] = useState(initialImageUrl);
  
  const handleImageError = () => setImageSrc('/images/default.png');
  
  const mainPrice = item.unit_price;

  return (
    <div className="self-stretch py-4 bg-white border-b border-neutral-100 flex justify-start items-center gap-4">
      
      {/* Cột ảnh */}
      <div className="w-16 h-16 relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
        <Image
          src={imageSrc || '/images/default.png'}
          alt={item.product_name}
          fill
          className="object-cover"
          onError={handleImageError}
          sizes="64px"
        />
      </div>

      {/* Cột thông tin (tự co giãn) */}
      <div className="flex-1 flex flex-col justify-center items-start gap-1 min-w-0">
        <div className="flex items-center text-gray-900 text-base font-medium font-['Inter'] leading-7 truncate gap-2">
              {item.product_name}
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-700 text-xs font-medium font-['Inter'] flex-shrink-0">
                {item.variant_name}
            </span>
        </div>
        <div className="flex justify-start items-baseline gap-2">
            <div className="text-gray-900 text-base font-medium font-['Inter'] leading-relaxed">
                {formatCurrency(mainPrice)}
            </div>
        </div>
      </div>

      {/* Cột số lượng (cố định) */}
      <div className="w-20 text-right text-green-600 text-sm font-medium font-['Inter'] leading-normal">
        x{item.quantity}
      </div>
    </div>
  );
};

export default OrderProductItem;