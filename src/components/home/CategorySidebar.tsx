import React from 'react';
import { getCategories } from '@/lib/api/categories';
import CategorySidebarItem from '../common/CategorySidebarItem';
import { Tag } from 'lucide-react';

export default async function CategorySidebar() {
  const categories = await getCategories();

  return (
    <aside className="w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 h-14 flex items-center justify-center gap-2">
        <Tag className="text-white w-5 h-5" />
        <h3 className="text-white text-lg md:text-xl font-semibold font-['Open_Sans'] tracking-wide">
          Danh mục sản phẩm
        </h3>
      </div>

      {/* Category List */}
      <nav className="py-3">
        <ul className="flex flex-col divide-y divide-gray-100">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <li
                key={category.id}
                className="group hover:bg-green-50 hover:pl-3 transition-all duration-200"
              >
                <CategorySidebarItem category={category} />
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500 py-6 text-sm italic">
              Không có danh mục nào
            </li>
          )}
        </ul>
      </nav>

      {/* Footer subtle line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent" />
    </aside>
  );
}
