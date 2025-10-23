// This component is a Server Component, so we can fetch data directly.
import { getFeaturedProducts, getBestsellerProducts } from '@/lib/api/products';
import CategorySidebar from '@/components/home/CategorySidebar';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import BestsellerBanner from '@/components/home/BestsellerBanner';
import PromotionBanners from '@/components/home/PromotionBanners';
import NewsSection from '@/components/home/NewsSection';
import { createPortal } from "react-dom";


export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const bestsellerProducts = await getBestsellerProducts();

  return (
    <div className="bg-neutral-50">
      {/* Hero + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="hidden lg:block lg:col-span-1">
            <CategorySidebar />
          </aside>
          <div className="lg:col-span-3">
            <HeroBanner />
          </div>
        </div>
      </div>

      {/* Ưu điểm nổi bật */}
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesSection />
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ProductCarousel 
            products={featuredProducts.data} 
            title="✨ Sản phẩm nổi bật"
          />
      </section>

      {/* Best seller banner */}
      <div className="mt-20">
        <BestsellerBanner />
      </div>

      {/* Best Seller */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-white py-12 rounded-2xl shadow-sm">
        <ProductCarousel 
          products={bestsellerProducts.data} 
          title="🔥 Best Seller"
        />
      </section>

      {/* Khuyến mãi */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <PromotionBanners />
      </section>

      {/* Tin tức */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pb-32">
        <NewsSection />
      </section>
    </div>
  );
}
