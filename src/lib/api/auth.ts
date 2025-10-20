import { apiClient } from './client';
import { API_ROUTES } from '../utils/routes';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '@/types/auth';

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
  console.log('Register Data:', registerData);
  
  const response = await apiClient.post<AuthResponse>(API_ROUTES.AUTH.REGISTER, registerData);
  return response.data;
};

export const logoutUser = async (): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(API_ROUTES.AUTH.LOGOUT);
  return response.data;
};