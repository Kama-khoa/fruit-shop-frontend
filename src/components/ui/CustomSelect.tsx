'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from './Icons';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, placeholder, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  // State mới để lưu trữ từ khóa tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm(''); // Xóa tìm kiếm khi đóng
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm(''); // Xóa tìm kiếm sau khi chọn
  };
  
  // Lọc danh sách lựa chọn dựa trên từ khóa tìm kiếm
  const filteredOptions = searchTerm
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full h-12 px-4 bg-neutral-50 rounded-lg text-base flex justify-between items-center text-left cursor-pointer transition duration-200 ease-in-out ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'focus-within:ring-2 focus-within:ring-green-300 focus-within:border-green-400 border border-transparent'}`}
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-neutral-400'}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDownIcon className={`w-2.5 text-gray-900 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 flex flex-col">
          {/* Ô tìm kiếm */}
          <div className="p-2 border-b border-gray-100">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 py-1 text-sm border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
          {/* Danh sách lựa chọn */}
          <div className="max-h-36 overflow-y-auto scrollbar-hide">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                  <div
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 text-sm text-gray-800 hover:bg-green-50 cursor-pointer"
                  >
                  {option.label}
                  </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">Không tìm thấy kết quả</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

