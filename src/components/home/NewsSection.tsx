import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const newsArticles = [
    { id: 1, slug: 'how-grocers-are-approaching-delivery', category: 'Tin tức', title: 'Cách các cửa hàng tiếp cận giao hàng khi thị trường phát triển', excerpt: 'Khám phá các chiến lược mới mà các nhà bán lẻ đang áp dụng để tối ưu hóa dịch vụ giao hàng tận nhà.', author: 'Admin', date: '3 Nov 2023', image: 'https://placehold.co/200x200/e5e7eb/6b7280?text=Image' },
    { id: 2, slug: 'food-insecurity-keeps-retailers-off-balance', category: 'Phân tích', title: 'An ninh lương thực khiến các nhà bán lẻ mất cân bằng', excerpt: 'Vấn đề an ninh lương thực đang đặt ra những thách thức lớn cho chuỗi cung ứng và chiến lược giá.', author: 'Admin', date: '3 Nov 2023', image: 'https://placehold.co/200x200/e5e7eb/6b7280?text=Image' },
    { id: 3, slug: 'consumer-want-grocer-to-use-ai', category: 'Công nghệ', title: 'Người tiêu dùng muốn cửa hàng dùng AI để tiết kiệm tiền', excerpt: 'Một báo cáo mới cho thấy người dùng rất hào hứng với việc ứng dụng AI để cá nhân hóa khuyến mãi.', author: 'Admin', date: '3 Nov 2023', image: 'https://placehold.co/200x200/e5e7eb/6b7280?text=Image' },
    { id: 4, slug: 'replicating-the-restaurant-experience', category: 'Xu hướng', title: 'Tái tạo trải nghiệm nhà hàng trong bán lẻ thực phẩm', excerpt: 'Các siêu thị đang ngày càng cung cấp nhiều hơn các sản phẩm chế biến sẵn chất lượng cao.', author: 'Admin', date: '3 Nov 2023', image: 'https://placehold.co/200x200/e5e7eb/6b7280?text=Image' },
];

const NewsSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-gray-950 text-2xl font-bold font-['Inter']">Tin tức</h2>
                        <p className="text-gray-400 text-sm font-normal font-['Inter']">Tin tức mới nhất trong tuần</p>
                    </div>
                    <Link href="/news" className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition">
                        Tất cả <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newsArticles.map(article => (
                        <div key={article.id}>
                            <Link href={`/news/${article.slug}`}>
                                <div className="block group">
                                    <div className="relative rounded-md overflow-hidden mb-4">
                                        <Image src={article.image} alt={article.title} width={317} height={220} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"/>
                                        <span className="absolute top-3 left-3 bg-white text-purple-800 text-xs font-bold uppercase px-2 py-1 rounded-md">{article.category}</span>
                                    </div>
                                    <h3 className="text-gray-950 text-lg font-bold font-['Inter'] leading-normal mb-2 group-hover:text-green-600 transition-colors">{article.title}</h3>
                                    <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-tight mb-4">{article.excerpt}</p>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span>by <span className="text-gray-700 font-semibold">{article.author}</span></span>
                                        <span className="mx-2">•</span>
                                        <span>{article.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
