'use client';

import { useContext } from 'react';
import { AuthContext } from '@/lib/contexts/AuthContext';

/**
 * Hook chính để truy cập trạng thái và các hàm của AuthContext.
 * Đây là hook bạn nên dùng trong hầu hết các trường hợp.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

/**
 * Hook dành riêng cho form đăng ký.
 * Nó quản lý trạng thái loading/error của riêng form đăng ký.
 */
export const useRegister = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useRegister must be used within an AuthProvider');
  }

  return {
    register: context.register,
    isLoading: context.isLoading,
    error: context.error,
    setError: context.setError,
  };
};