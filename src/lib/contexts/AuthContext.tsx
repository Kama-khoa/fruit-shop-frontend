'use client';

import React, { 
  createContext, 
  useReducer, 
  useEffect, 
  useContext, 
  ReactNode 
} from 'react';

import { getCurrentUser, loginUser, logoutUser, registerUser } from '../api/auth';
import { AuthState, User, LoginCredentials, RegisterCredentials, AuthResponse } from '../../types/auth';
import { authReducer, initialState } from '@/store/auth/reducer';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  register: (credentials: RegisterCredentials) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  setError: (error: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- AUTH PROVIDER COMPONENT ---
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Hàm này chạy một lần khi provider được mount để kiểm tra session hiện tại
    const initializeAuth = async () => {
      try {
        // Gọi API để lấy thông tin người dùng dựa trên token trong cookie
        const response = await getCurrentUser();
        if (response.success && response.user) {
          dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: true, user: response.user } });
        } else {
          dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
        }
      } catch (error) {
        dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
      }
    };
    initializeAuth();
  }, []);

  // --- AUTH FUNCTIONS ---
  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await loginUser(credentials);
      if (response.success && response.user) {
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
      dispatch({ type: 'LOGOUT_SUCCESS' });
    }
  };

  const refreshUser = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await getCurrentUser();
      if (response.success && response.user) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.user });
      } else {
        await logout();
      }
    } catch (error) {
      await logout();
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
    refreshUser,
    setError, 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

