import React from 'react';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const AppDownload: React.FC = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-gray-900 text-sm font-semibold font-['Inter'] leading-none text-center lg:text-center">
        Tải ứng dụng
      </h3>
      
      {/* App Store Buttons */}
      <div className="space-y-5">
        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-30 h-12 mx-auto lg:text-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/downloads/GetItOnGooglePlay_Badge_Web_color_Vietnamese.png"
            alt="Get it on Google Play"
            width={120}
            height={40}
            className="w-full h-full object-contain"
          />
        </a>
        
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-28 h-13 mx-auto lg:text-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/downloads/Download_on_the_App_Store_Badge_VN_RGB_blk_100217.svg"
            alt="Download on the App Store"
            width={120}
            height={40}
            className="w-full h-full object-contain"
          />
        </a>
      </div>
      
      {/* Promo Text */}
      <p className="text-gray-500 text-[10px] font-medium font-['Inter'] leading-none text-center lg:text-center">
        Tải ứng dụng để nhận<br />mã giảm giá lên tới 20%
      </p>
      
      {/* Social Media */}
      <div>
        <p className="text-gray-900 text-xs font-normal font-['Inter'] text-center lg:text-center mb-3">
          Theo dõi chúng tôi:
        </p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default AppDownload;