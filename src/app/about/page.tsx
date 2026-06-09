'use client';

import React from 'react';
import { Sparkles, Trophy, ShieldCheck, Heart, Calendar } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Intro Hero Banner */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
          <Sparkles size={12} />
          <span>Our Story</span>
        </span>
        <h1 className="text-4xl font-poppins font-black text-[var(--foreground)] tracking-tight leading-none">
          Bringing Joy & Learning to Badlapur Families
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          Founded with a simple mission—to supply children with authentic, safe, and brain-boosting toys. Toy Shopee has grown from a local shop to Badlapur's most trusted premium toy boutique.
        </p>
      </section>

      {/* Story, Mission & Vision grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-[var(--border)] pt-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-poppins font-bold text-[var(--foreground)]">Our Humble Beginnings</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Located in the heart of Badlapur East near the Municipal Corporation inside Kartik Complex, Toy Shopee started as a small brick-and-mortar storefront catering to local parents searching for quality birthday gifts. 
          </p>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            We noticed a gap in the local market for premium, developmental, and globally-branded toys. Today, we are proud to stock a diverse catalog of over 1,000+ board games, Hot Wheels tracks, remote-controlled models, and learning STEM kits from top brands like Hasbro, Fisher-Price, and LEGO.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-2xl">
            <h3 className="font-poppins font-bold text-sm text-[var(--foreground)] mb-1">Our Mission</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">To curate high-quality toys that inspire curiosity, foster motor skills, and spark screen-free learning for kids of all developmental stages.</p>
          </div>
          <div className="p-6 border border-[var(--border)] bg-[var(--card)] rounded-2xl">
            <h3 className="font-poppins font-bold text-sm text-[var(--foreground)] mb-1">Our Vision</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">To become the leading digital and physical eCommerce platform for child developmental accessories in Maharashtra, maintaining local community trust and premium customer care.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-poppins font-bold text-center text-[var(--foreground)]">Store Milestone Timeline</h2>
        
        <div className="max-w-xl mx-auto relative border-l border-[var(--border)] pl-6 ml-4 sm:ml-auto space-y-8">
          {[
            { year: '2021', title: 'Grand Store Launch', desc: 'Opened our retail doors at Kartik Complex, Badlapur East with a curated list of board games.' },
            { year: '2023', title: 'Category Expansion', desc: 'Introduced high-speed Remote Control toys, Hot Wheels collections, and educational puzzles.' },
            { year: '2024', title: 'Bulk Return Gift Service', desc: 'Started customized return gift packaging for birthdays and school annual days.' },
            { year: '2026', title: 'Digital E-Commerce Launch', desc: 'Released our ultra-premium web portal to enable online catalog browsing and checkout in Badlapur.' }
          ].map((milestone, idx) => (
            <div key={idx} className="relative hover:translate-x-1.5 transition-all duration-300 group">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-[var(--card)] group-hover:scale-125 group-hover:bg-secondary transition-all" />
              <div className="text-xs font-bold text-primary mb-0.5 group-hover:text-secondary transition-colors">{milestone.year}</div>
              <h3 className="font-poppins font-bold text-sm text-[var(--foreground)]">{milestone.title}</h3>
              <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toy Images Collage */}
      <section className="space-y-6 border-t border-[var(--border)] pt-12">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-2xl font-poppins font-bold text-[var(--foreground)]">Gallery of Joy</h2>
          <p className="text-xs text-[var(--muted)]">Explore the magical world of premium toys waiting for your little ones</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {/* Image 1: Golden Teddy Bear */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow md:col-span-2 md:row-span-2 group">
            <img
              src="https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=800&q=80"
              alt="Soft golden plush teddy bear toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
              <span className="text-white font-poppins font-bold text-sm">Huggable Teddy Bears</span>
            </div>
          </div>

          {/* Image 2: Sensory Puzzles */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80"
              alt="Colorful sensory block toys"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">Sensory blocks</span>
            </div>
          </div>

          {/* Image 3: Spiderman Action Figure */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80"
              alt="Marvel Spider-Man action figure toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">Action Figures</span>
            </div>
          </div>

          {/* Image 4: Educational Puzzle */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group">
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
              alt="Wooden educational puzzle shapes toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">Learning Kits</span>
            </div>
          </div>

          {/* Image 5: Hot Wheels Diecast Car */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group">
            <img
              src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80"
              alt="Diecast racing sports car toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">Die-Cast Cars</span>
            </div>
          </div>

          {/* Image 6: RC Off-road Rally Car */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group">
            <img
              src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80"
              alt="High-speed remote control rally car toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">Remote Control Cars</span>
            </div>
          </div>

          {/* Image 7: Jenga Stacking Tower */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group">
            <img
              src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80"
              alt="Wooden block stacking tower game toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">Stacking Games</span>
            </div>
          </div>

          {/* Image 8: RC Camera Drone */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] card-shadow group">
            <img
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80"
              alt="High-speed camera drone flying toy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
              <span className="text-white font-poppins font-bold text-xs">RC Drones</span>
            </div>
          </div>
        </div>
      </section>

      {/* Store Trust Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--border)] pt-12 text-center">
        {[
          { icon: <Trophy className="text-primary mx-auto" size={28} />, title: 'Genuine Brands', desc: '100% original Hasbro, LEGO & Mattel products' },
          { icon: <ShieldCheck className="text-secondary mx-auto" size={28} />, title: 'Eco-Tested Safe', desc: 'Strict non-toxic, child-safe standards' },
          { icon: <Heart className="text-red-500 mx-auto" size={28} />, title: 'Happy Families', desc: 'Thousands of children served with joy' },
          { icon: <Calendar className="text-accent mx-auto" size={28} />, title: 'Open Daily', desc: 'Mon: 10:30AM-9:30PM | Tue-Sun: 10:30AM-10PM' }
        ].map((item, idx) => (
          <div key={idx} className="space-y-2">
            {item.icon}
            <h4 className="font-poppins font-bold text-sm text-[var(--foreground)]">{item.title}</h4>
            <p className="text-[11px] text-[var(--muted)] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
}
