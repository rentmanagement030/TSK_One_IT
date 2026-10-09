import React from 'react';
import type { Metadata } from 'next';
import ServiceCategoryPageTemplate, { ServiceCardItem } from '@/components/ServiceCategoryPageTemplate';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Home Security & CCTV | TSK One IT - Smart Locks, Intercoms & Surveillance',
  description: '4K AI CCTV surveillance, biometric smart door locks, video door phones, RFID access control, and home cybersecurity protection.',
};

const cards: ServiceCardItem[] = [
  {
    title: 'CCTV',
    desc: '4K Color-at-Night surveillance, AI human & vehicle detection, cloud/NVR encrypted recording, and smartphone remote live streaming.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    badge: '4K ColorVu AI',
  },
  {
    title: 'Smart Door Locks',
    desc: 'Keyless security with 3D biometric fingerprint scanning, anti-peep PIN touchpad, RFID cards, mechanical backup key & mobile unlock.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    badge: 'Biometric 3D',
  },
  {
    title: 'Video Door Phones',
    desc: 'Full-HD two-way video intercom with night vision, mobile remote gate unlocking, visitor snapshot recording & multi-screen support.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
    badge: 'Two-Way Intercom',
  },
  {
    title: 'Access Control',
    desc: 'RFID card readers, keypad controllers, and automated electromagnetic gate strikes for private villas, estates & home offices.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80',
    badge: 'RFID & Gate',
  },
  {
    title: 'Home Cyber Security',
    desc: 'Router hardware firewall hardening, isolated IoT smart home VLANs, parental web filters, and defense against unauthorized hacks.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    badge: 'IoT Firewall',
  },
];

export default function HomeSecurityPage() {
  return (
    <ServiceCategoryPageTemplate
      heroBannerImage={CLOUDINARY_IMAGES.bannerHomeSecurity}
      heroAlt="TSK One IT - Home Security: 4K CCTV, Smart Locks, Video Door Phones & Perimeter Access Control"
      bannerAspectRatio="aspect-[1024/576]"
      bannerBg="bg-white border-b border-slate-100"
      overlayTitle="Home Security & Surveillance"
      overlayButtonText="Explore Services"
      servicesSectionKicker="OUR HOME SECURITY SERVICES"
      servicesSectionTitle="Uncompromising Protection, Total Peace of Mind"
      servicesSectionDesc="Enterprise-grade residential security tailored for apartments, gated communities, and luxury villas in Chennai."
      cards={cards}
      ctaKicker="SECURE YOUR RESIDENCE TODAY"
      ctaTitle="Schedule A Free Home Security Assessment"
      ctaDesc="Our certified security technicians will survey your property and propose an optimal camera & smart lock coverage plan."
      ctaButtonText="Book Free Security Audit"
      whatsappMessage="Hi TSK One IT, I would like to book a free home security survey and CCTV quotation."
    />
  );
}
