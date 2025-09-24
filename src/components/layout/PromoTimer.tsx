"use client";

import React, { useState, useEffect } from 'react';

const PromoTimer = () => {
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
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-11 bg-green-400 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="text-white text-base">
          <span className="font-semibold">9.9 Promo Is Here!</span>
          <span className="font-normal ml-1">Get Up To 99% Discount!</span>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Hours */}
          <div className="flex items-center space-x-1">
            <div className="w-14 h-6 rounded-xl border border-white flex items-center justify-center">
              <span className="text-white text-sm font-normal">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white text-sm font-normal">Hours</span>
          </div>

          {/* Minutes */}
          <div className="flex items-center space-x-1">
            <div className="w-14 h-6 rounded-xl border border-white flex items-center justify-center">
              <span className="text-white text-sm font-normal">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white text-sm font-normal">Minutes</span>
          </div>

          {/* Seconds */}
          <div className="flex items-center space-x-1">
            <div className="w-14 h-6 rounded-xl border border-white flex items-center justify-center">
              <span className="text-white text-sm font-normal">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white text-sm font-normal">Seconds</span>
          </div>
        </div>

        <div className="w-24 h-6 bg-white rounded-xl flex items-center justify-center">
          <span className="text-green-700 text-sm font-normal">Check Promo!</span>
        </div>
      </div>
    </div>
  );
};

export default PromoTimer;