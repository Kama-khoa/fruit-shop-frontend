import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const ReviewSection = () => {
  const reviewProducts = [
    {
      id: 1,
      name: 'Costafarms Soup Pack',
      category: 'Fresh, Food & Groceries',
      rating: 4.8,
      reviews: 1942,
      currentPrice: 1900,
      originalPrice: 19900,
      discount: 91,
      store: 'Costafarm Jogja',
      location: 'Sleman',
    },
    {
      id: 2,
      name: 'Nongshim Soon Vegetarian Noodle Soup Ramen',
      category: 'Instant Food',
      rating: 4.9,
      reviews: 342,
      currentPrice: 4000,
      originalPrice: 6000,
      discount: 30,
      store: 'Nongshim',
      location: 'Jakarta Selatan',
    },
    {
      id: 3,
      name: 'Telly Vegetarian Ramen',
      category: 'Instant Food',
      rating: 4.5,
      reviews: 711,
      currentPrice: 900,
      originalPrice: 10700,
      discount: 93,
      store: 'Telly',
      location: 'Jakarta Pusat',
    },
    {
      id: 4,
      name: 'Costafarms Soup Pack',
      category: 'Fresh, Food & Groceries',
      rating: 4.8,
      reviews: 1942,
      currentPrice: 1900,
      originalPrice: 19900,
      discount: 91,
      store: 'Costafarm Jogja',
      location: 'Sleman',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price).replace('IDR', 'Rp');
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={10} className="fill-amber-300 text-amber-300" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={10} className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={10} className="fill-amber-300 text-amber-300" />
          </div>
        </div>
      );
    }

    return stars;
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-3xl font-normal font-['Abril_Fatface'] mb-8">
          Review Terbaik
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviewProducts.map((product) => (
            <div key={product.id} className="w-full h-48 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(219,219,219,0.25)]">
              <div className="flex h-full">
                {/* Product Image */}
                <div className="w-40 h-32 relative mt-12 ml-4">
                </div>

                {/* Product Details */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-black text-sm font-['Sequel_Sans'] mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-neutral-400 text-xs font-['Sequel_Sans'] mb-2">
                      {product.category}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-amber-300 text-xs font-['Sequel_Sans'] ml-1">
                        {product.rating}/5.0
                      </span>
                    </div>
                    
                    <p className="text-black text-xs font-['Sequel_Sans'] mb-2">
                      {product.reviews.toLocaleString()} Review
                    </p>

                    {/* Store Info */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <span className="text-black text-xs font-['Sequel_Sans']">
                        {product.store},
                      </span>
                      <span className="text-neutral-400 text-xs font-['Sequel_Sans']">
                        {product.location}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-3">
                      <div className="text-black text-lg font-['Sequel_Sans'] mb-1">
                        {formatPrice(product.currentPrice)}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-300 text-xs font-['Sequel_Sans'] line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <div className="w-8 h-3 bg-green-400 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-['Sequel_Sans']">
                            {product.discount}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="w-full h-6 rounded border border-green-700 flex items-center justify-center hover:bg-green-50 transition-colors cursor-pointer">
                    <span className="text-green-700 text-xs font-['Sequel_Sans']">
                      Tambahkan ke Keranjang
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;