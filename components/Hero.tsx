'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Sparkles,
  Lock,
  Layers,
  Database,
  Activity,
  Zap
} from 'lucide-react';

interface SlideData {
  id: number;
  kicker: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  holograms: {
    icon: React.ReactNode;
    tag: string;
    title: string;
    sub: string;
    pos: string;
  }[];
}

const slides: SlideData[] = [
  {
    id: 0,
    kicker: 'BEST IT COMPANY',
    headlinePrefix: 'Best IT Solution Agency For ',
    headlineHighlight: 'Your Business.',
    desc: 'Servers, high-density racks, structured networking, and 24x7 AMC — plus custom enterprise software, portals, and cloud integrations engineered for scale.',
    ctaText: "Let's Talk With Us",
    ctaLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1920&auto=format&fit=crop',
    holograms: [
      {
        icon: <Lock className="size-6 text-cyan-300" />,
        tag: 'CYBER SHIELD',
        title: '24x7 SOC Defense',
        sub: 'Zero-Trust Perimeter Audited',
        pos: 'top-[20%] right-[18%]',
      },
      {
        icon: <Server className="size-6 text-amber-300" />,
        tag: 'INFRASTRUCTURE',
        title: 'Server Room Architecture',
        sub: '99.99% High Availability SLA',
        pos: 'bottom-[24%] right-[10%]',
      },
    ],
  },
  {
    id: 1,
    kicker: 'HARDWARE + SOFTWARE',
    headlinePrefix: 'Complete IT Solutions ',
    headlineHighlight: 'Under One Roof.',
    desc: 'From mission-critical server rooms to custom ERP and WhatsApp Meta automation, we deliver end-to-end technology solutions with guaranteed reliability.',
    ctaText: 'Get A Quote',
    ctaLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop',
    holograms: [
      {
        icon: <Database className="size-6 text-indigo-300" />,
        tag: 'ENTERPRISE CORE',
        title: 'Multi-Cloud & ERP',
        sub: 'Azure • AWS • Custom Portals',
        pos: 'top-[24%] right-[14%]',
      },
      {
        icon: <Layers className="size-6 text-emerald-300" />,
        tag: 'SLA GUARANTEE',
        title: '24x7 NOC Dispatch',
        sub: 'Dedicated Onsite Engineers',
        pos: 'bottom-[22%] right-[22%]',
      },
    ],
  },
  {
    id: 2,
    kicker: 'ONE BRAND • THREE DIVISIONS',
    headlinePrefix: 'Repair. Connect. Secure. ',
    headlineHighlight: 'Transform.',
    desc: 'Personal device care, Apple logic board BGA restorations, intelligent connected home automation, and enterprise multi-cloud transformation.',
    ctaText: 'Explore Divisions',
    ctaLink: '#divisions',
    bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop',
    holograms: [
      {
        icon: <Cpu className="size-6 text-rose-300" />,
        tag: 'CHIP-LEVEL LAB',
        title: 'Logic Board Engineering',
        sub: 'MacBook & Micro-Soldering',
        pos: 'top-[30%] right-[22%]',
      },
      {
        icon: <Sparkles className="size-6 text-yellow-300" />,
        tag: 'CONNECTED LIVING',
        title: 'Smart Automation & IoT',
        sub: 'Lighting, CCTV & Smart Locks',
        pos: 'bottom-[18%] right-[12%]',
      },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      id="top"
      aria-label="TSK OneIT Hero Showcase"
      className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] overflow-hidden bg-slate-950 text-white flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Creative Transitions */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 size-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Photography Background with subtle zoom */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />

            {/* Rich Dual-Tone Royal Blue Tech Gradient (Depth & Legibility) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07194d]/98 via-[#0b2b80]/90 to-[#081a4f]/80" />
            
            {/* Vignette & Ambient Radial Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,165,233,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(99,102,241,0.15),transparent_60%)]" />

            {/* Creative 3D Holographic Badges (Right Side) */}
            {slide.holograms.map((holo, hIdx) => (
              <div
                key={hIdx}
                className={`hidden lg:flex absolute ${holo.pos} z-20 items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-slate-900/80 cursor-default animate-float`}
                style={{ animationDelay: `${hIdx * 1.8}s` }}
              >
                <div className="p-3 rounded-xl bg-white/10 border border-white/20 shadow-inner text-white flex items-center justify-center">
                  {holo.icon}
                </div>
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">{holo.tag}</span>
                  </div>
                  <p className="text-sm font-black text-white">{holo.title}</p>
                  <p className="text-[11px] text-slate-300 font-medium">{holo.sub}</p>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Kicker with Glowing Accent Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-mono font-black uppercase tracking-[0.18em] text-cyan-300 shadow-sm">
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{slides[currentSlide].kicker}</span>
          </div>

          {/* Main Hero Headline with Vibrant Creative Gradient */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            {slides[currentSlide].headlinePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-amber-300 to-yellow-400 drop-shadow-sm">
              {slides[currentSlide].headlineHighlight}
            </span>
          </h1>

          {/* Snappy Description Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl text-balance">
            {slides[currentSlide].desc}
          </p>

          {/* High-Contrast Interactive CTA Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href={slides[currentSlide].ctaLink}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#ffdd00] to-[#f59e0b] hover:from-[#ffea00] hover:to-[#fbbf24] shadow-[0_10px_25px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 min-h-[52px] group"
            >
              <span>{slides[currentSlide].ctaText}</span>
              <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>

            <a
              href="tel:+914446030632"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md shadow-lg hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 min-h-[52px]"
            >
              <PhoneCall className="size-4 text-cyan-300" />
              <span>044 46030632</span>
            </a>
          </div>

        </div>
      </div>

      {/* Modern Frosted Glass Left / Right Chevron Controls */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 size-11 sm:size-13 rounded-full bg-slate-900/40 hover:bg-slate-900/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft className="size-6 text-white" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 size-11 sm:size-13 rounded-full bg-slate-900/40 hover:bg-slate-900/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className="size-6 text-white" />
      </button>

      {/* Bottom Center Slide Pagination Indicator Bars */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide 
                ? 'w-10 h-2 bg-gradient-to-r from-cyan-300 to-amber-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]' 
                : 'w-2.5 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
