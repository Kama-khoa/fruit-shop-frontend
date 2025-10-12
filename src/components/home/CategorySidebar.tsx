'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

interface Props {
  categories: Category[];
}

export default function CategorySidebar({ categories }: Props) {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-green-950 mb-4 text-center">
        DANH MỤC SẢN PHẨM
      </h3>
      
      <div className="space-y-1">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/danh-muc/${category.slug}`}
            className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{category.icon}</span>
              <span className="text-sm font-medium text-gray-950">
                {category.name}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </Link>
        ))}
      </div>
    </div>
  );
}