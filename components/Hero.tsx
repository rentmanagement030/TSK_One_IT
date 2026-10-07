'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  PhoneCall
} from 'lucide-react';

interface SlideData {
  id: number;
  kicker: string;
  headline: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    kicker: 'ONE PARTNER. EVERY IT NEED.',
    headline: 'Complete IT Solutions',
    desc: 'From server rooms to custom ERP, we deliver end-to-end IT solutions with reliable support and maintenance.',
    ctaText: 'Get A Quote',
    ctaLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 1,
    kicker: 'CHIP-LEVEL MASTERY',
    headline: 'IT Device Care',
    desc: 'Precision laptop & desktop repairs, Apple MacBook logic board micro-soldering, and cleanroom data recovery.',
    ctaText: 'Explore Device Care',
    ctaLink: '/device-care',
    bgImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 2,
    kicker: 'SMART LIVING & SECURITY',
    headline: 'Home Automation',
    desc: 'Intelligent lighting, 4K CCTV surveillance, smart door locks, video door phones, and Wi-Fi 6 mesh systems.',
    ctaText: 'Explore Home Automation',
    ctaLink: '/home-automation',
    bgImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 3,
    kicker: 'ENTERPRISE TRANSFORMATION',
    headline: 'Business Solutions',
    desc: 'Enterprise multi-cloud architecture, cybersecurity SOC threat defense, managed IT, and custom AI software.',
    ctaText: 'Explore Business Solutions',
    ctaLink: '/business-solutions',
    bgImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1920&auto=format&fit=crop',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Auto slide advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      const timeout = setTimeout(() => setAnimating(false), 800);
      return () => clearTimeout(timeout);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const changeSlide = (newIndex: number) => {
    setAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setAnimating(false), 800);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section 
      id="top"
      aria-label="TSK OneIT Hero Showcase"
      className="sticky top-0 w-full min-h-screen lg:h-screen overflow-hidden bg-slate-950 text-white flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16 z-0 will-change-transform"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Futuristic Depth & Ken-Burns Zoom */}
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
            {/* High-Resolution Photography Layer */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />

            {/* Rich Royal Blue Dual-Tone Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06142f]/95 via-[#0e3b9f]/50 to-[#0b2460]/20" />
            
            {/* Tech Mesh & Vignette Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,12,30,0.85)_95%)]" />
          </div>
        );
      })}

      {/* Hero Foreground Content with Modern Kinetic Staggered Slide In */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Kicker with Dash Line */}
          <div 
            key={`kicker-${currentSlide}`}
            className="flex items-center gap-3 animate-fade-in"
          >
            <span className="w-10 sm:w-14 h-0.5 bg-sky-300 rounded-full" />
            <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-[0.2em] text-cyan-200">
              {activeSlide.kicker}
            </span>
          </div>

          {/* Main Hero Headline (Clean 4 Focus Areas) */}
          <h1 
            key={`headline-${currentSlide}`}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white transition-all duration-700 animate-fade-in"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            {activeSlide.headline}
          </h1>

          {/* Description Paragraph */}
          <p 
            key={`desc-${currentSlide}`}
            className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl animate-fade-in"
          >
            {activeSlide.desc}
          </p>

          {/* Yellow Action CTA Button */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            {activeSlide.ctaLink === '#contact' ? (
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service: 'General Consultation / Free Site Assessment' } }));
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 min-h-[50px] group cursor-pointer"
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <Link
                href={activeSlide.ctaLink}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 min-h-[50px] group cursor-pointer"
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

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
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-xl backdrop-blur-sm"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-xl backdrop-blur-sm"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Bottom Center Slide Pagination Dots / Indicators (Futuristic Glowing Pill Indicator) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => changeSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 rounded-full cursor-pointer ${
              idx === currentSlide 
                ? 'w-10 h-2 bg-gradient-to-r from-sky-400 to-white shadow-[0_0_12px_rgba(56,189,248,0.9)]' 
                : 'w-2.5 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
