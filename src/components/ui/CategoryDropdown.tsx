import React from 'react';
import Link from 'next/link';
import { Category } from '@/types/category';
import { ROUTES } from '@/lib/utils/routes';

interface CategoryDropdownProps {
  categories: Category[];
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-md shadow-lg z-20 py-2 border">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={ROUTES.MAIN.PRODUCTS.CATEGORY(category.slug)}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryDropdown;