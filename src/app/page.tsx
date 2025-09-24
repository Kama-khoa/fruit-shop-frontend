import React from 'react';
import HeroBanner from '@/components/common/HeroBanner';
import ProductGrid from '@/components/product/ProductGrid';
import CategoryGrid from '@/components/common/CategoryGrid';
import PromoSection from '@/components/common/PromoSection';
import ReviewSection from '@/components/product/ReviewSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Green Sale 9.9 Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-black text-3xl font-normal font-['Abril_Fatface'] mb-8">
            Green Sale 9.9
          </h2>
          <ProductGrid />
        </div>
      </section>

      {/* Best Reviews Section */}
      <ReviewSection />

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-black text-3xl font-normal font-['Abril_Fatface'] mb-8">
            Categories For You
          </h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Available Coupons Section */}
      <PromoSection />
    </div>
  );
}