'use client';

import { Category } from '@/types/category';
import { useState, useEffect, useRef } from 'react';

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
    
    const isFirstRender = useRef(true);
    
  useEffect(() => {
        setPriceRange(prev => ({
            ...prev,
            max: initialMaxPrice
        }));
    }, [initialMaxPrice]);
    
    // Hàm xử lý khi checkbox danh mục thay đổi
    const handleCategoryChange = (categoryId: number) => {
        const newSelection = selectedCategories.includes(categoryId)
            ? selectedCategories.filter(id => id !== categoryId)
            : [...selectedCategories, categoryId];
        
        setSelectedCategories(newSelection);
        onFilterChange({ categories: newSelection });
    };
    
    // Hàm xử lý khi input giá thay đổi
    const handlePriceInputChange = (type: 'min' | 'max', value: string) => {
        const numValue = parseInt(value) || 0;
        setPriceRange(prev => ({
            ...prev,
            [type]: numValue
        }));
    };

    const applyPriceFilter = () => {
        onFilterChange({ 
            minPrice: priceRange.min, 
            maxPrice: priceRange.max 
        });
    };

    return (
        <aside className="w-64 flex-shrink-0">
            {/* Price Filter */}
            <div className="pb-8 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Lọc theo giá</h3>
                
                {/* Price Range Inputs */}
                <div className="space-y-3 mb-4">
                    <div>
                        <label className="text-xs text-gray-600 block mb-1">Giá tối thiểu</label>
                        <input
                            type="number"
                            value={priceRange.min}
                            onChange={(e) => handlePriceInputChange('min', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && applyPriceFilter()}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            placeholder="0"
                            min={0}
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-600 block mb-1">Giá tối đa</label>
                        <input
                            type="number"
                            value={priceRange.max}
                            onChange={(e) => handlePriceInputChange('max', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && applyPriceFilter()}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            placeholder={initialMaxPrice.toString()}
                            min={0}
                        />
                    </div>
                </div>

                <button
                    onClick={applyPriceFilter}
                    className="w-full px-4 py-2 bg-gray-800 text-white text-xs font-bold rounded-lg hover:bg-gray-900"
                >
                    Áp dụng
                </button>
                
                {/* Display Current Range */}
                <div className="text-sm text-gray-600">
                    <span className="font-semibold">
                        {priceRange.min.toLocaleString('vi-VN')}đ — {priceRange.max.toLocaleString('vi-VN')}đ
                    </span>
                </div>
            </div>

            {/* Product Categories */}
            <div className="py-8 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Danh mục sản phẩm</h3>
                <ul className="space-y-3">
                    {allCategories.map((category) => (
                        <li key={category.id} className="flex items-center">
                            <input 
                                type="checkbox" 
                                id={`cat-${category.id}`}
                                className="h-4 w-4 rounded border-gray-300 text-purple-800 focus:ring-purple-700"
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => handleCategoryChange(category.id)}
                            />
                            <label 
                                htmlFor={`cat-${category.id}`}
                                className={`ml-3 text-sm font-medium cursor-pointer ${
                                    selectedCategories.includes(category.id) 
                                        ? 'text-purple-800' 
                                        : 'text-gray-900'
                                }`}
                            >
                                {category.name}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Reset Filters Button */}
            <div className="pt-6">
                <button
                    onClick={() => {
                        setPriceRange({ min: 0, max: initialMaxPrice });
                        setSelectedCategories([]);
                        onFilterChange({ 
                            categories: [], 
                            minPrice: 0, 
                            maxPrice: initialMaxPrice 
                        });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50"
                >
                    Xóa bộ lọc
                </button>
            </div>
        </aside>
    );
}