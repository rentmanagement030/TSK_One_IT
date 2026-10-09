import React from 'react';
import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Let’s Talk - TSK One IT Support, Hardware & Automation',
  description: 'Connect directly with certified IT engineers, request a free site assessment, or visit our Service Exploration Hub on Anna Salai, Chennai.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactSection isStandalonePage={true} />
    </main>
  );
}
