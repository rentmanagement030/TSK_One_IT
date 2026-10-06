import React from 'react';
import type { Metadata } from 'next';
import WhoWeAre from '@/components/WhoWeAre';
import PartnerEcosystem from '@/components/PartnerEcosystem';
import WhyUs from '@/components/WhyUs';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'About Us | TSK OneIT - Your Trusted Technology Partner',
  description: 'Learn about TSK OneIT - 20+ years of excellence in personal device care, home automation, and enterprise IT digital transformation.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-28">
      <WhoWeAre />
      <PartnerEcosystem />
      <WhyUs />
      <ContactSection />
    </div>
  );
}
