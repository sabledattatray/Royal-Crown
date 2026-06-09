'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  Truck, 
  Gift, 
  Compass, 
  Star, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  MessageCircle,
  Map,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES, PRODUCTS, REVIEWS, Product } from '../data/mockData';
import { getStoreStatus, TimingsStatus } from '../utils/timings';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import GiftFinderWizard from '../components/GiftFinderWizard';

const getCategoryStyle = (slug: string) => {
  switch (slug) {
    case 'educational-toys':
      return 'border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700 bg-gradient-to-b from-blue-50/20 to-blue-50/5 hover:from-blue-50/40 hover:to-blue-50/10 dark:from-blue-950/5 dark:to-transparent dark:hover:from-blue-950/15 text-blue-600 dark:text-blue-400 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5';
    case 'baby-toys':
      return 'border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-700 bg-gradient-to-b from-pink-50/20 to-pink-50/5 hover:from-pink-50/40 hover:to-pink-50/10 dark:from-pink-950/5 dark:to-transparent dark:hover:from-pink-950/15 text-pink-600 dark:text-pink-400 hover:shadow-pink-500/10 dark:hover:shadow-pink-500/5';
    case 'remote-control-toys':
      return 'border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-400 dark:hover:border-emerald-700 bg-gradient-to-b from-emerald-50/20 to-emerald-50/5 hover:from-emerald-50/40 hover:to-emerald-50/10 dark:from-emerald-950/5 dark:to-transparent dark:hover:from-emerald-950/15 text-emerald-600 dark:text-emerald-400 hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5';
    case 'board-games':
      return 'border-purple-100 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-purple-700 bg-gradient-to-b from-purple-50/20 to-purple-50/5 hover:from-purple-50/40 hover:to-purple-50/10 dark:from-purple-950/5 dark:to-transparent dark:hover:from-purple-950/15 text-purple-600 dark:text-purple-400 hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5';
    case 'hot-wheels':
      return 'border-amber-100 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-amber-700 bg-gradient-to-b from-amber-50/20 to-amber-50/5 hover:from-amber-50/40 hover:to-amber-50/10 dark:from-amber-950/5 dark:to-transparent dark:hover:from-amber-950/15 text-amber-600 dark:text-amber-400 hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5';
    case 'action-figures':
      return 'border-rose-100 dark:border-rose-900/30 hover:border-rose-400 dark:hover:border-rose-700 bg-gradient-to-b from-rose-50/20 to-rose-50/5 hover:from-rose-50/40 hover:to-rose-50/10 dark:from-rose-950/5 dark:to-transparent dark:hover:from-rose-950/15 text-rose-600 dark:text-rose-400 hover:shadow-rose-500/10 dark:hover:shadow-rose-500/5';
    case 'soft-toys':
      return 'border-teal-100 dark:border-teal-900/30 hover:border-teal-400 dark:hover:border-teal-700 bg-gradient-to-b from-teal-50/20 to-teal-50/5 hover:from-teal-50/40 hover:to-teal-50/10 dark:from-teal-950/5 dark:to-transparent dark:hover:from-teal-950/15 text-teal-600 dark:text-teal-400 hover:shadow-teal-500/10 dark:hover:shadow-teal-500/5';
    case 'outdoor-toys':
      return 'border-sky-100 dark:border-sky-900/30 hover:border-sky-400 dark:hover:border-sky-700 bg-gradient-to-b from-sky-50/20 to-sky-50/5 hover:from-sky-50/40 hover:to-sky-50/10 dark:from-sky-950/5 dark:to-transparent dark:hover:from-sky-950/15 text-sky-600 dark:text-sky-400 hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5';
    case 'birthday-gifts':
      return 'border-indigo-100 dark:border-indigo-900/30 hover:border-indigo-400 dark:hover:border-indigo-700 bg-gradient-to-b from-indigo-50/20 to-indigo-50/5 hover:from-indigo-50/40 hover:to-indigo-50/10 dark:from-indigo-950/5 dark:to-transparent dark:hover:from-indigo-950/15 text-indigo-600 dark:text-indigo-400 hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5';
    case 'return-gifts':
      return 'border-fuchsia-100 dark:border-fuchsia-900/30 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 bg-gradient-to-b from-fuchsia-50/20 to-fuchsia-50/5 hover:from-fuchsia-50/40 hover:to-fuchsia-50/10 dark:from-fuchsia-950/5 dark:to-transparent dark:hover:from-fuchsia-950/15 text-fuchsia-600 dark:text-fuchsia-400 hover:shadow-fuchsia-500/10 dark:hover:shadow-fuchsia-500/5';
    case 'mens-perfumes':
      return 'border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700 bg-gradient-to-b from-blue-50/20 to-blue-50/5 hover:from-blue-50/40 hover:to-blue-50/10 dark:from-blue-950/5 dark:to-transparent dark:hover:from-blue-950/15 text-blue-600 dark:text-blue-400 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5';
    case 'womens-perfumes':
      return 'border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-700 bg-gradient-to-b from-pink-50/20 to-pink-50/5 hover:from-pink-50/40 hover:to-pink-50/10 dark:from-pink-950/5 dark:to-transparent dark:hover:from-pink-950/15 text-pink-600 dark:text-pink-400 hover:shadow-pink-500/10 dark:hover:shadow-pink-500/5';
    case 'attar-oils':
      return 'border-amber-100 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-amber-700 bg-gradient-to-b from-amber-50/20 to-amber-50/5 hover:from-amber-50/40 hover:to-amber-50/10 dark:from-amber-950/5 dark:to-transparent dark:hover:from-amber-950/15 text-amber-600 dark:text-amber-400 hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5';
    case 'jewellery':
      return 'border-rose-100 dark:border-rose-900/30 hover:border-rose-400 dark:hover:border-rose-700 bg-gradient-to-b from-rose-50/20 to-rose-50/5 hover:from-rose-50/40 hover:to-rose-50/10 dark:from-rose-950/5 dark:to-transparent dark:hover:from-rose-950/15 text-rose-600 dark:text-rose-400 hover:shadow-rose-500/10 dark:hover:shadow-rose-500/5';
    case 'watches-clocks':
      return 'border-indigo-100 dark:border-indigo-900/30 hover:border-indigo-400 dark:hover:border-indigo-700 bg-gradient-to-b from-indigo-50/20 to-indigo-50/5 hover:from-indigo-50/40 hover:to-indigo-50/10 dark:from-indigo-950/5 dark:to-transparent dark:hover:from-indigo-950/15 text-indigo-600 dark:text-indigo-400 hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5';
    case 'wallets':
      return 'border-teal-100 dark:border-teal-900/30 hover:border-teal-400 dark:hover:border-teal-700 bg-gradient-to-b from-teal-50/20 to-teal-50/5 hover:from-teal-50/40 hover:to-teal-50/10 dark:from-teal-950/5 dark:to-transparent dark:hover:from-teal-950/15 text-teal-600 dark:text-teal-400 hover:shadow-teal-500/10 dark:hover:shadow-teal-500/5';
    case 'greetings':
      return 'border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-400 dark:hover:border-emerald-700 bg-gradient-to-b from-emerald-50/20 to-emerald-50/5 hover:from-emerald-50/40 hover:to-emerald-50/10 dark:from-emerald-950/5 dark:to-transparent dark:hover:from-emerald-950/15 text-emerald-600 dark:text-emerald-400 hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5';
    case 'name-plates':
      return 'border-violet-100 dark:border-violet-900/30 hover:border-violet-400 dark:hover:border-violet-700 bg-gradient-to-b from-violet-50/20 to-violet-50/5 hover:from-violet-50/40 hover:to-violet-50/10 dark:from-violet-950/5 dark:to-transparent dark:hover:from-violet-950/15 text-violet-600 dark:text-violet-400 hover:shadow-violet-500/10 dark:hover:shadow-violet-500/5';
    case 'corporate-gifting':
      return 'border-amber-100 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-amber-700 bg-gradient-to-b from-amber-50/20 to-amber-50/5 hover:from-amber-50/40 hover:to-amber-50/10 dark:from-amber-950/5 dark:to-transparent dark:hover:from-amber-950/15 text-amber-600 dark:text-amber-400 hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5';
    case 'photo-frames':
      return 'border-fuchsia-100 dark:border-fuchsia-900/30 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 bg-gradient-to-b from-fuchsia-50/20 to-fuchsia-50/5 hover:from-fuchsia-50/40 hover:to-fuchsia-50/10 dark:from-fuchsia-950/5 dark:to-transparent dark:hover:from-fuchsia-950/15 text-fuchsia-600 dark:text-fuchsia-400 hover:shadow-fuchsia-500/10 dark:hover:shadow-fuchsia-500/5';
    default:
      return 'border-[var(--border)] hover:border-primary/45 bg-[var(--card)] text-primary hover:shadow-lg';
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'best' | 'new' | 'trend' | 'offer'>('best');
  const [storeStatus, setStoreStatus] = useState<TimingsStatus | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wizardOpen, setWizardOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStoreStatus(getStoreStatus());
    }, 0);
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 30000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'best':
        return PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
      case 'new':
        return PRODUCTS.filter(p => p.isNew).slice(0, 4);
      case 'trend':
        return PRODUCTS.filter(p => p.isTrending).slice(0, 4);
      case 'offer':
        return PRODUCTS.filter(p => p.isOffer).slice(0, 4);
      default:
        return PRODUCTS.slice(0, 4);
    }
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Gandhi+Chowk+Badlapur+East', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-50 dark:bg-slate-950 py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/15 blur-3xl" />

        {/* Floating Toy Emojis */}
        <div className="absolute top-[15%] left-[5%] text-4xl animate-float-slow select-none pointer-events-none opacity-40">🧸</div>
        <div className="absolute top-[60%] left-[8%] text-3xl animate-float-medium select-none pointer-events-none opacity-30">🚀</div>
        <div className="absolute top-[20%] right-[10%] text-4xl animate-float-slow select-none pointer-events-none opacity-30">🎈</div>
        <div className="absolute top-[75%] right-[15%] text-3xl animate-float-medium select-none pointer-events-none opacity-40">🏎️</div>
        <div className="absolute top-[40%] right-[5%] text-2xl animate-wiggle select-none pointer-events-none opacity-25">🧩</div>
        <div className="absolute bottom-[10%] left-[30%] text-3xl animate-wiggle select-none pointer-events-none opacity-30">🎨</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Texts */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Premium Welcome Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary animate-pulse-soft">
                <Sparkles size={14} className="animate-spin-slow text-secondary" />
                <span>Premium Gifts, Toys & Perfumes Boutique</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-black tracking-tight leading-none text-slate-900 dark:text-white">
                <span className="text-slate-800 dark:text-white">Badlapur&apos;s Favorite</span><br />
                <span className="text-primary-playful drop-shadow-sm inline-block hover:scale-105 hover:rotate-3 transition-transform">Gift</span>{' '}
                <span className="text-slate-800 dark:text-white">&</span>{' '}
                <span className="text-secondary-playful drop-shadow-sm">Toy</span>{' '}
                <span className="text-slate-800 dark:text-white">Boutique</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl leading-relaxed mx-auto lg:mx-0">
                Thousands of premium gifts, custom acrylic name plates, personalized wallets, photo frames, games, toys, and luxury perfumes. Curated for your special moments!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/shop"
                  className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-bold shadow-lg shadow-primary/20 text-center hover:scale-105 active:scale-95 transition-all cursor-pointer hover:animate-wobble-hover"
                >
                  Shop Now
                </Link>
                <button
                  onClick={() => setWizardOpen(true)}
                  className="px-8 py-4 bg-[var(--card)] hover:bg-[var(--accent-light)] border border-[var(--border)] text-[var(--foreground)] rounded-2xl font-bold flex items-center justify-center space-x-2 text-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Gift size={18} className="text-primary animate-bounce" />
                  <span>Launch Gift Finder</span>
                </button>
              </div>

              {/* Timings Live Status */}
              {storeStatus && (
                <div className="flex items-center justify-center lg:justify-start space-x-3 pt-4">
                  <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    storeStatus.isOpen ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-success animate-pulse' : 'bg-red-500'}`} />
                    <span>{storeStatus.statusMessage}</span>
                  </div>
                  <span className="text-xs text-[var(--muted)] font-medium">({storeStatus.countdownText})</span>
                </div>
              )}

            </div>

            {/* Right Hero Image Card Grid */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 card-shadow bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80"
                  alt="Premium gifts selection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs font-bold text-secondary flex items-center space-x-1">
                      <Star size={12} fill="currentColor" />
                      <span>4.9 / 5 Google Rating</span>
                    </div>
                    <h2 className="font-poppins font-bold text-base leading-tight">Visit Shop at Gandhi Chowk, Badlapur East</h2>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-[var(--border)] mt-16 text-center">
            {[
              { icon: <Truck className="text-primary animate-bounce-soft" size={24} />, title: 'Free Local Delivery', desc: 'Across Badlapur East/West' },
              { icon: <ShieldCheck className="text-secondary" size={24} />, title: 'Secure Payments', desc: 'UPI, Cards & COD Accepted' },
              { icon: <Compass className="text-accent animate-spin-slow" size={24} />, title: 'Huge Collection', desc: '1000+ Toys, Games & Books' },
              { icon: <Award className="text-green-500 animate-pulse-soft" size={24} />, title: 'Trusted Local Store', desc: 'Serving local families since years' }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] card-shadow hover:scale-105 hover:border-primary/20 transition-all duration-300">
                <div className="p-3 bg-[var(--background)] rounded-full shadow-sm">{f.icon}</div>
                <h3 className="font-bold text-sm text-[var(--foreground)]">{f.title}</h3>
                <p className="text-xs text-[var(--muted)]">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
        {/* Curvy Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-[var(--background)] fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.47,26.7,188.75,51.52,263.8,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* SHOP BY RECIPIENT & OCCASION GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-bold text-secondary-hover animate-pulse-soft">
            <Sparkles size={12} className="text-secondary" />
            <span>Curated Gifting</span>
          </span>
          <h2 className="text-3xl font-poppins font-black text-[var(--foreground)] tracking-tight">Gifting for Everyone</h2>
          <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">Find the perfect products and toys tailored for every milestone, age group, or special recipient</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            { href: '/categories/baby-toys', label: 'Infants (0-3 Y)', icon: '👶', bg: 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/30 hover:shadow-lg hover:shadow-rose-500/5' },
            { href: '/categories/educational-toys', label: 'Kids Playtime', icon: '🧸', bg: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30 hover:shadow-lg hover:shadow-amber-500/5' },
            { href: '/categories/remote-control-toys', label: 'RC & Gaming', icon: '🎮', bg: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/30 hover:shadow-lg hover:shadow-indigo-500/5' },
            { href: '/categories/womens-perfumes', label: 'Gifts for Her', icon: '👗', bg: 'bg-pink-50 hover:bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950/20 dark:text-pink-400 dark:border-pink-900/30 hover:shadow-lg hover:shadow-pink-500/5' },
            { href: '/categories/mens-perfumes', label: 'Gifts for Him', icon: '👔', bg: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30 hover:shadow-lg hover:shadow-blue-500/5' },
            { href: '/categories/corporate-gifting', label: 'Office & Home', icon: '🏢', bg: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30 hover:shadow-lg hover:shadow-emerald-500/5' },
          ].map((item, idx) => (
            <Link 
              key={idx}
              href={item.href}
              className={`flex flex-col items-center justify-center w-28 h-28 rounded-full border shadow-sm transition-all duration-500 hover:scale-110 active:scale-95 hover:rotate-3 cursor-pointer ${item.bg}`}
            >
              <span className="text-3.5xl animate-bounce-soft" style={{ animationDelay: `${idx * 0.15}s` }}>{item.icon}</span>
              <span className="text-[10.5px] font-black mt-1.5 text-center leading-tight tracking-wide uppercase px-2">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Explore Categories</h2>
          <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">Browse products specifically curated by category interests, gifts, toys, and luxury perfumes</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => {
            const productCount = PRODUCTS.filter((p) => p.category.toLowerCase() === cat.name.toLowerCase()).length;
            return (
              <Link 
                key={cat.id} 
                href={`/categories/${cat.slug}`}
                className={`group relative border rounded-[32px] p-6 flex flex-col items-center justify-between text-center overflow-hidden cursor-pointer card-shadow transition-all duration-500 hover:scale-105 hover:-translate-y-1.5 hover:rotate-1 hover:shadow-xl ${getCategoryStyle(cat.slug)}`}
              >
                {/* Background Shimmer/Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex flex-col items-center space-y-4 w-full">
                  <div className="relative">
                    {/* Glowing aura background on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-current opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                    
                    <span className="text-4xl p-5 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-black rounded-3xl shadow-sm border border-slate-200/50 dark:border-white/5 relative flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {cat.image}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-poppins font-bold text-sm text-[var(--foreground)] group-hover:text-current transition-colors line-clamp-1">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[var(--muted)] group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    {productCount} {productCount === 1 ? 'Product' : 'Products'}
                  </span>
                  
                  <div className="flex items-center justify-center space-x-1 mt-2 text-[9px] font-black uppercase tracking-wider text-primary dark:text-secondary opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS (TABS) */}
      <section className="relative py-28 bg-slate-50 dark:bg-slate-950/40">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[1px] rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[32px] text-[var(--background)] fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.47,26.7,188.75,51.52,263.8,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Featured Toys</h2>
              <p className="text-sm text-[var(--muted)]">Our top recommendations for your little ones</p>
            </div>
            
            {/* Tab Toggles */}
            <div className="flex flex-wrap justify-center gap-2.5 p-1.5 bg-[var(--card)] border border-[var(--border)] rounded-2xl self-center md:self-auto">
              {([
                { id: 'best', label: 'Best Sellers' },
                { id: 'new', label: 'New Arrivals' },
                { id: 'trend', label: 'Trending' },
                { id: 'offer', label: 'Special Offers' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Products Display Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {getFilteredProducts().map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setSelectedProduct} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:underline hover:text-primary-hover group"
            >
              <span>Browse Entire Shop Catalog</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[32px] text-[var(--background)] fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.47,26.7,188.75,51.52,263.8,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* BIRTHDAY & RETURN GIFTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] premium-gradient text-white overflow-hidden relative p-8 sm:p-16 card-shadow">
          <div className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-secondary">
                <Gift size={12} />
                <span>Special Celebration Services</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-poppins font-black leading-none tracking-tight">
                Planning a Birthday Party?<br />
                We Curate Return Gifts!
              </h2>
              
              <p className="text-sm text-white/90 max-w-xl mx-auto lg:mx-0">
                Looking for customized return gifts? We curate perfect gift bundles for kids and adults at exclusive bulk pricing. Talk to our gift specialists today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-secondary hover:bg-secondary-hover text-slate-900 font-extrabold rounded-2xl text-sm transition-transform hover:scale-105 active:scale-95 text-center shadow-lg shadow-black/10"
                >
                  Book Bulk Inquiry
                </Link>
                <a
                  href="https://wa.me/919112270222?text=Hi%20Royal%20Crown!%20I%20am%20interested%20in%20customized%20birthday%20return%20gifts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl text-sm transition-transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-black/10"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden bg-white/10 rounded-3xl border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80"
                  alt="Custom gift box"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS TRUST US */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950/30">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[1px] rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[32px] text-[var(--background)] fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.47,26.7,188.75,51.52,263.8,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Why Choose Royal Crown</h2>
            <p className="text-sm text-[var(--muted)]">Serving happiness, creativity, and premium quality since inception</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { icon: '⭐', title: 'Huge Collection', desc: 'From custom acrylic name plates and premium leather wallets to imported toys, games, and rich perfumes.' },
              { icon: '💰', title: 'Affordable Options', desc: 'Get competitive local retail pricing, seasonal discounts, festival campaigns, and customized budget return gift sets.' },
              { icon: '📍', title: 'Trusted Local Business', desc: 'Shop with confidence. Support a local brick-and-mortar business near ZP Marathi School at Gandhi Chowk, Badlapur East.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-[var(--border)] bg-[var(--card)] rounded-3xl card-shadow">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-poppins font-bold text-lg mb-2 text-[var(--foreground)]">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[32px] text-[var(--background)] fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.47,26.7,188.75,51.52,263.8,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* GOOGLE CUSTOMER REVIEWS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[var(--border)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Customer Reviews</h2>
            <p className="text-sm text-[var(--muted)]">Real opinions from customers who shop at Royal Crown Badlapur</p>
          </div>
          <div className="flex flex-col items-center md:items-end flex-shrink-0">
            <div className="flex items-center space-x-1 text-amber-500 mb-1">
              <Star size={18} fill="currentColor" />
              <span className="font-bold text-base text-[var(--foreground)]">
                {(REVIEWS.reduce((acc, curr) => acc + curr.rating, 0) / REVIEWS.length).toFixed(1)} / 5
              </span>
              <span className="text-xs text-[var(--muted)]">(Google Reviews)</span>
            </div>
            <Link href="/reviews" className="text-xs font-bold text-primary hover:underline">View All Reviews →</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-3xl card-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={rev.avatar} 
                      alt={rev.author} 
                      className="w-10 h-10 rounded-full object-cover border border-[var(--border)]"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[var(--foreground)]">{rev.author}</h4>
                      <span className="text-[10px] text-[var(--muted)]">{rev.date}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        size={14} 
                        fill={idx < rev.rating ? 'currentColor' : 'none'} 
                        className={idx < rev.rating ? 'text-amber-500' : 'text-slate-300 dark:text-slate-700'} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {rev.response && (
                <div className="mt-4 p-3 bg-[var(--accent-light)] rounded-xl border border-[var(--border)] text-xs text-[var(--foreground)]">
                  <span className="font-bold text-primary">Response from Owner: </span>
                  {rev.response}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION & GOOGLE MAPS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Visit Our Store</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              We are conveniently located at Gandhi Chowk in Badlapur East, opposite ZP Marathi School. Come visit us to explore custom gifts, touch and feel premium quality toys, and sample our premium perfumes!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Shop No 05 - Nav Sai Krupa society, Opposite ZP Marathi school, Gandhi Chowk, East, Badlapur, Maharashtra 421503
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneCall size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:09112270222" className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer">09112270222</a>
              </div>
            </div>

            <button
              onClick={handleDirections}
              className="flex items-center justify-center space-x-2 py-3 px-6 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md transition-all self-start cursor-pointer hover:scale-105 active:scale-95"
            >
              <Map size={16} />
              <span>Get Directions on Google Maps</span>
            </button>
          </div>

          {/* Map iframe */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] border border-[var(--border)] rounded-[32px] overflow-hidden shadow-lg relative bg-slate-100 dark:bg-slate-900">
            <iframe
              title="Royal Crown Location Map"
              src="https://maps.google.com/maps?q=Royal%20Crown%20Gifts%20Toys%20Perfumes%20Gandhi%20Chowk%20Badlapur%20East&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] border-0 dark:invert-[90%] dark:hue-rotate-[180deg] dark:brightness-[90%] dark:contrast-[110%] transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* MODAL HOOKS */}
      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <GiftFinderWizard 
        isOpen={wizardOpen} 
        onClose={() => setWizardOpen(false)} 
      />

    </div>
  );
}
