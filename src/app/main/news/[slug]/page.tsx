import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/api/posts'; // 1. Import hàm API
import { ROUTES } from '@/lib/utils/routes';
import { format } from 'date-fns';
import { CalendarDays, User, Tag, Home, ChevronRight } from 'lucide-react'; // Dùng icon

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Helper format ngày
const formatDate = (dateString: string) => {
  try {
    return format(new Date(dateString), 'dd/MM/yyyy');
  } catch (error) {
    console.error('Invalid date format:', error);
    return "Ngày không xác định";
  }
};

/**
 * Đây là Trang Chi tiết Bài viết (Server Component)
 * Tự động gọi API khi render
 */
export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = params;

  // 2. Gọi API để lấy dữ liệu bài viết
  const post = await getPostBySlug(slug);

  // 3. Xử lý nếu không tìm thấy bài viết
  if (!post) {
    notFound(); // Hiển thị trang 404
  }

  return (
    <main className="bg-white py-12">
      <div className="container mx-auto max-w-4xl px-4">
        
        {/* === 1. Breadcrumbs (Thanh điều hướng) === */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href={ROUTES.MAIN.HOME} className="flex items-center gap-1 hover:text-green-600">
            <Home size={14} />
            <span>Trang chủ</span>
          </Link>
          <ChevronRight size={16} />
          <Link href={ROUTES.MAIN.NEWS.LIST} className="hover:text-green-600">
            Tin tức
          </Link>
          <ChevronRight size={16} />
          {/* Tên danh mục (không link vì không có slug) */}
          <span className="text-gray-700">{post.category_name}</span>
        </nav>

        {/* === 2. Tiêu đề & Thông tin Meta === */}
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{formatDate(post.published_at)}</span>
            </div>
          </div>
        </header>

        {/* === 3. Ảnh đại diện (nếu có) === */}
        {post.featured_image && (
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-10">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
              priority // Ưu tiên tải ảnh này
            />
          </div>
        )}

        {/* === 4. Nội dung bài viết (HTML) === */}
        <article
          className="prose prose-lg max-w-none prose-green prose-img:rounded-lg"
          // 'prose' (từ @tailwindcss/typography) sẽ tự động style nội dung HTML
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* === 5. Tags (Thẻ) === */}
        {post.tags && post.tags.length > 0 && (
          <footer className="mt-12 border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Link
                  // Giả sử click vào tag sẽ dẫn đến trang sản phẩm
                  href={`${ROUTES.MAIN.PRODUCTS.LIST}?tag=${tag.slug}`}
                  key={tag.id}
                  className="flex items-center gap-1.5 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  <Tag size={14} />
                  <span>{tag.name}</span>
                </Link>
              ))}
            </div>
          </footer>
        )}

      </div>
    </main>
  );
}