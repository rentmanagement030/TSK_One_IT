'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Laptop, 
  Home, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  Award,
  Clock,
  HeartHandshake
} from 'lucide-react';

export default function Hero() {
  const [selectedDivision, setSelectedDivision] = useState(0);

  const divisions = [
    {
      id: 'device-care',
      num: '01',
      title: 'Device Care',
      subtitle: 'Personal Devices & Chip-Level Repairs',
      icon: Laptop,
      color: 'from-sky-500 to-blue-600',
      tag: 'Individuals & Businesses',
      highlights: ['Laptop & Apple MacBook Repairs', 'Chip-Level Motherboard Repair', 'Data Recovery & SSD Upgrades', 'Doorstep Pickup & Delivery'],
      cta: 'Explore Device Care',
    },
    {
      id: 'home-automation',
      num: '02',
      title: 'Home Automation',
      subtitle: 'Smart Living & Connected Environments',
      icon: Home,
      color: 'from-amber-500 to-orange-600',
      tag: 'Smart Connected Homes',
      highlights: ['Smart Lighting & Scene Control', 'CCTV & Video Door Phones', 'Smart Biometric Door Locks', 'Whole-Home Wi-Fi 6 Mesh'],
      cta: 'Explore Home Automation',
    },
    {
      id: 'business-solutions',
      num: '03',
      title: 'Business Solutions',
      subtitle: 'Enterprise IT, Cloud & Digital Transformation',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      tag: 'SMB & Enterprise Scale',
      highlights: ['Cloud (Azure, AWS, GCP)', 'Cybersecurity & 24x7 NOC/SOC', 'Managed IT Services & SLA AMC', 'AI Apps, Custom CRM/ERP & WhatsApp API'],
      cta: 'Explore Business Solutions',
    },
  ];

  const trustBadges = [
    { text: '20+ Years Industry Experience', icon: Award },
    { text: 'Certified Technology Experts', icon: ShieldCheck },
    { text: 'End-to-End Technology Solutions', icon: Zap },
    { text: '24×7 Enterprise Support', icon: Clock },
    { text: 'Customer-First Approach', icon: HeartHandshake },
  ];

  return (
    <section 
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#e0f7fa]/60 via-[#eef8ff] to-[#f4f9fd] text-slate-900 pt-8 pb-16 lg:py-20"
    >
      {/* Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-cyan-300/25 blur-[120px] animate-float"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-sky-300/25 blur-[130px] animate-float-delayed"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-200/20 blur-[100px] animate-pulse-glow"
      />

      {/* Grid Pattern Overlay */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Centered Main Announcement */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-12">
          
          <ScrollReveal animation="fade-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-xs sm:text-sm font-bold text-sky-900 shadow-sm shimmer-badge">
              <span className="w-2 h-2 rounded-full bg-cyan-500 radar-ring text-cyan-500" />
              <span>Your Trusted Technology Partner</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-amber-600 font-extrabold font-mono">Repair. Connect. Secure. Transform.</span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 
              id="hero-heading"
              className="font-black tracking-tight text-[#0b1b3a] text-balance"
              style={{ fontSize: 'clamp(2.3rem, 4.6vw + 0.5rem, 4.2rem)', lineHeight: 1.1 }}
            >
              One Brand. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#06b6d4]">
                Three Specialized Divisions.
              </span>
            </h1>
            <div className="w-28 h-1.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full mx-auto mt-4" />
          </ScrollReveal>

          {/* Brief Message */}
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              From personal devices to enterprise digital transformation, <strong className="text-slate-900 font-bold">TSK OneIT</strong> provides complete end-to-end technology solutions under one trusted roof.
            </p>
          </ScrollReveal>

          {/* Primary Action Buttons */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <MagneticButton as="div" strength={0.3}>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#0b1b3a] bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-lg shadow-amber-500/25 transition-all text-center min-h-[52px] group"
                >
                  <Sparkles className="w-4 h-4 text-[#0b1b3a]" />
                  <span>Book a Free Technology Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton as="div" strength={0.2}>
                <a
                  href="tel:+914446030632"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-sky-200 shadow-sm transition-all text-center min-h-[52px]"
                  aria-label="Call Now: 044 46030632"
                >
                  <PhoneCall className="w-4 h-4 text-sky-600" />
                  <span>Call: 044 46030632</span>
                </a>
              </MagneticButton>

              <MagneticButton as="div" strength={0.2}>
                <a
                  href="https://wa.me/919150843991?text=Hi%20TSK%20OneIT%2C%20I%20would%20like%20to%20book%20a%20Free%20Technology%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 shadow-sm transition-all text-center min-h-[52px]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Now</span>
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>

        </div>

        {/* 3 Specialized Division Interactive Cards Grid */}
        <ScrollReveal animation="scale-up" delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {divisions.map((div, idx) => {
              const Icon = div.icon;
              const isSelected = selectedDivision === idx;
              return (
                <div
                  key={div.id}
                  onMouseEnter={() => setSelectedDivision(idx)}
                  className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-default border ${
                    isSelected
                      ? 'bg-white shadow-[0_25px_60px_-15px_rgba(14,165,233,0.22)] border-sky-300 -translate-y-2'
                      : 'bg-white/85 backdrop-blur-md border-sky-100/90 shadow-sm hover:border-sky-200 hover:bg-white'
                  }`}
                >
                  <div>
                    {/* Top Tag & Icon Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${div.color} text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                        Division {div.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#0b1b3a] mb-1">
                      {div.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 mb-4">
                      {div.subtitle}
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                      {div.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#divisions"
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs font-bold text-sky-700 group/link hover:text-sky-900"
                  >
                    <span>{div.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 5-Pillar Trust Highlights Bar */}
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-sky-100 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.text} className="flex items-center gap-2.5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
