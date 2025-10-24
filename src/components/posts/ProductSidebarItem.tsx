
"use client";

import Image from 'next/image';
import { Product } from '@/types/product';

interface Props {
  product: Product;
  onClick: () => void; 
}

const formatCurrency = (amount: number | null) => {
    if (amount === null) return '...';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

export default function ProductSidebarItem({ product, onClick }: Props) {
  const imageUrl = product.images.thumbnail || 
                   (product.images.gallery && product.images.gallery[0]) || 
                   '/placeholder-image.jpg';
  
  // Kiểm tra giá sale
  const hasSale = product.compare_price && parseFloat(product.compare_price) > parseFloat(product.price);
  
  // Chuyển đổi giá (string) sang (number) để format
  const price = parseFloat(product.price);
  const comparePrice = product.compare_price ? parseFloat(product.compare_price) : null;

  return (
    <button 
      type="button"
      onClick={onClick} 
      className="flex w-full text-left gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
    >
      {/* Ảnh */}
      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Thông tin */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        {/* Giá */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className={`text-sm font-bold ${hasSale ? 'text-red-600' : 'text-green-700'}`}>
            {formatCurrency(price)}
          </span>
          {hasSale && comparePrice && (
            <span className="text-xs text-gray-500 line-through">
              {formatCurrency(comparePrice)}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}