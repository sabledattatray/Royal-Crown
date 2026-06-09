'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquareText } from 'lucide-react';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const phoneNumber = '919112270222';

  const getPrefilledMessage = () => {
    const baseMsg = 'Hello Royal Crown Badlapur! ';
    
    if (pathname.includes('/shop/')) {
      return encodeURIComponent(baseMsg + 'I am interested in inquiring about this product: ' + window.location.href);
    }
    if (pathname.includes('/cart')) {
      return encodeURIComponent(baseMsg + 'I would like assistance with checking out my shopping cart.');
    }
    if (pathname.includes('/offers')) {
      return encodeURIComponent(baseMsg + 'I would like to inquire about your latest festive sales and offers.');
    }
    if (pathname.includes('/categories/return-gifts')) {
      return encodeURIComponent(baseMsg + 'I want to inquire about bulk ordering return gifts for a birthday celebration.');
    }
    if (pathname.includes('/categories/birthday-gifts')) {
      return encodeURIComponent(baseMsg + 'I want to inquire about custom birthday gift baskets and decoration services.');
    }
    
    return encodeURIComponent(baseMsg + 'I have a general inquiry about your toys, stock, or directions to your store.');
  };

  const handleWhatsAppRedirect = () => {
    const message = getPrefilledMessage();
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 bg-success hover:bg-green-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none cursor-pointer"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageSquareText size={24} className="animate-pulse" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap font-bold text-sm">
        WhatsApp Enquiry
      </span>
    </button>
  );
}
