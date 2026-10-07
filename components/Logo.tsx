import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

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
      href="/"
      className={`group/logo flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1 transition-transform ${className}`}
      aria-label="TSK OneIT - Your Trusted Technology Partner"
    >
      {/* Brand Hexagon Monogram Logo */}
      <div className="relative flex items-center justify-center size-10 rounded-xl overflow-hidden shadow-md shadow-sky-500/20 group-hover/logo:scale-105 transition-all duration-300 shrink-0 bg-transparent">
        <Image
          src="/images/logo.png"
          alt="TSK One IT Logo"
          width={40}
          height={40}
          className="size-full object-contain rounded-lg"
          priority
        />
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
