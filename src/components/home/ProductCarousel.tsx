'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '@/types/product';
import ProductCard from '../products/ProductCard';

interface Props {
  products: Product[];
  title?: string;
}

export default function ProductSection({ products, title = 'Sản phẩm' }: Props) {
  const [activeTab, setActiveTab] = useState<'featured' | 'new' | 'promotion'>('promotion');

  const tabs = [
    { id: 'featured', label: 'Sản phẩm nổi bật' },
    { id: 'new', label: 'Sản phẩm mới' },
    { id: 'promotion', label: 'Sản phẩm khuyến mãi' },
  ];

  return (
    <section className="my-12">
      {/* Title */}
      <h2 className="text-6xl font-semibold text-center mb-8">
        <span className="font-normal">-</span>
        {title}
        <span className="font-normal">-</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'featured' | 'new' | 'promotion')}
            className={`text-2xl font-normal ${
              activeTab === tab.id ? 'text-green-600' : 'text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-4 border-green-600 w-4 h-16 flex items-center justify-center z-10">
          <ChevronLeft className="w-3 h-3" />
        </button>

        <div className="grid grid-cols-7">
          {products.slice(0, 7).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-4 border-green-600 w-4 h-16 flex items-center justify-center z-10">
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}