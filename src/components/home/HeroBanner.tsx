'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollTab from '../ui/ScrollTab';

// Dữ liệu cho các slide
const slides = [
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop",
    title: "Khuyến mãi 9-9 lên tới 99%",
    buttonText: "Tham gia ngay",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    title: "Mừng hè tới - Giảm giá sốc 50%",
    buttonText: "Mua ngay",
    href: ROUTES.MAIN.PRODUCTS.LIST
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    title: "Rau củ quả tươi sạch mỗi ngày",
    buttonText: "Khám phá",
    href: ROUTES.MAIN.PRODUCTS.CATEGORY('rau-cu-qua')
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Use useCallback to memoize the function, preventing unnecessary re-renders
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const resetAutoSlide = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [resetAutoSlide]);

  return (
      <div className="relative h-96 w-full rounded-3xl overflow-hidden">
        {/* Slides Container */}
        <div className="w-full h-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                </div>
            ))}
        </div>

        {/* Text content and button */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-12 text-white">
            <h1 className="text-white text-6xl md:text-7xl font-normal font-['IBM_Plex_Serif'] leading-tight max-w-2xl">
                {slides[currentIndex].title}
            </h1>
            <Link 
                href={slides[currentIndex].href}
                className="mt-8 px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors text-base focus:outline-none focus:ring-0"
            >
                {slides[currentIndex].buttonText}
            </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 z-20 flex justify-end items-center px-4">
            <button onClick={() => {
                nextSlide();
                resetAutoSlide(); // reset lại 5s khi click thủ công
              }}
              className="text-white p-2 rounded-full hover:bg-black/20 transition-colors focus:outline-none focus:ring-0">
                <ChevronRight size={40} />
            </button>
        </div>

        {/* Pagination dots */}
        <div className="absolute inset-x-0 bottom-0 z-20">
            <ScrollTab count={slides.length} activeIndex={currentIndex} goToSlide={goToSlide} />
        </div>
    </div>
  );
}