import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-gray-900 text-sm font-semibold font-['Inter'] leading-none">
        Tổng đài liên lạc
      </h3>
      
      {/* Hotline Section */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-gray-900" />
          </div>
          <div>
            <p className="text-gray-900 text-xs font-normal font-['Inter'] leading-none opacity-60 mb-2">
              Thứ 2 - Thứ 6: 8h - 22h
            </p>
            <a 
              href="tel:19009999"
              className="text-gray-900 text-xl font-bold font-['Inter'] leading-loose hover:text-gray-700 transition-colors"
            >
              1900 9999
            </a>
          </div>
        </div>
      </div>
      
      {/* Email Section */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-5 text-gray-900" />
          </div>
          <div>
            <p className="text-gray-900 text-xs font-normal font-['Inter'] leading-none opacity-60 mb-2">
              Cần hỗ trợ chi tiết
            </p>
            <a 
              href="mailto:contact@fruityfruit.com"
              className="text-gray-900 text-sm font-semibold font-['Inter'] leading-tight hover:text-gray-700 transition-colors"
            >
              contact@fruityfruit.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;