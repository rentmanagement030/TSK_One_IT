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
  Database
} from 'lucide-react';

interface SlideData {
  id: number;
  kicker: string;
  headline: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  holograms: {
    icon: React.ReactNode;
    title: string;
    pos: string;
  }[];
}

const slides: SlideData[] = [
  {
    id: 0,
    kicker: 'BEST IT COMPANY',
    headline: 'Best IT Solution Agency For Your Business',
    desc: 'Servers, racks, networking, server room setup, AMC — plus custom software like ERP, websites, and portals built for institutions and businesses.',
    ctaText: "Let's Talk With Us",
    ctaLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1920&auto=format&fit=crop',
    holograms: [
      {
        icon: <Lock className="size-8 text-sky-300" />,
        title: 'SOC Cyber Defense',
        pos: 'top-[22%] right-[22%]',
      },
      {
        icon: <Server className="size-8 text-cyan-300" />,
        title: 'Server Room Architecture',
        pos: 'bottom-[25%] right-[14%]',
      },
    ],
  },
  {
    id: 1,
    kicker: 'HARDWARE + SOFTWARE',
    headline: 'Complete IT Solutions Under One Roof',
    desc: 'From server rooms to custom ERP, we deliver end-to-end IT solutions with reliable support and maintenance.',
    ctaText: 'Get A Quote',
    ctaLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop',
    holograms: [
      {
        icon: <Database className="size-8 text-amber-300" />,
        title: 'Enterprise ERP & Cloud',
        pos: 'top-[28%] right-[18%]',
      },
      {
        icon: <Layers className="size-8 text-emerald-300" />,
        title: '24x7 NOC & SLA AMC',
        pos: 'bottom-[20%] right-[28%]',
      },
    ],
  },
  {
    id: 2,
    kicker: 'ONE BRAND. THREE DIVISIONS.',
    headline: 'Repair. Connect. Secure. Transform.',
    desc: 'From personal device care and chip-level motherboard restoration to connected smart homes and enterprise cloud transformation.',
    ctaText: 'Explore Divisions',
    ctaLink: '#divisions',
    bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop',
    holograms: [
      {
        icon: <Cpu className="size-8 text-rose-300" />,
        title: 'Chip-Level Engineering',
        pos: 'top-[35%] right-[25%]',
      },
      {
        icon: <Sparkles className="size-8 text-yellow-300" />,
        title: 'Smart Automation',
        pos: 'bottom-[18%] right-[16%]',
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
      className="relative w-full min-h-screen overflow-hidden bg-slate-950 text-white flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
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
            {/* High-Resolution Photography Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out transform scale-105"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />

            {/* Rich Royal Blue Dual-Tone Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d2e85]/95 via-[#0e3b9f]/85 to-[#0b2460]/75" />
            
            {/* Tech Mesh & Vignette Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,12,30,0.8)_95%)]" />

            {/* Glowing Digital Hologram Badges (Right Side) */}
            {slide.holograms.map((holo, hIdx) => (
              <div
                key={hIdx}
                className={`hidden lg:flex absolute ${holo.pos} z-20 items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl animate-float`}
                style={{ animationDelay: `${hIdx * 1.5}s` }}
              >
                <div className="p-2 rounded-xl bg-white/10 border border-white/20 shadow-sm">
                  {holo.icon}
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-200">Certified System</p>
                  <p className="text-xs font-black text-white">{holo.title}</p>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Kicker with Dash Line */}
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-14 h-0.5 bg-sky-300 rounded-full" />
            <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-[0.2em] text-cyan-200">
              {slides[currentSlide].kicker}
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
          >
            {slides[currentSlide].headline}
          </h1>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
            {slides[currentSlide].desc}
          </p>

          {/* Yellow Action CTA Button */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href={slides[currentSlide].ctaLink}
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 min-h-[50px] group cursor-pointer"
            >
              <span>{slides[currentSlide].ctaText}</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+914446030632"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm transition-all min-h-[50px]"
            >
              <PhoneCall className="size-4 text-amber-300" />
              <span>044 46030632</span>
            </a>
          </div>

        </div>
      </div>

      {/* Slider Left / Right Navigation Chevron Buttons */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-12 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-12 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Bottom Center Slide Pagination Dots / Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide 
                ? 'w-10 h-2 bg-white' 
                : 'w-2.5 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
