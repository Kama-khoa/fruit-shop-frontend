import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { User } from '@/types/index';
import { CustomerAddress } from '@/types/customers';
import { ApiResponse } from '@/types/api';
import { UpdateUserProfilePayload, UserProfile } from '@/types/user';

type AddressPayload = Omit<CustomerAddress, 'id' | 'customer_id' | 'created_at' | 'updated_at'>;
/**
 * Lấy thông tin hồ sơ chi tiết của người dùng đang đăng nhập.
 * @returns Đối tượng UserProfile.
 */
export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await apiClient.get<UserProfile>(API_ROUTES.USERS.PROFILE);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin hồ sơ người dùng:', error);
    throw error;
  }
};

/**
 * Cập nhật thông tin hồ sơ của người dùng đang đăng nhập.
 * @param payload - Dữ liệu cần cập nhật (name, phone, avatar).
 * @returns Đối tượng UserProfile đã được cập nhật.
 */
export const updateUserProfile = async (payload: UpdateUserProfilePayload): Promise<UserProfile> => {
  try {
    const response = await apiClient.patch<UserProfile>(API_ROUTES.USERS.PROFILE, payload);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật hồ sơ người dùng:', error);
    throw error;
  }
};

/**
 * READ: Lấy danh sách tất cả địa chỉ của một khách hàng.
 * @param customerId - ID của khách hàng.
 * @returns Một mảng các đối tượng CustomerAddress.
 */
export const getUserAddresses = async (): Promise<CustomerAddress[]> => {
    try {
        const response = await apiClient.get<CustomerAddress[]>(
            API_ROUTES.CUSTOMERS.ADDRESSES
        );
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi lấy danh sách địa chỉ cho khách hàng :`, error);
        throw error;
    }
};

/**
 * CREATE: Thêm một địa chỉ mới cho khách hàng.
 * @param customerId - ID của khách hàng.
 * @param addressData - Dữ liệu của địa chỉ mới.
 * @returns Đối tượng CustomerAddress vừa được tạo.
 */
export const addUserAddress = async ( addressData: AddressPayload): Promise<CustomerAddress> => {
    try {
        const response = await apiClient.post<CustomerAddress>(
            API_ROUTES.CUSTOMERS.ADDRESSES, 
            addressData
        );
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi thêm địa chỉ cho khách hàng`, error);
        throw error;
    }
};

/**
 * UPDATE: Cập nhật thông tin một địa chỉ đã có.
 * @param customerId - ID của khách hàng.
 * @param addressId - ID của địa chỉ cần cập nhật.
 * @param addressData - Dữ liệu cần cập nhật (có thể chỉ là một phần).
 * @returns Đối tượng CustomerAddress đã được cập nhật.
 */
export const updateUserAddress = async ( addressId: number | string, addressData: Partial<AddressPayload>): Promise<CustomerAddress> => {
    try {
        const response = await apiClient.patch<CustomerAddress>(
            API_ROUTES.CUSTOMERS.ADDRESS_DETAIL(addressId),
            addressData
        );
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi cập nhật địa chỉ ${addressId}:`, error);
        throw error;
    }
};

/**
 * DELETE: Xóa một địa chỉ khỏi danh sách của khách hàng.
 * @param customerId - ID của khách hàng.
 * @param addressId - ID của địa chỉ cần xóa.
 * @returns Một thông báo xác nhận từ API.
 */
export const deleteUserAddress = async ( addressId: number | string): Promise<{ message: string }> => {
    try {
        const response = await apiClient.delete(API_ROUTES.CUSTOMERS.ADDRESS_DETAIL(addressId));
        return response.data;
    } catch (error) {
        console.error(`Lỗi khi xóa địa chỉ ${addressId}:`, error);
        throw error;
    }
};