'use client';

import React from 'react';
import { Leaf, HeartHandshake, ShieldCheck, Globe2, Store, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen text-gray-700">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Heart className="w-12 h-12 text-green-700" />
        </div>
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Tâm Đạt – Thực phẩm hữu cơ vì sức khỏe cộng đồng
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Chúng tôi tin rằng sức khỏe và hạnh phúc bắt đầu từ những bữa ăn sạch. 
          Tâm Đạt cam kết mang đến những sản phẩm hữu cơ tươi ngon, an toàn và thân thiện với môi trường – 
          để mỗi gia đình Việt được tận hưởng trọn vẹn giá trị từ thiên nhiên.
        </p>
      </section>

      {/* Mission + Vision Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-7 h-7 text-green-600" />
            <h2 className="text-2xl font-semibold text-green-700">Sứ mệnh</h2>
          </div>
          <p>
            Mang đến cho khách hàng những thực phẩm hữu cơ đạt chuẩn, 
            góp phần xây dựng thói quen tiêu dùng lành mạnh và bền vững. 
            Chúng tôi hướng tới việc trở thành cầu nối giữa người nông dân chân chính và người tiêu dùng thông thái.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="w-7 h-7 text-green-600" />
            <h2 className="text-2xl font-semibold text-green-700">Tầm nhìn</h2>
          </div>
          <p>
            Trở thành thương hiệu tiên phong trong lĩnh vực thực phẩm hữu cơ tại Việt Nam, 
            góp phần lan tỏa lối sống xanh và nâng cao chất lượng cuộc sống của cộng đồng.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-green-700 text-white py-16 mt-10">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-8 flex items-center justify-center gap-2">
            <HeartHandshake className="w-8 h-8" /> Giá trị cốt lõi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <ShieldCheck className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Tận tâm</h3>
              <p className="text-sm leading-relaxed">
                Chúng tôi đặt chất lượng và sức khỏe khách hàng lên hàng đầu trong mọi sản phẩm.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Minh bạch</h3>
              <p className="text-sm leading-relaxed">
                Mọi quy trình sản xuất, nhập hàng và kiểm định đều được công khai rõ ràng, minh bạch.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Leaf className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Bền vững</h3>
              <p className="text-sm leading-relaxed">
                Tâm Đạt hướng tới phát triển hài hòa giữa lợi ích kinh doanh và bảo vệ môi trường sống.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10 flex items-center justify-center gap-2">
          <Store className="w-7 h-7" /> Hệ thống cửa hàng Tâm Đạt
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-green-600 mb-1">Cơ sở 1</h3>
            <p>Số 80, đường Láng Hạ, phường Láng Hạ, quận Đống Đa, Hà Nội.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-green-600 mb-1">Cơ sở 2</h3>
            <p>Số 150, phố Trần Bình, phường Mỹ Đình 2, quận Cầu Giấy, Hà Nội.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-green-600 mb-1">Cơ sở 3</h3>
            <p>Tầng 1, tòa N06.B2, khu đô thị Dịch Vọng, phường Dịch Vọng, quận Cầu Giấy, Hà Nội.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-green-600 mb-1">Cơ sở 4</h3>
            <p>Tầng 1, sảnh G3, KĐT Vinhomes Green Bay, phường Mễ Trì, quận Nam Từ Liêm, Hà Nội.</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} <span className="text-green-700 font-medium">Tâm Đạt</span>. 
        Tận tâm vì sức khỏe cộng đồng.
      </footer>
    </div>
  );
}
