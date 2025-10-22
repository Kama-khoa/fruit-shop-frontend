'use client';

import React from 'react';

interface ScrollTabProps {
  count: number;
  activeIndex: number;
  goToSlide: (index: number) => void;
}

const ScrollTab: React.FC<ScrollTabProps> = ({ count, activeIndex, goToSlide }) => {
    return (
        <div className="absolute bottom-6 right-8 flex items-center justify-center gap-3">
            {Array.from({ length: count }).map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => goToSlide(index)} 
                  className="transition-all duration-300 focus:outline-none focus:ring-0"
                  aria-label={`Go to slide ${index + 1}`}
                >
                    <div 
                        className={`rounded-full transition-all duration-300 ${
                            activeIndex === index ? 'w-6 h-6 bg-green-400' : 'w-4 h-4 bg-white'
                        }`} 
                    />
                </button>
            ))}
        </div>
    );
};

export default ScrollTab;