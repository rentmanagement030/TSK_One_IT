import React from 'react';
import Hero from '@/components/Hero';
import PartnerEcosystem from '@/components/PartnerEcosystem';
import WhoWeAre from '@/components/WhoWeAre';
import DivisionsSection from '@/components/DivisionsSection';
import DigitalTransformationGrid from '@/components/DigitalTransformationGrid';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Content Curtain Overlay (Scrolls over the sticky Hero section) */}
      <div id="explore-content" className="relative z-20 bg-[#f4f9fd] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <PartnerEcosystem />
        <WhoWeAre />
        <DivisionsSection />
        <DigitalTransformationGrid />
        <IndustriesWeServe />
        <ContactSection />
      </div>
    </>
  );
}
