'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Calendar, 
  Award, 
  Layers, 
  Clock, 
  Building, 
  Receipt, 
  Zap, 
  Handshake, 
  HeartHandshake,
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function WhoWeAre() {
  // 4 Top Floating Bar Stats matching the exact core pillars
  const stats = [
    {
      icon: Calendar,
      value: '20+ Years',
      label: 'Industry Experience',
    },
    {
      icon: Award,
      value: 'Certified',
      label: 'Technology Experts & Engineers',
    },
    {
      icon: Layers,
      value: 'End-to-End',
      label: 'Technology Solutions',
    },
    {
      icon: Clock,
      value: '24×7',
      label: 'Support & Fast Response',
    },
  ];

  // Exact 8 Core Pillars requested by the user
  const corePillars = [
    {
      title: '20+ Years of Industry Experience',
      desc: 'Two decades of proven tech leadership and trusted client partnerships.',
      icon: Calendar,
    },
    {
      title: 'Enterprise-Grade Expertise',
      desc: 'Global-standard architectures, Tier-3 infrastructure & zero-trust security.',
      icon: Building,
    },
    {
      title: 'Certified Engineers & Experts',
      desc: 'Accredited specialists across Apple, Microsoft Azure, Cisco & chip repair.',
      icon: Award,
    },
    {
      title: 'End-to-End Solutions',
      desc: 'Hardware repair, home automation, and enterprise cloud under one roof.',
      icon: Layers,
    },
    {
      title: 'Transparent Pricing',
      desc: 'Upfront scoping, genuine OEM spare parts warranty, and zero hidden costs.',
      icon: Receipt,
    },
    {
      title: 'Fast Response & 24×7 Support',
      desc: 'Round-the-clock technical coverage, rapid dispatch, and active NOC/SOC.',
      icon: Zap,
    },
    {
      title: 'One Technology Partner',
      desc: 'A single point of accountability for all your digital and hardware needs.',
      icon: Handshake,
    },
    {
      title: 'Customer-First Approach',
      desc: 'Dedicated service commitments focused entirely on your long-term success.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section 
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="bg-[#ffffff] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* 1. TOP ABOUT BANNER (Dark Corporate Overlay Style) */}
      <div className="relative bg-[#0b1b3a] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image Overlay with Tech Office Tone */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden="true"
        />
        
        {/* Ambient Tech Glows */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#071329]/95 via-[#0b1b3a]/90 to-[#0b1b3a]" 
          aria-hidden="true" 
        />
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-sky-500/20 blur-[130px] rounded-full"
        />

        {/* Banner Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              About TSK OneIT
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-4 rounded-full" />

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              Backed by <strong className="text-white font-semibold">20+ Years of Industry Experience</strong>, <strong className="text-white font-semibold">Certified Technology Experts</strong>, and a <strong className="text-white font-semibold">Customer-First Approach</strong>, TSK OneIT delivers complete <strong className="text-white font-semibold">End-to-End Technology Solutions</strong> with dependable <strong className="text-white font-semibold">24×7 Support</strong>.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. FLOATING STATS PILL BAR (Overlapping Banner & White Body) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 sm:-mt-12 mb-16 lg:mb-20">
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0369a1] text-white p-4 sm:p-6 shadow-xl shadow-sky-900/15 border border-sky-300/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className={`flex items-center gap-3 sm:gap-4 p-2 sm:px-4 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
                  >
                    <div className="size-11 sm:size-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0 shadow-inner">
                      <Icon className="size-5 sm:size-6 text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium text-sky-100 mt-1 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 3. WHO WE ARE 2-COLUMN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Overlapping Photo Composite with 20+ Years Experience Badge */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="slide-right">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                
                {/* Image 1: Top Main Photo Card (Engineering Team Collaboration) */}
                <div className="w-[84%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="TSK OneIT Certified Engineering Team"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Image 2: Bottom-Right Overlapping Photo Card (Hardware & Tech Specialist) */}
                <div className="w-[80%] -mt-20 ml-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] relative z-20">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="TSK OneIT Specialist in Diagnostics Lab"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlapping Floating Royal Blue Circle Badge */}
                <div className="absolute top-[32%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-30 size-32 sm:size-36 rounded-full bg-gradient-to-br from-[#1e40af] to-[#0284c7] text-white flex flex-col items-center justify-center text-center p-3 shadow-2xl border-4 border-white ring-4 ring-sky-100/80 animate-pulse hover:animate-none">
                  <span className="text-base sm:text-lg font-black tracking-tight leading-tight">
                    20+ YEARS
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-sky-200 tracking-wider uppercase leading-tight mt-0.5">
                    OF EXPERIENCE
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Who We Are Narrative & Exact Core Pillars Grid */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="space-y-4">
                
                {/* Title & Brand Accent Bar */}
                <div>
                  <h3 
                    id="who-we-are-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f172a]"
                  >
                    Who We Are
                  </h3>
                  
                  <div className="w-16 h-1 bg-[#1e40af] mt-2.5 rounded-full flex overflow-hidden">
                    <div className="w-6 h-full bg-[#ef4444]" />
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
                  One Technology Partner. Complete End-to-End Solutions.
                </h4>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  <strong className="text-slate-900 font-bold">TSK OneIT</strong> is your trusted single point of accountability for personal device care, smart connected living, and enterprise digital transformation. Combining <strong className="text-slate-900 font-semibold">20+ Years of Industry Experience</strong> with <strong className="text-slate-900 font-semibold">Enterprise-Grade Expertise</strong>, our certified engineers deliver dependable technology under one roof.
                </p>

                {/* 8 Core Pillars Grid using the exact required details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {corePillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div 
                        key={pillar.title}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all duration-200 flex items-start gap-3"
                      >
                        <div className="size-8 rounded-lg bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="size-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-900 leading-snug">
                            {pillar.title}
                          </span>
                          <span className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            {pillar.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Actions Bar */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="#divisions"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 group"
                  >
                    <span>Explore Our Solutions</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform text-white" />
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs hover:shadow hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <span>Book Free Consultation</span>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
