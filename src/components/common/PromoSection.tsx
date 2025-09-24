import React from 'react';

const PromoSection = () => {
  const promoCards = [
    {
      id: 1,
      type: 'percentage',
      value: '90%',
      title: 'Semua Item!',
      subtitle: 'Promo Jumbo',
      validUntil: '10 September 2023',
      bgColor: 'bg-green-700',
      textColor: 'text-white'
    },
    {
      id: 2,
      type: 'percentage',
      value: '20%',
      title: 'Semua Item',
      subtitle: '9.9 Deal',
      validUntil: '10 September 2023',
      bgColor: 'bg-green-700',
      textColor: 'text-white'
    },
    {
      id: 3,
      type: 'shipping',
      value: 'Gratis Ongkir',
      title: 'Minimal Belanja Rp 10.000',
      subtitle: 'Free Shipment',
      validUntil: '10 September 2023',
      bgColor: 'bg-amber-300',
      textColor: 'text-white'
    },
    {
      id: 4,
      type: 'shipping',
      value: 'Gratis Ongkir',
      title: 'Minimal Belanja Rp 10.000',
      subtitle: 'Free Shipment',
      validUntil: '10 September 2023',
      bgColor: 'bg-amber-300',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-3xl font-normal font-['Abril_Fatface'] mb-8">
          Kupon Tersedia
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promoCards.map((promo) => (
            <div key={promo.id} className="shadow-[0px_4px_4px_0px_rgba(189,189,189,0.25)] rounded-xl overflow-hidden">
              <div className="flex">
                {/* Promo Badge */}
                <div className={`w-36 h-28 ${promo.bgColor} rounded-tl-xl rounded-bl-xl flex flex-col items-center justify-center relative`}>
                  {promo.type === 'percentage' ? (
                    <>
                      <div className={`${promo.textColor} text-5xl font-['Sequel_Sans']`}>
                        {promo.value}
                      </div>
                      <div className="text-emerald-50 text-lg font-['Sequel_Sans']">
                        {promo.title}
                      </div>
                    </>
                  ) : (
                    <div className={`${promo.textColor} text-3xl font-['Sequel_Sans'] text-center leading-tight`}>
                      {promo.value}
                    </div>
                  )}
                </div>

                {/* Promo Details */}
                <div className="w-60 h-28 bg-white relative flex flex-col justify-between p-4">
                  {/* Title/Description */}
                  {promo.type === 'shipping' && (
                    <div className="text-black text-xs font-normal font-['Sequel_Sans'] mb-2">
                      {promo.title}
                    </div>
                  )}
                  
                  {/* Valid Until */}
                  <div className="text-black text-xs font-normal font-['Sequel_Sans'] mb-1">
                    <span>Berlaku s/d </span>
                    <span className="font-semibold">{promo.validUntil}</span>
                  </div>

                  {/* Subtitle */}
                  <div className="text-black text-xs font-normal font-['Sequel_Sans'] mb-3">
                    {promo.subtitle}
                  </div>

                  {/* Bottom section */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-3 rounded-[3px] border-[0.60px] border-green-700"></div>
                    
                    {/* Terms & Conditions */}
                    <div className="text-black text-xs font-normal font-['Sequel_Sans']">
                      S&K Berlaku
                    </div>
                  </div>

                  {/* Claim Button */}
                  <div className="absolute bottom-2 left-4">
                    <div className="w-24 h-5 bg-green-400 rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                      <span className="text-white text-xs font-normal font-['Sequel_Sans']">
                        Klaim Promo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;