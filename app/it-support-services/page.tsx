import React from 'react';
import type { Metadata } from 'next';
import ServiceCategoryPageTemplate, { ServiceCardItem } from '@/components/ServiceCategoryPageTemplate';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'IT Support Services | TSK One IT - AMC, Doorstep Pickup & Managed Device Support',
  description: 'Preventive IT AMC contracts, doorstep device pickup, on-demand IT troubleshooting, and managed device support for homes, offices, and enterprises.',
};

const cards: ServiceCardItem[] = [
  {
    title: 'AMC / Annual Maintenance Contracts',
    desc: 'Comprehensive & non-comprehensive AMC plans with scheduled preventive maintenance, quarterly deep cleaning, and emergency SLAs.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
    badge: '24/7 SLA Backed',
  },
  {
    title: 'Doorstep Pickup & Delivery',
    desc: 'Safe, insured doorstep device collection across Chennai with live ticket tracking, secure packaging, and quick turnaround.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    badge: 'Contactless',
  },
  {
    title: 'IT Troubleshooting',
    desc: 'Rapid diagnosis of hardware faults, OS crashes, malware infections, peripheral connectivity issues, and slow network bottlenecks.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    badge: 'Fast Onsite',
  },
  {
    title: 'Managed Device Support',
    desc: 'Fleet health monitoring, automated security patch management, centralized antivirus deployment, and remote helpdesk assistance.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    badge: 'Proactive Care',
  },
];

export default function ITSupportServicesPage() {
  return (
    <ServiceCategoryPageTemplate
      heroBannerImage={CLOUDINARY_IMAGES.bannerItSupport}
      heroAlt="TSK One IT - IT Support Services: On-Demand Diagnostics, AMC Maintenance & Fleet Support"
      bannerAspectRatio="aspect-[1024/571]"
      bannerBg="bg-white border-b border-slate-100"
      overlayTitle="IT Support Services"
      overlayButtonText="Explore Services"
      servicesSectionKicker="OUR IT SUPPORT CAPABILITIES"
      servicesSectionTitle="Seamless Support, Zero Downtime"
      servicesSectionDesc="Keep your computing infrastructure running at peak performance with dedicated technicians and certified engineers."
      cards={cards}
      ctaKicker="LOOKING FOR RELIABLE IT SUPPORT?"
      ctaTitle="Get An AMC Proposal Or On-Demand Visit"
      ctaDesc="Speak with our support engineers for customized AMC packages or instant troubleshooting assistance."
      ctaButtonText="Request IT Support"
      whatsappMessage="Hi TSK One IT, I would like to enquire about IT Support Services & AMC packages."
    />
  );
}
