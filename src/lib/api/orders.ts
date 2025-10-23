import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { 
  Order, 
  OrderListSummary, 
  CreateOrderPayload, 
  CreateOrderResponse 
} from '@/types/order';

/**
 * CREATE: Tạo một đơn hàng mới.
 * @param payload - Dữ liệu cần thiết để tạo đơn hàng.
 * @returns Thông tin đơn hàng đã được tạo.
 */
export const createOrder = async (payload: CreateOrderPayload): Promise<CreateOrderResponse> => {
  try {
    const response = await apiClient.post<CreateOrderResponse>(
      API_ROUTES.ORDERS.CREATE,
      payload
    );
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tạo đơn hàng:', error);
    throw error;
  }
};

/**
 * READ (List): Lấy danh sách các đơn hàng của người dùng hiện tại.
 * @returns Một mảng các đơn hàng tóm tắt.
 */
export const getMyOrders = async (): Promise<OrderListSummary[]> => {
  try {
    // API trả về một mảng OrderListSummary
    const response = await apiClient.get<OrderListSummary[]>(API_ROUTES.ORDERS.BASE);
    console.log('Fetched orders:', response.data);
    return response.data || [];
  } catch (error) {
    console.error('Lỗi khi lấy danh sách đơn hàng:', error);
    return [];
  }
};

/**
 * READ (Detail): Lấy thông tin chi tiết của một đơn hàng.
 * @param id - ID của đơn hàng.
 * @returns Một đối tượng Order chi tiết hoặc null nếu có lỗi.
 */
export const getMyOrderDetail = async (id: string): Promise<Order | null> => {
  try {
    // API trả về một đối tượng Order chi tiết
    const response = await apiClient.get<Order>(API_ROUTES.ORDERS.DETAIL(id));
    return response.data || null;
  } catch (error) {
    console.error(`Lỗi khi lấy chi tiết đơn hàng ${id}:`, error);
    return null;
  }
};