'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Breadcrumb from "@/components/common/Breadcrumb";
import FilterSidebar, { FilterState } from "@/components/products/FilterSidebar";
import ProductsDisplay from "@/components/products/ProductsDisplay";
import { getProducts } from "@/lib/api/products";
import { getCategories } from "@/lib/api/categories";
import { Product, ProductFilter } from '@/types/product';
import { PaginationMeta } from '@/types/api';
import { Category } from '@/types/category';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { Loader2 } from 'lucide-react';

type ProductSortKeys = 'created_at' | 'price' | 'rating' | 'popular';

export default function ProductsPage() {
  // --- STATE ---
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isFirstRender = useRef(true);

  // --- FILTERS ---
  const [filters, setFilters] = useState<ProductFilter>({
    page: 1,
    limit: 20,
    sortBy: 'created_at',
    sortOrder: 'desc',
    minPrice: 0,
    maxPrice: 1000000,
  });

  const debouncedFilters = useDebounce(filters, 500);

  // --- FETCH INITIAL DATA ---
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const [productResponse, categoryData] = await Promise.all([
          getProducts(filters),
          getCategories(),
        ]);

        setProducts(productResponse.data);
        setPagination(productResponse.meta);
        setCategories(categoryData);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu ban đầu:", error);
      } finally {
        setIsLoading(false);
        isFirstRender.current = false;
      }
    };
    fetchInitialData();
  }, []);

  // --- FETCH WHEN FILTERS CHANGE ---
  useEffect(() => {
    if (isFirstRender.current) return;

    const fetchFilteredProducts = async () => {
      setIsLoading(true);
      try {
        const productResponse = await getProducts(debouncedFilters);
        setProducts(productResponse.data);
        setPagination(productResponse.meta);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [debouncedFilters]);

  // --- MAX PRICE (for slider) ---
  const maxPrice = useMemo(() => {
    if (products.length === 0) return 1000000;
    const max = Math.max(...products.map((p) => parseFloat(p.price)));
    return Math.ceil(max / 100000) * 100000;
  }, [products]);

  // --- HANDLERS ---
  const handleFilterChange = useCallback((newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  }, []);

  const handleSortChange = (sortBy: string, sortOrder: string) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: sortBy as ProductSortKeys,
      sortOrder: sortOrder as 'asc' | 'desc',
      page: 1,
    }));
  };

  const handleLimitChange = (limit: number) => {
    setFilters((prev) => ({ ...prev, limit, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  // --- BREADCRUMB ---
  const breadcrumbItems = [{ label: 'Sản phẩm' }];

  // --- LOADING STATE ---
  if (isLoading && products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-gray-600">
        <Loader2 className="w-8 h-8 animate-spin mb-4 text-green-600" />
        <p className="text-sm font-medium">Đang tải sản phẩm, vui lòng chờ...</p>
      </div>
    );
  }

  // --- MAIN RENDER ---
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar bộ lọc */}
          <FilterSidebar
            allCategories={categories}
            initialMaxPrice={maxPrice}
            onFilterChange={handleFilterChange}
          />

          {/* Khu vực sản phẩm */}
          <div className="flex-1">
            <ProductsDisplay
              products={products}
              pagination={pagination}
              onSortChange={handleSortChange}
              onLimitChange={handleLimitChange}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
