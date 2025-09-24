import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-48 h-72 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(219,219,219,0.25)] hover:shadow-lg transition-shadow cursor-pointer">
        {/* Product Image */}
        <div className="relative w-full h-32 mb-4">
        </div>

        {/* Product Info */}
        <div className="px-4 pb-4">
          <h3 className="text-center text-black text-sm font-['Sequel_Sans'] mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-center text-neutral-400 text-xs font-['Sequel_Sans'] mb-4">
            {product.category}
          </p>

          {/* Pricing */}
          <div className="text-center mb-4">
            <div className="text-black text-lg font-['Sequel_Sans'] mb-1">
              {formatPrice(product.currentPrice)}
            </div>
            <div className="text-zinc-300 text-xs font-['Sequel_Sans'] line-through mb-2">
              {formatPrice(product.originalPrice)}
            </div>
            
            {/* Discount Badge */}
            <div className="inline-flex items-center">
              <div className="w-8 h-3 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-['Sequel_Sans']">
                  {product.discount}%
                </span>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="w-20 h-6 mx-auto rounded border border-green-700 flex items-center justify-center hover:bg-green-50 transition-colors">
            <span className="text-green-700 text-xs font-['Sequel_Sans']">
              + Cart
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;