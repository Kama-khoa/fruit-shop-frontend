// =====================================================================
// #region Base & Utility Types
// =====================================================================

import { PaginationMeta } from "./api";



// #endregion

// =====================================================================
// #region Auth & User Types
// =====================================================================

/**
 * Đại diện cho một người dùng đã đăng nhập (bảng `users`).
 */
export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role_id?: number;
  avatar?: string;
  status: number;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Vai trò của người dùng (bảng `roles`).
 */
export interface Role {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Quyền hạn (bảng `permissions`).
 */
export interface Permission {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}



/**
 * Đơn vị tính (bảng `units`).
 */
export interface Unit {
  id: number;
  name: string;
  symbol: string;
  created_at: string;
  updated_at: string;
}

/**
 * Đánh giá sản phẩm (bảng `product_reviews`).
 */
export interface ProductReview {
  id: number;
  product_id: number;
  customer_id: number;
  order_id?: number;
  rating: number; // 1 to 5
  title?: string;
  content?: string;
  images?: string[];
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface ProductListResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

// #endregion

/**
 * Thông tin thanh toán (bảng `payments`).
 */
export interface Payment {
  id: number;
  order_id: number;
  payment_method?: string;
  amount: number;
  transaction_id?: string;
  gateway?: string;
  status?: number;
  payment_date?: string;
  notes?: string;
}

// #endregion

// =====================================================================
// #region Promotions & Marketing Types
// =====================================================================

/**
 * Mã giảm giá (bảng `coupons`).
 */
export interface Coupon {
  id: number;
  name: string;
  description?: string;
  type: string;
  value: number;
  minimum_amount: number;
  maximum_amount?: number;
  usage_limit?: number;
  used_count: number;
  usage_limit_per_customer?: number;
  start_date?: string;
  end_date?: string;
  applicable_categories?: string; // jsonb
  applicable_products?: string; // jsonb
  is_active: boolean;
  created_by?: number;
  created_at: string;
  updated_at: string;
}

/**
 * Banner quảng cáo (bảng `banners`).
 */
export interface Banner {
  id: number;
  title: string;
  image: string;
  link?: string;
  position: string;
  sort_order: number;
  start_date?: string;
  end_date?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// #endregion

// =====================================================================
// #region Content & Support Types
// =====================================================================

/**
 * Bài viết blog (bảng `posts`).
 */


/**
 * Liên hệ từ người dùng (bảng `contacts`).
 */
export interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  message: string;
  status: number;
  response?: string;
  responded_by?: number;
  responded_at?: string;
  created_at: string;
}

/**
 * Câu hỏi thường gặp (bảng `faqs`).
 */
export interface Faq {
  id: number;
  question: string;
  answer: string;
  category?: string;
  sort_order: number;
  is_active: boolean;
  created_by?: number;
  created_at: string;
  updated_at: string;
}

// #endregion
