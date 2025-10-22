/**
 * Định nghĩa cấu trúc cho đối tượng Tỉnh/Thành phố.
 */
export interface Province {
  code: string;
  name: string;
  full_name: string;
}

/**
 * Định nghĩa cấu trúc cho đối tượng Quận/Huyện.
 */
export interface District {
  code: string;
  name: string;
  full_name: string;
  province_code?: string; // Thường có để liên kết ngược về Tỉnh/Thành
}

/**
 * Định nghĩa cấu trúc cho đối tượng Phường/Xã.
 */
export interface Ward {
  code: string;
  name: string;
  full_name: string;
  district_code?: string; // Thường có để liên kết ngược về Quận/Huyện
}