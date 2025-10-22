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
import { AuthState, User, LoginCredentials, RegisterCredentials, AuthResponse } from '@/types/auth';
import { authReducer, initialState } from '@/store/auth/reducer';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials, rememberMe?: boolean) => Promise<AuthResponse>;
  register: (credentials: RegisterCredentials) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  setError: (error: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- AUTH PROVIDER COMPONENT ---
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
      const initializeAuth = () => {
      // Find token and user data in storage
      const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
      const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

      if (token && storedUser) {
        try {
          const decodedToken: { exp: number } = jwtDecode(token);
          
          // Check if the token is expired
          if (decodedToken.exp * 1000 > Date.now()) {
            // If token is valid, restore the session from stored user data
            const user: User = JSON.parse(storedUser);
            dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: true, user: user } });
          } else {
            // If token is expired, clear it
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            sessionStorage.removeItem('access_token');
            sessionStorage.removeItem('user');
            dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
          }
        } catch (error) {
          // If token is invalid, clear it
          console.error("Invalid token:", error);
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          sessionStorage.removeItem('access_token');
          sessionStorage.removeItem('user');
          dispatch({ type: 'INITIALIZE', payload: { isAuthenticated: false, user: null } });
        }
      } else {
        // If no token, initialize as logged out
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
      if (response.success && response.user && response.token) {
        // Save both token and user object to the chosen storage
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('access_token', response.token);
        storage.setItem('user', JSON.stringify(response.user)); // Save user object as a JSON string
        
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
      // Clear user data and token from both storages on logout
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('user');
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
      <>{children}</>
    </AuthContext.Provider>
  );
};