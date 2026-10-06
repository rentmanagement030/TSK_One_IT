import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export default function Logo({ className = '', variant = 'dark', showTagline = true }: LogoProps) {
  const isLightText = variant === 'light';

  return (
    <Link 
      href="#top" 
      className={`group inline-flex items-center gap-2.5 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1 shrink-0 ${className}`}
    >
      {/* Hexagonal Tech Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] shadow-[0_4px_14px_rgba(14,165,233,0.3)] border border-sky-300/60 group-hover:scale-105 transition-transform duration-200 shrink-0">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          aria-hidden="true"
        >
          <path
            d="M22 4L37 13V29L22 38L7 29V13L22 4Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 17H30M22 17V30M16 23H28"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="17" r="2" fill="#fef08a" />
          <circle cx="22" cy="30" r="2" fill="#fef08a" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-black italic text-xl tracking-wider ${
            isLightText ? 'text-white' : 'text-[#0284c7]'
          }`}>
            TSK
          </span>
          <span className={`font-extrabold text-base tracking-wide uppercase ${
            isLightText ? 'text-sky-300' : 'text-[#0b1b3a]'
          }`}>
            One IT
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${
            isLightText ? 'text-slate-300' : 'text-slate-600'
          }`}>
            One Partner. Every IT Need.
          </span>
        )}
      </div>
    </Link>
  );
}
