'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface BentoService {
  id: string;
  category: string;
  title: string;
  desc: string;
  theme: 'light' | 'dark';
  image: string;
  link: string;
}

export default function DigitalTransformationGrid() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  // 12 Cards with full background images across 3 Staggered Columns
  const col1Cards: BentoService[] = [
    {
      id: 'enterprise-app',
      category: 'Digital Core',
      title: 'Enterprise Application',
      desc: 'Transition to a digital enterprise with modern application development and transformation.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '/software-and-ai',
    },
    {
      id: 'cloud',
      category: 'Cloud Infrastructure',
      title: 'Cloud Solutions',
      desc: 'Experience easy, secure, and faster migration to Microsoft Azure, AWS, and private enterprise cloud.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      link: '/it-infrastructure-and-cloud',
    },
    {
      id: 'mobility-device',
      category: 'Hardware Engineering',
      title: 'Device Care & Mobility',
      desc: 'Certified Apple MacBook repair, laptop hardware diagnostics, and chip-level logic board micro-soldering.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      link: '/device-repair-and-maintenance',
    },
    {
      id: 'software-engineering',
      category: 'Custom Engineering',
      title: 'Software Engineering',
      desc: 'Engineer resilient, agile, and custom software products, client portals, and scalable microservices.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      link: '/software-and-ai',
    },
  ];

  const col2Cards: BentoService[] = [
    {
      id: 'ai-ml',
      category: 'Intelligence & LLMs',
      title: 'AI & ML Workflows',
      desc: 'Future-proof your business with intelligent automation, LLM agents, and smart decision-making.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      link: '/software-and-ai',
    },
    {
      id: 'enterprise-data',
      category: 'Analytics & BI',
      title: 'Enterprise Data',
      desc: 'Make informed and data-driven decisions with real-time analytics and intelligent reporting dashboards.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      link: '/software-and-ai',
    },
    {
      id: 'devops-infra',
      category: 'Core Infrastructure',
      title: 'DevOps & IT Infrastructure',
      desc: 'Embrace continuous application delivery, structured CAT6/Fiber LAN cabling, and SD-WAN networks.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
      link: '/it-infrastructure-and-cloud',
    },
    {
      id: 'smart-living',
      category: 'Connected Living',
      title: 'Smart Home & Living',
      desc: 'Intelligent lighting, 4K CCTV surveillance, biometric smart locks, and whole-home Wi-Fi mesh.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      link: '/smart-home',
    },
  ];

  const col3Cards: BentoService[] = [
    {
      id: 'cybersecurity-soc',
      category: 'Threat Defense',
      title: 'Cybersecurity & SOC',
      desc: 'Next-Gen Firewalls (Fortinet, Sophos), 24×7 SOC threat defense, and zero-trust perimeter protection.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      link: '/it-infrastructure-and-cloud',
    },
    {
      id: 'data-services',
      category: 'Storage & Recovery',
      title: 'Data Recovery & Storage',
      desc: 'Cleanroom data recovery, SAN/NAS storage architecture, and automated enterprise disaster backups.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      link: '/device-repair-and-maintenance',
    },
    {
      id: 'rpa-whatsapp',
      category: 'Automation & Chatbots',
      title: 'Robotic & WhatsApp Automation',
      desc: 'Official Meta WhatsApp Business Cloud API integration, CRM sync, automated notifications, and AI chatbots.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      link: '/software-and-ai',
    },
    {
      id: 'crm-erp',
      category: 'Enterprise SaaS',
      title: 'CRM & ERP Solutions',
      desc: 'Tailored enterprise resource planning, customer pipeline workflows, billing automation, and inventory sync.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      link: '/software-and-ai',
    },
  ];

  // Helper render for individual Card with Full Background Image & Clean Text
  const renderCard = (card: BentoService) => {
    const isDark = card.theme === 'dark';

    return (
      <div
        key={card.id}
        onClick={() => router.push(card.link)}
        className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-end p-7 min-h-[340px] sm:min-h-[360px] border ${
          isDark 
            ? 'bg-slate-950 text-white border-slate-800/60' 
            : 'bg-white text-slate-900 border-slate-200/90 hover:border-slate-300'
        }`}
      >
        {/* Full-Bleed Background Image (Clearly visible with smooth zoom on hover) */}
        <img 
          src={card.image} 
          alt={card.title} 
          className={`absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-all duration-700 ease-out pointer-events-none ${
            isDark 
              ? 'opacity-60 group-hover:opacity-85' 
              : 'opacity-55 group-hover:opacity-75'
          }`}
          loading="lazy"
        />

        {/* Tailored Contrast Gradient Scrim to Ensure 100% Sharp Readable Text */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
            isDark 
              ? 'bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20' 
              : 'bg-gradient-to-t from-white via-white/80 to-transparent'
          }`} 
        />

        {/* Content Container (Z-10, Elevated Above Background) */}
        <div className="relative z-10 flex flex-col justify-end">
          {/* Category Tag */}
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-1">
            {card.category}
          </span>

          {/* Title */}
          <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-2 transition-colors leading-tight ${
            isDark 
              ? 'text-white group-hover:text-cyan-300' 
              : 'text-slate-900 group-hover:text-[#ef4444]'
          }`}>
            {card.title}
          </h3>

          {/* Description */}
          <p className={`text-xs sm:text-sm leading-relaxed mb-5 font-normal ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {card.desc}
          </p>

          {/* Card Footer: Enquiry on Left, Arrow Mark on Right of the Card */}
          <div className="pt-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('select-service', { detail: card.title }));
                  window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service: card.title } }));
                }
              }}
              className="w-full flex items-center justify-between text-sm sm:text-base font-extrabold text-[#ef4444] hover:text-[#dc2626] transition-all duration-200 cursor-pointer group/enquiry"
            >
              <span className="underline-offset-4 group-hover/enquiry:underline">Enquiry</span>
              <div className="size-8 rounded-full border-2 border-[#ef4444] text-[#ef4444] flex items-center justify-center group-hover/enquiry:bg-[#ef4444] group-hover/enquiry:text-white transition-all duration-300 shadow-xs">
                <ArrowRight className="size-4 group-hover/enquiry:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="our-services"
      aria-labelledby="transformation-heading"
      className="pb-20 lg:pb-28 bg-[#f8fafc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* 1. TOP OUR SERVICES BANNER (Dark Corporate Blue with Enhanced Tech Photography) */}
      <div className="relative bg-[#07193d] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 sm:mb-16">
        {/* Full-Bleed Background Digital Transformation Network Image (Enhanced Visibility) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.35] mix-blend-luminosity pointer-events-none scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden="true"
        />
        
        {/* Deep Blue Gradient Contrast Scrim */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#061430]/85 via-[#07193d]/65 to-[#0b1b3a]/90 pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Ambient Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Soft Blue Radial Glow */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-sky-500/15 blur-[140px] rounded-full"
        />

        {/* Banner Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <ScrollReveal animation="fade-up">
            <h2 
              id="transformation-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white"
            >
              Our Services
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-4 rounded-full" />

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              Whether you need personal device restoration, smart living automation, or enterprise digital transformation, 
              TSK OneIT delivers end-to-end technology excellence.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3-Column Staggered Masonry Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16 items-start">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {(showAll ? col1Cards : col1Cards.slice(0, 2)).map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100}>
                {renderCard(card)}
              </ScrollReveal>
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {(showAll ? col2Cards : col2Cards.slice(0, 2)).map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100 + 50}>
                {renderCard(card)}
              </ScrollReveal>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {(showAll ? col3Cards : col3Cards.slice(0, 2)).map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100 + 100}>
                {renderCard(card)}
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Centered "View All Services" Dynamic Toggle Button */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  const el = document.getElementById('our-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white font-bold text-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>{showAll ? 'Show Less' : 'View All Services'}</span>
              {showAll ? (
                <ChevronUp className="size-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
