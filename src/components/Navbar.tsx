'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  Heart, 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Phone,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCartStore } from '../store/cartStore';
import { CATEGORIES } from '../data/mockData';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const cart = useCartStore((state) => state.cart);
  const wishlist = useCartStore((state) => state.wishlist);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  
  // Calculate total items in cart
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 glassmorphism border-b border-[var(--border)]">
      {/* Top Banner: Local Store Info & Timings */}
      <div className="w-full bg-slate-900 text-slate-100 py-1.5 px-4 text-xs flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <MapPin size={12} className="text-secondary" />
            <span>Badlapur East, MH</span>
          </span>
          <a href="tel:+919730044342" className="flex items-center space-x-1 hover:text-secondary transition-colors cursor-pointer">
            <Phone size={12} className="text-secondary" />
            <span>+91 97300 44342</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles size={12} className="text-secondary animate-pulse" />
          <span className="font-semibold text-secondary">Free Local Delivery in Badlapur!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center space-x-1">
                {/* T block */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-white shadow font-poppins font-black text-lg transform -rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  T
                </span>
                {/* O block */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-secondary text-slate-900 shadow font-poppins font-black text-lg transform rotate-6 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
                  O
                </span>
                {/* Y block */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-accent text-white shadow font-poppins font-black text-lg transform -rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  Y
                </span>
                <span className="font-poppins font-black text-2xl tracking-tight text-[var(--foreground)] ml-1 group-hover:text-primary transition-colors flex items-center">
                  SHOPEE
                  <Sparkles size={16} className="text-secondary ml-1 animate-spin-slow" />
                </span>
              </div>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search premium toys, brands, age groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pl-4 pr-10 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-primary hover:scale-110 transition-all"
                aria-label="Submit search"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-[var(--foreground)]">
            <Link href="/" className="hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200">Home</Link>
            
            {/* Category Mega Menu Hoverable */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 py-2 cursor-pointer">
                <span>Categories</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-[var(--card)] border border-[var(--border)] card-shadow rounded-2xl p-4 grid grid-cols-1 gap-2 transition-all duration-300 animate-pop-in">
                  <div className="font-poppins text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-1 px-2">Popular Collections</div>
                  {CATEGORIES.slice(0, 8).map((cat) => (
                    <Link 
                      key={cat.id} 
                      href={`/categories/${cat.slug}`}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[var(--accent-light)] hover:text-primary hover:translate-x-1 transition-all duration-200"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <span className="text-xl p-1 bg-[var(--background)] rounded-lg shadow-sm group-hover:scale-110 transition-transform">{cat.image}</span>
                      <div>
                        <div className="font-semibold text-sm">{cat.name}</div>
                        <div className="text-xs text-[var(--muted)] line-clamp-1">{cat.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-[var(--border)] pt-2 mt-1 text-center">
                    <Link 
                      href="/shop" 
                      className="text-xs font-bold text-primary hover:underline hover:scale-105 transition-all inline-block"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      View All Categories →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/shop" className="hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200">Shop</Link>
            <Link href="/offers" className="hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-1">
              <span>Offers</span>
              <span className="bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-full animate-bounce">NEW</span>
            </Link>
            <Link href="/reviews" className="hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200">Reviews</Link>
            <Link href="/about" className="hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200">About</Link>
            <Link href="/contact" className="hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200">Contact</Link>
          </nav>

          {/* Action Icons (Desktop & Mobile) */}
          <div className="flex items-center space-x-4">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-[var(--card)] text-[var(--foreground)] border border-transparent hover:border-[var(--border)] hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-secondary" />}
            </button>

            {/* Wishlist */}
            <Link 
              href="/wishlist"
              className="relative p-2.5 rounded-full hover:bg-[var(--card)] text-[var(--foreground)] border border-transparent hover:border-[var(--border)] hover:scale-110 hover:animate-wiggle transition-all duration-300"
              aria-label="View Wishlist"
            >
              <Heart size={20} className="hover:text-primary" />
              {mounted && wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link 
              href="/cart"
              onClick={(e) => {
                e.preventDefault();
                setCartOpen(true);
              }}
              className="relative p-2.5 rounded-full hover:bg-[var(--card)] text-[var(--foreground)] border border-transparent hover:border-[var(--border)] hover:scale-110 hover:animate-wiggle transition-all duration-300 cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag size={20} className="hover:text-secondary" />
              {mounted && cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-slate-900 text-[10px] font-extrabold rounded-full flex items-center justify-center animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-[var(--card)] text-[var(--foreground)] transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 pt-4 pb-6 space-y-3 absolute w-full left-0 shadow-lg transition-all duration-300 animate-in slide-in-from-top-4">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search toys, board games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-4 pr-10 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
              <Search size={16} />
            </button>
          </form>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 font-semibold">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)]"
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)]"
            >
              Shop All Toys
            </Link>
            <Link 
              href="/offers" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)] flex items-center justify-between"
            >
              <span>Offers</span>
              <span className="bg-primary text-white text-[9px] px-2 py-0.5 rounded-full font-bold">HOT</span>
            </Link>
            <Link 
              href="/reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)]"
            >
              Google Reviews
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)]"
            >
              About Store
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)]"
            >
              Contact Us
            </Link>
            <Link 
              href="/admin" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[var(--card)] text-xs text-primary"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      )}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
