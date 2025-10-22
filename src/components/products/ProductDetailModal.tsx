'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { ProductDetail, ProductVariant } from '@/types/product';
import { addToCart } from '@/lib/api/cart';
import QuantitySelector from '@/components/common/QuantitySelector';
import { XIcon, Heart, Share2, GitCompare } from 'lucide-react';
import ProductRating from './ProductRating';
import { HeartIcon } from '../ui/Icons';

interface ProductDetailModalProps {
  product: ProductDetail;
  isOpen: boolean;
  onClose: () => void;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [mainImage, setMainImage] = useState(product.images?.[0] || '/images/default.png');
  const [allImages, setAllImages] = useState<string[]>(product.images || []);

  // Tự động chuyển ảnh chính
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
        setMainImage(prev => {
            const currentIndex = allImages.indexOf(prev);
            const nextIndex = (currentIndex + 1) % allImages.length;
            return allImages[nextIndex];
        });
    }, 10000); // 10 giây
    return () => clearInterval(interval);
  }, [isOpen, allImages]);

  // Cập nhật ảnh khi chọn variant
  useEffect(() => {
    if (selectedVariant?.image) {
        try {
            // API có thể trả về một chuỗi JSON chứa mảng URL
            const variantImages = JSON.parse(selectedVariant.image);
            if (Array.isArray(variantImages) && variantImages.length > 0) {
                setMainImage(variantImages[0]);
                setAllImages([...variantImages, ...(product.images || [])]);
            }
        } catch (e) {
            // Hoặc API trả về một URL trực tiếp
            setMainImage(selectedVariant.image);
            setAllImages([selectedVariant.image, ...(product.images || [])]);
        }
    } else {
        setMainImage(product.images?.[0] || '/images/default.png');
        setAllImages(product.images || []);
    }
  }, [selectedVariant, product.images]);

  if (!isOpen) return null;

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      toast.error('Vui lòng chọn một phiên bản.');
      return;
    }
    setIsAdding(true);
    try {
      await addToCart({ variantId: selectedVariant.id, quantity });
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
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl flex gap-8 p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
            <XIcon size={24} />
        </button>

        {/* Cột ảnh */}
        <div className="w-1/2 flex flex-col gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border">
                <Image src={mainImage} alt={product.name} fill className="object-cover"/>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {allImages.slice(0, 4).map((img, index) => (
                    <div key={index} className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === img ? 'border-green-500' : 'border-transparent'}`} onClick={() => setMainImage(img)}>
                         <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} fill className="object-cover"/>
                    </div>
                ))}
            </div>
        </div>

        {/* Cột thông tin */}
        <div className="w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-4 my-3 text-sm text-gray-500">
                <ProductRating rating={product.rating || 0} />
                <span>({product.review_count || 0} đánh giá)</span>
                <span>|</span>
                <span>SKU: {selectedVariant?.sku || product.sku}</span>
                <span className="text-green-600 font-semibold">
                  {stockQuantity > 0 ? 'Còn hàng' : 'Hết hàng'}
                </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.short_description}</p>
            
            <div className="text-4xl font-bold text-red-600 mb-6">
                {formatCurrency(currentPrice)}
            </div>

            {/* Lựa chọn Variant */}
            {product.variants && product.variants.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-2">Loại:</h3>
                    <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
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
            )}
            
            <div className="flex items-center gap-4 mb-6">
                <QuantitySelector 
                    quantity={quantity}
                    onIncrease={() => setQuantity(q => q + 1)}
                    onDecrease={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
                    onSetQuantity={setQuantity}
                />
                <button
                    onClick={handleAddToCart}
                    disabled={isAdding || stockQuantity <= 0}
                    className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
                >
                    {isAdding ? 'Đang thêm...' : 'Thêm vào giỏ hàng'}
                </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
                <button className="flex items-center gap-2 hover:text-green-600"><HeartIcon/> Thêm vào Wishlist</button>
                <button className="flex items-center gap-2 hover:text-green-600"><Share2 size={16}/> Chia sẻ</button>
                <button className="flex items-center gap-2 hover:text-green-600"><GitCompare size={16}/> So sánh</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
