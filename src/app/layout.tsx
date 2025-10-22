import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { AuthProvider } from '@/lib/contexts/AuthContext';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fruity Fruit - Tươi ngon mỗi ngày',
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'Fruity Fruit - Nông sản tươi ngon',
    description: 'Cửa hàng nông sản tươi ngon, chất lượng cao với giá cả hợp lý',
    siteName: 'Fruity Fruit',
    images: [
      {
        url: '/images/logos/Logo_Fruity_fruit.jpg',
        width: 1200,
        height: 630,
        alt: 'Fruity Fruit',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body className={'${inter.className} min-h-screen flex flex-col'}>
        <AuthProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
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