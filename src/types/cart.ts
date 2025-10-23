export interface AddToCartPayload {
  quantity: number;
  variantId: number;
}

export interface CartApiResponse {
    message: string;
    data: CartItem[];
}

/**
 * CẬP NHẬT: Định nghĩa cấu trúc cho một biến thể của sản phẩm
 * bên trong một CartItem.
 */
export interface CartItemVariant {
  id: string; // Hoặc number tùy vào backend
  name: string;
  price: number;
  image: string | null;
  sku: string;
  weight: number;
}

/**
 * CẬP NHẬT: Định nghĩa cấu trúc cho thông tin sản phẩm
 * bên trong một CartItem.
 */
export interface CartItemProduct {
    id: string; // Hoặc number
    name: string;
    slug: string;
}

/**
 * CẬP NHẬT: Đại diện cho một sản phẩm trong giỏ hàng.
 */
export interface CartItem {
  id: string; // Hoặc number
  quantity: number;
  variant: CartItemVariant;
  product: CartItemProduct;
}

export interface Cart {
  items: CartItem[];

  // Các thông tin tổng hợp thường được backend tính toán và trả về
  total_items: number;  // Tổng số lượng sản phẩm
  subtotal: number;     // Tạm tính (chưa bao gồm phí, giảm giá)
  total: number;        // Tổng tiền cuối cùng
}