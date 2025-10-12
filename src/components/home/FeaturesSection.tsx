export default function FeaturesSection() {
  const features = [
    {
      icon: '💳',
      title: 'Thanh toán COD và trực tuyến',
      description: 'Hỗ trợ cả thanh toán khi nhận hàng và thanh toán trực tuyến nhanh chóng, an toàn.',
    },
    {
      icon: '🎁',
      title: 'Sản phẩm mới & khuyến mãi',
      description: 'Cập nhật thường xuyên mẫu mã mới, nhiều ưu đãi hấp dẫn mỗi ngày.',
    },
    {
      icon: '✅',
      title: 'Chất lượng đảm bảo',
      description: 'Sản phẩm được kiểm duyệt kỹ lưỡng, cam kết chất lượng và nguồn gốc rõ ràng.',
    },
    {
      icon: '🚚',
      title: 'Giao hàng tận nơi',
      description: 'Nhận hàng nhanh chóng ngay tại nhà chỉ từ 1 giờ sau khi đặt.',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-8 my-12">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4">
          <div className="text-5xl">{feature.icon}</div>
          <div>
            <h3 className="font-bold text-gray-950 mb-1">{feature.title}</h3>
            <p className="text-xs text-gray-500 leading-tight">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}