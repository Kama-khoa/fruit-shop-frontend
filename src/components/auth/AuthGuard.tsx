'use client';

import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: number;
  fallback?: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  requireAuth = true,
  requireRole,
  fallback = <div>Loading...</div>
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (requireAuth && !isAuthenticated) {
        router.push('/auth/login');
        return;
      }

      if (requireRole && user && user.role_id !== requireRole) {
        router.push('/');
        return;
      }
    }
  }, [isAuthenticated, isLoading, requireAuth, requireRole, user, router]);

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (requireAuth && !isAuthenticated) {
    return <>{fallback}</>;
  }

  if (requireRole && user && user.role_id !== requireRole) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};