'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SimplePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const SimplePagination: React.FC<SimplePaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null; // Không hiển thị phân trang nếu chỉ có 1 trang
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-3 bg-white rounded-full border border-gray-200 text-gray-900 disabled:text-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Trang trước"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <span className="text-lg font-semibold text-gray-900">
        {currentPage}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-3 bg-white rounded-full border border-gray-200 text-gray-900 disabled:text-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Trang sau"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SimplePagination;