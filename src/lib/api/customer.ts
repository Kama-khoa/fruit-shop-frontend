import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { CustomerAddress } from '@/types/customers';
import { ApiResponse } from '@/types/api';

/**
 * Định nghĩa kiểu dữ liệu cho payload khi tạo hoặc cập nhật một địa chỉ.
 * Loại bỏ các trường do backend quản lý như id, customer_id, v.v.
 */
export type AddressPayload = Omit<CustomerAddress, 'id' | 'customer_id' | 'created_at' | 'updated_at'>;

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
        return response.data || [];
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
