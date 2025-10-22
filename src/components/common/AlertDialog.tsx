'use client';

import React from 'react';

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: React.ReactNode; // Cho phép truyền JSX vào message
  buttonText?: string;
  onButtonClick?: () => void; // Hàm tùy chọn cho nút
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText = 'Đã hiểu',
  onButtonClick,
}) => {
  if (!isOpen) return null;

  // Hàm xử lý khi nhấn nút, sẽ gọi hàm tùy chọn nếu có
  const handleAction = () => {
    if (onButtonClick) {
      onButtonClick();
    }
    onClose(); // Luôn đóng dialog sau khi nhấn nút
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Cho phép đóng khi click ra ngoài
    >
      <div 
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center"
        onClick={(e) => e.stopPropagation()} // Ngăn không cho đóng khi click vào dialog
      >
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <div className="text-sm text-gray-600 my-4">{message}</div>
        <div className="mt-6">
          <button
            onClick={handleAction}
            className="w-full py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
