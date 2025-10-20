'use client';

import { useState } from 'react';
import { CustomerAddress } from '@/types/customers';
import AddressItem from './AddressItem';
import { XIcon, PlusIcon, PlusIconWhite } from '@/components/ui/Icons';
import AddressForm from './AddressEditor';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  addresses: CustomerAddress[];
  selectedAddressId: number | null;
  onSelectAddress: (addressId: number | string ) => void;
  // onAddressUpdate: () => void; 
}

const AddressModal: React.FC<AddressModalProps> = ({ 
    isOpen, 
    onClose, 
    addresses, 
    selectedAddressId, 
    onSelectAddress, 
    // onAddressUpdate
}) => {
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingAddress, setEditingAddress] = useState<CustomerAddress | null>(null);

  if (!isOpen) return null;

  const handleShowForm = (address: CustomerAddress | null = null) => {
    setEditingAddress(address);
    setView('form');
  };

  const handleBackToList = () => {
    setView('list');
    setEditingAddress(null);
    // onAddressUpdate();
  };
  
  // Thay đổi kích thước dialog dựa trên view
  const dialogSizeClass = view === 'list' ? 'max-w-lg' : 'max-w-3xl';

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className={`bg-white rounded-2xl shadow-xl w-full ${dialogSizeClass} flex flex-col transition-all duration-300 p-6`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Chỉ hiển thị ở view danh sách */}
        {view === 'list' && (
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                    {addresses.length > 0 ? 'Lựa chọn địa chỉ' : 'Bạn chưa có địa chỉ được lưu!'}
                </h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-800">
                    <XIcon className="w-6 h-6" />
                </button>
            </div>
        )}

        {/* Body - Hiển thị có điều kiện */}
        <div className="flex-grow overflow-y-auto pr-2">
            {view === 'list' ? (
                // --- GIAO DIỆN DANH SÁCH ĐỊA CHỈ ---
                addresses.length > 0 ? (
                    <>
                        <div className="space-y-3">
                            {addresses.map((address) => (
                                <AddressItem 
                                    key={address.id}
                                    address={address}
                                    isSelected={selectedAddressId === address.id}
                                    onSelect={onSelectAddress}
                                    onEdit={() => handleShowForm(address)}
                                />
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100">
                            <button 
                                onClick={() => handleShowForm()}
                                className="flex items-center gap-2 text-green-600 font-semibold text-sm hover:underline"
                            >
                                <PlusIcon className="w-5 h-5" />
                                Thêm địa chỉ
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center py-10">
                        <button 
                            onClick={() => handleShowForm()}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors"
                        >
                            <PlusIconWhite className="w-5 h-5" />
                            Thêm địa chỉ
                        </button>
                    </div>
                )
            ) : (
                // --- GIAO DIỆN FORM THÊM/SỬA ---
                <AddressForm
                    initialData={editingAddress}
                    onSuccess={handleBackToList}
                    onCancel={handleBackToList}
                />
            )}
        </div>
      </div>
    </div>
  );
};

export default AddressModal;