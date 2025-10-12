import Image from 'next/image';

export default function BestsellerBanner() {
  return (
    <section className="my-12">
      <div className="relative w-full h-[472px] max-w-7xl mx-auto rounded-3xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
          alt="Best Seller"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h2 className="text-8xl text-white font-bold tracking-wider" style={{fontFamily: 'Gluten, cursive'}}>BEST SELLER</h2>
        </div>
      </div>
    </section>
  );
}
