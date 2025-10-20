'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { ROUTES } from '@/lib/utils/routes';
import { Product } from '@/types/product';
import { addToCart } from '@/lib/api/cart';
import { Heart, ShoppingCart } from 'lucide-react';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';

interface ProductCardProps {
  product: Product;
}

const ProductCardBig: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, slug, price, compare_price, images, stock_quantity, rating = 4 } = product;
  
  const productUrl = ROUTES.MAIN.PRODUCTS.DETAIL(slug);
  const initialImageUrl = images?.[0] || '/images/default.png';

  const [imageSrc, setImageSrc] = useState(initialImageUrl);
  const [isAdding, setIsAdding] = useState(false);

  const handleImageError = () => {
    setImageSrc('/images/default.png');
  };

  const salePercentage = compare_price && parseFloat(price) < parseFloat(compare_price)
    ? Math.round(((parseFloat(compare_price) - parseFloat(price)) / parseFloat(compare_price)) * 100)
    : 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    try {
        await addToCart({ productId: parseInt(id, 10), quantity: 1 });
        toast.success(`Đã thêm "${name}" vào giỏ hàng!`);
    } catch (error: any) {
        if (error.response?.status === 401) {
            toast.error('Vui lòng đăng nhập để thêm sản phẩm.');
        } else {
            toast.error('Không thể thêm sản phẩm. Vui lòng thử lại.');
        }
    } finally {
        setIsAdding(false);
    }
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Toggled wishlist for ${name}`);
  };

  return (
    <Link 
      href={productUrl} 
      className="group w-full h-[585px] relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <div className="relative w-full h-96 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {salePercentage > 0 && (
          <div className="absolute top-4 left-4 bg-red-600 text-red-50 text-sm font-extrabold uppercase px-3 py-1.5 rounded-md">
            {salePercentage}%
          </div>
        )}
        <button 
          onClick={handleToggleWishlist} 
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <ProductRating rating={rating} />
        <h3 className="text-gray-900 text-3xl font-medium my-4 leading-tight">
          {name}
        </h3>
        
        <div className="mt-auto">
          {/* SỬ DỤNG PROP ISBIG */}
          <ProductPrice price={price} compare_price={compare_price} isBig={true} />
          
          <div className="flex items-center justify-center mt-6">
            {stock_quantity > 0 ? (
                <button 
                  onClick={handleAddToCart} 
                  disabled={isAdding}
                  className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors disabled:bg-gray-400"
                >
                    <ShoppingCart className="w-8 h-8 text-white"/>
                </button>
            ) : (
                <div className="w-full text-center py-4 text-red-600 font-bold uppercase border-t border-gray-200 mt-4">
                    Hết hàng
                </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardBig;