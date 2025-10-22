import { PaymentIcon, PromotionIcon, QualityIcon, DeliveryIcon } from '@/components/ui/Icons';

const features = [
  {
    Icon: PaymentIcon,
    title: 'Thanh toán COD và trực tuyến',
    description: 'Hỗ trợ cả thanh toán khi nhận hàng và thanh toán trực tuyến nhanh chóng, an toàn.',
  },
  {
    Icon: PromotionIcon,
    title: 'Sản phẩm mới & khuyến mãi',
    description: 'Cập nhật thường xuyên mẫu mã mới, nhiều ưu đãi hấp dẫn mỗi ngày.',
  },
  {
    Icon: QualityIcon,
    title: 'Chất lượng đảm bảo',
    description: 'Sản phẩm được kiểm duyệt kỹ lưỡng, cam kết chất lượng và nguồn gốc rõ ràng.',
  },
  {
    Icon: DeliveryIcon,
    title: 'Giao hàng tận nơi',
    description: 'Nhận hàng nhanh chóng ngay tại nhà chỉ từ 1 giờ sau khi đặt.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <feature.Icon />
              </div>
              <div className="ml-4">
                <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

