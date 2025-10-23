'use client';

import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Product, ProductVariant } from '@/types/product';
import { addToCart } from '@/lib/api/cart';
import QuantitySelector from '@/components/common/QuantitySelector';
import { XIcon } from 'lucide-react';

interface VariantSelectorModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const VariantSelectorModal: React.FC<VariantSelectorModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!isOpen) return null;

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      toast.error('Vui lòng chọn một phiên bản.');
      return;
    }
    setIsAdding(true);
    try {
      await addToCart({
        variantId: selectedVariant.id,
        quantity: quantity,
      });
      toast.success(`Đã thêm "${product.name} - ${selectedVariant.name}" vào giỏ hàng!`);
      onClose();
    } catch (error) {
      toast.error('Không thể thêm sản phẩm. Vui lòng thử lại.');
    } finally {
      setIsAdding(false);
    }
  };

  const currentPrice = selectedVariant ? selectedVariant.price : parseFloat(product.price);
  const stockQuantity = selectedVariant ? selectedVariant.stock_quantity : product.stock_quantity;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl flex gap-6 p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
            <XIcon size={24} />
        </button>

        {/* Cột trái: Hình ảnh */}
        <div className="w-1/3">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.images?.[0] || '/images/default.png'}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Cột phải: Thông tin và lựa chọn */}
        <div className="w-2/3 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">Mã sản phẩm: {selectedVariant?.sku || product.sku}</p>

          <p className="text-3xl font-bold text-green-600 mb-6">{formatCurrency(currentPrice)}</p>
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Loại:</h3>
            <div className="flex flex-wrap gap-2">
              {product.variants?.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 border rounded-full text-sm transition ${
                    selectedVariant?.id === variant.id
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto flex w-full items-center gap-4">
            <QuantitySelector 
                quantity={quantity}
                onIncrease={() => setQuantity(q => q + 1)}
                onDecrease={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
                onSetQuantity={(value) => setQuantity(value)}
            />
            <button
              onClick={handleAddToCart}
              disabled={isAdding || stockQuantity <= 0}
              className="flex-1 bg-Button-Auth text-white font-semibold py-3 rounded-full hover:bg-Button-Auth-hover transition disabled:bg-gray-400"
            >
              {isAdding ? 'Đang thêm...' : (stockQuantity > 0 ? 'Thêm vào giỏ' : 'Hết hàng')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantSelectorModal;