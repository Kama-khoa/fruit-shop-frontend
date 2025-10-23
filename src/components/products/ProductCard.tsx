"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, ProductDetail } from "@/types/product";
import toast from "react-hot-toast";
import { HeartIcon, ShoppingCartIcon } from "@/components/ui/Icons";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import { getProductById } from "@/lib/api/products";
import ProductDetailModal from "./ProductDetailModal";
import { createPortal } from "react-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    name,
    price,
    compare_price,
    images,
    stock_quantity,
    rating = 4,
  } = product;

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const getThumbnailSrc = () => {
    if (images?.thumbnail) {
      if (Array.isArray(images.thumbnail)) {
        return images.thumbnail[0] || "/images/default.png";
      }
      if (typeof images.thumbnail === "string") {
        return images.thumbnail || "/images/default.png";
      }
    }
    return "/images/default.png";
  };

  const [imageSrc, setImageSrc] = useState(getThumbnailSrc());
  const handleImageError = () => setImageSrc("/images/default.png");

  const salePercentage =
    compare_price && parseFloat(compare_price) > parseFloat(price)
      ? Math.round(
          ((parseFloat(compare_price) - parseFloat(price)) /
            parseFloat(compare_price)) *
            100
        )
      : 0;

  const handleOpenDetail = async () => {
    setIsLoadingDetail(true);
    toast.loading("Đang tải chi tiết sản phẩm...");
    try {
      const detailData = await getProductById(
        typeof id === "string" ? parseInt(id, 10) : id
      );
      if (detailData) {
        setProductDetail(detailData);
        setIsDetailModalOpen(true);
      } else {
        toast.error("Không thể tải chi tiết sản phẩm.");
      }
    } catch {
      toast.error("Đã xảy ra lỗi khi tải dữ liệu.");
    } finally {
      toast.dismiss();
      setIsLoadingDetail(false);
    }
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success("Đã thêm vào danh sách yêu thích 💖");
  };


  return (
    <>
      <div
        onClick={handleOpenDetail}
        className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-emerald-400 relative"
      >
        {/* Ảnh sản phẩm */}
        <div className="relative w-full aspect-[4/5] bg-gray-50 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            onError={handleImageError}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Badge giảm giá */}
          {salePercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              -{salePercentage}%
            </div>
          )}

          {/* Nút yêu thích */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h3 className="text-gray-800 font-semibold text-base line-clamp-2 leading-tight">
            {name}
          </h3>

          <ProductRating rating={rating} />

          <ProductPrice price={price} compare_price={compare_price ?? undefined} />

          {/* Trạng thái & nút thêm giỏ */}
          <div className="flex items-center justify-between mt-3">
            {stock_quantity > 0 ? (
              <span className="text-emerald-600 text-sm font-medium">
                Còn hàng
              </span>
            ) : (
              <span className="text-red-500 text-sm font-medium">Hết hàng</span>
            )}

            <button
              onClick={handleOpenDetail}
              className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold shadow hover:shadow-md"
            >
              <ShoppingCartIcon className="w-4 h-4" />
              Thêm
            </button>
          </div>
        </div>
      </div>

      {/* Modal chi tiết sản phẩm */}
      {isDetailModalOpen && productDetail && (
        createPortal(
          <ProductDetailModal
            product={productDetail}
            isOpen={isDetailModalOpen}
            onClose={() => setIsDetailModalOpen(false)}
          />,
          document.body // 👈 Quan trọng: render modal ra body
        )
      )}
    </>
  );
};

export default ProductCard;