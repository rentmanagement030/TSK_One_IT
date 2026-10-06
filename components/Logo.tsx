import React from 'react';
import Link from 'next/link';

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({
  showTagline = true,
  className = '',
  variant = 'dark',
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="#top"
      className={`group/logo flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1 transition-transform ${className}`}
      aria-label="TSK OneIT - Your Trusted Technology Partner"
    >
      {/* Modern Hexagonal Tech Circuit Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#06b6d4] shadow-md shadow-sky-500/25 group-hover/logo:scale-105 transition-all duration-300 shrink-0">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        {/* Amber Tech Circuit Accent Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white shadow-xs" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span
            className={`font-black italic tracking-tighter text-xl leading-none transition-colors whitespace-nowrap ${
              isLight ? 'text-white' : 'text-[#0b1b3a] group-hover/logo:text-[#0284c7]'
            }`}
          >
            TSK
          </span>
          <span
            className={`font-extrabold tracking-tight text-xl leading-none whitespace-nowrap ${
              isLight ? 'text-sky-300' : 'text-[#0284c7]'
            }`}
          >
            One<span className={isLight ? 'text-white' : 'text-[#0b1b3a]'}>IT</span>
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[9px] font-mono font-bold tracking-wider uppercase mt-0.5 whitespace-nowrap ${
              isLight ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Repair &bull; Connect &bull; Secure &bull; Transform
          </span>
        )}
      </div>
    </Link>
  );
}
