import React from 'react';
import { StarIcon } from '@/components/ui/Icons';

interface ProductRatingProps {
  rating: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className={`w-4 h-4 ${index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
      <span className="text-gray-500 text-xs font-normal font-['Inter'] ml-1">({rating.toFixed(1)})</span>
    </div>
  );
};

export default ProductRating;