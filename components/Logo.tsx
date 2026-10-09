import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'dark' | 'light';
}

function Logo({
  className = '',
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`group/logo inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1 transition-transform ${className}`}
      aria-label="TSK OneIT - Your Trusted Technology Partner"
    >
      <div className="relative h-13 sm:h-14 lg:h-16 w-44 sm:w-52 lg:w-64 flex items-center justify-start shrink-0">
        <Image
          src={CLOUDINARY_IMAGES.logo}
          alt="TSK One IT Logo"
          fill
          sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 256px"
          className="size-full object-contain object-left group-hover/logo:scale-105 transition-all duration-300"
          priority
          quality={95}
        />
      </div>
    </Link>
  );
}

export default React.memo(Logo);
