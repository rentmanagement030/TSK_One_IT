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
      className="py-20 lg:py-28 bg-gradient-to-b from-[#f4f9ff] via-[#ffffff] to-[#eef6ff] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Subtle Luminous Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-sky-200/40 blur-[140px] animate-float"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full bg-cyan-200/30 blur-[140px] animate-float-delayed"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 shadow-sm shimmer-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>The TSK OneIT Advantage</span>
            </div>

            <h2 
              id="why-us-heading"
              className="font-extrabold tracking-tight text-[#0b1b3a]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw + 0.5rem, 2.75rem)' }}
            >
              Why Choose TSK OneIT?
            </h2>
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              We bridge the gap between complex technology and seamless business operations 
              through certified skill, transparent values, and dependable service.
            </p>
          </div>
        </ScrollReveal>

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
