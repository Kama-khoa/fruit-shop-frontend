import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';

export const cartApi = {
  // Get cart
  getCart: async () => {
    const response = await apiClient.get(API_ROUTES.CART.BASE);
    return response.data;
  },

  // Add to cart
  addToCart: async (productId: string, quantity: number) => {
    const response = await apiClient.post(API_ROUTES.CART.BASE, {
      productId,
      quantity,
    });
    return response.data;
  },

  // Update cart item
  updateCartItem: async (itemId: string, quantity: number) => {
    const response = await apiClient.put(API_ROUTES.CART.ITEM(itemId), {
      quantity,
    });
    return response.data;
  },

  // Remove from cart
  removeFromCart: async (itemId: string) => {
    const response = await apiClient.delete(API_ROUTES.CART.ITEM(itemId));
    return response.data;
  },

  // Clear cart
  clearCart: async () => {
    const response = await apiClient.post(API_ROUTES.CART.CLEAR);
    return response.data;
  },
};
