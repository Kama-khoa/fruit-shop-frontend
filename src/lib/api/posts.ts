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

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const response = await apiClient.get<Post>(API_ROUTES.POSTS.DETAIL(slug));
    return response.data || null;
    } catch (error) {
    console.error(`Lỗi khi lấy chi tiết bài viết với slug ${slug}:`, error);
    return null;
    }
};