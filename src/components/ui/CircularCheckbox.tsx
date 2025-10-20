'use client';

import React from 'react';

interface CircularCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const CircularCheckbox: React.FC<CircularCheckboxProps> = ({ checked, onChange, label }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={handleClick}>
      {/* Vòng tròn bên ngoài */}
      <div 
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          checked ? 'border-green-600 bg-green-600' : 'border-gray-300'
        }`}
      >
        {/* Chấm tròn bên trong, chỉ hiển thị khi được chọn */}
        {checked && (
          <div className="w-2 h-2 bg-white rounded-full"></div>
        )}
      </div>
      <label className="block text-sm text-gray-900 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CircularCheckbox;