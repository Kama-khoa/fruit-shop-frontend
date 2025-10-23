/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    domains: ['localhost', 'api.fruitshop.com', 'your-docker-api-host','traicaytonyteo.com',"xoaisaydeo.com",'traicaynhapkhausach.vn',
      'encrypted-tbn0.gstatic.com','product.hstatic.net','nld.mediacdn.vn','cdn.tgdd.vn','bizweb.dktcdn.net'
      ,'cicin.vn','cdn.abphotos.link','www.lottemart.vn','potas.vn','buoidaxanh.com'
      ,'phunuvietnam.mediacdn.vn','delifruit.vn','media.tapchikinhtetaichinh.vn','dacsanchinhgoc.vn','dichothue.com.vn'
      ,'www.vietfuntravel.com.vn','nongsandungha.com','fujifruit.com.vn','danviet.ex-cdn.com','huucothuanthien.com','chonongsanonline.com',
      'eakmat.vn','www.conngongvang.com','',''
    ],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Cho phép tất cả các đường dẫn ảnh từ hostname này
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Thêm hostname của Cloudinary
        port: '',
        pathname: '/**', // Cho phép tất cả các đường dẫn con
      },
      {
        protocol: 'https',
        hostname: 'cdn.nhathuoclongchau.com.vn', 
        port: '',
        pathname: '/**', // Cho phép tất cả các đường dẫn con
      },
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_BACKEND_API_URL + '/:path*',
      },
    ];
  },
  
  output: 'standalone',
};

module.exports = nextConfig;