'use client';

import { Category } from '@/types/category';
import { useState, useEffect } from 'react';

export interface FilterState {
  categories: number[];
  minPrice: number;
  maxPrice: number;
  status: ('inStock' | 'onSale')[];
}

interface Props {
  allCategories: Category[];
  initialMaxPrice: number;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

export default function FilterSidebar({ allCategories, initialMaxPrice, onFilterChange }: Props) {
  const [priceRange, setPriceRange] = useState({ min: 0, max: initialMaxPrice });
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    setPriceRange((prev) => ({ ...prev, max: initialMaxPrice }));
  }, [initialMaxPrice]);

  const handleCategoryChange = (categoryId: number) => {
    const newSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(newSelection);
    onFilterChange({ categories: newSelection });
  };

  const handlePriceInputChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    setPriceRange((prev) => ({ ...prev, [type]: numValue }));
  };

  const applyPriceFilter = () => {
    onFilterChange({
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    });
  };

  const resetFilters = () => {
    setPriceRange({ min: 0, max: initialMaxPrice });
    setSelectedCategories([]);
    onFilterChange({
      categories: [],
      minPrice: 0,
      maxPrice: initialMaxPrice,
    });
  };

  return (
    <aside className="w-full lg:w-64 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-3">
        Bộ lọc sản phẩm
      </h2>

      {/* Filter by Price */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Khoảng giá</h3>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => handlePriceInputChange('min', e.target.value)}
            placeholder="Từ"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-green-500 focus:border-green-500"
          />
          <span className="text-gray-400">–</span>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => handlePriceInputChange('max', e.target.value)}
            placeholder="Đến"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <button
          onClick={applyPriceFilter}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg transition-all duration-150"
        >
          Áp dụng
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          {priceRange.min.toLocaleString('vi-VN')}đ — {priceRange.max.toLocaleString('vi-VN')}đ
        </p>
      </div>

      {/* Filter by Category */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Danh mục</h3>
        <ul className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {allCategories.map((category) => (
            <li key={category.id} className="flex items-center">
              <input
                type="checkbox"
                id={`cat-${category.id}`}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <label
                htmlFor={`cat-${category.id}`}
                className={`ml-3 text-sm cursor-pointer select-none ${
                  selectedCategories.includes(category.id)
                    ? 'text-green-700 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Reset Filters */}
      <button
        onClick={resetFilters}
        className="w-full border border-gray-300 text-gray-700 text-sm font-medium rounded-lg py-2 hover:bg-gray-50 transition-colors duration-150"
      >
        Xóa bộ lọc
      </button>
    </aside>
  );
}
