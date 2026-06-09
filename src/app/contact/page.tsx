'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Navigation, CheckCircle } from 'lucide-react';
import { BUSINESS_HOURS_LIST } from '../../utils/timings';

const BRANCHES = [
  {
    name: 'Badlapur Branch',
    address: 'Badlapur, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Badlapur+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Mumbai Branch',
    address: 'Mumbai, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Mumbai+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Thane Branch',
    address: 'Thane, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Thane+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Kalyan Branch',
    address: 'Kalyan, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Kalyan+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Dombivli Branch',
    address: 'Dombivli, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Dombivli+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Ulhasnagar Branch',
    address: 'Ulhasnagar, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Ulhasnagar+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Khopoli Branch',
    address: 'Khopoli, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Khopoli+Maharashtra',
    phone: '09112270222'
  },
  {
    name: 'Karjat Branch',
    address: 'Karjat, Maharashtra, India',
    mapUrl: 'https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Karjat+Maharashtra',
    phone: '09112270222'
  }
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Royal+Crown+Gifts+Toys+Perfumes+Gandhi+Chowk+Badlapur+East', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title */}
      <div className="mb-10 space-y-1 text-center">
        <h1 className="text-3xl font-poppins font-black text-[var(--foreground)] tracking-tight">Contact Us</h1>
        <p className="text-xs text-[var(--muted)]">Reach out for custom order requests, bulk enquiries, or directions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Info & Map Column */}
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          
          <div className="border border-[var(--border)] bg-[var(--card)] p-6 rounded-3xl card-shadow space-y-6">
            <h2 className="font-poppins font-bold text-lg text-[var(--foreground)] border-b border-[var(--border)] pb-2">Store Information</h2>
            
            <ul className="space-y-4 text-xs font-semibold">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-[var(--foreground)] leading-relaxed">
                  Shop No 05 - Nav Sai Krupa society, Opposite ZP Marathi school, Gandhi Chowk, East, Badlapur, Maharashtra 421503
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a href="tel:09112270222" className="text-[var(--foreground)] hover:text-primary transition-colors cursor-pointer">09112270222</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-success flex-shrink-0" />
                <a href="https://wa.me/919112270222" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-success transition-colors cursor-pointer">09112270222 (WhatsApp Business)</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:royalcrown.fgt@gmail.com" className="text-[var(--foreground)] hover:text-accent transition-colors cursor-pointer">royalcrown.fgt@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3 border-t border-[var(--border)] pt-3 mt-3">
                <svg className="w-4 h-4 text-[#1877F2] flex-shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
                <div className="flex flex-col">
                  <a href="https://www.facebook.com/royalcrown.fgt/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[#1877F2] transition-colors cursor-pointer">
                    Facebook: <span className="text-xs font-bold text-[#1877F2]">royalcrown.fgt</span>
                  </a>
                  <span className="text-[10px] text-[var(--muted)] font-semibold mt-0.5">1.2K followers</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <div className="flex flex-col">
                  <a href="https://www.instagram.com/royalcrown_giftshop/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-secondary transition-colors cursor-pointer">
                    Instagram: <span className="text-xs font-bold text-secondary">royalcrown_giftshop</span>
                  </a>
                  <span className="text-[10px] text-[var(--muted)] font-semibold mt-0.5">14.1K followers</span>
                </div>
              </li>
            </ul>

            {/* Directions button */}
            <button
              onClick={handleDirections}
              className="w-full py-3 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer hover:bg-slate-800"
            >
              <Navigation size={14} className="text-secondary" />
              <span>Get Directions on Google Maps</span>
            </button>
          </div>

          {/* Business Timings Table card */}
          <div className="border border-[var(--border)] bg-[var(--card)] p-6 rounded-3xl card-shadow space-y-3">
            <h3 className="font-poppins font-bold text-sm text-[var(--foreground)] flex items-center space-x-2 border-b border-[var(--border)] pb-2">
              <Clock size={16} className="text-primary" />
              <span>Opening Hours</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {BUSINESS_HOURS_LIST.map((bh) => (
                <li key={bh.day} className="flex justify-between pb-1 border-b border-[var(--border)] font-semibold text-[var(--foreground)]">
                  <span className="text-[var(--muted)]">{bh.day}:</span>
                  <span>{bh.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 border border-[var(--border)] bg-[var(--card)] p-8 rounded-3xl card-shadow flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-xl font-poppins font-bold text-[var(--foreground)] border-b border-[var(--border)] pb-2">Send an Enquiry</h2>
            
            {submitted ? (
              <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle size={36} className="text-success animate-bounce" />
                <h4 className="font-poppins font-bold text-success text-sm">Message Sent!</h4>
                <p className="text-xs text-[var(--muted)] max-w-xs">Thank you Rahul. We received your message and will reply via phone/email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[var(--foreground)] uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[var(--foreground)] uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[var(--foreground)] uppercase">Your Inquiry Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What would you like to ask us?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Send Inquiry Message
                </button>

              </form>
            )}

          </div>

          <div className="border-t border-[var(--border)] pt-4 mt-6 text-[10px] text-[var(--muted)] font-semibold flex items-center space-x-1.5 justify-center">
            <span>Or message us directly for faster response: </span>
            <a href="https://wa.me/919112270222" target="_blank" rel="noopener noreferrer" className="text-success hover:underline">Chat on WhatsApp</a>
          </div>

        </div>

      </div>

      {/* Branches Section */}
      <div className="mt-16 border-t border-[var(--border)] pt-12 space-y-8 animate-in fade-in duration-500">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-2xl font-poppins font-bold text-[var(--foreground)]">Our Branches</h2>
          <p className="text-xs text-[var(--muted)]">Serving you across Maharashtra with premium gifts, toys, and luxury perfumes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES.map((branch, idx) => (
            <div key={idx} className="border border-[var(--border)] bg-[var(--card)] p-5 rounded-2xl card-shadow flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-sm text-[var(--foreground)] group-hover:text-primary transition-colors">{branch.name}</h3>
                  <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed font-semibold">{branch.address}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-bold">
                <span className="text-[var(--muted)]">Ph: {branch.phone}</span>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors inline-flex items-center space-x-1"
                >
                  <span>Locate</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
