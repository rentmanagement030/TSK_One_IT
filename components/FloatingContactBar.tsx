'use client';

import React from 'react';
import { PhoneCall, CalendarCheck } from 'lucide-react';

export default function FloatingContactBar() {
  return (
    <>
      {/* Right Edge Floating Side Tabs (Desktop only: hidden md:flex) */}
      <aside 
        aria-label="Quick action sidebar tabs"
        className="hidden md:flex fixed right-0 top-[42%] -translate-y-1/2 z-40 flex-col gap-3.5 items-end select-none pointer-events-auto"
      >
        {/* Tab 1: Book Free Consultation (Vibrant Azure Blue with Shimmer & Sparkling Highlights) */}
        <button
          type="button"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service: 'General Consultation / Free Site Assessment' } }));
            }
          }}
          aria-label="Book Free Consultation with TSK OneIT"
          className="group relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#0080ca] to-[#005ea2] hover:from-[#0091e6] hover:to-[#006bb8] text-white py-4 px-2.5 sm:px-3 rounded-l-2xl border-l-2 border-t-2 border-b-2 border-white/50 transition-all duration-300 hover:-translate-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400 tab-pulse-blue"
        >
          {/* Animated Diagonal Shimmer Flare */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          <span className="pointer-events-none absolute -inset-full animate-shimmer-sweep bg-gradient-to-b from-transparent via-white/30 to-transparent" />

          {/* Sparkling Star 1 (Top) */}
          <span className="pointer-events-none absolute top-1.5 left-1 text-sky-200 animate-sparkle-twinkle">
            <svg className="size-3 fill-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </span>

          {/* Sparkling Star 2 (Bottom) */}
          <span className="pointer-events-none absolute bottom-2 left-1 text-white animate-sparkle-twinkle-alt">
            <svg className="size-2 fill-white drop-shadow-[0_0_4px_#fff]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </span>

          <div 
            className="flex items-center gap-2 font-bold text-[12px] sm:text-[13px] tracking-wider text-white whitespace-nowrap drop-shadow-sm"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span>Book Free Consultation</span>
            <CalendarCheck className="size-3.5 sm:size-4 text-sky-100 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
          </div>
        </button>

        {/* Tab 2: Call now (Vibrant Brand Orange with Shimmer & Sparkling Highlights) */}
        <a
          href="tel:+914446030632"
          aria-label="Call TSK OneIT Now at 044 46030632"
          className="group relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#f26522] to-[#d44806] hover:from-[#ff7330] hover:to-[#e0500a] text-white py-3.5 px-2.5 sm:px-3 rounded-l-2xl border-l-2 border-t-2 border-b-2 border-white/50 transition-all duration-300 hover:-translate-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 tab-pulse-orange"
        >
          {/* Animated Diagonal Shimmer Flare */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          <span className="pointer-events-none absolute -inset-full animate-shimmer-sweep bg-gradient-to-b from-transparent via-white/30 to-transparent" />

          {/* Sparkling Star 1 (Top) */}
          <span className="pointer-events-none absolute top-1.5 left-1 text-amber-200 animate-sparkle-twinkle">
            <svg className="size-3 fill-yellow-200 drop-shadow-[0_0_6px_rgba(254,240,138,0.9)]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </span>

          {/* Sparkling Star 2 (Bottom) */}
          <span className="pointer-events-none absolute bottom-2 left-1 text-white animate-sparkle-twinkle-alt">
            <svg className="size-2 fill-white drop-shadow-[0_0_4px_#fff]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </span>

          <div 
            className="flex items-center gap-2 font-bold text-[12px] sm:text-[13px] tracking-wider text-white whitespace-nowrap drop-shadow-sm"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span>Call now</span>
            <PhoneCall className="size-3.5 sm:size-4 text-orange-100 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
          </div>
        </a>
      </aside>

      {/* Single Official WhatsApp Floating Button */}
      <aside aria-label="Quick contact actions">
        <a
          href="https://wa.me/919150843991?text=Hi%20TSK%20OneIT%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat - Connect with TSK OneIT support"
          className="fixed bottom-20 right-4 z-50 sm:bottom-6 sm:right-6 flex items-center justify-center size-14 sm:size-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 focus:outline-none focus:ring-4 focus:ring-green-400 group cursor-pointer"
        >
          {/* Subtle live radar ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 group-hover:animate-ping -z-10" />
          
          {/* Official WhatsApp Logo SVG */}
          <svg 
            className="size-7 sm:size-8 fill-white text-white group-hover:scale-105 transition-transform" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="sr-only">WhatsApp Chat</span>
        </a>

        {/* Sticky Bottom Action Bar for Mobile Screens (< 768px) */}
        <nav
          aria-label="Mobile quick call and chat bar"
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a2a66]/95 backdrop-blur-xl border-t border-sky-300/20 px-3 py-2 flex items-center gap-2.5 shadow-2xl"
        >
          <a
            href="tel:+914446030632"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 active:bg-white/20 transition-all min-h-[42px]"
            aria-label="Call Now at 044 46030632"
          >
            <PhoneCall className="size-4 text-sky-300 shrink-0" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/919150843991?text=Hi%20TSK%20OneIT%2C%20I%20would%20like%20to%20book%20a%20Free%20Consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-md active:opacity-90 transition-all min-h-[42px]"
            aria-label="WhatsApp Consultation"
          >
            <svg className="size-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </nav>
    </aside>
  </>
);
}
