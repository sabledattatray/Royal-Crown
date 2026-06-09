'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Truck, 
  Gift, 
  Compass, 
  Star, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
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
      return 'bg-blue-50/40 hover:bg-blue-50/80 dark:bg-blue-950/10 dark:hover:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-400';
    case 'baby-toys':
      return 'bg-pink-50/40 hover:bg-pink-50/80 dark:bg-pink-950/10 dark:hover:bg-pink-950/20 border-pink-200 dark:border-pink-900/30 text-pink-600 dark:text-pink-400';
    case 'remote-control-toys':
      return 'bg-emerald-50/40 hover:bg-emerald-50/80 dark:bg-emerald-950/10 dark:hover:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400';
    case 'board-games':
      return 'bg-purple-50/40 hover:bg-purple-50/80 dark:bg-purple-950/10 dark:hover:bg-purple-950/20 border-purple-200 dark:border-purple-900/30 text-purple-600 dark:text-purple-400';
    case 'hot-wheels':
      return 'bg-amber-50/40 hover:bg-amber-50/80 dark:bg-amber-950/10 dark:hover:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 text-amber-600 dark:text-amber-400';
    case 'action-figures':
      return 'bg-rose-50/40 hover:bg-rose-50/80 dark:bg-rose-950/10 dark:hover:bg-rose-950/20 border-rose-200 dark:border-rose-900/30 text-rose-600 dark:text-rose-400';
    case 'soft-toys':
      return 'bg-teal-50/40 hover:bg-teal-50/80 dark:bg-teal-950/10 dark:hover:bg-teal-950/20 border-teal-200 dark:border-teal-900/30 text-teal-600 dark:text-teal-400';
    case 'outdoor-toys':
      return 'bg-sky-50/40 hover:bg-sky-50/80 dark:bg-sky-950/10 dark:hover:bg-sky-950/20 border-sky-200 dark:border-sky-900/30 text-sky-600 dark:text-sky-400';
    case 'birthday-gifts':
      return 'bg-indigo-50/40 hover:bg-indigo-50/80 dark:bg-indigo-950/10 dark:hover:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400';
    case 'return-gifts':
      return 'bg-fuchsia-50/40 hover:bg-fuchsia-50/80 dark:bg-fuchsia-950/10 dark:hover:bg-fuchsia-950/20 border-fuchsia-200 dark:border-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400';
    default:
      return 'bg-[var(--card)] hover:bg-[var(--accent-light)] border-[var(--border)] text-primary';
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'best' | 'new' | 'trend' | 'offer'>('best');
  const [storeStatus, setStoreStatus] = useState<TimingsStatus | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wizardOpen, setWizardOpen] = useState(false);

  useEffect(() => {
    setStoreStatus(getStoreStatus());
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 30000);
    return () => clearInterval(interval);
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
    window.open('https://maps.google.com/?q=Toy+Shopee+Kartik+Complex+Badlapur+East', '_blank');
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
                <span>Premium Kids Toy Boutique</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-black tracking-tight leading-none text-slate-900 dark:text-white">
                <span className="text-slate-800 dark:text-white">Badlapur's Favorite</span><br />
                <span className="text-primary-playful drop-shadow-sm inline-block hover:scale-105 hover:rotate-3 transition-transform">Toy</span>{' '}
                <span className="text-secondary-playful drop-shadow-sm">Store</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl leading-relaxed mx-auto lg:mx-0">
                Thousands of premium toys, strategic board games, interactive educational kits, action figures, Hot Wheels, and custom birthday return gifts. Built to inspire minds and ignite laughter!
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
                <img
                  src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?auto=format&fit=crop&w=800&q=80"
                  alt="Premium toys selection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs font-bold text-secondary flex items-center space-x-1">
                      <Star size={12} fill="currentColor" />
                      <span>4.8 / 5 Google Rating</span>
                    </div>
                    <h2 className="font-poppins font-bold text-base leading-tight">Visit Shop Near Municipal Corporation, Badlapur East</h2>
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

      {/* SHOP BY AGE BUBBLE GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-bold text-secondary-hover animate-pulse-soft">
            <Sparkles size={12} className="text-secondary" />
            <span>Curated Collections</span>
          </span>
          <h2 className="text-3xl font-poppins font-black text-[var(--foreground)] tracking-tight">Shop by Age Group</h2>
          <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">Find the perfect toys tailored for every development milestone</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            { age: '0-12', label: '0-12 Months', icon: '👶', bg: 'bg-rose-100 hover:bg-rose-200 text-rose-700 border-rose-200 dark:bg-rose-950/25 dark:text-rose-400' },
            { age: '1-3', label: '1-3 Years', icon: '🧸', bg: 'bg-amber-100 hover:bg-amber-200 text-amber-700 border-amber-200 dark:bg-amber-950/25 dark:text-amber-400' },
            { age: '3-5', label: '3-5 Years', icon: '🧩', bg: 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border-emerald-200 dark:bg-emerald-950/25 dark:text-emerald-400' },
            { age: '6-8', label: '6-8 Years', icon: '🎮', bg: 'bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200 dark:bg-blue-950/25 dark:text-blue-400' },
            { age: '8-12', label: '8-12 Years', icon: '🚀', bg: 'bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-200 dark:bg-purple-950/25 dark:text-purple-400' },
            { age: '12+', label: '12+ Years', icon: '👾', bg: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700 border-indigo-200 dark:bg-indigo-950/25 dark:text-indigo-400' },
          ].map((item, idx) => (
            <Link 
              key={idx}
              href={`/shop?age=${encodeURIComponent(item.age)}`}
              className={`flex flex-col items-center justify-center w-24 h-24 rounded-full border shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-3 cursor-pointer ${item.bg}`}
            >
              <span className="text-3.5xl animate-bounce-soft" style={{ animationDelay: `${idx * 0.15}s` }}>{item.icon}</span>
              <span className="text-[10px] font-extrabold mt-1 text-center leading-tight">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Explore Categories</h2>
          <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">Browse toys specifically curated by category interests to support development and play</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/categories/${cat.slug}`}
              className={`group border rounded-[32px] p-6 flex flex-col items-center text-center space-y-4 cursor-pointer card-shadow transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-1 hover:border-primary/20 ${getCategoryStyle(cat.slug)}`}
            >
              <span className="text-4xl p-4 bg-[var(--background)] rounded-2xl shadow-sm group-hover:scale-110 group-hover:rotate-6 group-hover:animate-wiggle transition-all duration-300">
                {cat.image}
              </span>
              <div>
                <h3 className="font-poppins font-bold text-sm group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[11px] font-semibold opacity-80">
                  {PRODUCTS.filter((p) => p.category.toLowerCase() === cat.name.toLowerCase()).length} Products
                </span>
              </div>
            </Link>
          ))}
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
              {[
                { id: 'best', label: 'Best Sellers' },
                { id: 'new', label: 'New Arrivals' },
                { id: 'trend', label: 'Trending' },
                { id: 'offer', label: 'Special Offers' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
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
              
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-lg">
                Make your child’s celebration memorable. We offer custom-wrapped birthday gift baskets, bulk toy packs, party packages, and school events items with competitive pricing and express delivery in Badlapur.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/categories/return-gifts"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold shadow-md text-center hover:scale-105 active:scale-95 transition-all"
                >
                  Explore Return Gifts
                </Link>
                <a
                  href="https://wa.me/919730044342?text=Hi%20Toy%20Shopee,%20I%20want%20to%20enquire%20about%20birthday%20return%20gifts%20bulk%20orders."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-success hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 text-center hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden bg-white/10 rounded-3xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80"
                  alt="Custom gift box"
                  className="w-full h-full object-cover"
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
            <h2 className="text-3xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight">Why Choose Toy Shopee</h2>
            <p className="text-sm text-[var(--muted)]">Serving happiness, learning, and quality since inception</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { icon: '⭐', title: 'Huge Collection', desc: 'From infant rattles to advanced STEM coding robots and rare Hot Wheels tracks, we source the finest toys globally.' },
              { icon: '💰', title: 'Affordable Options', desc: 'Get competitive local retail pricing, seasonal discounts, festival campaigns, and customized budget return gift sets.' },
              { icon: '📍', title: 'Trusted Local Business', desc: 'Shop with confidence. Support a local brick-and-mortar business near Kartik Complex in Badlapur East.' }
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
            <p className="text-sm text-[var(--muted)]">Real opinions from families who shop at Toy Shopee Badlapur</p>
          </div>
          <div className="flex flex-col items-center md:items-end flex-shrink-0">
            <div className="flex items-center space-x-1 text-amber-500 mb-1">
              <Star size={18} fill="currentColor" />
              <span className="font-bold text-base text-[var(--foreground)]">3.8 / 5</span>
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
                  "{rev.text}"
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
              We are conveniently located in Kartik Complex near the Badlapur Municipal Corporation in Badlapur East. Come with your kids to touch, feel, and try out our products before making a choice!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Shop No. 11/12, Kartik Complex, Near Municipal Corporation, Badlapur East, Maharashtra 421503
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneCall size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+919730044342" className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer">+91 97300 44342</a>
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
              title="Toy Shopee Location Map"
              src="https://maps.google.com/maps?q=Toy%20Shopee%20Kartik%20Complex%20Badlapur%20East&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
