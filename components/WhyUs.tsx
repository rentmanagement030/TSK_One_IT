import React from 'react';
import ScrollReveal from './ScrollReveal';
import { 
  Award, 
  ShieldCheck, 
  Receipt, 
  Clock, 
  Zap, 
  Handshake, 
  Sparkles 
} from 'lucide-react';

const whyUsPillars = [
  {
    title: 'Certified Engineers',
    desc: 'Qualified specialists with deep expertise across network architecture, chip-level repairs, cybersecurity, and cloud systems.',
    icon: Award,
  },
  {
    title: 'Genuine Products & Services',
    desc: 'Strictly authentic OEM hardware components, verified firmware, and enterprise-grade software licenses.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden clauses, unexpected fee markups, or emergency surcharges. Clear upfront scoping and competitive estimates.',
    icon: Receipt,
  },
  {
    title: '24 hrs Support Services',
    desc: 'Round-the-clock technical coverage, active monitoring, and rapid emergency intervention whenever you need us.',
    icon: Clock,
  },
  {
    title: 'Quick Response',
    desc: 'Guaranteed rapid SLA turnaround for on-site dispatches and remote troubleshooting to minimize disruption.',
    icon: Zap,
  },
  {
    title: 'Reliable Service',
    desc: 'Consistent execution, rigorous quality testing, and enduring long-term technology partnership for peace of mind.',
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
              <span>Trusted Partner for Your Technology Journey</span>
            </div>

            <h2 
              id="why-us-heading"
              className="font-extrabold tracking-tight text-[#0b1b3a]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw + 0.5rem, 2.75rem)' }}
            >
              Why Choose TSK One IT?
            </h2>
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              We bridge the gap between complex technology and seamless business operations 
              through certified skill, transparent values, and dependable service.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Core Pillars Grid with Staggered ScrollReveal Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal 
                key={pillar.title}
                animation="fade-up" 
                delay={idx * 85}
              >
                <div
                  className="group p-7 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm flex flex-col justify-between h-full cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 group-hover:scale-110 group-hover:bg-[#0a2a66] group-hover:text-white group-hover:border-[#0a2a66] transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-sky-700 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0b1b3a] mb-2 group-hover:text-[#1d5fd1] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-sky-100 flex items-center text-[11px] font-mono font-semibold text-sky-700">
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
