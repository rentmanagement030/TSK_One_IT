import React from 'react';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import DivisionsSection from '@/components/DivisionsSection';
import IndustriesSection from '@/components/IndustriesSection';
import AmcSection from '@/components/AmcSection';
import WhyUs from '@/components/WhyUs';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <DivisionsSection />
      <IndustriesSection />
      <AmcSection />
      <WhyUs />
      <ContactSection />
    </>
  );
}
