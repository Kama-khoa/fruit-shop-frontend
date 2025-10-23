import React from 'react';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const AppDownload: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
      {/* Tiêu đề */}
      <h3 className="text-gray-800 text-base font-semibold font-['Inter'] tracking-wide">
        Tải ứng dụng
      </h3>

      {/* Nút tải App Store & Google Play */}
      <div className="space-y-4">
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-85 transition-opacity duration-200"
        >
          <div className="relative w-36 h-12">
            <Image
              src="/images/downloads/Download_on_the_App_Store_Badge_VN_RGB_blk_100217.svg"
              alt="Tải trên App Store"
              fill
              className="object-contain"
            />
          </div>
        </a>

        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-85 transition-opacity duration-200"
        >
          <div className="relative w-36 h-12">
            <Image
              src="/images/downloads/GetItOnGooglePlay_Badge_Web_color_Vietnamese.png"
              alt="Tải trên Google Play"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </div>

      {/* Dòng khuyến mãi */}
      <p className="text-gray-600 text-xs font-medium font-['Inter'] leading-tight max-w-[170px] mt-2">
        Tải ứng dụng để nhận <br /> ưu đãi giảm giá lên tới 20%
      </p>

      {/* Mạng xã hội */}
      <div className="mt-3">
        <p className="text-gray-700 text-sm font-medium font-['Inter'] mb-3">
          Theo dõi chúng tôi
        </p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default AppDownload;
