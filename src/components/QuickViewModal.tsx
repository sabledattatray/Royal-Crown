'use client';

import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../data/mockData';
import { useCartStore } from '../store/cartStore';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isInWishlist = useCartStore((state) => state.isInWishlist(product?.id || ''));
  
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(false);
  const [added, setAdded] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [particles, setParticles] = useState<{ id: number; tx: number; ty: number; color: string }[]>([]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, giftWrap);
    setAdded(true);
    
    // Generate particle burst
    const newParticles = Array.from({ length: 10 }).map((_, idx) => {
      const angle = (idx * 360) / 10 + Math.random() * 20 - 10;
      const distance = 40 + Math.random() * 20;
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
      onClose();
    }, 1500);

    setTimeout(() => {
      setShowParticles(false);
      setParticles([]);
    }, 700);
  };

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    if (val > product.stockCount) return;
    setQuantity(val);
  };

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      <div className="bg-[var(--background)] border border-[var(--border)] w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl relative transition-all duration-300 flex flex-col md:flex-row max-h-[90vh] animate-pop-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-slate-800 dark:text-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Gallery Column */}
        <div className="w-full md:w-1/2 p-6 bg-slate-50 dark:bg-slate-950/20 flex flex-col justify-center items-center">
          <div className="w-full aspect-square relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-[var(--border)] max-h-[320px]">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex space-x-2 w-full justify-center">
            {product.images.map((img, index) => (
              <div 
                key={index}
                className="w-12 h-12 rounded-lg overflow-hidden border-2 border-primary/20 bg-white cursor-pointer"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between max-h-[90vh] md:max-h-[500px]">
          <div>
            <span className="inline-block px-3 py-1 bg-[var(--accent-light)] text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              {product.category}
            </span>
            
            <h2 className="text-2xl font-poppins font-extrabold text-[var(--foreground)] tracking-tight mb-2 pr-6">
              {product.name}
            </h2>

            {/* Ratings */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                    className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-slate-300 dark:text-slate-700'} 
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-[var(--foreground)]">{product.rating}</span>
              <span className="text-xs text-[var(--muted)]">({product.reviewsCount} reviews)</span>
            </div>

            {/* Price section */}
            <div className="flex items-baseline space-x-3 mb-5">
              <span className="text-2xl font-extrabold text-[var(--foreground)]">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-[var(--muted)] line-through">₹{product.originalPrice}</span>
                  <span className="text-xs text-primary font-bold">Save ₹{discountAmount}</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--muted)] mb-5 leading-relaxed line-clamp-4">
              {product.description}
            </p>

            {/* Age recommendations & Stock status */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-[var(--border)] py-4 mb-6">
              <div>
                <div className="text-[10px] text-[var(--muted)] uppercase font-bold tracking-wider">Age Group</div>
                <div className="text-sm font-bold text-[var(--foreground)]">{product.ageGroup}</div>
              </div>
              <div>
                <div className="text-[10px] text-[var(--muted)] uppercase font-bold tracking-wider">Availability</div>
                <div className="text-sm font-bold text-[var(--foreground)]">
                  {product.inStock ? (
                    <span className="text-success">In Stock ({product.stockCount} left)</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>

            {/* Gift Wrap option */}
            {product.inStock && (
              <div className="mb-6 flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="quick-wrap"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="w-4 h-4 rounded text-primary focus:ring-primary border-[var(--border)]"
                />
                <label htmlFor="quick-wrap" className="text-sm font-semibold text-[var(--foreground)] select-none">
                  Add premium gift wrap (+₹30) 🎁
                </label>
              </div>
            )}
          </div>

          {/* Action Row */}
          {product.inStock ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                {/* Quantity select */}
                <div className="flex items-center border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--background)]">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 text-[var(--foreground)] hover:bg-[var(--card)] font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-bold text-[var(--foreground)]">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 text-[var(--foreground)] hover:bg-[var(--card)] font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-xl border border-[var(--border)] hover:bg-[var(--card)] transition-colors cursor-pointer ${
                    isInWishlist ? 'text-primary' : 'text-[var(--foreground)]'
                  }`}
                  title={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart size={20} fill={isInWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="relative">
                {/* Floating +1 Indicator */}
                {showParticles && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-poppins font-black text-sm text-primary animate-float-up-fade pointer-events-none z-30">
                    +{quantity}
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
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] hover:animate-wobble-hover active:scale-95 ${
                    added 
                      ? 'bg-success text-white animate-pop-in' 
                      : 'bg-primary hover:bg-primary-hover text-white'
                  }`}
                >
                  <ShoppingCart size={18} />
                  <span>{added ? 'Added!' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          ) : (
            <button
              disabled
              className="w-full py-3 bg-slate-200 dark:bg-slate-800 text-slate-400 font-bold rounded-2xl cursor-not-allowed"
            >
              Unavailable
            </button>
          )}

        </div>

      </div>
    </div>
  );
}
