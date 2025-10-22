/**
 * Đại diện cho một khách hàng (bảng `customers`).
 * Có thể là khách vãng lai hoặc khách đã đăng ký.
 */
export interface Customer {
  id: number;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  province?: string;
  district?: string;
  ward?: string;
  total_spent: number;
  order_count: number;
  last_order_date?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Địa chỉ của khách hàng (bảng `customer_addresses`).
 */
export interface CustomerAddress {
  id: number;
  customer_id: number;
  name: string;
  phone: string;
  address: string;
  province_code: string;
  province_name: string;
  district_code: string;
  district_name: string;
  ward_code: string;
  ward_name: string;
  latitude?: number;
  longitude?: number;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}