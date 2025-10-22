import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { ShippingFeePayload, ShippingFeeResponse, ShippingOption } from '@/types/shipping';

/**
 * Gửi yêu cầu đến backend để tính toán phí vận chuyển.
 * @param payload - Dữ liệu bao gồm thông tin địa chỉ và các sản phẩm trong giỏ hàng.
 * @returns Thông tin về phí vận chuyển và các chi tiết liên quan.
 */
export const calculateShippingFee = async (payload: ShippingFeePayload): Promise<ShippingOption[]> => {
  try {
    console.log(payload);
    const response = await apiClient.post<ShippingOption[]>(
      API_ROUTES.CUSTOMERS.SHIPPING_FEE,
      payload
    );
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tính toán phí vận chuyển:', error);
    throw error;
  }
};