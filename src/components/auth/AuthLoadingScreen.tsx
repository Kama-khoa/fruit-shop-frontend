import React from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export const AuthLoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-green-400 text-5xl font-normal font-['Dharrochy'] mb-8">
          Plantea
        </div>
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600">Đang tải...</p>
      </div>
    </div>
  );
};