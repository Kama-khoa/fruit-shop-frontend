'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';
import { Product } from '@/types/product';
import { addToCart } from '@/lib/api/cart';
import toast from 'react-hot-toast';
import { HeartIcon, ShoppingCartIcon } from '@/components/ui/Icons';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';
import VariantSelectorModal from './VariantSelectorModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, slug, price, compare_price, images, stock_quantity, variants, rating = 4, review_count } = product;
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const productUrl = ROUTES.MAIN.PRODUCTS.DETAIL(slug);
  const initialImageUrl = images?.[0] || '/images/default.png';

  const [imageSrc, setImageSrc] = useState(initialImageUrl);
  const handleImageError = () => {
    setImageSrc('/images/default.png'); // Chuyển sang ảnh mặc định
  };
  
  const salePercentage = compare_price && parseFloat(compare_price) > parseFloat(price)
    ? Math.round(((parseFloat(compare_price) - parseFloat(price)) / parseFloat(compare_price)) * 100)
    : 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();

    const hasVariants = variants && variants.length > 0;
    const hasMultipleVariants = hasVariants && variants.length > 1;

    // Nếu có nhiều biến thể, mở dialog để người dùng chọn
    if (hasMultipleVariants) {
      setIsVariantModalOpen(true);
    } 
    // Nếu chỉ có một biến thể, tự động thêm biến thể đó
    else if (hasVariants) {
      setIsAdding(true);
      try {
        await addToCart({ 
          variantId: variants[0].id, // Lấy ID của biến thể duy nhất
          quantity: 1 
        });
        toast.success(`Đã thêm "${name}" vào giỏ hàng!`);
      } catch (error) {
        toast.error('Không thể thêm sản phẩm. Vui lòng thử lại.');
      } finally {
        setIsAdding(false);
      }
    }
    // Trường hợp dự phòng nếu sản phẩm không có biến thể
    else {
        toast.error('Sản phẩm này hiện không có sẵn để mua.');
        console.warn('Attempted to add a product with no variants.', product);
    }
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Toggled wishlist for ${name}`);
  };

  return (
    <>
    <Link href={productUrl} className="group w-full max-w-[208px] h-96 relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-48 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          onError={handleImageError}
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />

        {salePercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-red-50 text-[10px] font-extrabold uppercase px-2 py-1 rounded-full">
            {salePercentage}%
          </div>
        )}

        <button onClick={handleToggleWishlist} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
          <HeartIcon className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-950 text-sm font-medium font-['Inter'] leading-tight h-10 mb-2 overflow-hidden">
          {name}
        </h3>

        <div className="mb-3">
            <ProductRating rating={rating} />
        </div>
        
        <div className="mt-auto">
          <div className="mb-4">
            <ProductPrice price={price} compare_price={compare_price} />
          </div>
          
          <div className="flex items-center justify-between">
            <button onClick={handleAddToCart} className="w-11 h-9 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <ShoppingCartIcon className="w-5 h-5 text-white"/>
            </button>
            {stock_quantity > 0 ? (
                <span className="text-green-600 text-xs font-bold font-['Inter'] uppercase">Còn hàng</span>
            ) : (
                <span className="text-red-600 text-xs font-bold font-['Inter'] uppercase">Hết hàng</span>
            )}
          </div>
        </div>
      </div>
    </Link>
    {/* Render Dialog nếu sản phẩm có biến thể */}
      {product.variants && product.variants.length > 0 && (
        <VariantSelectorModal 
          product={product}
          isOpen={isVariantModalOpen}
          onClose={() => setIsVariantModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;