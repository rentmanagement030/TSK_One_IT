'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ChevronDown, Pause, Play } from 'lucide-react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

interface SlideData {
  id: number;
  title: string;
  image: string;
  href: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    title: 'IT Products & Device Care',
    image: CLOUDINARY_IMAGES.heroDeviceCare,
    href: '/device-repair-and-maintenance',
    alt: 'TSK One IT - IT Products & Device Care: Buy, Setup, Repair, Support',
  },
  {
    id: 1,
    title: 'Smart Home Solutions',
    image: CLOUDINARY_IMAGES.heroSmartHome,
    href: '/smart-home',
    alt: 'TSK One IT - Smart Home Solutions: Smarter Spaces, Safer People, Greater Comfort',
  },
  {
    id: 2,
    title: 'Business IT Solutions',
    image: CLOUDINARY_IMAGES.heroBusinessSolutions,
    href: '/it-infrastructure-and-cloud',
    alt: 'TSK One IT - Business IT Solutions: Secure, Scalable, Always On',
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };

  const togglePause = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setIsPaused((prev) => !prev);
  };

  // Smooth scroll to the next section when user clicks the explore/scroll down indicator
  const scrollToNextSection = useCallback(() => {
    const nextSection = document.getElementById('explore-content');
    if (nextSection) {
      const navOffset = 64;
      const targetTop = nextSection.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.75,
        behavior: 'smooth',
      });
    }
  }, []);

  // Auto slide advance every 5 seconds (continuous auto-scroll unless paused by click)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, progressKey]);

  // Touch handlers for mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      nextSlide();
    } else if (diff < -swipeThreshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="top"
      aria-label="TSK One IT Hero Showcase"
      className="relative w-full bg-white overflow-hidden pt-18 sm:pt-20 select-none group/hero"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Exact Banner Aspect Ratio Viewport (1024 / 434) with zero letterboxing */}
      <div className="relative w-full aspect-[1024/434] max-w-[1920px] mx-auto overflow-hidden bg-slate-50">
        
        {/* Kinetic Depth Track: Smooth sliding with depth scaling & parallax mixing */}
        <div 
          className="flex w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                className="w-full min-w-full h-full relative shrink-0 overflow-hidden flex items-center justify-center p-0"
              >
                {/* Clickable Banner Slide Link */}
                <Link 
                  href={slide.href}
                  className={`group block relative w-full h-full cursor-pointer focus:outline-none transition-opacity duration-500 ease-out ${
                    isActive 
                      ? 'opacity-100' 
                      : 'opacity-0 pointer-events-none'
                  }`}
                  aria-label={`Go to ${slide.title} page`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                    className="object-cover object-center select-none"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translate3d(0, 0, 0)',
                    }}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Left Arrow Navigation Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            prevSlide();
          }}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 size-8 sm:size-10 md:size-12 rounded-full bg-slate-950/40 hover:bg-slate-900/80 border border-white/20 hover:border-sky-400 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xl backdrop-blur-md opacity-80 hover:opacity-100"
        >
          <ChevronLeft className="size-5 sm:size-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            nextSlide();
          }}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 size-8 sm:size-10 md:size-12 rounded-full bg-slate-950/40 hover:bg-slate-900/80 border border-white/20 hover:border-sky-400 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xl backdrop-blur-md opacity-80 hover:opacity-100"
        >
          <ChevronRight className="size-5 sm:size-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Modern Slide Indicators with Pause/Play Button & Animated Progress Fill Bars */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-slate-950/60 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 shadow-2xl">
          
          {/* Click to Pause / Play Toggle */}
          <button
            type="button"
            onClick={togglePause}
            aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll (Click to stop)"}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            {isPaused ? (
              <Play className="size-3 sm:size-3.5 fill-current text-amber-400" />
            ) : (
              <Pause className="size-3 sm:size-3.5 fill-current text-sky-400" />
            )}
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    goToSlide(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'w-10 sm:w-14 h-2 bg-white/20 shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                      : 'w-2 sm:w-2.5 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                >
                  {/* Active Slide Timer Progress Fill */}
                  {isActive && (
                    <span 
                      key={`progress-${progressKey}-${idx}`}
                      className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-200 rounded-full"
                      style={{
                        animation: `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating "Scroll to Explore" Cue (Clickable) */}
        <button
          type="button"
          onClick={scrollToNextSection}
          className="hidden md:flex absolute bottom-4 right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/40 hover:bg-slate-900/70 border border-white/10 hover:border-sky-400/50 text-[11px] font-mono font-bold text-slate-300 hover:text-white uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer group/scroll"
          aria-label="Scroll to explore next section"
        >
          <span>Explore</span>
          <ChevronDown className="size-3.5 text-sky-400 group-hover/scroll:translate-y-0.5 transition-transform animate-bounce" />
        </button>

      </div>

      {/* Inline Keyframe Animation for Progress Bar */}
      <style jsx global>{`
        @keyframes heroProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>

    </section>
  );
}
