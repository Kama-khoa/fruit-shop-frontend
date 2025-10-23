"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const promos = [
  {
    title: "Chúng tôi mang đến cho bạn sản phẩm chất lượng nhất",
    subtitle: "Chỉ trong tuần này",
    description: "Nơi mua sắm thực phẩm cho cả gia đình",
    img: "/images/promo/promo1.png",
    gradient: "from-green-500/20 via-green-400/10 to-transparent",
  },
  {
    title: "Biến việc đi chợ trở nên thú vị hơn bao giờ hết",
    subtitle: "Ưu đãi độc quyền",
    description: "Buổi sáng tràn đầy năng lượng và tươi mới",
    img: "/images/promo/promo2.png",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
  },
  {
    title: "Siêu thị giúp bạn tiết kiệm hơn mỗi ngày",
    subtitle: "Khuyến mãi đặc biệt",
    description: "Mua sắm thông minh – tiết kiệm thật",
    img: "/images/promo/promo3.png",
    gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
  },
];

const PromotionBanners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Ưu đãi & Khuyến mãi
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Săn deal cực hot – chỉ có tại Tâm Đạt Store tuần này!
          </p>
        </div>

        {/* Lưới 3 banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Hình nền */}
              <div className="absolute inset-0">
                <Image
                  src={promo.img}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${promo.gradient}`}
                />
              </div>

              {/* Nội dung */}
              <div className="relative z-10 p-8 flex flex-col justify-center min-h-[280px]">
                <p className="text-sm text-green-700 font-semibold uppercase tracking-wide">
                  {promo.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mt-2">
                  {promo.title}
                </h3>
                <p className="text-sm text-gray-600 mt-3">{promo.description}</p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 self-start bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                >
                  Mua ngay <ArrowRight size={16} />
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
