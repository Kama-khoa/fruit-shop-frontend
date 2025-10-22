export interface User {
  id: string;
  name: string;
  email: string;
  user_type: string;
  role_id: number;
  branch_id: string;
  customer_id: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone?: string;
}

export interface ResetPasswordCredentials {
  token: string;
  password: string;
}

export interface UserSession {
    id: string;
    email: string;
    role_id: number;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}