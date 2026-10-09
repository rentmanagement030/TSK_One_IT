import React from 'react';
import type { Metadata } from 'next';
import ServiceCategoryPageTemplate, { ServiceCardItem } from '@/components/ServiceCategoryPageTemplate';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Software & AI Automation | TSK One IT - Custom ERP, CRM & WhatsApp API',
  description: 'Custom enterprise software development, ERP/CRM implementations, official WhatsApp Business API automation, and generative AI business applications.',
};

const cards: ServiceCardItem[] = [
  {
    title: 'AI & Business Applications',
    desc: 'Custom LLM workflows, intelligent automated document processing, predictive data analytics, and internal AI productivity copilots.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    badge: 'GenAI & LLM',
  },
  {
    title: 'CRM / ERP',
    desc: 'Bespoke CRM pipelines, inventory management, supply chain ERP, GST-compliant invoicing & role-based enterprise portals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    badge: 'Custom ERP',
  },
  {
    title: 'WhatsApp Automation',
    desc: 'Official WhatsApp Business API integration, multi-agent customer support inboxes, automated broadcast engines & interactive bot funnels.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=600&q=80',
    badge: 'Meta Cloud API',
  },
  {
    title: 'Custom Software Development',
    desc: 'Scalable Next.js/Node/Python web platforms, iOS/Android mobile applications, microservices architecture, and secure REST APIs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    badge: 'Full-Stack',
  },
];

export default function SoftwareAIPage() {
  return (
    <ServiceCategoryPageTemplate
      heroBannerImage={CLOUDINARY_IMAGES.bannerSoftwareAi}
      heroAlt="TSK One IT - Custom Software Development, Enterprise ERP/CRM & AI WhatsApp Business Automation"
      bannerAspectRatio="aspect-[1024/384]"
      bannerBg="bg-slate-950 border-b border-slate-900"
      overlayTitle="Software & AI Solutions"
      overlayTextColor="text-white"
      overlayButtonText="Explore Services"
      servicesSectionKicker="OUR SOFTWARE &amp; AI SOLUTIONS"
      servicesSectionTitle="Empower Growth with Custom Intelligence"
      servicesSectionDesc="Automate manual workflows, streamline team collaboration, and deliver exceptional digital experiences for your customers."
      cards={cards}
      ctaKicker="HAVE A SOFTWARE OR AI PROJECT?"
      ctaTitle="Let's Build Your Custom Application"
      ctaDesc="Speak directly with our technical architects for scoping, wireframes, and prototype timelines."
      ctaButtonText="Schedule Discovery Call"
      whatsappMessage="Hi TSK One IT, I would like to discuss a custom Software & AI Automation project."
    />
  );
}
