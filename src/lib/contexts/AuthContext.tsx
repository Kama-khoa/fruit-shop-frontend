'use client';

import React, { 
  createContext, 
  useReducer, 
  useEffect, 
  useContext, 
  ReactNode 
} from 'react';

import { jwtDecode } from 'jwt-decode';
import { loginUser, logoutUser, registerUser } from '../api/auth';
import { AuthState, User, LoginCredentials, RegisterCredentials, AuthResponse } from '../../types/auth';
import { authReducer, initialState } from '@/store/auth/reducer';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  register: (credentials: RegisterCredentials) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  setError: (error: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- AUTH PROVIDER COMPONENT ---
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Sửa 2: Tái cấu trúc lại useEffect để giải mã token ở client
  useEffect(() => {
      const initializeAuth = () => {
      // Tìm token trong cả hai nơi lưu trữ
      const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
      // Tìm thông tin người dùng đã lưu
      const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

      if (token && storedUser) {
        try {
          const decodedToken: { exp: number } = jwtDecode(token);
          
          // Kiểm tra xem token đã hết hạn chưa
          // Date.now() trả về milliseconds, exp là seconds, nên cần * 1000
          if (decodedToken.exp * 1000 > Date.now()) {
            // Nếu token hợp lệ, khôi phục session
            const user: User = JSON.parse(storedUser);
            dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: true, user: user } });
          } else {
            // Nếu token hết hạn, xóa nó đi
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            sessionStorage.removeItem('access_token');
            sessionStorage.removeItem('user');
            dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
          }
        } catch (error) {
          // Nếu token không hợp lệ, xóa đi
          console.error("Token không hợp lệ:", error);
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          sessionStorage.removeItem('access_token');
          sessionStorage.removeItem('user');
          dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
        }
      } else {
        // Nếu không có token, khởi tạo trạng thái chưa đăng nhập
        dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
      }
    };
    initializeAuth();
  }, []);


  // --- AUTH FUNCTIONS ---
  const login = async (credentials: LoginCredentials, rememberMe: boolean = false): Promise<AuthResponse> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await loginUser(credentials);
      if (response.success && response.user) {
        const storage = rememberMe ? localStorage : sessionStorage;
        if (response.token) {
          storage.setItem('access_token', response.token);
        }
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.user });
      } else {
        throw new Error(response.message);
      }
      return response;
    } catch (error: any) {
      dispatch({ type: 'SET_ERROR', payload: error.message || 'Lỗi đăng nhập' });
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await registerUser(credentials);
      if (!response.success) {
        throw new Error(response.message);
      }
      dispatch({ type: 'SET_LOADING', payload: false });
      return response;
    } catch (error: any) {
      dispatch({ type: 'SET_ERROR', payload: error.message || 'Lỗi đăng ký' });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('API Logout error:', error);
    } finally {
      // Dù API có lỗi hay không, vẫn xóa state ở client
      localStorage.removeItem('access_token');
      sessionStorage.removeItem('access_token');
      dispatch({ type: 'LOGOUT_SUCCESS' });
    }
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };
  
  const value = { 
    ...state, 
    login, 
    register,
    logout, 
    setError, 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

