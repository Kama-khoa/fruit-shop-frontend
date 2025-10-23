import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Product, ProductDetail, ProductFilters, ProductListResponse } from '@/types/product';

export const getProducts = async (filters: ProductFilters): Promise<ProductListResponse<Product>> => {
  try {
    // API backend được kỳ vọng trả về cấu trúc: { data: Product[], meta: PaginationMeta }
  	const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.LIST, {
      params: filters, // Truyền toàn bộ đối tượng filters làm query params
    });
    return response.data;
  } catch (error) {
    console.error('Không thể lấy danh sách sản phẩm:', error);
    // Trả về một trạng thái rỗng mặc định để tránh crash app.
    return {
        data: [],
        pagination: {
            totalItems: 0,
            currentPage: filters.page || 1,
            totalPages: 1,
        }
    };
  }
};

/**
 * Lấy một sản phẩm duy nhất bằng ID (để hiển thị trong modal chi tiết).
 * @param id - ID của sản phẩm.
 * @returns Một đối tượng ProductDetail hoặc null.
 */
export const getProductById = async (id: number): Promise<ProductDetail | null> => {
    try {
        // API backend được kỳ vọng trả về cấu trúc: { success: boolean, data: ProductDetail }
        const response = await apiClient.get<ProductDetail>(API_ROUTES.PRODUCTS.DETAIL(id));
        return response.data || null;
    } catch (error) {
        console.error(`Không thể lấy sản phẩm với ID ${id}:`, error);
        return null;
    }
}

/**
 * Lấy danh sách sản phẩm nổi bật (cho trang chủ).
 * Gọi đến endpoint FEATURED đã định nghĩa.
 */
export const getFeaturedProducts = async (): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.FEATURED);
        return response.data;
    } catch (error) {
        console.error('Không thể lấy sản phẩm nổi bật:', error);
        return { data: [], pagination: { totalItems: 0, currentPage: 1, totalPages: 1 } };
    }
};

/**
 * Lấy danh sách sản phẩm mới nhất (cho trang chủ).
 * Gọi đến endpoint NEWEST đã định nghĩa.
 */
export const getNewestProducts = async (): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.NEWEST);
        return response.data;
    } catch (error) {
        console.error('Không thể lấy sản phẩm mới:', error);
        return { data: [], pagination: { totalItems: 0, currentPage: 1, totalPages: 1 } };
    }
};

/**
 * Lấy danh sách sản phẩm đã sắp xếp theo giá tăng dần.
 * Gọi đến endpoint SORT_PRICE đã định nghĩa.
 */
export const getProductsSortedByPrice = async (): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.SORT_PRICE);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy sản phẩm sắp xếp theo giá:', error);
        return { data: [], pagination: { totalItems: 0, currentPage: 1, totalPages: 1 } };
    }
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
        return { data: [], pagination: { totalItems: 0, currentPage: 1, totalPages: 1 } };
    }
};

export const getBestsellerProducts = async (query: string): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.BESTSELLER);
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi tìm kiếm sản phẩm với từ khóa "${query}":`, error);
        return { data: [], pagination: { totalItems: 0, currentPage: 1, totalPages: 1 } };
    }
};

/**
 * Lấy sản phẩm theo khoảng giá.
 * Gọi đến endpoint PRICE_RANGE đã định nghĩa.
 */
export const getProductsByPriceRange = async (min: number, max: number): Promise<ProductListResponse<Product>> => {
    try {
        const response = await apiClient.get<ProductListResponse<Product>>(API_ROUTES.PRODUCTS.PRICE_RANGE(min, max));
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi lấy sản phẩm theo giá từ ${min} đến ${max}:`, error);
        return { data: [], pagination: { totalItems: 0, currentPage: 1, totalPages: 1 } };
    }
};