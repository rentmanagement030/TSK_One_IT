'use client';

import React from 'react';
import {
  Rocket,
  Store,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  ShoppingCart,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    id: 'startups',
    title: 'Startups',
    icon: Rocket,
  },
  {
    id: 'smbs',
    title: 'SMBs',
    icon: Store,
  },
  {
    id: 'enterprises',
    title: 'Enterprises',
    icon: Building2,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: Hotel,
  },
  {
    id: 'retail',
    title: 'Retail',
    icon: ShoppingCart,
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
  },
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    icon: ShieldCheck,
  },
];

export default function IndustriesWeServe() {
  return (
    <section 
      id="industries" 
      aria-label="Industries We Serve"
      className="relative bg-[#050f24] py-20 sm:py-28 overflow-hidden text-white"
    >
      {/* 1. Full-Bleed Enterprise & Industry Architecture Photography Layer */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* 2. Deep Corporate Navy Gradient Contrast Scrim */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#050f24]/98 via-[#07193d]/90 to-[#050f24]/98 pointer-events-none"
      />

      {/* 3. Subtle Tech Grid Pattern */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none [background-image:radial-gradient(rgba(56,189,248,0.25)_1px,transparent_1px)] [background-size:28px_28px]" 
      />
      
      {/* 4. Glowing Orbital Tech Aura in bottom-left */}
      <div 
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] pointer-events-none opacity-25"
      >
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-sky-400/30 fill-none">
          <circle cx="150" cy="450" r="120" strokeDasharray="4 4" strokeWidth="1.5" />
          <circle cx="150" cy="450" r="220" strokeWidth="1.5" />
          <circle cx="150" cy="450" r="320" strokeDasharray="6 6" strokeWidth="1" />
          <circle cx="150" cy="450" r="420" strokeWidth="1" />
          <circle cx="270" cy="450" r="6" className="fill-sky-400 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <circle cx="150" cy="230" r="8" className="fill-blue-400 filter drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          <circle cx="376" cy="290" r="5" className="fill-cyan-300 filter drop-shadow-[0_0_6px_rgba(103,232,249,0.8)]" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Tech Sector Pill */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
                <span className="size-1.5 rounded-full bg-sky-400 animate-ping" />
                <span>SOLUTIONS ACROSS SECTORS</span>
              </span>
            </div>

            {/* Pure Solid White Heading (No Gradient Text) */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Industries <br />
                We Serve
              </h2>
              
              {/* Signature Accent Line */}
              <div className="w-16 h-1 bg-[#1e40af] mt-4 rounded-full flex overflow-hidden">
                <div className="w-6 h-full bg-[#ef4444]" />
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-md">
              From high-growth startups to mission-critical healthcare and enterprise banking, we deploy tailor-made IT, cloud, and security frameworks designed for zero downtime.
            </p>

            {/* Action Buttons Aligned in 1 Row */}
            <div className="flex flex-row items-center gap-3 pt-2 flex-wrap sm:flex-nowrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-sky-500/30 hover:shadow-sky-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
              >
                <span>Consult For Your Industry</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="https://wa.me/919150843991?text=Hi%20TSK%20OneIT%2C%20I%20would%20like%20to%20know%20more%20about%20IT%20solutions%20for%20my%20industry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 whitespace-nowrap"
              >
                <span>WhatsApp Specialist</span>
              </a>
            </div>
          </div>

          {/* Right Column: 9 Ultra-Trendy Bento Glass Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {industries.map((item, idx) => {
                const IconComponent = item.icon;
                const indexNumber = String(idx + 1).padStart(2, '0');
                
                return (
                  <div
                    key={item.id}
                    className="group relative flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-sky-400/60 shadow-lg hover:shadow-2xl hover:shadow-sky-950/60 hover:-translate-y-1.5 transition-all duration-300 min-h-[145px] sm:min-h-[155px] cursor-pointer backdrop-blur-md overflow-hidden"
                  >
                    {/* Ambient Glow Aura in Card Corner */}
                    <div className="absolute -bottom-6 -right-6 size-24 bg-sky-500/0 group-hover:bg-sky-400/15 blur-xl rounded-full transition-all duration-500 pointer-events-none" />

                    {/* Top Row: Icon Container + Monospace Index */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="size-11 rounded-xl bg-sky-500/10 group-hover:bg-sky-500 border border-sky-400/25 group-hover:border-sky-400 text-sky-400 group-hover:text-slate-950 flex items-center justify-center shadow-xs group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="size-5 transition-transform duration-300" />
                      </div>

                      <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-sky-300 bg-white/5 group-hover:bg-sky-500/10 px-2 py-0.5 rounded-md border border-white/5 group-hover:border-sky-400/20 transition-colors">
                        {indexNumber}
                      </span>
                    </div>

                    {/* Bottom Row: Title + Subtle Hover Arrow */}
                    <div className="mt-4 flex items-center justify-between relative z-10">
                      <h3 className="text-sm sm:text-[15px] font-bold text-white group-hover:text-sky-100 tracking-tight transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      
                      <div className="size-6 rounded-full bg-white/0 group-hover:bg-sky-500/20 flex items-center justify-center text-sky-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="size-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
