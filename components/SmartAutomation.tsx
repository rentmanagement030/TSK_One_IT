'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Lightbulb, 
  ShieldCheck, 
  KeyRound, 
  CreditCard, 
  Fingerprint, 
  Wind, 
  Tv, 
  Speaker, 
  Clapperboard, 
  Video, 
  PhoneCall, 
  Eye, 
  CalendarCheck, 
  LayoutDashboard, 
  Zap, 
  Layers,
  Sparkles,
  ArrowRight,
  Sliders,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { getServiceSlugByTitle } from '@/lib/servicesData';

interface SubItem {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SmartVariant {
  id: string;
  num: string;
  title: string;
  tagline: string;
  badge: string;
  swatchName: string;
  swatchColor: string;
  accentBg: string;
  glowColor: string;
  image: string;
  liveStats: { label: string; value: string }[];
  subItems: SubItem[];
}

const smartVariants: SmartVariant[] = [
  {
    id: 'variant-10',
    num: '10',
    title: 'Smart Home & Office Automation',
    tagline: 'Smarter Spaces. Safer People. Greater Productivity.',
    badge: 'Security & Ambience',
    swatchName: 'Amber Gold & Sky',
    swatchColor: '#f59e0b',
    accentBg: 'from-sky-500/20 via-cyan-500/10 to-amber-500/20',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    liveStats: [
      { label: 'Lighting Scenes', value: 'Automated 24/7' },
      { label: 'Access Defense', value: 'RFID & Biometrics' },
      { label: 'Energy Savings', value: 'Up to 35%' },
    ],
    subItems: [
      {
        name: 'Smart Lighting',
        desc: 'Automated lighting, energy saving, smart controls',
        icon: Lightbulb,
      },
      {
        name: 'Smart Security',
        desc: 'Connected security, real-time monitoring, home & office safety',
        icon: ShieldCheck,
      },
      {
        name: 'Smart Door Locks',
        desc: 'Keyless entry, mobile access, secure access',
        icon: KeyRound,
      },
      {
        name: 'Access Control',
        desc: 'Entry management, smart card / RFID, visitor management',
        icon: CreditCard,
      },
      {
        name: 'Biometric Solutions',
        desc: 'Time attendance, identity-based access, workplace security',
        icon: Fingerprint,
      },
      {
        name: 'Smart Environment',
        desc: 'AC control, curtains & blinds, occupancy sensors',
        icon: Wind,
      },
    ],
  },
  {
    id: 'variant-11',
    num: '11',
    title: 'Home Entertainment & AV',
    tagline: 'Smarter Living. Immersive Experiences.',
    badge: 'Audio & Visual Engineering',
    swatchName: 'Electric Indigo & Cyan',
    swatchColor: '#6366f1',
    accentBg: 'from-indigo-500/20 via-purple-500/10 to-cyan-500/20',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop',
    liveStats: [
      { label: 'Audio Quality', value: 'Lossless Multi-Zone' },
      { label: 'Conference Sync', value: '4K SIP / IP Video' },
      { label: 'Control Latency', value: '< 10ms Unified' },
    ],
    subItems: [
      {
        name: 'Smart TV Integration',
        desc: 'Smart TV setup, OTT integration, unified control',
        icon: Tv,
      },
      {
        name: 'Multi-room Audio',
        desc: 'Multi-room audio, wireless audio, centralized control',
        icon: Speaker,
      },
      {
        name: 'Home Theatre Automation',
        desc: 'Automated home theatre, scene control, premium entertainment',
        icon: Clapperboard,
      },
      {
        name: 'Meeting-room AV',
        desc: 'Automated meeting rooms, video & audio integration, smart meeting controls',
        icon: Video,
      },
      {
        name: 'IP Telephony & Video Conferencing',
        desc: 'Business calling, video conferencing, integration with CRM',
        icon: PhoneCall,
      },
    ],
  },
  {
    id: 'variant-12',
    num: '12',
    title: 'Office Workspace Automation',
    tagline: 'Smarter Workspaces. Higher Productivity.',
    badge: 'Energy & Efficiency',
    swatchName: 'Emerald Green & Teal',
    swatchColor: '#10b981',
    accentBg: 'from-emerald-500/20 via-teal-500/10 to-sky-500/20',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    liveStats: [
      { label: 'Occupancy Sensors', value: 'PIR Real-Time' },
      { label: 'Climate Tuning', value: 'Smart HVAC' },
      { label: 'Room Scheduling', value: 'Outlook & Google' },
    ],
    subItems: [
      {
        name: 'Occupancy-based Lighting',
        desc: 'Motion / occupancy, automated lighting, energy optimization',
        icon: Eye,
      },
      {
        name: 'Meeting-room Automation',
        desc: 'Room booking, automated AV, smart room controls',
        icon: CalendarCheck,
      },
      {
        name: 'Smart Workspace Controls',
        desc: 'Unified controls, environment control, productivity automation',
        icon: LayoutDashboard,
      },
      {
        name: 'Energy Management',
        desc: 'Power monitoring, automated load control, efficient energy usage',
        icon: Zap,
      },
      {
        name: 'Integrated Office Solutions',
        desc: 'Curtains & blinds, AC control, smart scheduling',
        icon: Layers,
      },
    ],
  },
];

export default function SmartAutomation() {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const currentVariant = smartVariants[activeVariantIndex];

  return (
    <section 
      id="smart-automation"
      aria-labelledby="smart-automation-heading"
      className="py-20 lg:py-28 bg-[#edf6fc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Ambient Atmospheric Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-cyan-200/25 blur-[160px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-sky-200/25 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 shadow-sm shimmer-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Intelligent Living &amp; High-Productivity Workspaces</span>
            </div>

            <h2 
              id="smart-automation-heading"
              className="font-black tracking-tight text-[#0b1b3a]"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
            >
              Smart Automation &amp; Intelligent AV
            </h2>
            
            {/* Decorative Cyan Accent Line */}
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl mx-auto">
              Smarter Spaces. Safer People. Greater Productivity. Transform residences and enterprise workspaces into intuitive, automated environments.
            </p>
          </div>
        </ScrollReveal>

        {/* CodeFronts tcar-04 Variant Picker Card Container */}
        <ScrollReveal animation="scale-up" delay={150}>
          <div className="w-full bg-white rounded-3xl border border-sky-100 shadow-[0_24px_50px_-20px_rgba(14,165,233,0.15)] overflow-hidden transition-all">
            
            {/* Top Interactive Variant Swatch & Selector Header */}
            <div className="p-4 sm:p-6 border-b border-sky-100/80 bg-gradient-to-r from-sky-50/60 via-white to-blue-50/60 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Radio / Swatch Selector Buttons */}
              <div 
                role="tablist"
                aria-label="Automation Suite Selector"
                className="flex items-center gap-2 flex-wrap justify-center sm:justify-start"
              >
                {smartVariants.map((variant, idx) => {
                  const isSelected = idx === activeVariantIndex;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveVariantIndex(idx)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#0a2a66] text-white shadow-md shadow-sky-950/20 scale-[1.03]'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200/80'
                      }`}
                    >
                      {/* Swatch Color Dot with Ring */}
                      <span 
                        className="relative size-4 rounded-full border-2 border-white shadow-xs shrink-0"
                        style={{ backgroundColor: variant.swatchColor }}
                      />
                      <span className="font-mono text-[11px] opacity-80">{variant.num}</span>
                      <span className="whitespace-nowrap">{variant.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Consultation CTA Button */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0a2a66] to-[#1d5fd1] hover:brightness-110 shadow-md transition-all shrink-0 group"
              >
                <span>Consult on Automation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

            {/* Main Interactive Stage: 2-Column Split Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 items-stretch">
              
              {/* Left Column: Visual Showcase Preview & Live Telemetry (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden border border-sky-100 bg-slate-900 text-white relative group">
                
                {/* Background Cross-fading Image Showcase */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[320px] w-full overflow-hidden">
                  {smartVariants.map((variant, idx) => (
                    <img
                      key={variant.id}
                      src={variant.image}
                      alt={variant.title}
                      loading="lazy"
                      className={`absolute inset-0 size-full object-cover transition-all duration-700 ease-out ${
                        idx === activeVariantIndex 
                          ? 'opacity-85 scale-100' 
                          : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  ))}
                  {/* Subtle Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-transparent to-transparent opacity-90" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white">
                      <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                      <span>Section {currentVariant.num} • {currentVariant.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Live Telemetry & Swatch Status */}
                <div className="p-5 bg-[#071329] border-t border-white/10 space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {currentVariant.title}
                    </h3>
                    <p className="text-xs text-sky-300 font-medium mt-1">
                      &ldquo;{currentVariant.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Live Telemetry Metric Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10">
                    {currentVariant.liveStats.map((stat) => (
                      <div key={stat.label} className="p-2 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="block text-[10px] text-slate-400">{stat.label}</span>
                        <span className="block text-xs font-bold text-white mt-0.5">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: 6 Sub-Items Feature Grid (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* 6 Sub-Item Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentVariant.subItems.map((item) => {
                    const Icon = item.icon;
                    const slug = getServiceSlugByTitle(item.name);
                    const targetHref = slug ? `/service/${slug}` : '/smart-home';

                    return (
                      <Link
                        key={item.name}
                        href={targetHref}
                        className="p-4 rounded-2xl bg-sky-50/40 border border-sky-100 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all group duration-300 flex items-start gap-3.5 cursor-pointer block"
                      >
                        <div className="p-2.5 rounded-xl bg-white text-[#0a2a66] border border-sky-200 shadow-xs group-hover:bg-[#0a2a66] group-hover:text-white group-hover:scale-105 transition-all shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                              {item.name}
                            </h4>
                            <span className="size-2 rounded-full bg-emerald-500 radar-ring text-emerald-500 opacity-80" />
                          </div>
                          <p className="text-[11px] text-slate-600 leading-snug capitalize mt-1 font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
