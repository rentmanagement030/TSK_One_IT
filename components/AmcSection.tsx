'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  ShieldCheck, 
  Wrench, 
  Headphones, 
  Activity, 
  Coins, 
  TimerReset, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  RotateCw 
} from 'lucide-react';

interface AmcPlan {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  headlineMetric: string;
  headlineUnit: string;
  icon: React.ComponentType<{ className?: string }>;
  specs: { label: string; value: string; highlight?: boolean }[];
}

const amcCards: AmcPlan[] = [
  {
    id: 'amc-standard',
    badge: 'Standard AMC',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    title: 'Workstation & LAN AMC',
    subtitle: 'Business Essential Support',
    headlineMetric: '99.9%',
    headlineUnit: 'Uptime SLA',
    icon: Wrench,
    specs: [
      { label: 'Coverage', value: 'PCs & Laptops' },
      { label: 'Response', value: '< 2 hrs SLA', highlight: true },
      { label: 'Maintenance', value: 'Monthly Tuning' },
      { label: 'Health Checks', value: 'Quarterly' },
      { label: 'Remote Desk', value: 'Unlimited' },
      { label: 'Antivirus Patch', value: 'Automated' },
      { label: 'Parts Support', value: 'OEM Genuine' },
      { label: 'Reporting', value: 'Monthly Audit' },
    ],
  },
  {
    id: 'amc-enterprise',
    badge: 'Enterprise AMC',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    title: 'Enterprise Server & SOC AMC',
    subtitle: 'Mission-Critical Operations',
    headlineMetric: '24x7x365',
    headlineUnit: 'NOC / SOC Coverage',
    icon: ShieldCheck,
    specs: [
      { label: 'Infrastructure', value: 'Servers & SAN' },
      { label: 'Emergency SLA', value: '< 30 mins', highlight: true },
      { label: 'NOC Dispatch', value: 'Dedicated Eng.' },
      { label: 'Cyber Threat', value: 'SOC Monitoring' },
      { label: 'Backup DR', value: 'Automated Daily' },
      { label: 'Surveillance', value: 'CCTV & Biometric' },
      { label: 'Health Score', value: 'Real-time AI' },
      { label: 'Cost Model', value: 'Predictable Fixed' },
    ],
  },
  {
    id: 'amc-automation',
    badge: 'Smart AV & Security',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    title: 'Smart Automation & AV AMC',
    subtitle: 'Workspace & Living Systems',
    headlineMetric: '100%',
    headlineUnit: 'Integrated Care',
    icon: Activity,
    specs: [
      { label: 'AV Systems', value: 'Meeting Rooms' },
      { label: 'Door Access', value: 'Biometric / RFID' },
      { label: 'Smart Lights', value: 'Sensor Audits' },
      { label: 'CCTV Health', value: 'Continuous Scan' },
      { label: 'Firmware Upgrades', value: 'Quarterly', highlight: true },
      { label: 'Onsite Support', value: 'Priority Gate' },
      { label: 'Energy Review', value: 'Power Load Map' },
      { label: 'Equipment Life', value: 'Maximized ROI' },
    ],
  },
];

const benefitPills = [
  'Preventive Maintenance',
  'Priority Support',
  'Regular Health Checkups',
  'Predictable Costs',
  'Extended Equipment Life',
];

export default function AmcSection() {
  return (
    <section 
      id="amc"
      aria-labelledby="amc-heading"
      className="py-20 lg:py-28 bg-[#f4f9fd] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Accent Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-200/25 blur-[180px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Header & Badge */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
            
            <div className="relative inline-flex flex-col items-center mb-2">
              <div className="p-4 rounded-2xl bg-white text-[#0b1b3a] font-extrabold flex items-center gap-3 border border-sky-200 shadow-md">
                <ShieldCheck className="w-8 h-8 text-[#0284c7]" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] uppercase tracking-widest text-sky-700 font-mono font-bold">Annual Maintenance Contract</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">RELIABLE SUPPORT YEAR AFTER YEAR</div>
                </div>
              </div>
              
              {/* Sub-badge Ribbon */}
              <div className="mt-2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm shimmer-badge">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reliable Support Year After Year</span>
              </div>
            </div>

            <h2 
              id="amc-heading"
              className="font-black tracking-tight text-[#0b1b3a] pt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
            >
              Guaranteed Reliability &amp; Zero IT Downtime
            </h2>
            {/* Cyan Underline Accent Line */}
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              Our structured Annual Maintenance Contracts keep your mission-critical workstations, 
              network infrastructure, surveillance systems, and servers operating at peak performance year-round.
            </p>

            {/* Quick Benefit Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-3">
              {benefitPills.map((title) => (
                <span
                  key={title}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-bold text-sky-800 shadow-sm hover:border-sky-400 hover:shadow-md transition-all cursor-default"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{title}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CodeFronts tfc-01 3D Reference-Grade Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {amcCards.map((card) => {
            const Icon = card.icon;
            const inputId = `tfc-flip-${card.id}`;

            return (
              <div
                key={card.id}
                className="group relative w-full h-[490px] tfc-perspective rounded-3xl has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sky-500 has-[:focus-visible]:outline-offset-4"
              >
                {/* Accessible checkbox trigger for thumb tap / keyboard state */}
                <input id={inputId} type="checkbox" className="peer sr-only" />
                <label
                  htmlFor={inputId}
                  className="absolute inset-0 z-20 cursor-pointer rounded-3xl"
                >
                  <span className="sr-only">
                    Show technical specifications for {card.title}
                  </span>
                </label>

                {/* 3D Flip Container */}
                <div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)] tfc-preserve-3d group-hover:[transform:rotateY(180deg)] group-has-checked:[transform:rotateY(180deg)] group-has-[:focus-visible]:[transform:rotateY(180deg)] motion-reduce:transition-none">
                  
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 flex flex-col rounded-3xl overflow-hidden bg-white border border-sky-100 shadow-[0_15px_40px_-15px_rgba(14,165,233,0.15)] tfc-backface-hidden">
                    <span className={`absolute top-4 right-4 z-10 rounded-full ${card.badgeColor} border px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.1em]`}>
                      {card.badge}
                    </span>

                    {/* Stage Graphic */}
                    <div className="relative h-[210px] shrink-0 grid place-items-center overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 border-b border-sky-100">
                      <div className="p-5 rounded-2xl bg-white text-sky-600 border border-sky-200 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>

                    {/* Front Body */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-sky-700">
                          {card.subtitle}
                        </p>
                        <h3 className="text-xl font-black leading-tight text-slate-900 mt-1">
                          {card.title}
                        </h3>
                        <p className="text-2xl font-black tracking-tight text-[#0284c7] mt-2">
                          {card.headlineMetric} <span className="text-xs font-semibold text-slate-500 font-sans">/ {card.headlineUnit}</span>
                        </p>
                      </div>

                      <p className="mt-auto flex items-center justify-center gap-1.5 text-[11px] font-mono tracking-[0.08em] text-slate-500 pt-3 border-t border-slate-100">
                        <RotateCw className="w-3.5 h-3.5 text-sky-600" />
                        Hover, tap or press Space for specs
                      </p>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 flex flex-col rounded-3xl overflow-hidden p-6 bg-gradient-to-b from-[#0b1b3a] to-[#070c18] border border-sky-400 shadow-2xl text-white [transform:rotateY(180deg)] tfc-backface-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-[0.12em] text-sky-300">
                        Technical Specifications
                      </h4>
                      <RotateCw className="w-3.5 h-3.5 text-sky-300" />
                    </div>

                    {/* 8-cell spec grid */}
                    <dl className="grid flex-1 grid-cols-2 gap-2 text-left">
                      {card.specs.map((spec, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5">
                          <dt className="text-[10px] font-mono uppercase tracking-[0.1em] text-slate-400">
                            {spec.label}
                          </dt>
                          <dd className={`text-xs font-bold ${spec.highlight ? 'text-amber-400' : 'text-slate-100'} mt-0.5`}>
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* Direct Dispatch CTA on Card Back */}
                    <Link
                      href="#contact"
                      className="relative z-30 mt-4 min-h-[44px] w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-xs font-black tracking-[0.06em] text-slate-900 shadow-lg hover:brightness-105"
                    >
                      <span>Request AMC Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* AMC Contract Call to Action Banner */}
        <ScrollReveal animation="scale-up" delay={200}>
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_-15px_rgba(14,165,233,0.12)] hover:shadow-[0_25px_60px_-15px_rgba(14,165,233,0.18)] transition-all">
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Ready to secure year-round peace of mind for your IT?
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                Get a customized AMC proposal tailored to your workstation count, server topology, and network footprint.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-400 hover:brightness-105 transition-all shadow-md min-h-[48px] group"
              >
                <span>Get AMC Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
