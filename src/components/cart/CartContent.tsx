'use client';

import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const CartContent = () => {
  // Mock cart data - replace with real cart hook
  const cartItems = [
    {
      id: '1',
      name: 'Táo Fuji Nhật Bản',
      price: 150000,
      quantity: 2,
      image: '/images/apple.jpg'
    },
    {
      id: '2',
      name: 'Chuối sứ Việt Nam',
      price: 25000,
      quantity: 1,
      image: '/images/banana.jpg'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Giỏ hàng trống
          </h2>
          <p className="text-gray-600 mb-6">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <Link 
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Giỏ hàng của tôi
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="text-gray-400" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-green-600 font-medium">
                    {item.price.toLocaleString('vi-VN')} VNĐ
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Plus size={16} />
                  </button>
                </div>

                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{total.toLocaleString('vi-VN')} VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Tổng cộng:</span>
                <span className="text-green-600">{total.toLocaleString('vi-VN')} VNĐ</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full block text-center py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};