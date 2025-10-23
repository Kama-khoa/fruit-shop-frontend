'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { ProductDetail, ProductVariant } from '@/types/product';
import { addToCart } from '@/lib/api/cart';
import QuantitySelector from '@/components/common/QuantitySelector';
import { Share2, GitCompare } from 'lucide-react';
import ProductRating from './ProductRating';
import { HeartIcon, XIcon } from '../ui/Icons';
import { useNavigation } from '@/lib/utils/navigation';
import { ROUTES } from '@/lib/utils/routes';
import axios from 'axios';
import AlertDialog from '@/components/common/AlertDialog';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDetailModalProps {
  product: ProductDetail;
  isOpen: boolean;
  onClose: () => void;
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { navigateTo } = useNavigation();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  // === Gộp ảnh ===
  const allImages = useMemo(() => {
    const variantImages = (() => {
      if (!selectedVariant?.image) return [];
      try {
        const parsed = JSON.parse(selectedVariant.image);
        return Array.isArray(parsed) ? parsed : [selectedVariant.image];
      } catch {
        return [selectedVariant.image];
      }
    })();

    const gallery = Array.isArray(product.images?.gallery)
      ? product.images.gallery
      : [];

    return [...variantImages, ...gallery].filter(Boolean);
  }, [selectedVariant, product.images]);

  // === Ảnh mặc định ===
  const getDefaultImage = () => {
    const thumb = Array.isArray(product.images?.thumbnail)
      ? product.images.thumbnail[0]
      : product.images?.thumbnail;
    return thumb || allImages[0] || '/images/default.png';
  };

  const [mainImage, setMainImage] = useState(getDefaultImage());

  useEffect(() => {
    setMainImage(getDefaultImage());
  }, [product.images, allImages]);

  // === Animation mở modal ===
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const handleAddToCart = async () => {
    if (!selectedVariant) return toast.error('Vui lòng chọn phiên bản.');

    setIsAdding(true);
    try {
      await addToCart({ variantId: selectedVariant.id, quantity });
      toast.success(`Đã thêm "${product.name}" vào giỏ hàng.`);
      onClose();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setIsAlertOpen(true);
      } else {
        toast.error('Không thể thêm sản phẩm. Vui lòng thử lại.');
      }
    } finally {
      setIsAdding(false);
    }
  };

  const handleLoginRedirect = () => {
    setIsAlertOpen(false);
    navigateTo(ROUTES.AUTH.LOGIN);
  };

  const currentPrice = selectedVariant?.price ?? parseFloat(product.price);
  const stockQuantity = selectedVariant?.stock_quantity ?? product.stock_quantity;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col lg:flex-row gap-8 p-8 relative border border-gray-100"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <XIcon className="w-6 h-6" />
            </button>

            {/* Hình ảnh */}
            <div className="flex-1 flex flex-col gap-4">
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-inner"
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/default.png';
                  }}
                  priority
                />
              </motion.div>

              {/* Thumbnail nhỏ */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {allImages.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setMainImage(img)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        mainImage === img
                          ? 'border-green-600 scale-105 shadow-lg'
                          : 'border-gray-200 hover:border-green-400 hover:scale-102'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name}-${i}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Thông tin */}
            <div className="flex-1 flex flex-col overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center flex-wrap gap-3 text-sm text-gray-500 mb-4">
                <ProductRating rating={product.rating || 0} />
                <span>({product.review_count || 0} đánh giá)</span>
                <span>• SKU: {selectedVariant?.sku || product.sku}</span>
                <span
                  className={`font-semibold ${
                    stockQuantity > 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stockQuantity > 0 ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </div>

              <div
                className="text-gray-600 text-sm mb-6 leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: product.short_description || '' }}
              />

              <div className="text-4xl font-bold text-green-700 mb-6">
                {formatCurrency(currentPrice)}
              </div>

              {/* Biến thể */}
              {product.variants?.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3 text-gray-700">
                    Chọn loại:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-5 py-2 border-2 rounded-full text-sm font-medium transition-all ${
                          selectedVariant?.id === v.id
                            ? 'bg-green-600 text-white border-green-600 shadow-md scale-105'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Thêm giỏ hàng */}
              <div className="flex items-center gap-4 mb-8">
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity((q) => q + 1)}
                  onDecrease={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  onSetQuantity={setQuantity}
                />
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding || stockQuantity <= 0}
                  className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-green-700 active:scale-95 transition-all duration-200 disabled:bg-gray-400"
                >
                  {isAdding ? 'Đang thêm...' : 'Thêm vào giỏ hàng'}
                </button>
              </div>

              {/* Hành động */}
              <div className="flex items-center gap-6 text-sm text-gray-600 pt-4 border-t">
                <button className="flex items-center gap-2 hover:text-green-600 transition">
                  <HeartIcon className="w-4 h-4" /> Yêu thích
                </button>
                <button className="flex items-center gap-2 hover:text-green-600 transition">
                  <Share2 size={16} /> Chia sẻ
                </button>
                <button className="flex items-center gap-2 hover:text-green-600 transition">
                  <GitCompare size={16} /> So sánh
                </button>
              </div>
            </div>
          </motion.div>

          <AlertDialog
            isOpen={isAlertOpen}
            onClose={() => setIsAlertOpen(false)}
            title="Yêu cầu đăng nhập"
            message="Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng."
            buttonText="Đăng nhập ngay"
            onButtonClick={handleLoginRedirect}
          />

          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #ccc;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #999;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
