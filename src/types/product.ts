import { PaginationMeta } from "./api";

/**
 * Định nghĩa cấu trúc cho một biến thể của sản phẩm.
 */
export interface ProductVariant {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock_quantity: number;
  weight: number | null;
  image: string | null;
}

export interface ProductDetail extends Omit<Product, 'id'> {
    id: string; // ID trong chi tiết là number
    sku: string;
    description: string;
    short_description: string;
    category_id: string;
    unit_id: string;
    unit_name: string;
    origin: string;
    variants: ProductVariant[];
}

/**
 * GỘP VÀ CẬP NHẬT: Interface chính cho đối tượng Sản phẩm.
 * Phản ánh chính xác cấu trúc dữ liệu trả về từ API.
 */
export interface Product {
  id: string; // ID có thể là string hoặc number, dựa trên JSON thì là string
  name: string;
  slug: string;
  sku?: string;
  category_id?: string;
  unit_id?: string;
  description?: string | null;
  images: {
    gallery: string[] | null;
    thumbnail: string | null;
  };
  price: string;
  stock_quantity: number;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
  search_vector?: string | null; // Có thể định nghĩa chi tiết hơn nếu cần
  short_description?: string | null;
  specifications?: string | null; // Có thể định nghĩa chi tiết hơn nếu cần
  compare_price?: string | null;
  cost_price?: string | null;
  weight?: string | null;
  dimensions?: string | null;
  min_stock?: number;
  track_inventory?: boolean;
  is_fresh?: boolean;
  shelf_life_days?: number | null;
  storage_conditions?: string | null;
  origin?: string | null;
  harvest_season?: string | null;
  organic_certified?: boolean;
  is_featured?: boolean;
  seo_title?: string | null;
  seo_description?: string | null;
  created_by?: string | null;
  deleted_at?: string | null;
  category_name?: string;
  unit_name?: string;
  variants: ProductVariant[] | null; 
  rating?: number; 
  review_count?: number;
}

// Giữ nguyên các type liên quan
export interface ProductFilters {
  search?: string;
  page?: number;
  limit?: number;
  categoryId: number | null;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  sortBy?: 'price' | 'created_at';
  sortOrder?: 'asc' | 'desc';
}

// Giữ nguyên cấu trúc generic
export interface ProductListResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}