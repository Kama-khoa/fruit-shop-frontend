import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Coupon } from '@/types/index';
import { ApiResponse } from '@/types/api';
import { AddToCartPayload, Cart, CartApiResponse, CartItem } from '@/types/cart';

/**
 * READ: Lấy thông tin giỏ hàng hiện tại của người dùng.
 * @returns Toàn bộ đối tượng giỏ hàng.
 */
export const getCart = async (): Promise<Cart> => {
  try {
    const response = await apiClient.get<CartItem[]>(API_ROUTES.CART.BASE);
    const items = response.data || [];
    const subtotal = items.reduce((total, item) => {
        return total + ((item.variant.price) * item.quantity);
    }, 0);
    
    const total_items = items.reduce((total, item) => total + item.quantity, 0);

    // Trả về một đối tượng Cart hoàn chỉnh
    return {
        items: items,
        total_items: total_items,
        subtotal: subtotal,
        total: subtotal, // Giả sử chưa có phí vận chuyển hoặc giảm giá ở đây
    };
  } catch (error) {
    console.error('Lỗi khi lấy thông tin giỏ hàng:', error);
    // Trả về giỏ hàng trống nếu có lỗi
    return { items: [], total_items: 0, subtotal: 0, total: 0 };
  }
};

/**
 * CREATE: Thêm một sản phẩm mới vào giỏ hàng.
 * @param payload - Dữ liệu gồm productId, quantity, và variantId (tùy chọn).
 * @returns Chi tiết sản phẩm vừa được thêm vào giỏ hàng.
 */
export const addToCart = async (payload: AddToCartPayload): Promise<CartItem> => {
  try {
    const response = await apiClient.post<CartItem>(API_ROUTES.CART.BASE, payload);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
    throw error;
  }
};

/**
 * UPDATE: Cập nhật số lượng của một sản phẩm trong giỏ hàng.
 * @param itemId - ID của sản phẩm trong giỏ hàng (cart item id).
 * @param quantity - Số lượng mới.
 * @returns Chi tiết sản phẩm vừa được cập nhật.
 */
export const updateCartItemQuantity = async (itemId: number, quantity: number): Promise<CartItem> => {
  try {
    const response = await apiClient.patch<CartItem>(API_ROUTES.CART.ITEM(itemId.toString()), { quantity });
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi cập nhật số lượng cho sản phẩm ${itemId}:`, error);
    throw error;
  }
};

/**
 * DELETE: Xóa một sản phẩm cụ thể khỏi giỏ hàng.
 * @param itemId - ID của sản phẩm trong giỏ hàng (cart item id).
 * @returns Một thông báo xác nhận.
 */
export const removeCartItem = async (itemId: number): Promise<{ message: string }> => {
  try {
    const response = await apiClient.delete(API_ROUTES.CART.ITEM(itemId.toString()));
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi xóa sản phẩm ${itemId} khỏi giỏ hàng:`, error);
    throw error;
  }
};

/**
 * DELETE: Xóa toàn bộ sản phẩm khỏi giỏ hàng.
 * @returns Một thông báo xác nhận.
 */
export const clearCart = async (): Promise<{ message: string }> => {
    try {
        const response = await apiClient.delete(API_ROUTES.CART.CLEAR);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi xóa toàn bộ giỏ hàng:', error);
        throw error;
    }
};

/**
 * READ: Lấy thông tin giảm giá.
 * @returns Toàn bộ đối tượng giảm giá.
 */
export const getAllCoupons = async (): Promise<Coupon[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Coupon[]>>(API_ROUTES.COUPONS.LIST);
    return response.data.data || [];
  } catch (error) {
    console.error('Lỗi khi lấy thông tin giảm giá:', error);
    throw error;
  }
};