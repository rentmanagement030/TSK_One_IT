'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  ArrowRight, 
  Layers, 
  Brain, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Laptop, 
  Workflow, 
  Bot, 
  Home, 
  Code2, 
  FileSpreadsheet,
  Cpu
} from 'lucide-react';

interface BentoService {
  id: string;
  title: string;
  desc: string;
  type: 'white-card' | 'dark-photo';
  image: string;
  graphicOverlay?: React.ReactNode;
  link: string;
}

export default function DigitalTransformationGrid() {
  // Column 1 (4 Cards: Dark Photo -> White 3D -> Dark Photo -> White 3D)
  const col1Cards: BentoService[] = [
    {
      id: 'enterprise-app',
      title: 'Enterprise Application',
      desc: 'Transition to a digital enterprise with modern application development and transformation.',
      type: 'dark-photo',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      desc: 'Experience easy, secure, and faster migration to Microsoft Azure, AWS, and private enterprise cloud.',
      type: 'white-card',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      graphicOverlay: (
        <div className="size-16 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/25">
          <Cloud className="size-10" />
        </div>
      ),
      link: '/business-solutions',
    },
    {
      id: 'mobility-device',
      title: 'Device Care & Mobility',
      desc: 'Certified Apple MacBook repair, laptop hardware diagnostics, and logic board micro-soldering.',
      type: 'dark-photo',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      link: '/device-care',
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      desc: 'Engineer resilient, agile, and custom software products, customer portals, and microservices.',
      type: 'white-card',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      graphicOverlay: (
        <div className="size-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25">
          <Code2 className="size-10" />
        </div>
      ),
      link: '/business-solutions',
    },
  ];

  // Column 2 (4 Cards: White 3D -> Dark Photo -> White 3D -> Dark Photo)
  const col2Cards: BentoService[] = [
    {
      id: 'ai-ml',
      title: 'AI & ML',
      desc: 'Future-proof your business with automation, LLM workflows, and smart decision-making.',
      type: 'white-card',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      graphicOverlay: (
        <div className="size-16 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/25 animate-pulse">
          <Brain className="size-10" />
        </div>
      ),
      link: '/business-solutions',
    },
    {
      id: 'enterprise-data',
      title: 'Enterprise Data',
      desc: 'Make informed and data-driven decisions with real-time analytics and intelligent reporting.',
      type: 'dark-photo',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'devops-infra',
      title: 'DevOps & IT Infrastructure',
      desc: 'Embrace continuous app delivery, structured CAT6/Fiber LAN cabling, and SD-WAN.',
      type: 'white-card',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
      graphicOverlay: (
        <div className="size-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <Workflow className="size-10" />
        </div>
      ),
      link: '/business-solutions',
    },
    {
      id: 'smart-living',
      title: 'Smart Home & Living',
      desc: 'Connected living with intelligent lighting, 4K CCTV surveillance, and whole-home mesh Wi-Fi.',
      type: 'dark-photo',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      link: '/home-automation',
    },
  ];

  // Column 3 (4 Cards: Blue/Dark Graphic -> White 3D -> Blue/Dark Graphic -> White 3D)
  const col3Cards: BentoService[] = [
    {
      id: 'cybersecurity-soc',
      title: 'Cybersecurity & SOC',
      desc: 'Next-Gen firewalls, 24×7 SOC threat defense, and zero-trust perimeter protection.',
      type: 'dark-photo',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'data-services',
      title: 'Data Recovery & Storage',
      desc: 'Cleanroom recovery, SAN/NAS storage architecture, and automated disaster backups.',
      type: 'white-card',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      graphicOverlay: (
        <div className="flex items-center gap-2">
          <div className="size-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-md">
            <Database className="size-7" />
          </div>
          <div className="size-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-md">
            <Cpu className="size-5.5" />
          </div>
        </div>
      ),
      link: '/device-care',
    },
    {
      id: 'rpa-whatsapp',
      title: 'Robotic & WhatsApp Automation',
      desc: 'Meta WhatsApp Business API, CRM integrations, automated notifications, and AI chatbots.',
      type: 'dark-photo',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      link: '/business-solutions',
    },
    {
      id: 'crm-erp',
      title: 'CRM & ERP Solutions',
      desc: 'Tailored enterprise resource planning, customer pipeline workflows, and inventory sync.',
      type: 'white-card',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      graphicOverlay: (
        <div className="size-16 rounded-2xl bg-gradient-to-tr from-rose-500 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/25">
          <FileSpreadsheet className="size-10" />
        </div>
      ),
      link: '/business-solutions',
    },
  ];

  // Helper render for individual Bento Card
  const renderCard = (card: BentoService, idx: number) => {
    if (card.type === 'dark-photo') {
      return (
        <Link
          key={card.id}
          href={card.link}
          className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer min-h-[340px] sm:min-h-[370px] flex flex-col justify-end p-6 sm:p-7 border border-slate-800/40 bg-slate-950"
        >
          {/* Full-bleed Background Image */}
          <img 
            src={card.image} 
            alt={card.title} 
            className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out opacity-45"
            loading="lazy"
          />

          {/* Dark Contrast Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30" />

          {/* Text & Red Circular Arrow at Bottom-Left */}
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2 group-hover:text-cyan-300 transition-colors leading-tight">
              {card.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-snug mb-5 font-normal">
              {card.desc}
            </p>

            <div className="size-8 rounded-full border-2 border-[#ef4444] text-[#ef4444] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300 shadow-xs">
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      );
    }

    // White Card with 3D Render / Graphic Header
    return (
      <Link
        key={card.id}
        href={card.link}
        className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white border border-slate-200/90 hover:border-slate-300 flex flex-col justify-between p-6 sm:p-7 min-h-[340px] sm:min-h-[370px]"
      >
        {/* Top 3D Illustration / Photo Visual Container */}
        <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-4 flex items-center justify-center relative bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-100">
          <img 
            src={card.image} 
            alt={card.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
            {card.graphicOverlay}
          </div>
        </div>

        {/* Text & Red Circular Arrow at Bottom-Left */}
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-2 group-hover:text-[#ef4444] transition-colors leading-tight">
            {card.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-snug mb-5 font-normal">
            {card.desc}
          </p>

          <div className="size-8 rounded-full border-2 border-[#ef4444] text-[#ef4444] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300 shadow-xs">
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
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
        
        {/* Section Header (Matching Damco Reference Image Exactly) */}
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

        {/* 3-Column Masonry Alignment (Staggered Column Stack matching Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16 items-start">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {col1Cards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100}>
                {renderCard(card, idx)}
              </ScrollReveal>
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {col2Cards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100 + 50}>
                {renderCard(card, idx)}
              </ScrollReveal>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {col3Cards.map((card, idx) => (
              <ScrollReveal key={card.id} animation="fade-up" delay={idx * 100 + 100}>
                {renderCard(card, idx)}
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Centered "View All Services ->" Pill Button (Matching Reference) */}
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
