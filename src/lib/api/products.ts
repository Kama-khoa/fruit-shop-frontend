import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Product, Product_Mock } from '@/types/product';
import { ApiResponse } from '@/types';

interface ProductFilters {
  page?: number;
  limit?: number;
  isFeatured?: boolean;
  sortBy?: 'created_at' | 'price' | 'rating' | 'name';
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  categoryId?: number;
}

/**
 * Hàm linh hoạt để lấy sản phẩm với các bộ lọc phức tạp hoặc không được định nghĩa sẵn.
 * @param filters - Đối tượng chứa các tham số truy vấn.
 * @returns Mảng các sản phẩm.
 */
export const getProducts = async (filters: ProductFilters = {}): Promise<Product_Mock[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Product_Mock[]>>(API_ROUTES.PRODUCTS.LIST, {
      params: filters,
    });
    return response.data.data || [];
  } catch (error) {
    console.error('Không thể lấy danh sách sản phẩm:', error);
    return [];
  }
};

/**
 * Lấy một sản phẩm duy nhất bằng ID.
 * Sử dụng route DETAIL mới.
 * @param id - ID của sản phẩm.
 * @returns Một đối tượng sản phẩm hoặc null.
 */
export const getProductById = async (id: number): Promise<Product_Mock | null> => {
    try {
        const response = await apiClient.get<ApiResponse<Product_Mock>>(API_ROUTES.PRODUCTS.DETAIL(id));
        return response.data.data || null;
    } catch (error) {
        console.error(`Không thể lấy sản phẩm với ID ${id}:`, error);
        return null;
    }
}

/**
 * Lấy danh sách sản phẩm nổi bật.
 * Sử dụng route FEATURED mới.
 */
export const getFeaturedProducts = async (): Promise<Product_Mock[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Product_Mock[]>>(API_ROUTES.PRODUCTS.FEATURED);
    return response.data.data || [];
  } catch (error) {
    console.error('Không thể lấy sản phẩm nổi bật:', error);
    return [];
  }
};

/**
 * Lấy danh sách sản phẩm mới nhất.
 * Sử dụng route NEWEST mới.
 */
export const getNewArrivalProducts = async (): Promise<Product_Mock[]> => {
    try {
        const response = await apiClient.get<ApiResponse<Product_Mock[]>>(API_ROUTES.PRODUCTS.NEWEST);
        return response.data.data || [];
    } catch (error) {
        console.error('Không thể lấy sản phẩm mới:', error);
        return [];
    }
};

/**
 * Lấy danh sách sản phẩm bán chạy nhất (Bestseller).
 * Giả định: Bestseller là những sản phẩm có rating cao nhất.
 * Route này không được định nghĩa sẵn, vì vậy chúng ta dùng hàm getProducts chung.
 */
export const getBestsellerProducts = async (): Promise<Product_Mock[]> => {
  return getProducts({ sortBy: 'rating', sortOrder: 'desc', limit: 10 });
};

/**
 * Tìm kiếm sản phẩm dựa trên một chuỗi truy vấn.
 * Sử dụng route SEARCH mới.
 * @param query - Từ khóa tìm kiếm.
 */
export const searchProducts = async (query: string): Promise<Product_Mock[]> => {
    try {
        const response = await apiClient.get<ApiResponse<Product_Mock[]>>(API_ROUTES.PRODUCTS.SEARCH(query));
        return response.data.data || [];
    } catch (error) {
        console.error(`Lỗi khi tìm kiếm sản phẩm với từ khóa "${query}":`, error);
        return [];
    }
};