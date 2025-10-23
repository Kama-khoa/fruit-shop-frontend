'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { CustomerAddress } from '@/types/customers';
import { Province, District, Ward } from '@/types/locations';
import { addUserAddress, deleteUserAddress, updateUserAddress } from '@/lib/api/users';
import { getProvinces, getDistricts, getWards } from '@/lib/api/locations';
import { ChevronLeftIcon, TrashIconRed } from '@/components/ui/Icons';
import CircularCheckbox from '@/components/ui/CircularCheckbox';
import CustomSelect from '@/components/ui/CustomSelect';
import ConfirmationDialog from '@/components/common/ConfirmationDialog';
import toast from 'react-hot-toast';

interface AddressEditorProps {
  initialData?: CustomerAddress | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const AddressEditor: React.FC<AddressEditorProps> = ({ initialData, onSuccess, onCancel }) => {
  const { user } = useAuth();
  const isEditing = !!initialData;

  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    province_code: initialData?.province_code,
    province_name: initialData?.province_name,
    district_code: initialData?.district_code,
    district_name: initialData?.district_name,
    ward_code: initialData?.ward_code,
    ward_name: initialData?.ward_name,
    address: initialData?.address || '',
    is_default: initialData?.is_default || false,
  });
  
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const addressPayload = {
      name: formData.name,
      phone: formData.phone,
      province_code: formData.province_code || '',
      province_name: formData.province_name || '',
      district_code: formData.district_code || '',
      district_name: formData.district_name || '',
      ward_code: formData.ward_code || '',
      ward_name: formData.ward_name || '',
      address: formData.address || '',
      is_default: formData.is_default
  };

  useEffect(() => {
    const loadInitialData = async () => {
        const provincesData = await getProvinces();
        setProvinces(provincesData);
        if (initialData?.province_code) {
            const districtsData = await getDistricts(initialData.province_code);
            setDistricts(districtsData);
        }
        if (initialData?.district_code) {
            const wardsData = await getWards(initialData.district_code);
            setWards(wardsData);
        }
    };
    loadInitialData();
  }, [initialData]);

  useEffect(() => {
    if (formData.province_code && formData.province_code !== initialData?.province_code) {
        setDistricts([]);
        setWards([]);
        setFormData(prev => ({ ...prev, district_code: '', ward_code: '' }));
        getDistricts(formData.province_code).then(setDistricts);
    }
  }, [formData.province_code, initialData?.province_code]);

  useEffect(() => {
    if (formData.district_code && formData.district_code !== initialData?.district_code) {
      setWards([]);
      setFormData(prev => ({ ...prev, ward_code: '' }));
      getWards(formData.district_code).then(setWards);
    }
  }, [formData.district_code, initialData?.district_code]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: 'province_code' | 'district_code' | 'ward_code', value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user.customer_id) {
        toast.error("Vui lòng đăng nhập lại.");
        return;
    }

    setIsLoading(true);
    try {

        if (isEditing && initialData) {
          console.log('Updating address with data:', addressPayload);
            await updateUserAddress(initialData.id, addressPayload);
            toast.success("Cập nhật địa chỉ thành công!");
        } else {
          console.log('Updating address with data:', addressPayload);
            await addUserAddress(addressPayload);
            toast.success("Thêm địa chỉ mới thành công!");
        }
        onSuccess();
    } catch (error) {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
        setIsLoading(false);
    }
  };

  const handleDelete = () => {
    setIsConfirmOpen(true); // Chỉ mở dialog
  }

  const confirmDelete = async () => {
    if (!user || !user.customer_id || !initialData) return;

    setIsLoading(true);
    try {
        await deleteUserAddress(initialData.id);
        toast.success("Đã xóa địa chỉ.");
        setIsConfirmOpen(false); // Đóng dialog trước khi gọi onSuccess
        onSuccess();
    } catch (error) {
        toast.error("Xóa địa chỉ thất bại.");
    } finally {
        setIsLoading(false);
    }
  }
  
  const inputStyles = "w-full h-12 px-4 bg-neutral-50 rounded-lg text-base border border-transparent focus:outline-none focus:ring-2 focus:ring-green-200 transition duration-200 ease-in-out";

  return (
    <>
        <div className="flex flex-col h-full px-2"> {/* Lùi padding vào 2px */}
            <div className="flex items-center relative mb-6 text-center">
                <button onClick={onCancel} className="absolute left-0 text-gray-600 hover:text-gray-900">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h3 className="flex-1 text-black text-xl font-medium font-['Inter'] leading-tight">
                    {isEditing ? 'Chỉnh sửa địa chỉ' : 'Thêm địa chỉ mới'}
                </h3>
                {isEditing && (
                    <button onClick={handleDelete} className="absolute right-0 text-red-500 hover:text-red-700">
                        <TrashIconRed className="w-6 h-6" />
                    </button>
                )}
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-grow">
                {/* Form fields... */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-black text-sm font-semibold font-['Inter'] leading-tight">Họ và tên</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Nhập họ và tên người nhận" className={inputStyles}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-black text-sm font-semibold font-['Inter'] leading-tight">Số điện thoại</label>
                    <input id="phone" name="phone" type="text" required value={formData.phone} onChange={handleChange} placeholder="Nhập số điện thoại người nhận" className={inputStyles}/>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-black text-sm font-semibold font-['Inter'] leading-tight">Thành phố</label>
                        <CustomSelect
                            options={provinces.map(p => ({ value: p.code, label: p.name }))}
                            value={addressPayload.province_code}
                            onChange={(value) => handleSelectChange('province_code', value)}
                            placeholder="Chọn thành phố"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-black text-sm font-semibold font-['Inter'] leading-tight">Quận/Huyện</label>
                        <CustomSelect
                            options={districts.map(d => ({ value: d.code, label: d.name }))}
                            value={addressPayload.district_code}
                            onChange={(value) => handleSelectChange('district_code', value)}
                            placeholder="Chọn quận/huyện"
                            disabled={!formData.province_code}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-black text-sm font-semibold font-['Inter'] leading-tight">Phường/Xã</label>
                        <CustomSelect
                            options={wards.map(w => ({ value: w.code, label: w.name }))}
                            value={addressPayload.ward_code}
                            onChange={(value) => handleSelectChange('ward_code', value)}
                            placeholder="Chọn phường/xã"
                            disabled={!formData.district_code}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-black text-sm font-semibold font-['Inter'] leading-tight">Địa chỉ cụ thể</label>
                    <input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} placeholder="Nhập địa chỉ chi tiết" className={inputStyles}/>
                </div>
                
                <div className="mt-2">
                    <CircularCheckbox
                        checked={formData.is_default}
                        onChange={(isChecked) => setFormData(prev => ({ ...prev, is_default: isChecked }))}
                        label="Địa chỉ mặc định"
                    />
                </div>
                
                <div className="mt-auto pt-4">
                    <button type="submit" disabled={isLoading} className="w-full py-3 bg-Button-Auth text-white text-sm font-semibold rounded-full hover:opacity-90 transition disabled:bg-gray-400">
                        {isLoading ? 'Đang lưu...' : 'Lưu địa chỉ'}
                    </button>
                </div>
            </form>
        </div>
        <ConfirmationDialog
            isOpen={isConfirmOpen}
            onClose={() => setIsConfirmOpen(false)}
            onConfirm={confirmDelete}
            title="Xác nhận xóa địa chỉ"
            message="Bạn có chắc chắn muốn xóa địa chỉ này? Hành động này không thể hoàn tác."
            isLoading={isLoading}
        />
    </>
  );
};

export default AddressEditor;