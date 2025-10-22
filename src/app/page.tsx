// This component is a Server Component, so we can fetch data directly.
import { getFeaturedProducts, getBestsellerProducts } from '@/lib/api/products';
import CategorySidebar from '@/components/home/CategorySidebar';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import BestsellerBanner from '@/components/home/BestsellerBanner';
import PromotionBanners from '@/components/home/PromotionBanners';
import NewsSection from '@/components/home/NewsSection';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const bestsellerProducts = await getBestsellerProducts();

  return (
    <div className="bg-neutral-50">
      <div className="max-w-max mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <CategorySidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <HeroBanner />
          </div>
        </div>
      </div>

      <FeaturesSection />

      {/* Featured Products Section */}
      <ProductCarousel 
        products={featuredProducts.data} 
        title="Sản phẩm"
      />
      
      <BestsellerBanner />

      {/* Bestseller Products Section */}
      <ProductCarousel 
        products={bestsellerProducts.data} 
        title="Best Seller"
      />
      
      <PromotionBanners />
      
      <NewsSection />

    </div>
  );
}

