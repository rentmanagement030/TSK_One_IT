'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Rocket, 
  Building2, 
  Landmark, 
  Factory, 
  Stethoscope, 
  Hotel, 
  ShoppingBag, 
  GraduationCap, 
  PiggyBank, 
  ShieldAlert,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const industries = [
  {
    name: 'Startups',
    desc: 'Rapid cloud bootstrapping, zero-trust endpoint setups & scalable DevOps infrastructure.',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'SMBs',
    desc: 'Cost-efficient managed IT, secure Wi-Fi, biometric attendance & priority helpdesk.',
    icon: Building2,
    color: 'from-sky-500 to-cyan-600',
  },
  {
    name: 'Enterprises',
    desc: '24x7 NOC/SOC monitoring, multi-region cloud DR, SD-WAN & dedicated on-site engineers.',
    icon: Landmark,
    color: 'from-indigo-600 to-violet-700',
  },
  {
    name: 'Manufacturing',
    desc: 'Rugged shop-floor networking, perimeter CCTV surveillance, access barriers & IoT automation.',
    icon: Factory,
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Healthcare',
    desc: 'HIPAA-compliant data protection, high-uptime server clusters, tele-consultation & guest Wi-Fi.',
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Hospitality',
    desc: 'High-density guest Wi-Fi, intelligent room automation, digital signage & centralized audio/video.',
    icon: Hotel,
    color: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Retail',
    desc: 'Reliable POS connectivity, multi-store surveillance, visitor footfall analytics & inventory security.',
    icon: ShoppingBag,
    color: 'from-orange-500 to-amber-600',
  },
  {
    name: 'Education',
    desc: 'Campus-wide secure Wi-Fi, interactive smart boards, computer lab management & access control.',
    icon: GraduationCap,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Banking & Financial Services',
    desc: 'Financial-grade firewall compliance, biometric vault security & automated disaster recovery.',
    icon: PiggyBank,
    color: 'from-violet-600 to-purple-700',
  },
  {
    name: 'Government',
    desc: 'Strictly audited air-gapped networks, certified infrastructure & sovereign cloud hosting.',
    icon: ShieldAlert,
    color: 'from-slate-700 to-slate-900',
  },
];

export default function IndustriesSection() {
  return (
    <section 
      id="industries"
      aria-labelledby="industries-heading"
      className="py-20 lg:py-28 bg-[#edf6fc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Accent Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-200/30 blur-[150px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-200/30 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 shadow-sm shimmer-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Tailored Solutions for Every Sector</span>
            </div>

            <h2 
              id="industries-heading"
              className="font-black tracking-tight text-[#0b1b3a]"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.2rem)' }}
            >
              Industries We Serve
            </h2>
            
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl mx-auto">
              Industry-specific technology deployments engineered for compliance, high availability, and operational scalability.
            </p>
          </div>
        </ScrollReveal>

        {/* 10 Industries Grid */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="p-5 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${ind.color} text-white w-fit mb-3.5 shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors mb-1.5">
                      {ind.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Bottom Industry Consultation Banner */}
        <ScrollReveal animation="scale-up" delay={200}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-sky-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-black text-[#0b1b3a]">
                Require Custom Industry Architecture or Compliance Audit?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Our certified domain consultants design end-to-end setups aligned with your regulatory framework.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-[#0b1b3a] bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-md shadow-amber-500/20 transition-all shrink-0"
            >
              <span>Speak to Industry Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
