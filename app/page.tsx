import React from 'react';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import DivisionsSection from '@/components/DivisionsSection';
import DigitalTransformationGrid from '@/components/DigitalTransformationGrid';
import WhyUs from '@/components/WhyUs';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <DivisionsSection />
      <DigitalTransformationGrid />
      <WhyUs />
      <ContactSection />
    </>
  );
}
