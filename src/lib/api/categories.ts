import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Category } from '@/types/category';

/**
 * Lấy danh sách tất cả các danh mục sản phẩm
 */
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get<Category[]>(API_ROUTES.CATEGORIES.LIST);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};