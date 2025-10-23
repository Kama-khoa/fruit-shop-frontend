import React from 'react';
import ContactInfo from './ContactInfo';
import SupportLinks from './SupportLinks';
import InfoLinks from './InfoLinks';
import AppDownload from './AppDownload';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-100 text-gray-700 border-t border-gray-200">
      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Liên hệ */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <ContactInfo />
          </div>

          {/* Hỗ trợ */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <SupportLinks />
          </div>

          {/* Thông tin */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <InfoLinks />
          </div>

          {/* Tải app & MXH */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <AppDownload />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Copyright */}
      <div className="py-4 text-center bg-neutral-200">
        <p className="text-xs text-gray-600 font-['Inter'] tracking-wide">
          © {new Date().getFullYear()} <span className="text-gray-800 font-semibold">Tâm Đạt</span>.  
          &nbsp;All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
