'use client';

import { useState, useContext } from 'react';
import { loginUser, registerUser } from '@/lib/api/auth'; // Sửa ở đây: import các hàm cụ thể
import { LoginCredentials, RegisterCredentials } from '@/types/auth';
import { AuthContext } from '@/lib/contexts/AuthContext';
import toast from 'react-hot-toast';

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