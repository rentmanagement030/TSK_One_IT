'use client';

import React from 'react';
import { ArrowRight, MessageSquareCheck } from 'lucide-react';

interface EnquiryButtonProps {
  serviceTitle: string;
  className?: string;
}

export default function EnquiryButton({ serviceTitle, className = '' }: EnquiryButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }));
      window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service: serviceTitle } }));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Enquire for ${serviceTitle}`}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-[#1d5fd1] hover:from-sky-400 hover:to-blue-600 text-white text-xs font-extrabold shadow-sm hover:shadow-md hover:shadow-sky-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0 group ${className}`}
    >
      <span>Enquire Now</span>
      <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
    </button>
  );
}
