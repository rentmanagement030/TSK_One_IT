import React from 'react';
import Image from 'next/image';

interface SmartPhotoCardProps {
  id: string;
  title: string;
  category?: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientClass?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function SmartPhotoCard({
  id,
  title,
  category,
  imageSrc,
  imageAlt,
  gradientClass = 'from-sky-50 via-cyan-50 to-blue-50',
  icon: Icon,
}: SmartPhotoCardProps) {
  return (
    <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden bg-slate-50 border border-sky-100 group">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        /* Dynamic High-tech Vector Abstract Backdrop (TSK Automations Light Theme) */
        <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex flex-col justify-between p-4 relative`}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="flex items-center justify-between z-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800 bg-white/90 px-2 py-0.5 rounded-md border border-sky-200 shadow-sm">
              {id}
            </span>
            {category && (
              <span className="text-[11px] font-bold text-slate-700 bg-white/80 px-2.5 py-0.5 rounded-full border border-sky-100">
                {category}
              </span>
            )}
          </div>

          <div className="flex items-end justify-between z-10 mt-auto">
            <div className="max-w-[75%]">
              <span className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                {title}
              </span>
            </div>
            {Icon && (
              <div className="p-2.5 rounded-xl bg-white text-sky-600 border border-sky-200 shadow-sm group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-200">
                <Icon className="w-5 h-5" />
              </div>
            )}
          </div>

          {/* Accent lighting strip */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent group-hover:via-sky-500 transition-all" />
        </div>
      )}
    </div>
  );
}
