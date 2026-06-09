'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Eye, Star, Sparkles } from 'lucide-react';
import { Product } from '../data/mockData';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { id, name, category, price, originalPrice, rating, reviewsCount, images, inStock, isNew, isBestSeller, isTrending, isOffer } = product;
  
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isInWishlist = useCartStore((state) => state.isInWishlist(id));
  
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [particles, setParticles] = useState<{ id: number; tx: number; ty: number; color: string }[]>([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  
  const isWishlisted = mounted ? isInWishlist : false;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    setAdded(true);
    
    // Generate particle burst
    const newParticles = Array.from({ length: 8 }).map((_, idx) => {
      const angle = (idx * 360) / 8 + Math.random() * 20 - 10;
      const distance = 35 + Math.random() * 15;
      const radians = (angle * Math.PI) / 180;
      const tx = Math.round(Math.cos(radians) * distance);
      const ty = Math.round(Math.sin(radians) * distance);
      const colors = ['#FF5A79', '#FFB600', '#3B82F6', '#10B981', '#8B5CF6'];
      return {
        id: Math.random(),
        tx,
        ty,
        color: colors[idx % colors.length]
      };
    });
    setParticles(newParticles);
    setShowParticles(true);
    
    setTimeout(() => {
      setAdded(false);
    }, 2000);
    
    setTimeout(() => {
      setShowParticles(false);
      setParticles([]);
    }, 700);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const calculateDiscount = () => {
    if (!originalPrice) return null;
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
    return discount > 0 ? `${discount}% OFF` : null;
  };

  return (
    <div 
      className="group relative border border-slate-200/60 dark:border-slate-700/50 rounded-2xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full card-glow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating Sparkles when hovered */}
      {hovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <Sparkles 
            size={16} 
            className="absolute text-secondary animate-sparkle-drift" 
            style={{ top: '20%', left: '10%', '--sx': '10px', '--sy': '-20px' } as React.CSSProperties} 
          />
          <Sparkles 
            size={14} 
            className="absolute text-primary-playful animate-sparkle-drift" 
            style={{ bottom: '30%', right: '10%', '--sx': '-10px', '--sy': '-30px' } as React.CSSProperties} 
          />
          <Sparkles 
            size={12} 
            className="absolute text-accent animate-sparkle-drift animate-spin-slow" 
            style={{ top: '45%', right: '20%', '--sx': '15px', '--sy': '-15px' } as React.CSSProperties} 
          />
        </div>
      )}
      
      {/* Badges & Wishlist Trigger */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
        {isNew && (
          <span className="px-3 py-1 bg-gradient-to-r from-accent to-pink-500 text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-md animate-pulse-soft">
            New
          </span>
        )}
        {isBestSeller && (
          <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-extrabold tracking-wider rounded-full uppercase shadow-md">
            Bestseller
          </span>
        )}
        {isTrending && (
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-md animate-pulse-soft">
            Trending
          </span>
        )}
        {isOffer && calculateDiscount() && (
          <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-red-600 text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-md">
            {calculateDiscount()}
          </span>
        )}
      </div>

      <button
        onClick={handleWishlist}
        className={`absolute top-4 right-4 z-10 p-2.5 rounded-full shadow-lg transition-all duration-300 border cursor-pointer active:scale-95 hover:scale-110 hover:animate-wiggle ${
          isWishlisted 
            ? 'bg-rose-500 border-rose-500 text-white animate-pop-in scale-110 shadow-rose-500/30' 
            : 'bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-rose-500 dark:hover:text-rose-400'
        }`}
        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} className="transition-colors" />
      </button>

      {/* Product Image Section */}
      <Link href={`/shop/${id}`} className="relative block aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-slate-50 dark:bg-slate-800/50 group">
        <Image
          src={hovered && images[1] ? images[1] : images[0]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Sleek Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick View Button overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="pointer-events-auto transform translate-y-4 group-hover:translate-y-0 p-3.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-800 dark:text-slate-100 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20"
            title="Quick View"
          >
            <Eye size={20} />
          </button>
        </div>
      </Link>

      {/* Info Container */}
      <div className="p-5 flex-grow flex flex-col justify-between relative z-20 bg-white dark:bg-transparent">
        
        {/* Category & Title */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            {category}
          </div>
          <Link href={`/shop/${id}`}>
            <h3 className="font-poppins font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2 min-h-[44px] leading-snug">
              {name}
            </h3>
          </Link>
        </div>

        {/* Rating stars */}
        <div className="flex items-center space-x-1.5 mt-3 mb-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={13} 
                fill={i < Math.floor(rating) ? 'currentColor' : 'none'} 
                className={i < Math.floor(rating) ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'} 
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{rating}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">({reviewsCount} reviews)</span>
        </div>

        {/* Price & Cart CTA Row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs text-slate-400 dark:text-slate-500 line-through font-medium">
                ₹{originalPrice}
              </span>
            )}
            <span className="text-lg sm:text-xl font-poppins font-bold text-slate-900 dark:text-white">
              ₹{price}
            </span>
          </div>

          {inStock ? (
            <div className="relative">
              {/* Floating +1 Indicator */}
              {showParticles && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-poppins font-black text-sm text-primary dark:text-primary-light animate-float-up-fade pointer-events-none z-30 drop-shadow-md">
                  +1
                </span>
              )}
              {/* Confetti Particles */}
              {showParticles && particles.map((p) => (
                <span 
                  key={p.id}
                  className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full pointer-events-none animate-particle-burst z-30 shadow-sm"
                  style={{
                    backgroundColor: p.color,
                    '--tx': `${p.tx}px`,
                    '--ty': `${p.ty}px`,
                  } as React.CSSProperties}
                />
              ))}
              <button
                onClick={handleAddToCart}
                className={`p-3 sm:p-3.5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 hover:scale-105 hover:animate-wobble-hover ${
                  added 
                    ? 'bg-emerald-500 text-white shadow-emerald-500/30 ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 animate-pop-in' 
                    : 'bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-primary-hover text-white shadow-slate-900/20 dark:shadow-primary/20 hover:shadow-xl'
                }`}
                aria-label="Add to cart"
              >
                {added ? (
                  <span className="text-[11px] sm:text-xs font-bold px-1.5 animate-pulse">Added</span>
                ) : (
                  <ShoppingCart size={18} className="transform transition-transform group-hover:scale-110" />
                )}
              </button>
            </div>
          ) : (
            <span className="text-[11px] sm:text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-3 py-1.5 rounded-full border border-rose-100 dark:border-rose-500/20">
              Out of stock
            </span>
          )}
        </div>

      </div>

    </div>
  );
}
