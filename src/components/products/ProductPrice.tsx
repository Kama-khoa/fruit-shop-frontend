import React from 'react';

interface ProductPriceProps {
  price: string;
  compare_price?: string;
}

const formatCurrency = (amount: string) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(amount));
};

const ProductPrice: React.FC<ProductPriceProps> = ({ price, compare_price }) => {
  return (
    <div className="flex items-end gap-2">
      <p className="text-red-600 text-xl font-bold font-['Barlow'] leading-snug">
        {formatCurrency(price)}
      </p>
      {compare_price && parseFloat(compare_price) > parseFloat(price) && (
        <p className="text-gray-500 text-sm font-medium font-['Barlow'] line-through leading-none">
          {formatCurrency(compare_price)}
        </p>
      )}
    </div>
  );
};

export default ProductPrice;
