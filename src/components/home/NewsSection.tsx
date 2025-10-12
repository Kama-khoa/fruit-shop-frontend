import Image from 'next/image';
import Link from 'next/link';
import type { NewsArticle } from '@/types';

interface Props {
  articles: NewsArticle[];
}

export default function NewsSection({ articles }: Props) {
  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold text-gray-950">Tin tức</h2>
          <p className="text-xs text-gray-400">Tin tức mới trong tuần</p>
        </div>
        <Link
          href="/tin-tuc"
          className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-bold text-gray-800 flex items-center gap-2"
        >
          Tất cả
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {articles.slice(0, 4).map((article) => (
          <Link key={article.id} href={`/tin-tuc/${article.slug}`}>
            <div className="group">
              <div className="relative h-56 rounded-md overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <span className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 text-purple-800 text-xs font-bold uppercase">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-950 mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500">by</span>
                <span className="text-gray-700 font-semibold">{article.author}</span>
                <span className="text-gray-950 opacity-10">•</span>
                <span className="text-gray-700">{article.publishedAt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}