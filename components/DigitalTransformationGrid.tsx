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
  Lock,
  Cpu,
  Sparkles,
  Wifi
} from 'lucide-react';

interface BentoService {
  id: string;
  title: string;
  desc: string;
  type: 'white-illustration' | 'dark-photo' | 'blue-graphic';
  imageOrGraphic: React.ReactNode;
  link: string;
}

export default function DigitalTransformationGrid() {
  // 12 Cards matching the exact 3-column layout from the Damco reference image
  const services: BentoService[] = [
    // --- ROW 1 ---
    {
      id: 'enterprise-app',
      title: 'Enterprise Application',
      desc: 'Transition to a digital enterprise with modern application development and transformation.',
      type: 'dark-photo',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-blue-950/40">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
            alt="Enterprise Application" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300">
            <Layers className="size-6" />
          </div>
        </div>
      ),
    },
    {
      id: 'ai-ml',
      title: 'AI & ML',
      desc: 'Future-proof your business with automation, LLM workflows, and smart decision-making.',
      type: 'white-illustration',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="relative h-44 w-full flex items-center justify-center bg-gradient-to-b from-amber-50/50 via-rose-50/30 to-transparent overflow-hidden">
          {/* 3D Wireframe Brain Illustration */}
          <div className="relative p-5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 shadow-xl shadow-rose-500/25 text-white transform group-hover:scale-110 transition-transform duration-500">
            <Brain className="size-14" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        </div>
      ),
    },
    {
      id: 'cybersecurity-soc',
      title: 'Cybersecurity & SOC',
      desc: 'Next-Gen firewalls, 24×7 SOC threat defense, and zero-trust perimeter security.',
      type: 'blue-graphic',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a66] via-[#0b1b3a] to-[#0284c7]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.35),transparent_70%)]" />
          <div className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-rose-400">
            <ShieldCheck className="size-6" />
          </div>
          {/* 3D Isometric Cyber Cube Graphics */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="size-24 border-2 border-cyan-400/40 rounded-2xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />
          </div>
        </div>
      ),
    },

    // --- ROW 2 ---
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      desc: 'Experience easy, secure, and faster migration to Microsoft Azure, AWS, and GCP.',
      type: 'white-illustration',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="relative h-44 w-full flex items-center justify-center bg-gradient-to-b from-sky-50 via-blue-50/40 to-transparent overflow-hidden">
          {/* 3D Glossy Sky Cloud Illustration */}
          <div className="relative p-5 rounded-3xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 shadow-xl shadow-sky-500/25 text-white transform group-hover:scale-110 transition-transform duration-500">
            <Cloud className="size-14" />
          </div>
          <div className="absolute top-4 left-8 size-3.5 rounded-full bg-sky-200/60 blur-xs" />
          <div className="absolute bottom-6 right-8 size-5 rounded-full bg-blue-200/50 blur-xs" />
        </div>
      ),
    },
    {
      id: 'enterprise-data',
      title: 'Enterprise Data',
      desc: 'Make informed and data-driven decisions with real-time analytics and BI dashboards.',
      type: 'dark-photo',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
            alt="Enterprise Data Analytics" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-400">
            <Database className="size-6" />
          </div>
        </div>
      ),
    },
    {
      id: 'data-services',
      title: 'Data Recovery & Storage',
      desc: 'Cleanroom recovery, SAN/NAS storage architecture, and automated disaster backups.',
      type: 'white-illustration',
      link: '/device-care',
      imageOrGraphic: (
        <div className="relative h-44 w-full flex items-center justify-center bg-gradient-to-b from-purple-50 via-indigo-50/30 to-transparent overflow-hidden">
          {/* 3D Floating Prism & Cube */}
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg text-white transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <Database className="size-9" />
            </div>
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <Cpu className="size-7" />
            </div>
          </div>
        </div>
      ),
    },

    // --- ROW 3 ---
    {
      id: 'device-care',
      title: 'Device Care & Logic Board',
      desc: 'Certified Apple MacBook repair, laptop hardware diagnostics, and chip micro-soldering.',
      type: 'dark-photo',
      link: '/device-care',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40">
          <img 
            src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80" 
            alt="Device Care & Repair" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sky-400">
            <Laptop className="size-6" />
          </div>
        </div>
      ),
    },
    {
      id: 'devops',
      title: 'DevOps & IT Infrastructure',
      desc: 'Embrace high-speed CAT6/Fiber cabling, server racks, SD-WAN, and CI/CD automation.',
      type: 'white-illustration',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="relative h-44 w-full flex items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-50/30 to-transparent overflow-hidden">
          {/* 3D Keyboard Key with Purple DevOps Symbol */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 shadow-xl shadow-indigo-500/25 text-white transform group-hover:scale-110 transition-transform duration-500">
            <Workflow className="size-12" />
          </div>
        </div>
      ),
    },
    {
      id: 'rpa-whatsapp',
      title: 'Robotic & WhatsApp Automation',
      desc: 'Meta WhatsApp Business API, CRM integrations, billing sync, and automated chatbots.',
      type: 'blue-graphic',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e3f] via-[#0b1b3a] to-[#0284c7]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.3),transparent_70%)]" />
          <div className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400">
            <Bot className="size-6" />
          </div>
          {/* Futuristic Robotic Mesh Lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-25">
            <div className="size-28 border border-dashed border-cyan-300 rounded-full animate-spin [animation-duration:20s]" />
          </div>
        </div>
      ),
    },

    // --- ROW 4 ---
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      desc: 'Engineer resilient, agile, and custom software products, portals, and cloud microservices.',
      type: 'white-illustration',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="relative h-44 w-full flex items-center justify-center bg-gradient-to-b from-emerald-50 via-teal-50/30 to-transparent overflow-hidden">
          {/* 3D Isometric Modular Blocks */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/25 text-white transform group-hover:scale-110 transition-transform duration-500">
            <Code2 className="size-13" />
          </div>
        </div>
      ),
    },
    {
      id: 'smart-home',
      title: 'Smart Home & Living',
      desc: 'Intelligent lighting, 4K CCTV surveillance, smart door locks, and whole-home mesh Wi-Fi.',
      type: 'dark-photo',
      link: '/home-automation',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" 
            alt="Smart Home Automation" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-300">
            <Home className="size-6" />
          </div>
        </div>
      ),
    },
    {
      id: 'crm-erp',
      title: 'CRM & ERP Solutions',
      desc: 'Break down operational silos and build stronger client workflows with custom ERP suites.',
      type: 'white-illustration',
      link: '/business-solutions',
      imageOrGraphic: (
        <div className="relative h-44 w-full flex items-center justify-center bg-gradient-to-b from-rose-50 via-amber-50/30 to-transparent overflow-hidden">
          {/* 3D Cloud Layers */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 shadow-xl shadow-rose-500/25 text-white transform group-hover:scale-110 transition-transform duration-500">
            <FileSpreadsheet className="size-13" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      id="our-services"
      aria-labelledby="transformation-heading"
      className="py-20 lg:py-28 bg-[#f8fafc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/30 blur-[160px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching Reference Image Header Exactly) */}
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

        {/* 3-Column Masonry Bento Grid (12 Cards Matching Damco Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {services.map((card, idx) => {
            const isDark = card.type === 'dark-photo' || card.type === 'blue-graphic';

            return (
              <ScrollReveal 
                key={card.id}
                animation="fade-up"
                delay={(idx % 3) * 100}
              >
                <Link
                  href={card.link}
                  className={`group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] cursor-pointer h-full min-h-[380px] ${
                    isDark 
                      ? 'bg-slate-950 text-white border border-slate-800/80' 
                      : 'bg-white text-slate-900 border border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  {/* Top Visual Graphic Container */}
                  <div className="relative w-full overflow-hidden">
                    {card.imageOrGraphic}
                  </div>

                  {/* Card Content & Text */}
                  <div className={`p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10 ${isDark ? 'mt-auto' : ''}`}>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2.5 transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-cyan-300' 
                          : 'text-[#0f172a] group-hover:text-[#ef4444]'
                      }`}>
                        {card.title}
                      </h3>

                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {card.desc}
                      </p>
                    </div>

                    {/* Signature Red Circular Arrow Button from Reference Image */}
                    <div className="pt-2">
                      <div className="size-9 rounded-full border-2 border-[#ef4444] text-[#ef4444] flex items-center justify-center group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300 shadow-xs">
                        <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                </Link>
              </ScrollReveal>
            );
          })}
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
