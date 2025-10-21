'use client';

import React from 'react';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Xóa',
  cancelText = 'Hủy',
  isLoading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 my-4">{message}</p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 py-2.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition disabled:bg-red-400"
          >
            {isLoading ? 'Đang xử lý...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;