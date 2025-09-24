import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Costafarms Soup Pack',
      category: 'Fresh, Food & Groceries',
      currentPrice: 1900,
      originalPrice: 19900,
      discount: 91,
    },
    {
      id: 2,
      name: 'Soup Pack + Royco',
      category: 'Fresh, Food & Groceries',
      currentPrice: 2000,
      originalPrice: 20000,
      discount: 90
    },
    {
      id: 3,
      name: 'Paket Sop Bening & Macaroni',
      category: 'Fresh, Food & Groceries',
      currentPrice: 2000,
      originalPrice: 20000,
      discount: 90,
    },
    {
      id: 4,
      name: 'Greenfarms Paket Sop Bening',
      category: 'Fresh, Food & Groceries',
      currentPrice: 2000,
      originalPrice: 20000,
      discount: 90,
    },
    {
      id: 5,
      name: 'Telly Vegetarian Ramen',
      category: 'Instant Food, Food & Groceries',
      currentPrice: 900,
      originalPrice: 10700,
      discount: 93,
    },
    {
      id: 6,
      name: 'Soup Veg Pack',
      category: 'Fresh, Food & Groceries',
      currentPrice: 2000,
      originalPrice: 20000,
      discount: 90,
    },
    {
      id: 7,
      name: 'Arcanafarm Soup Pack',
      category: 'Fresh, Food & Groceries',
      currentPrice: 1900,
      originalPrice: 19900,
      discount: 91,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;