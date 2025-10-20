import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { User, CustomerAddress, ApiResponse } from '@/types/index';

type AddressPayload = Omit<CustomerAddress, 'id' | 'customer_id' | 'created_at' | 'updated_at'>;
/**
 * Lấy thông tin hồ sơ của người dùng hiện tại.
 */
export const getUserProfile = async (): Promise<User> => {
  try {
    const response = await apiClient.get<ApiResponse<User>>(API_ROUTES.USERS.PROFILE);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin người dùng:', error);
    throw error;
  }
};

/**
 * Lấy danh sách địa chỉ đã lưu của một người dùng.
 * @param customerId - ID của người dùng.
 */
export const getUserAddresses = async (customerId: number | string): Promise<CustomerAddress[]> => {
    try {
        const response = await apiClient.get<ApiResponse<CustomerAddress[]>>(
            API_ROUTES.CUSTOMERS.ADDRESSES(customerId)
        );
        return response.data.data || [];
    } catch (error) {
        console.error(`Lỗi khi lấy địa chỉ cho người dùng ${customerId}:`, error);
        throw error;
    }
}

/**
 * Thêm một địa chỉ mới cho người dùng.
 * @param customerId - ID của người dùng.
 * @param addressData - Dữ liệu của địa chỉ mới.
 */
export const addUserAddress = async (customerId: number | string, addressData: AddressPayload): Promise<CustomerAddress> => {
    try {
        const response = await apiClient.post<ApiResponse<CustomerAddress>>(
            API_ROUTES.CUSTOMERS.ADDRESSES(customerId), 
            addressData
        );
        return response.data.data;
    } catch (error) {
        console.error(`Lỗi khi thêm địa chỉ cho người dùng ${customerId}:`, error);
        throw error;
    }
}

/**
 * Cập nhật một địa chỉ đã có.
 * @param customerId - ID của người dùng.
 * @param addressId - ID của địa chỉ cần cập nhật.
 * @param addressData - Dữ liệu cần cập nhật.
 */
export const updateUserAddress = async (customerId: number | string, addressId: number | string, addressData: Partial<AddressPayload>): Promise<CustomerAddress> => {
    try {
        const response = await apiClient.patch<ApiResponse<CustomerAddress>>(
            API_ROUTES.CUSTOMERS.ADDRESS_DETAIL(customerId, addressId),
            addressData
        );
        return response.data.data;
    } catch (error) {
        console.error(`Lỗi khi cập nhật địa chỉ ${addressId}:`, error);
        throw error;
    }
}

/**
 * Xóa một địa chỉ.
 * @param customerId - ID của người dùng.
 * @param addressId - ID của địa chỉ cần xóa.
 */
export const deleteUserAddress = async (customerId: number | string, addressId: number | string): Promise<void> => {
    try {
        await apiClient.delete(API_ROUTES.CUSTOMERS.ADDRESS_DETAIL(customerId, addressId));
    } catch (error) {
        console.error(`Lỗi khi xóa địa chỉ ${addressId}:`, error);
        throw error;
    }
}
