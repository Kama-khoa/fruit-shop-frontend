/**
 * Định nghĩa cấu trúc cho một sản phẩm khi tính phí vận chuyển.
 */
export interface ShippingItem {
  variant_id: string;
  quantity: number;
  price: number;
  weight: number; // Trọng lượng của một đơn vị sản phẩm (gram)
}

/**
 * Định nghĩa cấu trúc cho payload gửi đi để tính phí vận chuyển.
 */
export interface ShippingFeePayload {
  to_district_id: string;
  to_ward_code: string;
  items: ShippingItem[];
}

export interface ShippingOption {
    fee: number;
    lead_time: number;
    lead_time_formatted: string;
    service_id: number;
    service_name: string;
}

/**
 * Định nghĩa cấu trúc cho phản hồi từ API tính phí vận chuyển.
 * (Bạn có thể điều chỉnh lại cho khớp với API backend của mình)
 */
export interface ShippingFeeResponse {
    data: ShippingOption[];
}