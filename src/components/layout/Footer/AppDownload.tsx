import React from 'react';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const AppDownload: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-center gap-4">
      <h3 className="text-gray-900 text-sm font-semibold font-['Inter'] leading-none">
        Tải ứng dụng
      </h3>
      
      {/* App Store Buttons */}
      <div className="space-y-5">
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <div className="relative w-36 h-12">
            <Image
              src="/images/downloads/Download_on_the_App_Store_Badge_VN_RGB_blk_100217.svg"
              alt="Download on the App Store"
              fill
              className="object-contain"
            />
          </div>
        </a>

        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <div className="relative w-36 h-12">
            <Image
              src="/images/downloads/GetItOnGooglePlay_Badge_Web_color_Vietnamese.png"
              alt="Get it on Google Play"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </div>
      
      {/* Promo Text */}
      <p className="text-gray-500 text-[10px] font-medium font-['Inter'] leading-tight max-w-[150px]">
        Tải ứng dụng để nhận<br/>mã giảm giá lên tới 20%
      </p>
      
      {/* Social Media */}
      <div>
        <p className="text-gray-900 text-xs font-normal font-['Inter'] mb-3">
          Theo dõi chúng tôi:
        </p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default AppDownload;