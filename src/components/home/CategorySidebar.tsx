import React from 'react';
import { getCategories } from '@/lib/api/categories';
import CategorySidebarItem from '../common/CategorySidebarItem';

export default async function CategorySidebar() {
  const categories = await getCategories();

  return (
    <div className="w-80 rounded-lg border border-gray-200">
    <div className="h-14 flex items-center justify-center border-b border-gray-200">
        <h2 className="text-center text-green-950 text-2xl font-semibold font-['Open_Sans'] leading-tight">DANH MỤC SẢN PHẨM</h2>
    </div>
      <nav>
        <ul className="flex flex-col">
        {categories.map((category) => (
            <CategorySidebarItem key={category.id} category={category} />
        ))}
        </ul>
        </nav>
    </div>
  );
};