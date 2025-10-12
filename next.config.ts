/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    domains: ['localhost', 'api.fruitshop.com', 'your-docker-api-host'],
    formats: ['image/webp', 'image/avif'],
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