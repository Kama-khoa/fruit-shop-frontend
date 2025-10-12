import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/utils/routes';

export default function HeroBanner() {
  return (
    <div className="relative h-[384px] rounded-3xl overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2070&auto=format&fit=crop"
        alt="Khuyến mãi nông sản"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-transparent" />
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-8 text-white">
        <h1 className="text-6xl font-normal font-serif leading-tight max-w-lg text-green-50">
          Khuyến mãi 9-9 <br /> lên tới 99%
        </h1>
        <Link 
          href="#"
          className="mt-6 px-6 py-2.5 bg-white text-green-600 font-semibold rounded-3xl hover:bg-gray-100 transition-colors"
        >
          Tham gia ngay
        </Link>
      </div>
    </div>
  );
}