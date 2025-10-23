'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/posts';
import { ROUTES } from '@/lib/utils/routes';

interface PostItemProps {
  post: Post;
}

// Hàm tiện ích để định dạng ngày
const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [imageSrc, setImageSrc] = useState(post.featured_image || '/images/default-post.png');
  
  const handleImageError = () => {
    setImageSrc('/images/default-post.png');
  };

  return (
    <article className="w-full max-w-sm flex flex-col gap-4 group">
      {/* Phần hình ảnh */}
      <Link href={ROUTES.MAIN.NEWS.DETAIL(post.slug)} className="block relative w-full h-56 rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md">
          <span className="text-purple-800 text-xs font-bold uppercase tracking-wide">
            {post.category_name || 'Uncategorized'}
          </span>
        </div>
      </Link>

      {/* Phần nội dung */}
      <div className="flex flex-col gap-2">
        {/* Tiêu đề */}
        <Link href={ROUTES.MAIN.NEWS.DETAIL(post.slug)}>
          <h2 className="text-gray-950 text-lg font-bold font-['Inter'] leading-normal line-clamp-2 group-hover:text-green-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        {/* Thông tin meta (tác giả, ngày) */}
        <div className="flex items-center gap-2 text-xs text-gray-700">
          <span className="text-gray-500">by</span>
          <span className="font-semibold">{post.author_name}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full" />
          <span>{formatDate(post.published_at || post.created_at)}</span>
        </div>

        {/* Đoạn trích */}
        {post.excerpt && (
          <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-tight line-clamp-3">
            {post.excerpt}
          </p>
        )}
      </div>
    </article>
  );
};

export default PostItem;