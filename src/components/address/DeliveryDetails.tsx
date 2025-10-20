'use client';

import { useState } from 'react';
import { CustomerAddress } from '@/types/customers';
import { TruckIcon, MapPinIcon, CalendarIcon, ChevronRightIcon } from '@/components/ui/Icons';
import AddressModal from './AddressModal';

interface DeliveryDetailsProps {
    addresses: CustomerAddress[];
    onAddressUpdate: () => void;
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({ addresses, onAddressUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultAddress = addresses.find(addr => addr.is_default) || addresses[0];
    const [selectedAddress, setSelectedAddress] = useState<CustomerAddress | undefined>(defaultAddress);

    const handleSelectAddress = (address: CustomerAddress) => {
        setSelectedAddress(address);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="w-full p-6 bg-white rounded-2xl border border-gray-100 flex items-center gap-6">
                <div className="p-4 bg-green-50 rounded-full">
                    <TruckIcon className="w-7 h-7" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-xl font-semibold font-['IBM_Plex_Serif'] text-gray-900">Giao hàng nhanh</h3>
                    <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-left">
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-green-600 text-base font-medium font-['IBM_Plex_Serif']">
                            {selectedAddress ? `${selectedAddress.address}, ${selectedAddress.ward_code}, ${selectedAddress.district_code}, ${selectedAddress.province_code}` : 'Vui lòng chọn địa chỉ'}
                        </span>
                        <ChevronRightIcon className="w-4 h-4 text-green-600" />
                    </button>
                </div>
            </div>
            
            <AddressModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                addresses={addresses}
                selectedAddressId={selectedAddress?.id || null}
                onSelectAddress={handleSelectAddress}
            />
        </>
    );
}

export default DeliveryDetails;
