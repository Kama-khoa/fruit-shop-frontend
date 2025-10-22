import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';
import { Category } from '@/types/category';
import { ChevronRight } from 'lucide-react';
import { AppleIcon, FishIcon, MilkIcon, SnowflakeIcon, ShoppingBasketIcon, LeafIcon } from '@/components/ui/CategoryIcons';

// Ánh xạ icon tới slug của danh mục
const iconMap: { [key: string]: React.ReactNode } = {
  'rau-cu-qua': <LeafIcon />,
  'trai-cay': <AppleIcon />,
  'thit-hai-san': <FishIcon />,
  'do-uong': <MilkIcon />,
  'thuc-pham-dong-lanh': <SnowflakeIcon />,
  'nhu-yeu-pham': <ShoppingBasketIcon />,
};

// Hàm để lấy icon dựa trên slug
const getCategoryIcon = (slug: string) => {
    return iconMap[slug] || <ShoppingBasketIcon />; // Icon mặc định
};

interface CategorySidebarItemProps {
  category: Category;
}

const CategorySidebarItem: React.FC<CategorySidebarItemProps> = ({ category }) => {
  return (
    <li key={category.id}>
      <Link
        href={ROUTES.MAIN.PRODUCTS.CATEGORY(category.slug)}
        className="flex items-center justify-between p-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors group border border-gray-200"
      >
        <div className="flex items-center gap-4">
          {getCategoryIcon(category.slug)}
          <span>{category.name}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
      </Link>
    </li>
  );
};

export default CategorySidebarItem;