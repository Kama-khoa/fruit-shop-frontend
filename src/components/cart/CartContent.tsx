'use client';

import { useState } from 'react';
import { CustomerAddress } from '@/types/customers';
import { CartItem as CartItemType } from '@/types/cart';
import CartItem from './CartItem';
import DeliveryDetails from '@/components/address/DeliveryDetails';
import { updateCartItemQuantity, removeCartItem } from '@/lib/api/cart';

interface CartContentProps {
  initialItems: CartItemType[];
  addresses: CustomerAddress[];
  onAddressUpdate: () => void;
}

const CartContent: React.FC<CartContentProps> = ({ initialItems, addresses, onAddressUpdate }) => {
  const [items, setItems] = useState(initialItems);

  const handleUpdateQuantity = async (itemId: number, newQuantity: number) => {
    await updateCartItemQuantity(itemId, newQuantity);
    setItems(prevItems => 
      prevItems.map(item => parseFloat(item.id) === itemId ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemoveItem = async (itemId: number) => {
    await removeCartItem(itemId);
    setItems(prevItems => prevItems.filter(item => parseFloat(item.id) !== itemId));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <DeliveryDetails addresses={addresses} onAddressUpdate={onAddressUpdate} />

      <div className="w-full p-6 bg-white rounded-2xl border border-gray-100">
        <h3 className="text-sm font-semibold font-['IBM_Plex_Serif'] text-gray-500 mb-2">Sản phẩm trong giỏ hàng ({items.length})</h3>
        {items.length > 0 ? (
          items.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          ))
        ) : (
          <p className="text-center py-8">Giỏ hàng của bạn đang trống.</p>
        )}
      </div>
    </div>
  );
};

export default CartContent;