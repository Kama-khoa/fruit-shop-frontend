import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';

export const ordersApi = {
  // Get all orders
  getOrders: async (page = 1, limit = 10) => {
    const response = await apiClient.get(API_ROUTES.ORDERS.BASE, {
      params: { page, limit },
    });
    return response.data;
  },

  // Get order by ID
  getOrderById: async (id: string) => {
    const response = await apiClient.get(API_ROUTES.ORDERS.DETAIL(id));
    return response.data;
  },

  // Create order
  createOrder: async (orderData: any) => {
    const response = await apiClient.post(API_ROUTES.ORDERS.BASE, orderData);
    return response.data;
  },

  // Cancel order
  cancelOrder: async (id: string) => {
    const response = await apiClient.post(API_ROUTES.ORDERS.CANCEL(id));
    return response.data;
  },
};