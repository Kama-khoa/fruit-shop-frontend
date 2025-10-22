import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Coupon } from '@/types/index';

/**
 * Lấy danh sách các mã khuyến mãi đang hoạt động.
 */
export const getActiveCoupons = async (): Promise<Coupon[]> => {
  try {
    const response = await apiClient.get<Coupon[]>(API_ROUTES.PROMOTIONS.ACTIVE);
    return response.data || [];
  } catch (error) {
    console.error('Lỗi khi lấy mã khuyến mãi:', error);
    return [];
  }
};