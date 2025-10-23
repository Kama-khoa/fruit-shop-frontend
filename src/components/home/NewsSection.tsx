"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/utils/routes";

const newsArticles = [
  {
    id: 1,
    slug: "how-grocers-are-approaching-delivery",
    category: "Tin tức",
    title: "Cách các cửa hàng tiếp cận giao hàng khi thị trường phát triển",
    excerpt:
      "Khám phá các chiến lược mới mà các nhà bán lẻ đang áp dụng để tối ưu hóa dịch vụ giao hàng tận nhà.",
    author: "Admin",
    date: "3 Nov 2023",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    slug: "food-insecurity-keeps-retailers-off-balance",
    category: "Phân tích",
    title: "An ninh lương thực khiến các nhà bán lẻ mất cân bằng",
    excerpt:
      "Vấn đề an ninh lương thực đang đặt ra những thách thức lớn cho chuỗi cung ứng và chiến lược giá.",
    author: "Admin",
    date: "3 Nov 2023",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    slug: "consumer-want-grocer-to-use-ai",
    category: "Công nghệ",
    title: "Người tiêu dùng muốn cửa hàng dùng AI để tiết kiệm tiền",
    excerpt:
      "Một báo cáo mới cho thấy người dùng rất hào hứng với việc ứng dụng AI để cá nhân hóa khuyến mãi.",
    author: "Admin",
    date: "3 Nov 2023",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    slug: "replicating-the-restaurant-experience",
    category: "Xu hướng",
    title: "Tái tạo trải nghiệm nhà hàng trong bán lẻ thực phẩm",
    excerpt:
      "Các siêu thị đang ngày càng cung cấp nhiều hơn các sản phẩm chế biến sẵn chất lượng cao.",
    author: "Admin",
    date: "3 Nov 2023",
    image:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=800&q=60",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-6 bg-green-600 rounded-full"></div>
              <h2 className="text-gray-900 text-3xl font-bold tracking-tight">
                Tin tức mới nhất
              </h2>
            </div>
            <p className="text-gray-500 text-sm">
              Cập nhật xu hướng và phân tích thị trường mỗi tuần
            </p>
          </div>
          <Link
            href={ROUTES.MAIN.NEWS.LIST}
            className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900 transition"
          >
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              href={ROUTES.MAIN.NEWS.DETAIL(article.slug)}
              className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/90 text-green-700 text-xs font-bold uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    By{" "}
                    <span className="text-gray-700 font-medium">
                      {article.author}
                    </span>
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
