import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Toy Shopee | Badlapur\'s Favorite Premium Toy & Gift Store',
  description: 'Buy premium toys, educational kits, board games, Hot Wheels, action figures, baby toys, and custom birthday return gifts in Badlapur East. Shop Online!',
  keywords: 'Toy store Badlapur, Toy Shopee Badlapur, kids gifts, educational toys, board games, Hot Wheels Badlapur East, return gifts, baby toys, online toy shopping',
  metadataBase: new URL('https://toyshopee.com'),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Toy Shopee | Badlapur\'s Favorite Premium Toy & Gift Store',
    description: 'Explore thousands of premium toys, games, and customized gifts at Badlapur\'s favorite toy shop.',
    url: 'https://toyshopee.com',
    siteName: 'Toy Shopee',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toy Shopee | Badlapur\'s Favorite Premium Toy & Gift Store',
    description: 'Explore thousands of premium toys, games, and customized gifts at Badlapur\'s favorite toy shop.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
