import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { LoginCredentials, RegisterCredentials, AuthResponse, ResetPasswordCredentials } from '@/types/auth';

export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const { email, password } = credentials;
  const loginData = { email, password };

  const response = await apiClient.post<AuthResponse>(API_ROUTES.AUTH.LOGIN, loginData);
  if (response.data && response.data.token) {
    localStorage.setItem('access_token', response.data.token);
  }
  return response.data;
};

export const registerUser = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  const { name, email, password } = credentials;
  const registerData = { name, email, password };
  
  const response = await apiClient.post<AuthResponse>(API_ROUTES.AUTH.REGISTER, registerData);
  return response.data;
};

export const logoutUser = async (): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(API_ROUTES.AUTH.LOGOUT);
  return response.data;
};

export const forgotPassword = async (email: string): Promise<{ message: string }> => {
    try {
        const response = await apiClient.post(API_ROUTES.AUTH.FORGOT_PASSWORD, { email });
        return response.data;
    } catch (error) {
        console.error('Lỗi khi gửi yêu cầu quên mật khẩu:', error);
        throw error;
    }
};

/**
 * Gửi mật khẩu mới và token để đặt lại mật khẩu.
 * @param credentials - Gồm token và mật khẩu mới.
 */
export const resetPassword = async (credentials: ResetPasswordCredentials): Promise<{ message: string }> => {
    try {
        const response = await apiClient.post(API_ROUTES.AUTH.RESET_PASSWORD, credentials);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi đặt lại mật khẩu:', error);
        throw error;
    }
};