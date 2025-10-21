'use client';

import { useEffect, useState } from 'react';
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
    const findDefaultAddress = (addrs: CustomerAddress[]) => addrs.find(addr => addr.is_default) || addrs[0];
    const [selectedAddress, setSelectedAddress] = useState<CustomerAddress | undefined>(findDefaultAddress(addresses));
    

    useEffect(() => {
        // If an address was previously selected, find its updated version in the new array.
        if (selectedAddress) {
            const updatedSelectedAddress = addresses.find(addr => addr.id === selectedAddress.id);
            setSelectedAddress(updatedSelectedAddress || findDefaultAddress(addresses));
        } else {
            // If no address was selected, set a new default.
            setSelectedAddress(findDefaultAddress(addresses));
        }
    }, [addresses]);

    const handleSelectAddress = (addressId: number) => {
        const newSelectedAddress = addresses.find(addr => addr.id === addressId);
        if (newSelectedAddress) {
            setSelectedAddress(newSelectedAddress);
        }
        // Có thể đóng modal sau khi chọn, tùy vào UX bạn muốn
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
                            {selectedAddress ? `${selectedAddress.name} - ${selectedAddress.phone} | ${selectedAddress.address}, ${selectedAddress.ward_name}, ${selectedAddress.district_name}, ${selectedAddress.province_name}` : 'Vui lòng chọn địa chỉ'}
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
                onAddressUpdate={onAddressUpdate}
            />
        </>
    );
}

export default DeliveryDetails;
