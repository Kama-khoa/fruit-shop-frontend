'use client';

import { Product } from '@/types/product';
import { PaginationMeta } from '@/types/index';
import ProductCard from './ProductCard';
import Image from 'next/image';
import { LayoutGrid, List } from 'lucide-react';
import Pagination from '@/components/common/Pagination';

interface Props {
  products: Product[];
  pagination: PaginationMeta | null;
  onSortChange: (sortBy: string, sortOrder: string) => void;
  onLimitChange: (limit: number) => void;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export default function ProductsDisplay({ products, pagination, onSortChange, onLimitChange, onPageChange, isLoading = false }: Props) {
  return (
    <div className="flex-1">
        {/* Banner */}
      <div className="relative h-72 rounded-md overflow-hidden mb-8">
           <Image
               src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
               alt="Grocery store"
               fill
               className="object-cover"
           />
           <div className="absolute inset-0 bg-black/20" />
           <div className="relative z-10 p-8 text-white max-w-md">
               <span className="text-xs font-semibold bg-orange-100 text-orange-900 px-3 py-1 rounded-full">Only This Week</span>
               <h2 className="text-3xl font-bold mt-4">Grocery store with different treasures</h2>
               <p className="text-xs mt-4">We have prepared special discounts for you on grocery products...</p>
               <button className="mt-6 bg-white text-neutral-800 text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100">
                  Shop Now
               </button>
          </div>
      </div>

        {/* Controls */}
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md mb-8">
          <span className="text-xs text-gray-500">
              {isLoading && products.length === 0 ? (
                  'Đang tải...'
              ) : (
                  `Hiển thị ${products.length} trên tổng số ${pagination?.total || 0} kết quả`
              )}
          </span>
          <div className="flex items-center gap-4 text-xs font-medium">
              <select 
                  className="bg-transparent text-slate-900"
                  onChange={(e) => {
                      const [sortBy, sortOrder] = e.target.value.split('_');
                      onSortChange(sortBy, sortOrder);
                  }}
                  disabled={isLoading}
              >
                  <option value="created_at_desc">Mới nhất</option>
                  <option value="price_asc">Giá: Thấp đến cao</option>
                  <option value="price_desc">Giá: Cao đến thấp</option>
                  <option value="name_asc">Tên: A-Z</option>
              </select>
              
              <select 
                  className="bg-transparent text-slate-900 border-l border-gray-300 pl-4"
                  onChange={(e) => onLimitChange(Number(e.target.value))}
                  defaultValue={12}
                  disabled={isLoading}
              >
                  <option value={12}>12 sản phẩm</option>
                  <option value={24}>24 sản phẩm</option>
                  <option value={36}>36 sản phẩm</option>
              </select>
          </div>
      </div>

        {/* Product Grid */}
        {isLoading && products.length === 0 ? (
          // Hiển thị skeleton loading nếu cần
          <div className="text-center py-16">Đang tìm kiếm sản phẩm...</div>
      ) : products.length > 0 ? (
          // Sửa: Thay đổi grid layout và sử dụng ProductCardBig
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <div className="text-center py-16">
                <p className="text-gray-500">Không tìm thấy sản phẩm nào phù hợp.</p>
            </div>
        )}

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
            <Pagination 
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={onPageChange}
            />
        )}
    </div>
  );
}