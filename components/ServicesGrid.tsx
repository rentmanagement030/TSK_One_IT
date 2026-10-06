'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Laptop, 
  Network, 
  Server, 
  Video, 
  ShieldCheck, 
  Fingerprint, 
  CloudSun, 
  Cpu, 
  Headphones, 
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  badge: string;
  badgeLabel: string;
  title: string;
  category: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  bgGradient: string;
  bullets: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    badge: 'Service 01',
    badgeLabel: 'Hardware & Onsite',
    title: 'IT Support & Repairs',
    category: 'Hardware & Chip-Level',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: Laptop,
    gradient: 'from-[#0284c7] via-[#0ea5e9] to-[#38bdf8]',
    bgGradient: 'from-sky-50 via-cyan-50 to-blue-50',
    bullets: [
      'Laptop & Desktop Repairs',
      'Upgrades & Replacement',
      'Chip-Level Services',
      'Onsite & Remote Support',
    ],
  },
  {
    id: '02',
    badge: 'Service 02',
    badgeLabel: 'Infrastructure',
    title: 'Networking & Enterprise Wi-Fi',
    category: 'Connectivity & Cabling',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: Network,
    gradient: 'from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9]',
    bgGradient: 'from-blue-50 via-sky-50 to-cyan-50',
    bullets: [
      'LAN / WAN / SD-WAN',
      'Enterprise Wi-Fi Solutions',
      'Structured Cabling',
      'Network Design & Implementation',
    ],
  },
  {
    id: '03',
    badge: 'Service 03',
    badgeLabel: 'Enterprise Compute',
    title: 'Servers & Storage',
    category: 'Virtualization & DR',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: Server,
    gradient: 'from-[#4338ca] via-[#6366f1] to-[#38bdf8]',
    bgGradient: 'from-indigo-50 via-purple-50 to-blue-50',
    bullets: [
      'Server Deployment & Support',
      'Storage Solutions',
      'Backup & Disaster Recovery',
      'Virtualization & Infrastructure',
    ],
  },
  {
    id: '04',
    badge: 'Service 04',
    badgeLabel: 'Visual Security',
    title: 'CCTV & Surveillance',
    category: 'Smart Analytics & IP Cameras',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    icon: Video,
    gradient: 'from-[#d97706] via-[#f59e0b] to-[#fbbf24]',
    bgGradient: 'from-amber-50 via-yellow-50 to-orange-50',
    bullets: [
      'IP Camera Installation',
      'Remote Monitoring',
      'Video Analytics',
      'Smart Surveillance Solutions',
    ],
  },
  {
    id: '05',
    badge: 'Service 05',
    badgeLabel: 'Threat Defense',
    title: 'Cybersecurity',
    category: 'Firewall & Threat SOC',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    icon: ShieldCheck,
    gradient: 'from-[#059669] via-[#10b981] to-[#34d399]',
    bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    bullets: [
      'Next-Generation Firewall',
      'Endpoint Security',
      'Network Security',
      'Vulnerability Assessment',
      'Threat Monitoring & SOC',
    ],
  },
  {
    id: '06',
    badge: 'Service 06',
    badgeLabel: 'Access Control',
    title: 'Office Biometric & Access Card System',
    category: 'Biometrics & Attendance',
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    icon: Fingerprint,
    gradient: 'from-[#0891b2] via-[#06b6d4] to-[#38bdf8]',
    bgGradient: 'from-cyan-50 via-sky-50 to-blue-50',
    bullets: [
      'Biometric Time Attendance',
      'Access Control Systems',
      'Smart Card / RFID Solutions',
      'Visitor Management',
    ],
  },
  {
    id: '07',
    badge: 'Service 07',
    badgeLabel: 'Cloud Systems',
    title: 'Cloud & Backup Solutions',
    category: 'Cloud Migration & Hybrid',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: CloudSun,
    gradient: 'from-[#0284c7] via-[#0ea5e9] to-[#60a5fa]',
    bgGradient: 'from-sky-50 via-blue-50 to-indigo-50',
    bullets: [
      'Cloud Migration & Management',
      'Backup & Disaster Recovery',
      'Cloud Security',
      'Hybrid & Multi-Cloud Solutions',
    ],
  },
  {
    id: '08',
    badge: 'Service 08',
    badgeLabel: 'Custom Software',
    title: 'Business Applications (CRM / ERP / AI)',
    category: 'AI Apps & Web Development',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    icon: Cpu,
    gradient: 'from-[#7e22ce] via-[#9333ea] to-[#c084fc]',
    bgGradient: 'from-purple-50 via-fuchsia-50 to-indigo-50',
    bullets: [
      'Custom CRM & ERP Solutions',
      'AI-Powered Applications',
      'Business Automation',
      'Website & E-commerce Development',
      'Integration & Custom Development',
    ],
  },
  {
    id: '09',
    badge: 'Service 09',
    badgeLabel: 'Managed Operations',
    title: 'Managed IT Services',
    category: '24x7 NOC / SOC & AMC',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
    icon: Headphones,
    gradient: 'from-[#0f766e] via-[#14b8a6] to-[#2dd4bf]',
    bgGradient: 'from-teal-50 via-cyan-50 to-sky-50',
    bullets: [
      'AMC & IT Support',
      'Dedicated IT Engineers',
      'Helpdesk Support',
      'Remote IT Support',
      'Network Operations Center (NOC)',
      'Security Operations Center (SOC)',
      'Technical Assistance Center (TAC)',
      '24x7x365 Monitoring & Support',
    ],
  },
];

export default function ServicesGrid() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update active card index & scroll controls state
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const cards = Array.from(container.querySelectorAll('.service-card-snap')) as HTMLElement[];
    if (cards.length === 0) return;

    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - containerCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Scroll directly within container without jumping the vertical window
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = Array.from(container.querySelectorAll('.service-card-snap')) as HTMLElement[];
    const targetCard = cards[index];

    if (targetCard) {
      const cardOffset = targetCard.offsetLeft;
      const cardWidth = targetCard.offsetWidth;
      const containerWidth = container.clientWidth;
      const targetScroll = cardOffset - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const nextIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1) 
      : Math.min(servicesData.length - 1, activeIndex + 1);
    
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="services"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-[#f4f9fd] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
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
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 shadow-sm shimmer-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Enterprise-Grade IT &amp; Smart Infrastructure</span>
            </div>

            <h2 
              id="services-heading"
              className="font-black tracking-tight text-[#0b1b3a]"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
            >
              Our Core Services
            </h2>
            
            {/* Cyan Underline Accent Line */}
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl mx-auto">
              From everyday hardware diagnostics to mission-critical multi-cloud deployments, 
              we manage the entire technology lifecycle for your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Action Bar / Carousel Arrow Controls */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex items-center justify-end gap-4 mb-6 pb-2 border-b border-sky-200/80">
            {/* Carousel Arrows & Counter Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-sky-100 shadow-sm">
                <span className="text-sky-700 font-extrabold">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-slate-400 mx-1">/</span>
                <span>09</span>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Previous Service"
                  disabled={!canScrollLeft}
                  onClick={() => scrollByDirection('left')}
                  className="w-10 h-10 rounded-xl bg-white border border-sky-200 text-[#0b1b3a] flex items-center justify-center hover:bg-sky-50 hover:border-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next Service"
                  disabled={!canScrollRight}
                  onClick={() => scrollByDirection('right')}
                  className="w-10 h-10 rounded-xl bg-white border border-sky-200 text-[#0b1b3a] flex items-center justify-center hover:bg-sky-50 hover:border-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Snap-Scrolling Services Carousel Track */}
        <div className="service-carousel-container relative">
          <div 
            ref={carouselRef}
            className="service-carousel-track"
            role="region"
            aria-label="Services snap carousel"
            tabIndex={0}
          >
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={`service-${service.id}`}
                  className="service-card-snap bg-white border border-sky-100 shadow-lg group flex flex-col justify-between"
                  style={{ minHeight: '480px' }}
                >
                  {/* Top Day-card Style Number Badge */}
                  <div className="absolute top-4 left-0 z-20">
                    <div className="bg-[#0a2a66] text-white text-xs font-mono font-black tracking-wider px-3.5 py-1.5 rounded-r-xl shadow-md border-y border-r border-sky-400/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Top-Right Category Badge with Icon */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-sky-200 shadow-sm text-sky-800 text-xs font-bold">
                      <Icon className="w-3.5 h-3.5 text-sky-600" />
                      <span className="hidden sm:inline">{service.badgeLabel}</span>
                    </div>
                  </div>

                  {/* Top Graphical Visual Panel */}
                  <div className={`w-full h-48 bg-gradient-to-br ${service.bgGradient} relative overflow-hidden flex flex-col justify-end p-5 border-b border-sky-100`}>
                    {/* Abstract Tech Grid Background */}
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Glowing circular element */}
                    <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-sky-300/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
                    
                    <div className="relative z-10 flex items-end justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white text-sky-600 border border-sky-200 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0a2a66] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-600 bg-white/90 px-2.5 py-1 rounded-md border border-sky-100">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content & Sliding Meta Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white relative z-10">
                    <div>
                      <h3 className="text-xl font-black text-[#0b1b3a] group-hover:text-sky-700 transition-colors mb-3 leading-snug">
                        {service.title}
                      </h3>

                      {/* Verified Sub-Items Checklist */}
                      <ul 
                        className="space-y-2.5 mb-6" 
                        aria-label={`Core capabilities of ${service.title}`}
                      >
                        {service.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer Action CTA */}
                    <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                      <Link
                        href={`#contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1d5fd1] to-[#0284c7] hover:brightness-110 transition-all shadow-md shadow-sky-500/15 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        aria-label={`Request Solution for ${service.title}`}
                      >
                        <span>Request Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <span className="text-[11px] font-mono font-semibold text-slate-600">
                        SLA Guaranteed
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner within Services */}
        <ScrollReveal animation="scale-up" delay={200}>
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#06b6d4] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_-10px_rgba(14,165,233,0.4)] hover:shadow-[0_20px_45px_-10px_rgba(14,165,233,0.5)] transition-all">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-100 flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Need Custom Infrastructure Sizing?</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-white">
                Speak with our Certified Infrastructure Engineers Today
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider text-[#0b1b3a] bg-gradient-to-r from-amber-400 to-yellow-400 hover:brightness-105 transition-all shrink-0 shadow-md group"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
