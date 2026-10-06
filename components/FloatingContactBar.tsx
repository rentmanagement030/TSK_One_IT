'use client';

import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';

export default function FloatingContactBar() {
  return (
    <>
      {/* Floating Circular WhatsApp Button for Mobile / Tablet / Desktop */}
      <aside aria-label="Quick contact actions">
        <a
          href="https://wa.me/919150843991?text=Hi%20TSK%20One%20IT%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat - Connect with TSK One IT support desk"
          className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/50 focus:outline-none focus:ring-4 focus:ring-green-400 group"
        >
          {/* Subtle live radar ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:animate-ping -z-10" />
          <MessageSquare className="w-7 h-7 fill-white text-white group-hover:scale-105 transition-transform" />
          <span className="sr-only">WhatsApp Chat</span>
        </a>

        {/* Sticky Bottom Action Bar for Mobile Screens (< 768px) */}
        <nav
          aria-label="Mobile quick call and chat bar"
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0a2a66]/95 backdrop-blur-xl border-t border-sky-300/20 px-3 py-2.5 flex items-center gap-2.5 shadow-2xl"
        >
          <a
            href="tel:+914446030632"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 active:bg-white/20 transition-all min-h-[44px]"
            aria-label="Call Now at 044 46030632"
          >
            <PhoneCall className="w-4 h-4 text-sky-300 shrink-0 animate-bounce" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/919150843991?text=Hi%20TSK%20One%20IT%2C%20I%20would%20like%20to%20book%20a%20Free%20Site%20Assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:brightness-105 text-[#0b1b3a] font-extrabold text-xs shadow-md active:opacity-90 transition-all min-h-[44px]"
            aria-label="Free Assessment - Book on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#0b1b3a] shrink-0" />
            <span>Free Assessment</span>
          </a>
        </nav>
      </aside>
    </>
  );
}
