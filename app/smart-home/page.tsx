import React from 'react';
import type { Metadata } from 'next';
import ServiceCategoryPageTemplate, { ServiceCardItem } from '@/components/ServiceCategoryPageTemplate';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Smart Home Solutions | TSK One IT - Smart Lighting, Voice & Automation',
  description: 'Intelligent home automation, smart lighting controls, multi-room voice assistants, and high-speed Wi-Fi 6 mesh networking for modern homes and villas.',
};

const cards: ServiceCardItem[] = [
  {
    title: 'Smart Lighting',
    desc: 'Automated mood lighting, circadian rhythm dimming, wireless scene panels, and scheduled timers controllable from your smartphone.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    badge: 'Mood & Scene',
  },
  {
    title: 'Voice Assistants',
    desc: 'Hands-free voice control for lights, ACs, entertainment systems, and appliances using Apple HomeKit, Amazon Alexa & Google Assistant.',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
    badge: 'Apple & Alexa',
  },
  {
    title: 'Home Wi-Fi & Mesh',
    desc: 'High-bandwidth Wi-Fi 6/7 whole-home mesh networking eliminating dead zones for ultra-fast 4K streaming, gaming, and IoT stability.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    badge: 'Zero Dead-Zones',
  },
  {
    title: 'Smart Home Automation',
    desc: 'Centralized touch screen control, automated motorized curtains, smart HVAC climate regulation, and custom one-touch leaving/welcome scenes.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    badge: 'Touch & App',
  },
];

export default function SmartHomePage() {
  return (
    <ServiceCategoryPageTemplate
      heroBannerImage={CLOUDINARY_IMAGES.bannerSmartHome}
      heroAlt="TSK One IT - Smart Home Solutions: Smart Lighting, Voice Automation & Whole Home Wi-Fi"
      bannerAspectRatio="aspect-[1024/576]"
      bannerBg="bg-white border-b border-slate-100"
      overlayTitle="Smart Home Solutions"
      overlayButtonText="Explore Services"
      servicesSectionKicker="OUR SMART HOME SERVICES"
      servicesSectionTitle="Smart Living, Simplified"
      servicesSectionDesc="Everything you need to build a smarter, safer, and more connected home tailored to your lifestyle."
      cards={cards}
      ctaKicker="READY TO UPGRADE YOUR HOME?"
      ctaTitle="Let's Build Your Smart Home"
      ctaDesc="Get expert advice, free doorstep site assessment, and a customized automation layout for your apartment or villa."
      ctaButtonText="Get Free Site Visit"
      whatsappMessage="Hi TSK One IT, I would like to schedule a free site visit for Smart Home Automation."
    />
  );
}
