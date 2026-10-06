'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

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
  // 12 Cards with full background images across 3 Staggered Columns
  const col1Cards: BentoService[] = [
    {
      id: 'enterprise-app',
      category: 'Digital Core',
      title: 'Enterprise Application',
      desc: 'Transition to a digital enterprise with modern application development and transformation.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'cloud',
      category: 'Cloud Infrastructure',
      title: 'Cloud Solutions',
      desc: 'Experience easy, secure, and faster migration to Microsoft Azure, AWS, and private enterprise cloud.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'mobility-device',
      category: 'Hardware Engineering',
      title: 'Device Care & Mobility',
      desc: 'Certified Apple MacBook repair, laptop hardware diagnostics, and chip-level logic board micro-soldering.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      link: '/device-care',
    },
    {
      id: 'software-engineering',
      category: 'Custom Engineering',
      title: 'Software Engineering',
      desc: 'Engineer resilient, agile, and custom software products, client portals, and scalable microservices.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
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
      link: '/business-solutions',
    },
    {
      id: 'enterprise-data',
      category: 'Analytics & BI',
      title: 'Enterprise Data',
      desc: 'Make informed and data-driven decisions with real-time analytics and intelligent reporting dashboards.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'devops-infra',
      category: 'Core Infrastructure',
      title: 'DevOps & IT Infrastructure',
      desc: 'Embrace continuous application delivery, structured CAT6/Fiber LAN cabling, and SD-WAN networks.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'smart-living',
      category: 'Connected Living',
      title: 'Smart Home & Living',
      desc: 'Intelligent lighting, 4K CCTV surveillance, biometric smart locks, and whole-home Wi-Fi mesh.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      link: '/home-automation',
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
      link: '/business-solutions',
    },
    {
      id: 'data-services',
      category: 'Storage & Recovery',
      title: 'Data Recovery & Storage',
      desc: 'Cleanroom data recovery, SAN/NAS storage architecture, and automated enterprise disaster backups.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      link: '/device-care',
    },
    {
      id: 'rpa-whatsapp',
      category: 'Automation & Chatbots',
      title: 'Robotic & WhatsApp Automation',
      desc: 'Official Meta WhatsApp Business Cloud API integration, CRM sync, automated notifications, and AI chatbots.',
      theme: 'dark',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'crm-erp',
      category: 'Enterprise SaaS',
      title: 'CRM & ERP Solutions',
      desc: 'Tailored enterprise resource planning, customer pipeline workflows, billing automation, and inventory sync.',
      theme: 'light',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
  ];

  // Helper render for individual Card with Full Background Image & Clean Text
  const renderCard = (card: BentoService) => {
    const isDark = card.theme === 'dark';

    return (
      <Link
        key={card.id}
        href={card.link}
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

          {/* Signature Red Circular Action Button */}
          <div>
            <div className="size-8 rounded-full border-2 border-[#ef4444] text-[#ef4444] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300 shadow-xs">
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section 
      id="our-services"
      aria-labelledby="transformation-heading"
      className="py-20 lg:py-28 bg-[#f8fafc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Subtle Tech Highlights */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/30 blur-[160px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 
              id="transformation-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a]"
            >
              Our Services
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-5 rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you need personal device restoration, smart living automation, or enterprise digital transformation, 
              TSK OneIT delivers end-to-end technology excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Staggered Masonry Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16 items-start">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {col1Cards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100}>
                {renderCard(card)}
              </ScrollReveal>
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {col2Cards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100 + 50}>
                {renderCard(card)}
              </ScrollReveal>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {col3Cards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100 + 100}>
                {renderCard(card)}
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Centered "View All Services ->" Pill Button */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex justify-center">
            <Link
              href="#divisions"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white font-bold text-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>View All Services</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
