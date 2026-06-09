'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    setMounted(true);
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
      className="group relative border border-[var(--border)] rounded-[32px] overflow-hidden bg-[var(--card)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:rotate-1 hover:border-primary/30 flex flex-col h-full card-shadow card-glow"
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
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        {isNew && (
          <span className="px-3 py-1 bg-accent text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-sm animate-pulse-soft">
            New
          </span>
        )}
        {isBestSeller && (
          <span className="px-3 py-1 bg-secondary text-slate-900 text-[10px] font-extrabold tracking-wider rounded-full uppercase shadow-sm">
            Bestseller
          </span>
        )}
        {isTrending && (
          <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-sm animate-pulse-soft">
            Trending
          </span>
        )}
        {isOffer && calculateDiscount() && (
          <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-sm">
            {calculateDiscount()}
          </span>
        )}
      </div>

      <button
        onClick={handleWishlist}
        className={`absolute top-4 right-4 z-10 p-2.5 rounded-full shadow-md transition-all duration-300 border border-[var(--border)] cursor-pointer active:scale-95 hover:scale-110 hover:animate-wiggle ${
          isWishlisted 
            ? 'bg-primary border-primary text-white animate-pop-in scale-110' 
            : 'bg-white/80 backdrop-blur-md text-slate-600 hover:bg-white hover:text-primary'
        }`}
        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
      </button>

      {/* Product Image Section */}
      <Link href={`/shop/${id}`} className="relative block aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={hovered && images[1] ? images[1] : images[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick View Button overlay on Desktop */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="p-3 bg-white hover:bg-slate-100 text-slate-800 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
            title="Quick View"
          >
            <Eye size={20} />
          </button>
        </div>
      </Link>

      {/* Info Container */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        
        {/* Category & Title */}
        <div className="space-y-1">
          <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-wider">
            {category}
          </div>
          <Link href={`/shop/${id}`}>
            <h3 className="font-poppins font-bold text-sm text-[var(--foreground)] group-hover:text-primary transition-colors line-clamp-2 min-h-[40px] leading-tight">
              {name}
            </h3>
          </Link>
        </div>

        {/* Rating stars */}
        <div className="flex items-center space-x-1.5 mt-2 mb-3">
          <div className="flex text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(rating) ? 'currentColor' : 'none'} 
                className={i < Math.floor(rating) ? 'text-amber-500' : 'text-slate-300 dark:text-slate-700'} 
              />
            ))}
          </div>
          <span className="text-xs font-bold text-[var(--foreground)]">{rating}</span>
          <span className="text-[10px] text-[var(--muted)]">({reviewsCount})</span>
        </div>

        {/* Price & Cart CTA Row */}
        <div className="flex items-center justify-between border-t border-[var(--border)] pt-4 mt-auto">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs text-[var(--muted)] line-through">
                ₹{originalPrice}
              </span>
            )}
            <span className="text-lg font-extrabold text-[var(--foreground)]">
              ₹{price}
            </span>
          </div>

          {inStock ? (
            <div className="relative">
              {/* Floating +1 Indicator */}
              {showParticles && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-poppins font-black text-sm text-primary animate-float-up-fade pointer-events-none z-30">
                  +1
                </span>
              )}
              {/* Confetti Particles */}
              {showParticles && particles.map((p) => (
                <span 
                  key={p.id}
                  className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full pointer-events-none animate-particle-burst z-30"
                  style={{
                    backgroundColor: p.color,
                    '--tx': `${p.tx}px`,
                    '--ty': `${p.ty}px`,
                  } as React.CSSProperties}
                />
              ))}
              <button
                onClick={handleAddToCart}
                className={`p-3.5 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 hover:scale-105 hover:animate-wobble-hover ${
                  added 
                    ? 'bg-success text-white animate-pop-in' 
                    : 'bg-primary hover:bg-primary-hover text-white'
                }`}
                aria-label="Add to cart"
              >
                {added ? (
                  <span className="text-xs font-bold px-1 animate-pulse">Added!</span>
                ) : (
                  <ShoppingCart size={18} />
                )}
              </button>
            </div>
          ) : (
            <span className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-950/20 px-2.5 py-1.5 rounded-xl border border-red-200 dark:border-red-900/30">
              Out of stock
            </span>
          )}
        </div>

      </div>

    </div>
  );
}
