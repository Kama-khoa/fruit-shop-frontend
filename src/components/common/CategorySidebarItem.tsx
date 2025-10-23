'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';

interface CategorySidebarItemProps {
  category: {
    id: number;
    name: string;
    slug: string;
    children?: { id: number; name: string; slug: string }[];
  };
}

const CategorySidebarItem: React.FC<CategorySidebarItemProps> = ({ category }) => {
  return (
    <Link
      href={ROUTES.MAIN.PRODUCTS.CATEGORY(category.slug)}
      className="flex items-center justify-between p-3 text-sm font-medium text-gray-800 
                 hover:bg-green-50 hover:text-green-700 transition-all duration-200 group"
    >
      <span className="truncate group-hover:translate-x-1 transition-transform duration-200">
        {category.name}
      </span>
      <ChevronRight
        size={16}
        className="text-gray-400 group-hover:text-green-600 transition-colors"
      />
    </Link>
  );
};

export default CategorySidebarItem;
