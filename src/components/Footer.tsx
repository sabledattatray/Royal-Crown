'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Navigation, 
  MessageCircle 
} from 'lucide-react';
import { getStoreStatus, BUSINESS_HOURS_LIST, TimingsStatus } from '../utils/timings';

export default function Footer() {
  const [storeStatus, setStoreStatus] = useState<TimingsStatus | null>(null);

  useEffect(() => {
    // Update store timing status
    const updateStatus = () => {
      setStoreStatus(getStoreStatus());
    };
    
    updateStatus();
    const interval = setInterval(updateStatus, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Toy+Shopee+Kartik+Complex+Badlapur+East', '_blank');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: About & Branding */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <div className="flex items-center space-x-1 group">
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
              <span className="font-poppins font-black text-2xl tracking-tight text-white ml-1 group-hover:text-secondary transition-colors flex items-center">
                SHOPEE
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary ml-1 animate-spin-slow"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
              </span>
            </div>
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed">
            Badlapur's Favorite Toy Store. Thousands of Toys, Games & Gifts for Every Age. Connected via WhatsApp ERP.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center" aria-label="Facebook">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center" aria-label="Instagram">
              <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center" aria-label="YouTube">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.387.51A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.475 20.455 12 20.455 12 20.455s7.524 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://wa.me/919730044342" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-success hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Store Address & Contact */}
        <div className="space-y-6">
          <h3 className="text-white font-poppins font-bold text-lg mb-2">Store Address</h3>
          {storeStatus && (
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-semibold bg-slate-800 border border-slate-700">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-success animate-pulse' : 'bg-red-500'}`} />
              <span className={storeStatus.isOpen ? 'text-success' : 'text-red-400'}>
                {storeStatus.statusMessage}
              </span>
            </div>
          )}
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <span>
                Shop No. 11/12, Kartik Complex,<br />
                Near Municipal Corporation,<br />
                Badlapur East, Maharashtra 421503
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-secondary flex-shrink-0" />
              <a href="tel:+919730044342" className="text-slate-300 hover:text-secondary transition-colors cursor-pointer">+91 97300 44342</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-accent flex-shrink-0" />
              <a href="mailto:toyshopeebadlapur@gmail.com" className="text-slate-300 hover:text-accent transition-colors cursor-pointer">toyshopeebadlapur@gmail.com</a>
            </li>
          </ul>

          <button
            onClick={handleDirections}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 font-semibold text-sm transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <Navigation size={16} className="text-secondary" />
            <span>Get Map Directions</span>
          </button>
        </div>

        {/* Column 3: Operational Links */}
        <div>
          <h3 className="text-white font-poppins font-bold text-lg mb-6">Operational Links</h3>
          <ul className="space-y-3.5 text-sm">
            <li><Link href="/shop" className="hover:text-secondary hover:underline transition-all">Shop All Toys</Link></li>
            <li><Link href="/about" className="hover:text-secondary hover:underline transition-all">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-secondary hover:underline transition-all">Contact</Link></li>
            <li><Link href="/offers" className="hover:text-secondary hover:underline transition-all">Festival Offers</Link></li>
          </ul>
        </div>

        {/* Column 4: Service Protocols */}
        <div>
          <h3 className="text-white font-poppins font-bold text-lg mb-6">Service Protocols</h3>
          <ul className="space-y-3.5 text-sm">
            <li><Link href="/shipping" className="hover:text-secondary hover:underline transition-all">Shipping Policy</Link></li>
            <li><Link href="/returns" className="hover:text-secondary hover:underline transition-all">Returns & Refunds</Link></li>
            <li><Link href="/privacy" className="hover:text-secondary hover:underline transition-all">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-secondary hover:underline transition-all">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © 2026 Toy Shopee. All Rights Reserved. | Made by{' '}
          <a 
            href="https://dattasble.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline hover:text-slate-400 font-semibold text-slate-400"
          >
            Datta Sable
          </a>
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:underline hover:text-slate-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline hover:text-slate-400">Terms of Service</Link>
          <Link href="/shipping" className="hover:underline hover:text-slate-400">Shipping Policy</Link>
          <Link href="/returns" className="hover:underline hover:text-slate-400">Returns & Refunds</Link>
        </div>
      </div>
    </footer>
  );
}
