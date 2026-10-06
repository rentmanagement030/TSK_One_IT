import React from 'react';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import ServicesGrid from '@/components/ServicesGrid';
import SmartAutomation from '@/components/SmartAutomation';
import AmcSection from '@/components/AmcSection';
import WhyUs from '@/components/WhyUs';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesGrid />
      <SmartAutomation />
      <AmcSection />
      <WhyUs />
      <ContactSection />
    </>
  );
}
