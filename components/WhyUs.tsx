import React from 'react';
import ScrollReveal from './ScrollReveal';
import { 
  Calendar,
  Building,
  Award, 
  Layers,
  Receipt, 
  Zap, 
  Clock, 
  Handshake, 
  Sparkles 
} from 'lucide-react';

const whyUsPillars = [
  {
    title: '20+ Years Experience',
    desc: 'Two decades of proven industry leadership, deep technical mastery, and trusted client partnerships across Tamil Nadu.',
    icon: Calendar,
  },
  {
    title: 'Enterprise-Grade Expertise',
    desc: 'Global standards for system design, Tier-3 data center architectures, and zero-compromise security protocols.',
    icon: Building,
  },
  {
    title: 'Certified Engineers',
    desc: 'Qualified specialists with deep accreditations across Microsoft, Cisco, AWS, Apple, and BGA chip micro-soldering.',
    icon: Award,
  },
  {
    title: 'End-to-End Solutions',
    desc: 'From personal gadget repairs to smart living and multi-cloud enterprise digital transformation under one roof.',
    icon: Layers,
  },
  {
    title: 'Transparent Pricing',
    desc: 'Upfront scoping, genuine OEM spare parts warranty, and zero hidden markups or emergency surcharges.',
    icon: Receipt,
  },
  {
    title: 'Fast Response',
    desc: 'Guaranteed rapid SLA turnaround, quick doorstep pickup, and agile on-site emergency dispatch.',
    icon: Zap,
  },
  {
    title: '24×7 Support',
    desc: 'Round-the-clock technical coverage, proactive NOC/SOC network monitoring, and round-the-clock helpdesk.',
    icon: Clock,
  },
  {
    title: 'One Technology Partner',
    desc: 'A single point of accountability for all your hardware, automation, cloud, security, and software needs.',
    icon: Handshake,
  },
];

export default function WhyUs() {
  return (
    <section 
      id="why-us"
      aria-labelledby="why-us-heading"
      className="pb-20 lg:pb-28 bg-[#f8fafc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* 1. TOP WHY CHOOSE US BANNER (Dark Corporate Blue with Enhanced Tech Photography) */}
      <div className="relative bg-[#07193d] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 sm:mb-16">
        {/* Full-Bleed Background Enterprise Architecture Image (Enhanced Visibility) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.35] mix-blend-luminosity pointer-events-none scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
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
              id="why-us-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white"
            >
              Why Choose TSK OneIT?
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-4 rounded-full" />

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              We bridge the gap between complex technology and seamless business operations 
              through certified skill, transparent values, and dependable service.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 8 Core Pillars Grid with Staggered ScrollReveal Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal 
                key={pillar.title}
                animation="fade-up" 
                delay={idx * 70}
              >
                <div
                  className="group p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm flex flex-col justify-between h-full cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 group-hover:scale-110 group-hover:bg-[#0a2a66] group-hover:text-white group-hover:border-[#0a2a66] transition-all duration-300 shadow-sm flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-sky-700 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0b1b3a] mb-2 group-hover:text-[#1d5fd1] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-sky-100 flex items-center text-[11px] font-mono font-semibold text-sky-700">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mr-2 radar-ring text-sky-500" />
                    <span>TSK Quality Benchmark</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
