'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '@/types/product';
import ProductCard from '../products/ProductCard';

interface Props {
  products: Product[];
  title?: string;
}

export default function ProductCarousel({ products, title = 'Sản phẩm' }: Props) {
  const [activeTab, setActiveTab] = useState<'featured' | 'new' | 'promotion'>('featured');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hiển thị 4 sản phẩm/lần ở desktop, 2 ở tablet, 1 ở mobile
  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 :
                       typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 4;

  const maxIndex = Math.max(0, Math.ceil(products.length / itemsPerPage) - 1);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const tabs = [
    { id: 'featured', label: 'Nổi bật' },
    { id: 'new', label: 'Mới nhất' },
    { id: 'promotion', label: 'Khuyến mãi' },
  ];

  return (
    <section className="my-16 px-3 sm:px-4 md:px-6">
      {/* Tiêu đề */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-gray-800 tracking-tight">
        <span className="text-emerald-500 font-light">—</span>{' '}
        {title}{' '}
        <span className="text-emerald-500 font-light">—</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 md:gap-10 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'featured' | 'new' | 'promotion')}
            className={`text-base md:text-lg font-medium pb-1 transition-all duration-300 relative
              ${activeTab === tab.id 
                ? 'text-emerald-600 font-semibold' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab.label}
            <span 
              className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 
                ${activeTab === tab.id ? 'w-full' : 'w-0'}`}
            />
          </button>
        ))}
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Nút Previous */}
        <button 
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6
            w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20
            transition-all duration-300 shadow-md
            ${canGoPrev 
              ? 'bg-white border border-emerald-500 hover:bg-emerald-50 hover:scale-105 cursor-pointer' 
              : 'bg-gray-100 border border-gray-300 cursor-not-allowed opacity-50'
            }`}
        >
          <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${canGoPrev ? 'text-emerald-600' : 'text-gray-400'}`} />
        </button>

        {/* Sản phẩm */}
        <div className="overflow-hidden px-4">
          <div 
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const start = idx * itemsPerPage;
              const group = products.slice(start, start + itemsPerPage);
              return (
                <div key={idx} className="flex flex-nowrap justify-center w-full gap-4">
                  {group.map((product) => (
                    <div 
                      key={product.id}
                      className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px]"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Nút Next */}
        <button 
          onClick={handleNext}
          disabled={!canGoNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6
            w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20
            transition-all duration-300 shadow-md
            ${canGoNext 
              ? 'bg-white border border-emerald-500 hover:bg-emerald-50 hover:scale-105 cursor-pointer' 
              : 'bg-gray-100 border border-gray-300 cursor-not-allowed opacity-50'
            }`}
        >
          <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 ${canGoNext ? 'text-emerald-600' : 'text-gray-400'}`} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full
              ${currentIndex === idx 
                ? 'w-6 h-2 bg-emerald-600' 
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
