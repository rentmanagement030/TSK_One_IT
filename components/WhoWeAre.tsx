'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Laptop, 
  Home, 
  Cpu, 
  Clock, 
  MapPin,
  Headphones
} from 'lucide-react';

export default function WhoWeAre() {
  const stats = [
    { value: '20+', label: 'Years Experience', sub: 'Two decades of proven tech mastery' },
    { value: '10K+', label: 'Devices Restored', sub: 'MacBooks, laptops & chip-level boards' },
    { value: '500+', label: 'Enterprise Setups', sub: 'Cloud, LAN, CCTV & automation' },
    { value: '24×7', label: 'Active NOC / SOC', sub: 'Round-the-clock SLA support desk' },
  ];

  const highlights = [
    {
      title: 'Certified Engineering Specialists',
      desc: 'Expert engineers certified across Apple macOS/iOS hardware, Microsoft Azure, Cisco enterprise networking, and BGA logic board micro-soldering.',
      icon: Award,
    },
    {
      title: 'End-to-End Technology Under One Roof',
      desc: 'From personal gadget repairs and home automation to enterprise cloud migration and custom software development, we eliminate vendor fragmentation.',
      icon: Building2,
    },
    {
      title: 'Genuine OEM Components & Warranty',
      desc: '100% authentic spare parts, factory-calibrated diagnostics, and transparent upfront pricing with zero hidden surcharges.',
      icon: ShieldCheck,
    },
    {
      title: 'Chennai Experience Lounge & Fast Dispatch',
      desc: 'Visit our flagship exploration lounge at Anna Salai, Chennai or enjoy our prompt doorstep pickup and contactless delivery across Tamil Nadu.',
      icon: MapPin,
    },
  ];

  return (
    <section 
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="py-20 lg:py-28 bg-[#ffffff] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Subtle Luminous Tech Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-100/60 blur-[140px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-blue-100/50 blur-[130px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-900 shadow-xs">
              <Sparkles className="size-3.5 text-amber-500" />
              <span>About TSK OneIT</span>
            </div>

            <h2 
              id="who-we-are-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a]"
            >
              Who We Are
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-6 rounded-full" />

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              TSK OneIT is your <strong className="text-slate-900 font-bold">Trusted Technology Partner</strong>. 
              From personal devices to enterprise digital transformation, we deliver complete end-to-end technology solutions under one roof.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Stat Metric Cards Bar */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#edf6fd] border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 text-center"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#1e40af] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 2-Column Overview: Story & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Mission & Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="slide-right">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#1e40af] uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Tagline &bull; Repair. Connect. Secure. Transform.
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Bridging Personal Device Care and Enterprise Scale
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Founded with a vision to streamline technology for modern living and enterprise efficiency, 
                  <strong> TSK OneIT</strong> brings over two decades of hands-on expertise to every client engagement.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Whether you are an individual needing cleanroom data recovery for an Apple MacBook, a homeowner setting up smart voice-controlled lighting and CCTV, or an enterprise executing multi-cloud migrations and 24x7 SOC threat shielding, we provide certified excellence with transparent pricing.
                </p>

                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 group"
                  >
                    <span>Speak with an IT Specialist</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Core Capabilities */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div 
                      key={h.title}
                      className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="size-11 rounded-xl bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center mb-3.5">
                          <Icon className="size-5" />
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                          {h.title}
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {h.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-sky-700">
                        <CheckCircle2 className="size-3.5 text-emerald-500" />
                        <span>TSK Benchmark</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
