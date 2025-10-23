"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Pagination from "@/components/common/Pagination";
import { PaginationMeta } from "@/types/api";

interface Props {
  products: Product[];
  pagination: PaginationMeta | null;
  onSortChange: (sortBy: string, sortOrder: string) => void;
  onLimitChange: (limit: number) => void;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export default function ProductsDisplay({
  products,
  pagination,
  onSortChange,
  onLimitChange,
  onPageChange,
  isLoading = false,
}: Props) {
  return (
    <div className="flex-1">
      {/* Banner */}
      <div className="relative h-72 rounded-2xl overflow-hidden mb-10 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
          alt="Grocery store"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 p-8 text-white max-w-md">
          <span className="text-xs font-semibold bg-orange-100 text-orange-900 px-3 py-1 rounded-full">
            Only This Week
          </span>
          <h2 className="text-3xl font-bold mt-4 leading-snug drop-shadow">
            Grocery store with different treasures
          </h2>
          <p className="text-xs mt-3 opacity-90">
            We have prepared special discounts for you on grocery products...
          </p>
          <button className="mt-6 bg-white text-neutral-800 text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all duration-200">
            Shop Now
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-between items-center px-5 py-4 bg-gray-50 rounded-xl mb-10 border border-gray-100 shadow-sm">
        <span className="text-sm text-gray-600">
          {isLoading && products.length === 0
            ? "Đang tải..."
            : `Hiển thị ${products.length} trên tổng ${
                pagination?.total || 0
              } sản phẩm`}
        </span>

        <div className="flex items-center gap-4 text-sm font-medium">
          <select
            className="bg-transparent text-slate-900 focus:outline-none"
            onChange={(e) => {
              const [sortBy, sortOrder] = e.target.value.split("_");
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
            className="bg-transparent text-slate-900 border-l border-gray-300 pl-4 focus:outline-none"
            onChange={(e) => onLimitChange(Number(e.target.value))}
            defaultValue={12}
            disabled={isLoading}
          >
            <option value={12}>12 sản phẩm</option>
            <option value={24}>24 sản phẩm</option>
            <option value={36}>36 sản phẩm</option>
            <option value={50}>50 sản phẩm</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {isLoading && products.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Đang tìm kiếm sản phẩm...
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-4 md:px-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-sm">
            Không tìm thấy sản phẩm nào phù hợp.
          </p>
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-10">
          <Pagination
            currentPage={pagination.page}
            totalPages={pagination.totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}
