'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const FloatingContactBar = dynamic(() => import('@/components/FloatingContactBar'), {
  ssr: false,
});

const EnquiryModal = dynamic(() => import('@/components/EnquiryModal'), {
  ssr: false,
});

/**
 * Client-Side Dynamic Feature Provider
 * Keeps heavy interactive widgets (modals, floating CTA bars) off the critical server render path.
 */
export default function ClientProviders() {
  return (
    <>
      <FloatingContactBar />
      <EnquiryModal />
    </>
  );
}
