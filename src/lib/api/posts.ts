import { Post } from '@/types/posts';
import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    // API trả về một mảng OrderListSummary
    const response = await apiClient.get<Post[]>(API_ROUTES.POSTS.LIST);
    return response.data || [];
  } catch (error) {
    console.error('Lỗi khi lấy danh sách đơn hàng:', error);
    return [];
  }
};