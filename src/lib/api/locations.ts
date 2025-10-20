import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { Province, District, Ward } from '@/types/locations';

/**
 * Lấy danh sách tất cả Tỉnh/Thành phố.
 */
export const getProvinces = async (): Promise<Province[]> => {
  try {
    const response = await apiClient.get<Province[]>(API_ROUTES.LOCATIONS.PROVINCES);
    return response.data || [];
  } catch (error) {
    console.error('Lỗi khi lấy danh sách tỉnh/thành phố:', error);
    return [];
  }
};

/**
 * Lấy danh sách Quận/Huyện dựa vào mã Tỉnh/Thành phố.
 * @param provinceId - Mã của Tỉnh/Thành phố.
 */
export const getDistricts = async (provinceId: string): Promise<District[]> => {
  if (!provinceId) return [];
  try {
    const response = await apiClient.get<District[]>(API_ROUTES.LOCATIONS.DISTRICTS(provinceId));
    return response.data || [];
  } catch (error) {
    console.error(`Lỗi khi lấy danh sách quận/huyện cho tỉnh ${provinceId}:`, error);
    return [];
  }
};

/**
 * Lấy danh sách Phường/Xã dựa vào mã Quận/Huyện.
 * @param districtId - Mã của Quận/Huyện.
 */
export const getWards = async (districtId: string): Promise<Ward[]> => {
  if (!districtId) return [];
  try {
    const response = await apiClient.get<Ward[]>(API_ROUTES.LOCATIONS.WARDS(districtId));
    return response.data || [];
  } catch (error) {
    console.error(`Lỗi khi lấy danh sách phường/xã cho quận ${districtId}:`, error);
    return [];
  }
};
