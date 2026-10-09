'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Dynamic code splitting for below-the-fold heavy components
const PartnerEcosystem = dynamic(() => import('@/components/PartnerEcosystem'), {
  loading: () => <div className="min-h-[120px]" />,
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="min-h-[300px]" />,
});

export interface ServiceCardItem {
  title: string;
  desc: string;
  image: string;
  badge?: string;
}

export interface ServiceCategoryPageProps {
  categoryKicker?: string;
  heroBannerImage: string;
  heroAlt: string;
  bannerAspectRatio?: string;
  bannerBg?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  overlayButtonText?: string;
  overlayTextColor?: string;
  servicesSectionKicker: string;
  servicesSectionTitle: string;
  servicesSectionDesc: string;
  cards: ServiceCardItem[];
  ctaKicker: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButtonText?: string;
  whatsappMessage?: string;
}

const AUTO_SCROLL_DELAY = 10000; // 10 seconds

export default function ServiceCategoryPageTemplate({
  categoryKicker,
  heroBannerImage,
  heroAlt,
  bannerAspectRatio = 'aspect-[16/9]',
  bannerBg = 'bg-[#030a1a]',
  overlayTitle,
  overlaySubtitle,
  overlayButtonText,
  overlayTextColor = 'text-slate-950',
  servicesSectionKicker,
  servicesSectionTitle,
  servicesSectionDesc,
  cards,
  ctaKicker,
  ctaTitle,
  ctaDesc,
  ctaButtonText = 'Get Free Visit',
  whatsappMessage = 'Hi TSK One IT, I would like to enquire about your services.',
}: ServiceCategoryPageProps) {
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userHasScrolled = useRef(false);

  const openEnquiry = (serviceName?: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-enquiry-modal', {
          detail: { service: serviceName || categoryKicker || overlayTitle },
        })
      );
    }
  };

  const scrollToServices = useCallback(() => {
    const el = document.getElementById('services-grid-section');
    if (el) {
      const navOffset = 64;
      const targetTop = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });
    }
  }, []);

  // 10-Second Inactivity Auto-Scroll to Services Section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        userHasScrolled.current = true;
        if (autoScrollTimerRef.current) {
          clearTimeout(autoScrollTimerRef.current);
          autoScrollTimerRef.current = null;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    autoScrollTimerRef.current = setTimeout(() => {
      if (!userHasScrolled.current && window.scrollY < 80) {
        scrollToServices();
      }
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollToServices]);

  return (
    <div className="bg-[#ffffff] text-slate-900">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION (Single Full-Width Banner Image - No Carousel)        */}
      {/* ========================================================================= */}
      <section 
        id="top"
        aria-label={`${overlayTitle || categoryKicker} Hero Showcase`}
        className={`relative w-full ${bannerBg} overflow-hidden pt-15 sm:pt-16 select-none group/hero`}
      >
        {/* Responsive Banner Container */}
        <div className={`relative w-full ${bannerAspectRatio} max-w-[1920px] mx-auto overflow-hidden ${bannerBg}`}>
          <Image
            src={heroBannerImage}
            alt={heroAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-contain object-center transition-transform duration-700 ease-out"
          />

          {/* Left Side Overlay (Title and One Button) */}
          {overlayTitle && (
            <div className="absolute inset-y-0 left-0 z-20 flex items-center w-full sm:w-[50%] md:w-[46%] lg:w-[42%] px-6 sm:px-10 lg:px-16 pointer-events-none">
              <div className="space-y-4 sm:space-y-6 text-left pointer-events-auto">
                <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] ${overlayTextColor} ${
                  overlayTextColor.includes('white') ? 'drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]' : ''
                }`}>
                  {overlayTitle}
                </h1>

                {overlaySubtitle && (
                  <p className={`text-xs sm:text-sm lg:text-base font-medium leading-relaxed max-w-md ${
                    overlayTextColor.includes('white') ? 'text-slate-200 drop-shadow' : 'text-slate-700'
                  }`}>
                    {overlaySubtitle}
                  </p>
                )}

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{overlayButtonText || 'Explore Services'}</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Floating "Scroll to Explore" Cue (Clickable) */}
          <button
            type="button"
            onClick={scrollToServices}
            className="hidden md:flex absolute bottom-4 right-6 z-20 items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/50 hover:bg-slate-900/80 border border-white/15 hover:border-sky-400/60 text-[11px] font-mono font-bold text-slate-200 hover:text-white uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer group/scroll shadow-lg"
            aria-label="Scroll to explore services"
          >
            <span>Explore Services</span>
            <ChevronDown className="size-3.5 text-sky-400 group-hover/scroll:translate-y-0.5 transition-transform animate-bounce" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION WITH HORIZONTAL CARDS                                */}
      {/* ========================================================================= */}
      <section id="services-grid-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#0284c7] block">
            — {servicesSectionKicker} —
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
            {servicesSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            {servicesSectionDesc}
          </p>
        </div>

        {/* Services Cards Grid (Horizontal Layout inside each card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cards.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between"
            >
              <div className="flex flex-row gap-4 items-start">
                
                {/* Left: Card Thumbnail Image */}
                <div className="relative size-24 sm:size-28 md:size-32 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-1.5 left-1.5 text-[9px] font-mono font-bold bg-slate-900/80 text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Right: Card Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug mb-1.5 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3 mb-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Enquiry Pill Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => openEnquiry(item.title)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-50 hover:bg-[#0284c7] text-[#0284c7] hover:text-white text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer group/btn"
                    >
                      <span>Enquiry</span>
                      <ArrowRight className="size-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. BOTTOM FULL-WIDTH CTA BANNER                                          */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pb-16 sm:pb-20">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-100 via-sky-50/60 to-slate-100 border border-slate-200/90 shadow-md p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 text-left space-y-1.5 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] block">
              {ctaKicker}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight">
              {ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {ctaDesc}
            </p>
          </div>

          {/* Right Dual CTA Buttons */}
          <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0">
            {/* Blue Primary Button */}
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto flex-1 sm:flex-initial sm:min-w-[210px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer min-h-[48px] text-center"
            >
              <Calendar className="size-4 shrink-0" />
              <span>{ctaButtonText}</span>
            </button>

            {/* Official WhatsApp Green Button */}
            <a
              href={`https://wa.me/919150843991?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 sm:flex-initial sm:min-w-[210px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-green-500/20 transition-all active:scale-95 group min-h-[48px] text-center"
            >
              <WhatsAppIcon className="size-4.5 fill-white group-hover:scale-110 transition-transform shrink-0" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </section>

      {/* Global Brand Ecosystem & Contact Footer Curtain */}
      <PartnerEcosystem />
      <ContactSection />

    </div>
  );
}
