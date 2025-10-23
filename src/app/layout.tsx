import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { AuthProvider } from '@/lib/contexts/AuthContext';
import type { Metadata } from 'next';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TÂM ĐẠT - Thực phẩm hữu cơ',
  icons: {
    icon: '/logo_image.png',
  },
  description: 'Cửa hàng nông sản tươi ngon, chất lượng cao với giá cả hợp lý',
  keywords: 'nông sản, trái cây, tươi ngon, organic, healthy, vitamin',
  authors: [{ name: 'Fruity Fruit Team' }],
  creator: 'Fruity Fruit',
  publisher: 'Fruity Fruit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL|| ''),
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'TÂM ĐẠT - Thực phẩm hữu cơ',
    description: 'Cửa hàng nông sản tươi ngon, chất lượng cao với giá cả hợp lý',
    siteName: 'TÂM ĐẠT',
    images: [
      {
        url: '/logo_image.png',
        width: 1200,
        height: 630,
        alt: 'TÂM ĐẠT',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const HeaderLoading = () => {
    return <header className="w-full h-[140px] bg-gray-100 animate-pulse"></header>
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <AuthProvider>
          <Suspense fallback={<HeaderLoading />}>
          <Header />
          </Suspense>
          
          <div className="flex-grow overflow-y-auto">
            <main className="flex-grow ">
              {children}
            </main>
            <Footer />
          </div>
            
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                style: {
                  background: '#10B981',
                },
              },
              error: {
                duration: 5000,
                style: {
                  background: '#EF4444',
                },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}