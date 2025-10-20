import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Product, Product, ProductFilter } from '@/types/product';
import { ApiResponse } from '@/types';
import { ProductListResponse } from '@/types/index';

export const getProducts = async (filters: ProductFilter): Promise<ProductListResponse<Product>> => {
  try {
    const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.LIST, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error('Không thể lấy danh sách sản phẩm:', error);
    return {
        data: [],
        meta: {
            total: 0,
            page: filters.page || 1,
            limit: filters.limit || 20,
            totalPages: 1,
        }
    };
  }
};

/**
 * Lấy một sản phẩm duy nhất bằng ID.
 * @param id - ID của sản phẩm.
 * @returns Một đối tượng sản phẩm hoặc null.
 */
export const getProductById = async (id: number): Promise<Product | null> => {
    try {
        const response = await apiClient.get<ApiResponse<Product>>(API_ROUTES.PRODUCTS.DETAIL(id));
        return response.data.data || null;
    } catch (error) {
        console.error(`Không thể lấy sản phẩm với ID ${id}:`, error);
        return null;
    }
}

/**
 * Lấy danh sách sản phẩm nổi bật bằng cách gọi đến endpoint FEATURED.
 */
export const getFeaturedProducts = async (): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.FEATURED);
        return response.data;
    } catch (error) {
        console.error('Không thể lấy sản phẩm nổi bật:', error);
        return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 1 } };
    }
};

/**
 * Lấy danh sách sản phẩm mới nhất bằng cách gọi đến endpoint NEWEST.
 */
export const getNewestProducts = async (): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.NEWEST);
        return response.data;
    } catch (error) {
        console.error('Không thể lấy sản phẩm mới:', error);
        return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 1 } };
    }
};

/**
 * Lấy danh sách sản phẩm bán chạy nhất (Bestseller).
 * Vì không có endpoint riêng, chúng ta sẽ sử dụng hàm getProducts chung với bộ lọc phù hợp.
 */
export const getBestsellerProducts = async (): Promise<ProductListResponse<Product>> => {
  return getProducts({ sortBy: 'rating', sortOrder: 'desc', limit: 10 });
};

/**
 * Tìm kiếm sản phẩm bằng cách gọi đến endpoint SEARCH.
 * @param query - Từ khóa tìm kiếm.
 */
export const searchProducts = async (query: string): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.SEARCH(query));
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi tìm kiếm sản phẩm với từ khóa "${query}":`, error);
        return { data: [], meta: { total: 0, page: 1, limit: 20, totalPages: 1 } };
    }
};