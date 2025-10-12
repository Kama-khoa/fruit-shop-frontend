import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const promos = [
    {
        title: 'We provide you the best quality products',
        subtitle: 'Only This Week',
        description: 'A family place for grocery',
        img: '/images/promo/promo1.jpg',
        bgColor: 'bg-green-50'
    },
    {
        title: 'We make your grocery shopping more exciting',
        subtitle: 'Only This Week',
        description: 'Shine the morning...',
        img: '/images/promo/promo2.jpg',
        bgColor: 'bg-blue-50'
    },
    {
        title: 'The one supermarket that saves your money',
        subtitle: 'Only This Week',
        description: 'Breakfast made better',
        img: '/images/promo/promo3.jpg',
        bgColor: 'bg-orange-50'
    }
];

const PromotionBanners = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {promos.map((promo, index) => (
                        <div key={index} className={`relative rounded-lg overflow-hidden p-8 flex items-center ${promo.bgColor}`}>
                             <Image src={promo.img} alt={promo.title} layout="fill" objectFit="cover" className="opacity-40" />
                            <div className="relative z-10">
                                <p className="text-orange-600 text-xs font-medium font-['Inter']">{promo.subtitle}</p>
                                <h3 className="text-gray-900 text-xl font-bold font-['Inter'] mt-2 max-w-[200px]">{promo.title}</h3>
                                <p className="text-gray-500 text-xs font-normal font-['Inter'] mt-2">{promo.description}</p>
                                <Link href="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-bold bg-white px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
                                    Shop Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromotionBanners;
