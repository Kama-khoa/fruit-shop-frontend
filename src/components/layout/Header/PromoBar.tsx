'use client';
import React, { useState, useEffect } from 'react';

const PromoBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 17,
    minutes: 50,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-12 bg-Green-fruit flex items-center justify-between px-4 lg:px-32">
      {/* Promo Text */}
      <div className="flex items-center gap-2">
        <span className="text-white text-base font-semibold font-['IBM_Plex_Serif']">
          Khuyến mãi 9-9!
        </span>
        <span className="text-white text-base font-extralight font-['IBM_Plex_Serif']">
          Giảm giá lên tới 99%!
        </span>
      </div>

      {/* Countdown Timer */}
      <div className="flex items-center gap-2">
        {/* Hours */}
        <div className="flex items-center gap-2">
          <div className="w-14 h-6 rounded-xl border border-white flex items-center justify-center">
            <span className="text-white text-sm font-thin font-['IBM_Plex_Serif']">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-sm font-extralight font-['IBM_Plex_Serif']">
            Giờ
          </span>
        </div>

        {/* Minutes */}
        <div className="flex items-center gap-2">
          <div className="w-14 h-6 rounded-xl border border-white flex items-center justify-center">
            <span className="text-white text-sm font-thin font-['IBM_Plex_Serif']">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-sm font-extralight font-['IBM_Plex_Serif']">
            Phút
          </span>
        </div>

        {/* Seconds */}
        <div className="flex items-center gap-2">
          <div className="w-14 h-6 rounded-xl border border-white flex items-center justify-center">
            <span className="text-white text-sm font-thin font-['IBM_Plex_Serif']">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-sm font-extralight font-['IBM_Plex_Serif']">
            Giây
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* CTA Button */}
        <button className="w-28 h-6 bg-white rounded-xl hover:bg-gray-50 transition-colors">
          <span className="text-green-700 text-sm font-light font-['IBM_Plex_Serif']">
            Tham gia ngay
          </span>
        </button>
      </div>
    </div>
  );
};

export default PromoBar;