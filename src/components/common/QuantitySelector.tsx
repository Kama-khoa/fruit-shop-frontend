'use client';

import { PlusIcon, MinusIcon, TrashIcon, PlusIconWhite } from '@/components/ui/Icons';
import { useEffect, useState } from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove?: () => void;
  onSetQuantity: (newQuantity: number) => void;
  disabled?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease, onRemove, onSetQuantity, disabled = false }) => {
  const isMinimum = quantity <= 1;
  const [inputValue, setInputValue] = useState<string | number>(quantity);

  useEffect(() => {
    setInputValue(quantity);
  }, [quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const newQuantity = parseInt(inputValue as string, 10);
    // Validate the input. If it's not a valid number or less than 1, revert.
    if (!isNaN(newQuantity) && newQuantity > 0) {
      onSetQuantity(newQuantity);
    } else {
      // Revert to the original quantity if input is invalid
      setInputValue(quantity);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
      (e.target as HTMLInputElement).blur(); // Remove focus from input
    }
  }

  return (
    <div className="flex items-center gap-1 p-0.5 bg-gray-100 rounded-full">
      <button 
        onClick={isMinimum ? onRemove : onDecrease} 
        disabled={disabled}
        className="w-7 h-7 flex items-center justify-center bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isMinimum && onRemove ? <TrashIcon className="w-4 h-4 text-gray-800" /> : <MinusIcon className="w-4 h-4 text-gray-800" />}
      </button>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        className="w-8 text-center text-sm font-medium text-gray-900 bg-transparent focus:outline-none hide-number-spinners"
      />
      <button 
        onClick={onIncrease} 
        disabled={disabled}
        className="w-7 h-7 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PlusIconWhite className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default QuantitySelector;