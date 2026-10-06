'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  ArrowRight, 
  Cloud, 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Home, 
  Laptop, 
  Workflow, 
  Bot, 
  Layers,
  Database,
  Lock,
  Wifi,
  Sparkles
} from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  desc: string;
  type: 'white-illustration' | 'photo-overlay' | 'gradient-accent';
  imageOrGraphic: React.ReactNode;
  category: string;
  link: string;
}

export default function DigitalTransformationGrid() {
  const cards: ServiceCard[] = [
    {
      id: 'enterprise-application',
      title: 'Enterprise Application',
      desc: 'Transition to a digital enterprise with modern application development and transformation.',
      type: 'photo-overlay',
      category: 'Digital Core',
      link: '#divisions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.35),transparent_70%)]" />
          <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300">
            <Layers className="size-10" />
          </div>
        </div>
      ),
    },
    {
      id: 'ai-ml',
      title: 'AI & Automation',
      desc: 'Future-proof your business with LLM workflows, smart chatbots, and intelligent decision-making.',
      type: 'white-illustration',
      category: 'Intelligence',
      link: '#divisions',
      imageOrGraphic: (
        <div className="relative h-48 w-full flex items-center justify-center bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-transparent overflow-hidden">
          <div className="relative p-6 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-violet-600 shadow-xl shadow-rose-500/20 text-white animate-pulse">
            <Brain className="size-16" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        </div>
      ),
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      desc: 'Experience easy, secure, and faster migration to Azure, AWS, and private enterprise cloud.',
      type: 'white-illustration',
      category: 'Infrastructure',
      link: '#divisions',
      imageOrGraphic: (
        <div className="relative h-48 w-full flex items-center justify-center bg-gradient-to-b from-sky-50 via-blue-50/50 to-transparent overflow-hidden">
          <div className="relative p-6 rounded-3xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 shadow-xl shadow-sky-500/25 text-white transform hover:scale-105 transition-transform duration-300">
            <Cloud className="size-16" />
          </div>
          {/* Subtle floating cloud accent particles */}
          <div className="absolute top-4 left-8 size-4 rounded-full bg-sky-200/60 blur-xs" />
          <div className="absolute bottom-6 right-10 size-6 rounded-full bg-blue-200/50 blur-xs" />
        </div>
      ),
    },
    {
      id: 'data-services',
      title: 'Data & Storage Services',
      desc: 'High-availability SAN/NAS storage, automated backup disaster recovery, and data conversion.',
      type: 'white-illustration',
      category: 'Data Management',
      link: '#divisions',
      imageOrGraphic: (
        <div className="relative h-48 w-full flex items-center justify-center bg-gradient-to-b from-purple-50 via-pink-50/30 to-transparent overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg text-white transform -rotate-6">
              <Database className="size-10" />
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg text-white transform rotate-12">
              <Server className="size-8" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'enterprise-security',
      title: 'Cybersecurity & SOC',
      desc: 'Next-Generation Firewalls, 24x7 SOC threat monitoring, and zero-trust perimeter defense.',
      type: 'photo-overlay',
      category: 'Cyber Defense',
      link: '#divisions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-indigo-950/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.4),transparent_70%)]" />
          <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-rose-400">
            <ShieldCheck className="size-10" />
          </div>
        </div>
      ),
    },
    {
      id: 'smart-automation',
      title: 'Smart Living & Automation',
      desc: 'Intelligent lighting, 4K CCTV surveillance, smart locks, and connected mesh Wi-Fi ecosystems.',
      type: 'gradient-accent',
      category: 'Smart Environments',
      link: '#divisions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a66] via-[#0b1b3a] to-[#0284c7]">
          <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-300">
            <Home className="size-10" />
          </div>
          <div className="absolute bottom-20 left-8 flex items-center gap-2 text-xs font-mono text-cyan-300">
            <Wifi className="size-4" />
            <span>Connected Living</span>
          </div>
        </div>
      ),
    },
    {
      id: 'device-care',
      title: 'Device Care & Logic Board Repair',
      desc: 'Certified Apple MacBook, laptop, logic board BGA micro-soldering, and cleanroom data recovery.',
      type: 'white-illustration',
      category: 'Hardware Engineering',
      link: '#divisions',
      imageOrGraphic: (
        <div className="relative h-48 w-full flex items-center justify-center bg-gradient-to-b from-slate-50 via-sky-50/40 to-transparent overflow-hidden">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 text-sky-400 shadow-xl shadow-slate-900/20 border border-slate-700 transform hover:scale-105 transition-transform duration-300">
            <Cpu className="size-14" />
          </div>
        </div>
      ),
    },
    {
      id: 'devops-infra',
      title: 'DevOps & IT Infrastructure',
      desc: 'High-speed structured CAT6/Fiber LAN cabling, server racks, SD-WAN, and CI/CD pipelines.',
      type: 'photo-overlay',
      category: 'Core Infrastructure',
      link: '#divisions',
      imageOrGraphic: (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-blue-950/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(14,165,233,0.3),transparent_70%)]" />
          <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-cyan-400">
            <Workflow className="size-10" />
          </div>
        </div>
      ),
    },
    {
      id: 'process-automation',
      title: 'Robotic Process & WhatsApp Automation',
      desc: 'Meta WhatsApp Business API, CRM integrations, billing sync, and custom enterprise workflows.',
      type: 'white-illustration',
      category: 'Digital Operations',
      link: '#divisions',
      imageOrGraphic: (
        <div className="relative h-48 w-full flex items-center justify-center bg-gradient-to-b from-emerald-50 via-teal-50/40 to-transparent overflow-hidden">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/25 text-white transform hover:scale-105 transition-transform duration-300">
            <Bot className="size-14" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      id="digital-transformation"
      aria-labelledby="transformation-heading"
      className="py-20 lg:py-28 bg-[#f8fafc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Subtle Tech Highlights */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/30 blur-[160px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching Damco / Enterprise Reference Exactly) */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
              id="transformation-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a]"
            >
              Your Technology &amp; Digital Transformation Partner
            </h2>
            
            {/* Signature Red Accent Bar from Reference Image */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-4 mb-6 rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Whether you develop technology products or use technology to implement business solutions for your enterprise, 
              TSK OneIT can help advance and accelerate your business outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Card Grid (Matching Damco Masonry / Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {cards.map((card, idx) => {
            const isDark = card.type === 'photo-overlay' || card.type === 'gradient-accent';

            return (
              <ScrollReveal 
                key={card.id}
                animation="fade-up"
                delay={(idx % 3) * 100}
              >
                <Link
                  href={card.link}
                  className={`group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] cursor-pointer h-full min-h-[360px] ${
                    isDark 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white text-slate-900 border border-slate-100'
                  }`}
                >
                  {/* Visual Graphic Header */}
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

        {/* Centered "View All Services ->" Button (Matching Damco Reference) */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex justify-center">
            <Link
              href="#divisions"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-white border border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 group"
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
