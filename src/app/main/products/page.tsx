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

type ProductSortKeys = 'created_at' | 'price' | 'rating' | 'popular';
// This is a Server Component, so we fetch data directly
export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [pagination, setPagination] = useState<PaginationMeta | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isFirstRender = useRef(true);
    // Lấy dữ liệu ban đầu cho trang
    const [filters, setFilters] = useState<ProductFilter>({
        page: 1,
        limit: 20,
        sortBy: 'created_at',
        sortOrder: 'desc',
        minPrice: 0,
        maxPrice: 1000000,
    });

    const debouncedFilters = useDebounce(filters, 500);
    useEffect(() => {
        const fetchInitialData = async () => {
            setIsLoading(true);
            try {
                // Gọi cả hai API song song để tối ưu
                const [productResponse, categoryData] = await Promise.all([
                    getProducts(filters),
                    getCategories()
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
    useEffect(() => {
        if (isFirstRender.current) {
            return;
        }

        const fetchFilteredProducts = async () => {
            setIsLoading(true);
            try {
                const productResponse = await getProducts(debouncedFilters);
                setProducts(productResponse.data);
                setPagination(productResponse.meta);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu sản phẩm đã lọc:", error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchFilteredProducts();
    }, [debouncedFilters]);

    const maxPrice = useMemo(() => {
        if (products.length === 0) return 1000000;
        const max = Math.max(...products.map(p => parseFloat(p.price)));
        return Math.ceil(max / 100000) * 100000;
    }, [products]);

    const handleFilterChange = useCallback((newFilters: Partial<FilterState>) => {
        setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
    }, []);

    const handleSortChange = (sortBy: string, sortOrder: string) => {
        setFilters(prev => ({ 
            ...prev, 
            sortBy: sortBy as ProductSortKeys,
            sortOrder: sortOrder as 'asc' | 'desc', 
            page: 1 
        }));
    };
    
    const handleLimitChange = (limit: number) => {
        setFilters(prev => ({ ...prev, limit, page: 1 }));
    };

    const handlePageChange = (page: number) => {
        setFilters(prev => ({ ...prev, page }));
    };
    
    const breadcrumbItems = [ { label: 'Sản phẩm' }];

    if (isLoading && products.length === 0) {
        return <div className="text-center py-20">Đang tải sản phẩm...</div>;
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <FilterSidebar 
                        allCategories={categories} 
                        initialMaxPrice={maxPrice}
                        onFilterChange={handleFilterChange}
                    />
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
    );
}
