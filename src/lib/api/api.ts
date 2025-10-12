import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';

// API Client class để quản lý các request
class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Thêm token vào header nếu có
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('auth_token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        const { response } = error;
        
        if (response) {
          switch (response.status) {
            case 401:
              // Token hết hạn, redirect về login
              if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_token');
                window.location.href = '/login';
              }
              toast.error('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.');
              break;
            case 403:
              toast.error('Bạn không có quyền thực hiện thao tác này.');
              break;
            case 404:
              toast.error('Không tìm thấy dữ liệu yêu cầu.');
              break;
            case 500:
              toast.error('Lỗi server. Vui lòng thử lại sau.');
              break;
            default:
              toast.error(response.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
          }
        } else {
          toast.error('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.');
        }
        
        return Promise.reject(error);
      }
    );
  }

  // HTTP Methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

// Khởi tạo các API clients cho từng microservice
export const mainApi = new ApiClient(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api');
export const userApi = new ApiClient(process.env.NEXT_PUBLIC_USER_SERVICE_URL || 'http://localhost:8001/api');
export const productApi = new ApiClient(process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL || 'http://localhost:8002/api');
export const orderApi = new ApiClient(process.env.NEXT_PUBLIC_ORDER_SERVICE_URL || 'http://localhost:8003/api');
export const paymentApi = new ApiClient(process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL || 'http://localhost:8004/api');

// Export default API client
export default mainApi;