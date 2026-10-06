'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Laptop, 
  Home, 
  Building2,
  Clock
} from 'lucide-react';

export default function WhoWeAre() {
  const stats = [
    { value: '20+', label: 'Years Experience', sub: 'Industry leadership & proven track record' },
    { value: '10K+', label: 'Devices Restored', sub: 'MacBooks, laptops & chip-level boards' },
    { value: '500+', label: 'Enterprise Setups', sub: 'Cloud, LAN, CCTV & automation' },
    { value: '24×7', label: 'Active NOC / SOC', sub: 'Round-the-clock technical support' },
  ];

  return (
    <section 
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="py-16 lg:py-20 bg-[#ffffff] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Subtle Tech Highlights */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-100/50 blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, Minimal Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-900 shadow-xs">
              <Sparkles className="size-3.5 text-amber-500" />
              <span>About TSK OneIT</span>
            </div>

            <h2 
              id="who-we-are-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a]"
            >
              Who We Are
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-14 h-1 bg-[#ef4444] mx-auto mt-2 mb-4 rounded-full" />

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              TSK OneIT is your <strong className="text-slate-900 font-bold">Trusted Technology Partner</strong>. 
              From personal devices to enterprise digital transformation, we provide complete end-to-end technology solutions under one roof.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Clean Metric & Value Cards */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#edf6fd] border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 text-center"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#1e40af] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Minimal Tagline Strip with Quick CTA */}
        <ScrollReveal animation="fade-up" delay={250}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#0b1b3a] text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                Our Tagline
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-wide text-slate-100">
                Repair &bull; Connect &bull; Secure &bull; Transform
              </span>
            </div>

            <Link
              href="#divisions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0b1b3a] font-bold text-xs sm:text-sm shadow hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 group"
            >
              <span>Explore Our Divisions</span>
              <ArrowRight className="size-4 text-[#ef4444] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
