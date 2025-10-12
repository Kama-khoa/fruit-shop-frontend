import axios, { AxiosError, AxiosInstance } from 'axios';

// Đọc Base URL từ biến môi trường phía client
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

// Tạo một instance của Axios
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Request Interceptor ---
// Interceptor này sẽ chạy TRƯỚC MỖI request được gửi đi.
apiClient.interceptors.request.use(
  (config) => {
    // Chỉ thực thi logic này ở phía client (trình duyệt) nơi có localStorage/sessionStorage
    if (typeof window !== 'undefined') {
      // Ưu tiên lấy token được lưu vĩnh viễn, sau đó mới đến token của phiên
      const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
      
      // Nếu có token, đính kèm nó vào header Authorization.
      // Các request công khai (public) sẽ không có token và vẫn hoạt động bình thường.
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi nếu có trong quá trình thiết lập request
    return Promise.reject(error);
  }
);

// --- Response Interceptor ---
// Interceptor này sẽ chạy SAU KHI nhận được phản hồi từ server.
apiClient.interceptors.response.use(
  // Nếu response thành công (status 2xx), chỉ cần trả về response.
  (response) => response,
  // Nếu response thất bại, chúng ta có thể xử lý lỗi một cách tập trung.
  async (error: AxiosError) => {
    // Xử lý lỗi 401 (Unauthorized) - thường là do token hết hạn hoặc không hợp lệ
    if (error.response?.status === 401) {
        // Xóa token cũ ở cả hai nơi lưu trữ để dọn dẹp.
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            sessionStorage.removeItem('access_token');
            
            // Thông báo cho người dùng và có thể chuyển hướng về trang đăng nhập
            console.error("Phiên đăng nhập đã hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại.");
            // Để tránh chuyển hướng đột ngột, bạn có thể quản lý việc này qua AuthContext
            // window.location.href = '/auth/login?sessionExpired=true';
        }
    }
    
    // Luôn trả về Promise.reject để các lệnh gọi .catch() ở component vẫn hoạt động.
    return Promise.reject(error);
  }
);
