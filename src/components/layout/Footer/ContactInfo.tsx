import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Tiêu đề */}
      <h3 className="text-gray-800 text-base font-semibold font-['Inter'] tracking-wide">
        Tổng đài liên lạc
      </h3>

      {/* Hotline */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
          <Phone className="w-5 h-5 text-gray-700" />
        </div>
        <div>
          <p className="text-gray-600 text-xs font-medium font-['Inter'] mb-1">
            Thứ 2 - Thứ 6: 8h00 - 22h00
          </p>
          <a
            href="tel:19009999"
            className="text-gray-900 text-lg font-bold font-['Inter'] leading-tight hover:text-gray-700 transition-colors"
          >
            1900 9999
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
          <Mail className="w-5 h-5 text-gray-700" />
        </div>
        <div>
          <p className="text-gray-600 text-xs font-medium font-['Inter'] mb-1">
            Cần hỗ trợ chi tiết
          </p>
          <a
            href="mailto:contact@fruityfruit.com"
            className="text-gray-900 text-sm font-semibold font-['Inter'] hover:text-gray-700 transition-colors"
          >
            contact@tamdat.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
