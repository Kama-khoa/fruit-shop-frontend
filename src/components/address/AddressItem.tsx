'use client';

import { CustomerAddress } from '@/types/customers';
import { PencilIcon } from '@/components/ui/Icons';

interface AddressItemProps {
  address: CustomerAddress;
  isSelected: boolean;
  onSelect: (addressId: number) => void;
  onEdit: (address: CustomerAddress) => void;
}

const AddressItem: React.FC<AddressItemProps> = ({ address, isSelected, onSelect, onEdit }) => {
  const fullAddress = `${address.address}, ${address.ward_code}, ${address.district_code}, ${address.province_code}`;

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn không cho sự kiện click lan ra ngoài và kích hoạt onSelect
    onEdit(address);
  };

  return (
    <div
      onClick={() => onSelect(address.id)}
      className={`p-4 flex items-center gap-4 rounded-xl cursor-pointer transition-colors ${
        isSelected ? 'bg-green-50 border border-green-600' : 'bg-gray-50 border border-transparent'
      }`}
    >
      {/* Radio Button */}
      <div className="flex items-center justify-center w-5 h-5">
        <div 
          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
            isSelected ? 'border-green-600 bg-green-600' : 'border-gray-300'
          }`}
        >
          {isSelected && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </div>
      </div>
      
      {/* Address Info */}
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{address.name}</p>
        <p className="text-sm text-gray-600">{fullAddress}</p>
      </div>

      {/* Edit Button */}
      <button
        onClick={handleEditClick}
        className="flex items-center gap-2 text-green-600 font-semibold text-sm px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
      >
        <PencilIcon className="w-4 h-4" />
        Sửa
      </button>
    </div>
  );
};

export default AddressItem;