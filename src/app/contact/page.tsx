'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Navigation, CheckCircle } from 'lucide-react';
import { BUSINESS_HOURS_LIST } from '../../utils/timings';

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
    window.open('https://maps.google.com/?q=Toy+Shopee+Kartik+Complex+Badlapur+East', '_blank');
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
                  Shop No. 11/12, Kartik Complex, Near Municipal Corporation, Badlapur East, Maharashtra 421503
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a href="tel:+919730044342" className="text-[var(--foreground)] hover:text-primary transition-colors cursor-pointer">+91 97300 44342</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-success flex-shrink-0" />
                <a href="https://wa.me/919730044342" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-success transition-colors cursor-pointer">+91 97300 44342 (WhatsApp Business)</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:toyshopeebadlapur@gmail.com" className="text-[var(--foreground)] hover:text-accent transition-colors cursor-pointer">toyshopeebadlapur@gmail.com</a>
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
            <a href="https://wa.me/919730044342" target="_blank" rel="noopener noreferrer" className="text-success hover:underline">Chat on WhatsApp</a>
          </div>

        </div>

      </div>
    </div>
  );
}
