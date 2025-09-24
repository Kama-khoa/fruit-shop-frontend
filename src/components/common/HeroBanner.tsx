"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Banner */}
        <div className="w-full h-72 bg-zinc-300 rounded-[30px] relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute right-0 top-0 w-80 h-80 opacity-60 bg-white rounded-full transform translate-x-32 -translate-y-20"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="flex-1 pl-16">
              <h1 className="text-green-900 text-7xl font-['Sequel_Sans'] leading-tight mb-8 max-w-xl">
                Get Healthier With 9.9 Promo
              </h1>
              <Link 
                href="/products"
                className="inline-flex items-center justify-center w-40 h-12 bg-white rounded-3xl text-green-400 text-base font-['Sequel_Sans'] hover:bg-gray-50 transition-colors"
              >
                Shop Now
              </Link>
            </div>

            {/* Right side promo card */}
            <div className="relative">
              <div className="w-96 h-28 bg-neutral-50 rounded-xl shadow-sm">
                <div className="flex">
                  {/* Promo badge */}
                  <div className="w-36 h-28 bg-green-700 rounded-tl-xl rounded-bl-xl flex flex-col items-center justify-center">
                    <div className="text-white text-5xl font-['Sequel_Sans']">90%</div>
                    <div className="text-emerald-50 text-lg font-['Sequel_Sans']">All Items!</div>
                  </div>
                  
                  {/* Promo details */}
                  <div className="flex-1 p-4 relative">
                    <div className="text-black text-xs font-normal font-['Sequel_Sans'] mb-2">
                      <span>Valid until </span>
                      <span className="font-semibold">September 10, 2023</span>
                    </div>
                    <div className="text-black text-xs font-normal font-['Sequel_Sans'] mb-4">
                      Jumbo Promo
                    </div>
                    
                    <div className="absolute bottom-4 left-4">
                      <div className="w-24 h-5 bg-green-400 rounded-[10px] flex items-center justify-center">
                        <span className="text-white text-xs font-normal font-['Sequel_Sans']">
                          Claim Promo
                        </span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 text-black text-xs font-normal font-['Sequel_Sans']">
                      T&C Apply
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;