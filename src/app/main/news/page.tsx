import Breadcrumb from "@/components/common/Breadcrumb";
import PostItem from "@/components/posts/PostItem";
import { getAllPosts } from "@/lib/api/posts";
import { ROUTES } from "@/lib/utils/routes";
import { Post } from "@/types/posts";

// Đây là một Server Component, nó có thể fetch dữ liệu trực tiếp
export default async function NewsPage() {
    
    // 1. Fetch dữ liệu bài đăng từ API
    const postResponse = await getAllPosts();
    const posts: Post[] = postResponse;

    // 2. Định nghĩa các mục cho Breadcrumb
    const breadcrumbItems = [
        { label: 'Trang chủ', href: ROUTES.ROOT },
        { label: 'Blog' }
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                
                {/* Lưới các bài đăng */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>

                {/* Phân trang (nếu cần trong tương lai) */}
                {/* <div className="mt-12">
                    <Pagination ... />
                </div> */}
            </div>
        </div>
    );
}
