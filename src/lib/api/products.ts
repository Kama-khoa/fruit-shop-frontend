import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';

export const productsApi = {
  // Get all products with filters
  getProducts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    sort?: string;
    order?: 'asc' | 'desc';
    search?: string;
  }) => {
    const response = await apiClient.get(API_ROUTES.PRODUCTS.LIST, { params });
    return response.data;
  },

  // Get product by ID
  getProductById: async (id: string) => {
    const response = await apiClient.get(API_ROUTES.PRODUCTS.DETAIL(id));
    return response.data;
  },

  // Get featured products
  getFeaturedProducts: async () => {
    const response = await apiClient.get(API_ROUTES.PRODUCTS.FEATURED);
    return response.data;
  },

  // Search products
  searchProducts: async (query: string) => {
    const response = await apiClient.get(API_ROUTES.PRODUCTS.SEARCH, {
      params: { q: query },
    });
    return response.data;
  },
};
