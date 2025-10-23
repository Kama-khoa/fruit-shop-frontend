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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    name,
    slug,
    price,
    compare_price,
    images,
    stock_quantity,
    variants,
    rating = 4,
    review_count,
  } = product;
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null
  );
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const initialImageUrl = (images && images.thumbnail) 
                          ? images.thumbnail 
                          : '/images/default.png';

  const [imageSrc, setImageSrc] = useState(initialImageUrl);
  const handleImageError = () => {
    setImageSrc("/images/default.png"); // Chuyển sang ảnh mặc định
  };

  const salePercentage =
    compare_price && parseFloat(compare_price) > parseFloat(price)
      ? Math.round(
          ((parseFloat(compare_price) - parseFloat(price)) /
            parseFloat(compare_price)) *
            100
        )
      : 0;

  const handleOpenDetail = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoadingDetail(true);
    toast.loading("Đang tải chi tiết...");
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
    } catch (error) {
      toast.error("Đã xảy ra lỗi.");
    } finally {
      setIsLoadingDetail(false);
      toast.dismiss();
    }
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Toggled wishlist for ${name}`);
  };

  return (
    <>
      <div
        onClick={handleOpenDetail}
        className="group w-full max-w-[208px] h-96 relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
      >
        <div className="relative w-full h-48 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            onError={handleImageError}
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, 208px" 
          />

          {salePercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-600 text-red-50 text-[10px] font-extrabold uppercase px-2 py-1 rounded-full">
              {salePercentage}%
            </div>
          )}

          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          >
            <HeartIcon className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-gray-950 text-sm font-medium font-['Inter'] leading-tight h-10 mb-2 overflow-hidden">
            {name}
          </h3>

          <div className="mb-3">
            <ProductRating rating={rating} />
          </div>

          <div className="mt-auto">
            <div className="mb-4">
              <ProductPrice price={price} compare_price={compare_price ?? undefined} />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleOpenDetail}
                className="w-11 h-9 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <ShoppingCartIcon className="w-5 h-5 text-white" />
              </button>
              {stock_quantity > 0 ? (
                <span className="text-green-600 text-xs font-bold font-['Inter'] uppercase">
                  Còn hàng
                </span>
              ) : (
                <span className="text-red-600 text-xs font-bold font-['Inter'] uppercase">
                  Hết hàng
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {isDetailModalOpen && productDetail && (
        <ProductDetailModal
          product={productDetail}
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
