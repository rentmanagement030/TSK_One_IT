'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [navKey, setNavKey] = useState(pathname);

  useEffect(() => {
    // Only scroll to top if not navigating to a hash anchor like #contact
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    setNavKey(pathname);
  }, [pathname]);

  return (
    <>
      {/* Sleek Top Neon Route Transition Progress Indicator */}
      <div key={`progress-${navKey}`} className="route-progress-bar" />

      {/* Silky Smooth Kinetic Page Enter Transition */}
      <div key={`page-${navKey}`} className="animate-page-enter w-full">
        {children}
      </div>
    </>
  );
}
