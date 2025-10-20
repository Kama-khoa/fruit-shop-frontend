import React from 'react';
import { StarOnIcon, StarOffIcon } from '@/components/ui/Icons';

interface ProductRatingProps {
  rating: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        index < roundedRating 
          ? <StarOnIcon key={index} className="w-3 h-3" />
          : <StarOffIcon key={index} className="w-3 h-3" />
      ))}
      <span className="text-gray-500 text-xs font-normal font-['Inter'] ml-1">({rating.toFixed(1)})</span>
    </div>
  );
};

export default ProductRating;