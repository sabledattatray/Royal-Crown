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
  title: 'Royal Crown Gifts Toys Perfumes ®️ | Badlapur\'s Favorite Premium Gift & Toy Boutique',
  description: 'Buy premium gifts, toys, perfumes, custom acrylic name plates, personalized wallets, photo frames, and baby toys at Royal Crown Gifts Toys Perfumes Badlapur. Shop Online!',
  keywords: 'Royal Crown Badlapur, Royal Crown Gifts Toys Perfumes, gift shop Badlapur, customized name plates Badlapur, custom wallets, customized mugs, photo frames Badlapur East, premium toys Badlapur, perfumes Badlapur, online gift shopping',
  metadataBase: new URL('https://royalcrownfgt.com'),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Royal Crown | Badlapur\'s Favorite Premium Gift & Toy Boutique',
    description: 'Explore thousands of premium gifts, toys, perfumes, and customized items at Royal Crown Badlapur.',
    url: 'https://royalcrownfgt.com',
    siteName: 'Royal Crown',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Crown | Badlapur\'s Favorite Premium Gift & Toy Boutique',
    description: 'Explore thousands of premium gifts, toys, perfumes, and customized items at Royal Crown Badlapur.',
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
