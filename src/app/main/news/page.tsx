// src/app/main/news/page.tsx
"use client";

// Bỏ 'Image' vì không còn dùng trực tiếp ở đây
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "@/components/common/Breadcrumb";
import PostItem from "@/components/posts/PostItem";
import { getAllPosts } from "@/lib/api/posts";
import { getFeaturedProducts, getProductById } from "@/lib/api/products";
import { ROUTES } from "@/lib/utils/routes";
import { Post } from "@/types/posts";
import { Product, ProductDetail } from "@/types/product";
import ProductDetailModal from "@/components/products/ProductDetailModal";
import {LoadingSpinner} from "@/components/ui/LoadingSpinner";

// 1. IMPORT COMPONENT MỚI
import ProductSidebarItem from "@/components/posts/ProductSidebarItem";

// 2. XÓA BỎ hàm formatCurrency (vì đã được import trong SidebarItem)
// const formatCurrency = (amount: number | null) => { ... };

// 3. XÓA BỎ định nghĩa hàm ProductSidebarItem
// function ProductSidebarItem({ ... }) { ... }

// --- Component Trang Chính (Client Component) ---
export default function NewsPage() {
  // (State và useEffect giữ nguyên)
  const [posts, setPosts] = useState<Post[]>([]);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] =
    useState<ProductDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [postRes, productRes] = await Promise.all([
          getAllPosts(),
          getFeaturedProducts(),
        ]);

        setPosts(postRes || postRes || []);
        setSuggestedProducts(productRes.data || productRes || []);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu trang tin tức:", error);
        toast.error("Không thể tải dữ liệu trang.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // (Các hàm xử lý modal giữ nguyên)
  const handleProductClick = async (product: Product) => {
    setIsModalLoading(true);
    try {
      const productDetails = await getProductById(product.id);
      if (productDetails) {
        setSelectedProductDetail(productDetails);
        setIsModalOpen(true);
      } else {
        toast.error("Không tìm thấy chi tiết sản phẩm.");
      }
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      toast.error("Lỗi khi tải chi tiết sản phẩm.");
    } finally {
      setIsModalLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProductDetail(null);
    }, 300);
  };

  // (Logic loopedProducts, breadcrumbItems, và return isLoading giữ nguyên)
  const loopedProducts =
    suggestedProducts.length > 0 ? Array(4).fill(suggestedProducts).flat() : [];
  const breadcrumbItems = [
    { label: "Trang chủ", href: ROUTES.MAIN.HOME },
    { label: "Blog" },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // (Phần JSX return giữ nguyên, chỉ thay đổi chỗ render SidebarItem)
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Cột Main */}
          <main className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {posts.length > 0 ? (
                posts.map((post) => <PostItem key={post.id} post={post} />)
              ) : (
                <p className="text-gray-500 md:col-span-2">
                  Chưa có bài viết nào.
                </p>
              )}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
                Sản phẩm gợi ý
              </h2>

              <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                {loopedProducts.length > 0 ? (
                  loopedProducts.map((product, index) => (
                    // 4. SỬ DỤNG COMPONENT ĐÃ IMPORT
                    <ProductSidebarItem
                      key={`${product.id}-${index}`}
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    Không có sản phẩm gợi ý.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* (Modal và Overlay giữ nguyên) */}
        {isModalLoading && (
          <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-[9998] flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {selectedProductDetail && (
          <ProductDetailModal
            isOpen={isModalOpen}
            onClose={closeModal}
            product={selectedProductDetail}
          />
        )}
      </div>
    </div>
  );
}
