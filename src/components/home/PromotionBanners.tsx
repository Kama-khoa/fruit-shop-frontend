import Image from 'next/image';
import Link from 'next/link';

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const banners: Banner[] = [
  {
    id: '1',
    title: 'We provide you the',
    subtitle: 'best quality products',
    description: 'A family place for grocery',
    image: '/images/banners/promo-1.jpg',
    link: '/khuyen-mai',
  },
  {
    id: '2',
    title: 'We make your grocery',
    subtitle: 'shopping more exciting',
    description: 'Shine the morning...',
    image: '/images/banners/promo-2.jpg',
    link: '/khuyen-mai',
  },
  {
    id: '3',
    title: 'The one supermarket',
    subtitle: 'that saves your money',
    description: 'Breakfast made better',
    image: '/images/banners/promo-3.jpg',
    link: '/khuyen-mai',
  },
];

export default function PromotionBanners() {
  return (
    <div className="grid grid-cols-3 gap-6 my-12">
      {banners.map((banner) => (
        <Link key={banner.id} href={banner.link}>
          <div className="relative h-60 rounded-md overflow-hidden group">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            <div className="absolute inset-0 p-8 text-white">
              <span className="text-orange-600 text-xs font-medium">Only This Week</span>
              <h3 className="text-xl font-bold mt-6">{banner.title}</h3>
              <h3 className="text-xl font-bold">{banner.subtitle}</h3>
              <p className="text-xs text-gray-200 mt-3">{banner.description}</p>
              <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                Shop Now
                <span>→</span>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}