'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { AuthLoadingScreen } from './AuthLoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: number;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/auth/login');
        return;
      }

      if (requiredRole && user && user.role_id !== requiredRole) {
        router.push('/');
        return;
      }
    }
  }, [isAuthenticated, isLoading, requiredRole, user, router]);

  if (isLoading) {
    return <AuthLoadingScreen />;
  }

  if (!isAuthenticated) {
    return <AuthLoadingScreen />;
  }

  if (requiredRole && user && user.role_id !== requiredRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Không có quyền truy cập
          </h1>
          <p className="text-gray-600">
            Bạn không có quyền truy cập vào trang này.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};