import React from 'react';

interface AddressTypeButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const AddressTypeButton: React.FC<AddressTypeButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm transition ${
        isActive
          ? 'bg-green-100 border-green-600 text-green-700'
          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AddressTypeButton;