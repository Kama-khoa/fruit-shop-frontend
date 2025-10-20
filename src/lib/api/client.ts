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
apiClient.interceptors.request.use(
  (config) => {
    // Chỉ chạy ở phía client
    if (typeof window !== 'undefined') {
      // Lấy token đã được lưu từ localStorage
      const token = localStorage.getItem('access_token');
      
      // Nếu có token, gắn nó vào header Authorization
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// --- Response Interceptor ---
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Xử lý các lỗi chung, ví dụ như token hết hạn (401)
    if (error.response?.status === 401) {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            // Có thể chuyển hướng người dùng về trang đăng nhập
            // window.location.href = '/auth/login';
        }
    }
    return Promise.reject(error);
  }
);
