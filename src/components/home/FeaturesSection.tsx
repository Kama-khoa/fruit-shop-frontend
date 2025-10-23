import { PaymentIcon, PromotionIcon, QualityIcon, DeliveryIcon } from '@/components/ui/Icons';

interface Feature {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: PaymentIcon,
    title: 'Thanh toán linh hoạt',
    description:
      'Hỗ trợ thanh toán khi nhận hàng (COD) hoặc trực tuyến qua các cổng thanh toán an toàn.',
  },
  {
    Icon: PromotionIcon,
    title: 'Ưu đãi hấp dẫn',
    description:
      'Cập nhật thường xuyên sản phẩm mới cùng nhiều chương trình khuyến mãi đặc biệt mỗi ngày.',
  },
  {
    Icon: QualityIcon,
    title: 'Chất lượng đảm bảo',
    description:
      'Sản phẩm được kiểm duyệt kỹ lưỡng, cam kết nguồn gốc rõ ràng và độ bền vượt trội.',
  },
  {
    Icon: DeliveryIcon,
    title: 'Giao hàng nhanh chóng',
    description:
      'Dịch vụ giao hàng toàn quốc, nhận hàng tận nơi chỉ từ 1 giờ sau khi đặt.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Lý do chọn mua sắm tại <span className="text-primary-600">Tâm Đạt Store</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Mang đến trải nghiệm mua sắm hiện đại, tiện lợi và đáng tin cậy.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-full mb-4">
                <feature.Icon className="w-7 h-7" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
