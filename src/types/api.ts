export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Cấu trúc cho một phản hồi API bị lỗi.
 */
export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Siêu dữ liệu cho việc phân trang.
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}