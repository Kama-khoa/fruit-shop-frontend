'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: string;
  title: string;
  discount: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Khuyến mãi 9-9 lên tới 99%',
    discount: '99%',
    image: '/images/banners/hero-1.jpg',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-96 bg-zinc-300 rounded-3xl overflow-hidden">
      <Image
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-normal text-green-900 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <button className="mt-6 bg-white text-green-400 px-6 py-2 rounded-3xl font-normal">
            Tham gia ngay
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-12 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-6 h-6 rounded-full ${
              index === currentSlide ? 'bg-green-400' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}