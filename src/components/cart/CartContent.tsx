'use client';

import { CustomerAddress } from '@/types/customers';
import { CartItem as CartItemType } from '@/types/cart';
import CartItem from './CartItem';
import DeliveryDetails from '@/components/address/DeliveryDetails';
interface CartContentProps {
  items: CartItemType[];
  addresses: CustomerAddress[];
  selectedAddress: CustomerAddress | undefined;
  onSelectAddress: (address: CustomerAddress) => void;
  onUpdateQuantity: (itemId: number, newQuantity: number) => Promise<void>;
  onRemoveItem: (itemId: number) => Promise<void>;
  onAddressUpdate: () => void;
}

const CartContent: React.FC<CartContentProps> = ({ items, addresses, selectedAddress, onSelectAddress, onUpdateQuantity, onRemoveItem, onAddressUpdate }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <DeliveryDetails 
        addresses={addresses} 
        selectedAddress={selectedAddress}
        onSelectAddress={onSelectAddress}
        onAddressUpdate={onAddressUpdate} 
      />

      <div className="w-full p-6 bg-white rounded-2xl border border-gray-100">
        <h3 className="text-xl font-semibold font-['IBM_Plex_Serif'] text-gray-500 mb-2">Sản phẩm trong giỏ hàng: {items.length}</h3>
        {items.length > 0 ? (
          items.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
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