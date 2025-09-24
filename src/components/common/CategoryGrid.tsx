import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Sayur Mayur',
      href: '/products?category=vegetables'
    },
    {
      id: 2,
      name: 'Kebutuhan Harian',
      href: '/products?category=daily-needs'
    },
    {
      id: 3,
      name: 'Minuman',
      href: '/products?category=beverages'
    },
    {
      id: 4,
      name: 'Bibit Pohon',
      href: '/products?category=seeds'
    },
    {
      id: 5,
      name: 'Hijau dan Segar',
      href: '/products?category=fresh-green'
    },
    {
      id: 6,
      name: 'Paket Makanan',
      href: '/products?category=food-packages'
    },
    {
      id: 7,
      name: 'Buah Buahan',
      href: '/products?category=fruits'
    },
    {
      id: 8,
      name: 'Makanan Instant',
      href: '/products?category=instant-food'
    },
    {
      id: 9,
      name: 'Kebutuhan Berkebun',
      href: '/products?category=gardening'
    },
    {
      id: 10,
      name: 'Daging Vegetarian',
      href: '/products?category=vegetarian-meat'
    },
    {
      id: 11,
      name: 'Bumbu & Rempah',
      href: '/products?category=spices'
    },
    {
      id: 12,
      name: 'Lainnya',
      href: '/products?category=others'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={category.href}>
          <div className="w-48 h-48 bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.25)] hover:shadow-lg transition-shadow cursor-pointer">
            {/* Category Image */}
            <div className="relative w-32 h-20 mx-auto mt-8 mb-6">
            </div>

            {/* Category Name */}
            <div className="text-center px-4">
              <h3 className="text-black text-base font-['Sequel_Sans'] line-clamp-2">
                {category.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;