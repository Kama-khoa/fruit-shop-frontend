export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  category_id?: number;
  views: number;
  is_featured: boolean;
  is_published: boolean;
  published_at?: string;
  seo_title?: string;
  seo_description?: string;
  author_id?: number;
  created_at: string;
  updated_at: string;
  author_name?: string;
    category_name?: string;
}

/**
 * Danh mục bài viết (bảng `blog_categories`).
 */
export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

/**
 * Tag/Từ khóa (bảng `tags`).
 */
export interface Tag {
  id: number;
  name: string;
  slug: string;
}