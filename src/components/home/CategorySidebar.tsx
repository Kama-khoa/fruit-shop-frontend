import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';
import { Leaf, Carrot, Fish, Milk, Snowflake, ShoppingBasket } from 'lucide-react';

const categories = [
  { name: 'Rau củ & hoa quả', href: ROUTES.MAIN.CATEGORIES.VEGETABLES, icon: <Carrot size={20} /> },
  { name: 'Thịt & hải sản', href: ROUTES.MAIN.CATEGORIES.MEAT, icon: <Fish size={20} /> },
  { name: 'Bữa sáng dinh dưỡng', href: '#', icon: <Leaf size={20} /> },
  { name: 'Đồ uống', href: ROUTES.MAIN.CATEGORIES.DRINKS, icon: <Milk size={20} /> },
  { name: 'Thực phẩm đông lạnh', href: '#', icon: <Snowflake size={20} /> },
  { name: 'Nhu yếu phẩm', href: '#', icon: <ShoppingBasket size={20} /> },
];

const CategorySidebar = () => {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="text-center text-green-950 text-xl font-semibold font-['Gluten'] leading-tight mb-4">
        DANH MỤC SẢN PHẨM
      </h2>
      <nav>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.name}>
              <Link href={category.href} className="flex items-center gap-4 p-3 text-sm font-medium text-gray-800 rounded-md hover:bg-green-50 transition-colors">
                {category.icon}
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategorySidebar;