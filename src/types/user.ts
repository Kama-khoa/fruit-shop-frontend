export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  user_type: string;
  customer_id: string;
  total_spent: string;
  order_count: number;
  last_order_date: string | null;
}

/**
 * Định nghĩa các trường có thể được cập nhật trên hồ sơ người dùng.
 */
export interface UpdateUserProfilePayload {
  name?: string;
  phone?: string | null;
  avatar?: string | null;
}