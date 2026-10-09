import React from 'react';
import type { Metadata } from 'next';
import ServiceCategoryPageTemplate, { ServiceCardItem } from '@/components/ServiceCategoryPageTemplate';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'IT Infrastructure & Cloud | TSK One IT - Server, Cloud & Cybersecurity',
  description: 'Enterprise IT infrastructure, structured cabling, Azure/AWS/GCP multi-cloud architecture, 24/7 SOC threat monitoring, and managed IT services.',
};

const cards: ServiceCardItem[] = [
  {
    title: 'IT Infrastructure',
    desc: 'Rack server deployments, high-density Cat6A/Fiber structured cabling, core switching, climate-controlled server rooms & power redundancy.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    badge: '10G & Servers',
  },
  {
    title: 'Cloud Solutions (Azure, AWS, GCP)',
    desc: 'Seamless enterprise cloud migrations, hybrid architecture, Kubernetes containerization, automated backups & cloud cost optimization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    badge: 'Multi-Cloud',
  },
  {
    title: 'Managed IT Services',
    desc: '24/7 proactive infrastructure monitoring, L1/L2/L3 helpdesk support, guaranteed SLA response, and complete IT asset lifecycle management.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    badge: '24/7 Support',
  },
  {
    title: 'NOC / SOC / TAC',
    desc: '24x7 Network Operations, Security Operations threat hunting, real-time incident containment, and tier-3 technical assistance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    badge: 'SOC Center',
  },
  {
    title: 'Cybersecurity',
    desc: 'Next-Gen Fortinet/Palo Alto firewalls, EDR/XDR endpoint protection, automated vulnerability scanning & zero-trust network access.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    badge: 'Zero-Trust',
  },
];

export default function ITInfrastructureCloudPage() {
  return (
    <ServiceCategoryPageTemplate
      heroBannerImage={CLOUDINARY_IMAGES.bannerItInfrastructure}
      heroAlt="TSK One IT - Enterprise IT Infrastructure: Cloud Solutions, Cybersecurity & Managed NOC/SOC"
      bannerAspectRatio="aspect-[1024/576]"
      bannerBg="bg-white border-b border-slate-100"
      overlayTitle="IT Infrastructure & Cloud"
      overlayButtonText="Explore Services"
      servicesSectionKicker="OUR INFRASTRUCTURE &amp; CLOUD CAPABILITIES"
      servicesSectionTitle="High Availability, Zero Compromise"
      servicesSectionDesc="Engineered for high throughput, data compliance, and enterprise resilience across Tamil Nadu and South India."
      cards={cards}
      ctaKicker="EXPANDING YOUR IT INFRASTRUCTURE?"
      ctaTitle="Schedule An Enterprise Architecture Consultation"
      ctaDesc="Our certified cloud architects and network engineers will design a resilient, high-speed IT blueprint for your business."
      ctaButtonText="Request IT Proposal"
      whatsappMessage="Hi TSK One IT, I would like to schedule an Enterprise IT Infrastructure & Cloud consultation."
    />
  );
}
