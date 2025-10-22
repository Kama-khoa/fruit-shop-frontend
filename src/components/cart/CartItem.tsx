'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem as CartItemType } from '@/types/cart';
import { ROUTES } from '@/lib/utils/routes';
import { useDebounce } from '@/lib/hooks/useDebounce';
import QuantitySelector from '@/components/common/QuantitySelector';
import toast from 'react-hot-toast';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: number, newQuantity: number) => Promise<void>;
  onRemoveItem: (itemId: number) => Promise<void>;
}

// Hàm tiện ích để định dạng tiền tệ
const formatCurrency = (amount: string | number) => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericAmount);
};

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  if (!item.product) {
    return null; 
  }

  const [quantity, setQuantity] = useState(item.quantity);
  const [isUpdating, setIsUpdating] = useState(false);
  const debouncedQuantity = useDebounce(quantity, 500);

  const [imageSrc, setImageSrc] = useState(item.variant.image || '/images/default.png');
  
  useEffect(() => {
    if (debouncedQuantity !== item.quantity) {
      setIsUpdating(true);
      onUpdateQuantity(parseFloat(item.id), debouncedQuantity)
        .then(() => toast.success('Cập nhật giỏ hàng thành công'))
        .catch(() => {
            toast.error('Cập nhật thất bại');
            setQuantity(item.quantity);
        })
        .finally(() => setIsUpdating(false));
    }
  }, [debouncedQuantity, item.id, item.quantity, onUpdateQuantity]);

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => q - 1);
  const handleRemove = async () => {
    setIsUpdating(true);
    try {
        await onRemoveItem(parseFloat(item.id));
        toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
    } catch {
        toast.error('Xóa thất bại');
        setIsUpdating(false);
    }
    // Không cần setIsUpdating(false) ở finally vì component sẽ unmount
  };
  
  const handleImageError = () => setImageSrc('/images/default.png');

  const totalPrice = item.variant.price * quantity;

  return (
    <div className="grid grid-cols-12 items-center gap-4 py-6 border-b border-gray-200">
      {/* Product Info (6 columns) */}
      <div className="col-span-6 flex items-center gap-4">
        <Link href={ROUTES.MAIN.PRODUCTS.DETAIL(item.product.slug)} className="w-16 h-16 relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={imageSrc}
            alt={item.product.name}
            fill
            className="object-cover"
            onError={handleImageError}
            sizes="64px"
          />
        </Link>
        <div className="flex flex-col gap-1">
          <Link href={ROUTES.MAIN.PRODUCTS.DETAIL(item.product.slug)} className="text-sm font-medium text-gray-900 hover:text-green-600">
            {item.product.name}
          </Link>
          <div className="inline-flex items-center gap-2">
            <div className="text-green-600 text-sm font-semibold font-['IBM_Plex_Serif'] leading-tight">
              {formatCurrency(item.variant.price)}
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Selector (3 columns) */}
      <div className="col-span-3 flex justify-center">
        <QuantitySelector 
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onSetQuantity={setQuantity}
          disabled={isUpdating}
        />
      </div>
      
      {/* Total Price & Remove (3 columns) */}
      <div className="col-span-3 flex items-center justify-end gap-6">
        <div className="w-32 text-right text-base font-medium text-gray-900">
          {formatCurrency(totalPrice)}
        </div>
        <button onClick={handleRemove} disabled={isUpdating} className="text-xs font-semibold text-green-600 hover:underline disabled:opacity-50">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CartItem;