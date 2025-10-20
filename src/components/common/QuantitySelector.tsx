'use client';

import { PlusIcon, MinusIcon, TrashIcon } from '@/components/ui/Icons';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove?: () => void;
  disabled?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease, onRemove, disabled = false }) => {
  const isMinimum = quantity <= 1;

  return (
    <div className="flex items-center gap-1 p-0.5 bg-gray-100 rounded-full">
      <button 
        onClick={isMinimum ? onRemove : onDecrease} 
        disabled={disabled}
        className="w-7 h-7 flex items-center justify-center bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isMinimum && onRemove ? <TrashIcon className="w-4 h-4 text-gray-800" /> : <MinusIcon className="w-4 h-4 text-gray-800" />}
      </button>
      <span className="w-8 text-center text-sm font-medium text-gray-900">{quantity}</span>
      <button 
        onClick={onIncrease} 
        disabled={disabled}
        className="w-7 h-7 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PlusIcon className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default QuantitySelector;