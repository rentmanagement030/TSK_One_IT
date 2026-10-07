'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Laptop, 
  Home, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles,
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Database, 
  HardDrive, 
  Truck, 
  Tv, 
  Video, 
  KeyRound, 
  PhoneCall, 
  Wifi, 
  CloudSun, 
  Headphones, 
  Bot, 
  FileSpreadsheet, 
  MessageSquare, 
  Code2,
  Lock,
  Mic,
  Lightbulb,
  ExternalLink,
  Clock
} from 'lucide-react';

export interface ServiceDetail {
  title: string;
  desc: string;
  badge: string;
  icon: any;
}

export interface DivisionItem {
  id: string;
  name: string;
  tagline: string;
  subCategories: string;
  slug: string;
  icon: any;
  color: string;
  bgGlow: string;
  image: string;
  highlights: string[];
  services: ServiceDetail[];
}

export const divisionsData: DivisionItem[] = [
  {
    id: 'device-care',
    name: 'Device Care',
    tagline: 'Personal Devices & Chip-Level Repairs',
    subCategories: 'Laptops • MacBooks • Logic Boards • Data Recovery',
    slug: '/device-care',
    icon: Laptop,
    color: 'from-sky-500 to-blue-600',
    bgGlow: 'bg-sky-500/10',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Laptop & Desktop Repair',
      'Apple Macbook Repair',
      'Chip Level Mother Board Repair',
      'Data Recovery',
      'SSD & RAM Upgrades',
      'Genuine Spareparts',
      'Doorstep Pickup & Delivery',
    ],
    services: [
      {
        title: 'Laptop & Desktop Repair',
        desc: 'Precision hardware troubleshooting, cracked screen replacement, liquid spill remediation, thermal cleaning & OS optimization.',
        badge: 'Onsite & Lab',
        icon: Wrench,
      },
      {
        title: 'Apple Macbook Repair',
        desc: 'Certified repair for MacBook Pro, MacBook Air, and iMac. Logic board BGA repair, Retina displays, trackpads & battery replacements.',
        badge: 'Apple Specialized',
        icon: Laptop,
      },
      {
        title: 'Chip Level Mother Board Repair',
        desc: 'Microscopic logic board track repair, power IC replacement, MOSFET diagnostics, and BGA chip re-balling on specialized rework stations.',
        badge: 'Micro-Soldering',
        icon: Cpu,
      },
      {
        title: 'Data Recovery',
        desc: 'Cleanroom recovery from mechanically damaged HDDs, dead NVMe SSDs, corrupted flash memory, and complex RAID multi-disk arrays.',
        badge: 'Strict Privacy',
        icon: Database,
      },
      {
        title: 'SSD & RAM Upgrades',
        desc: 'Blazing-fast NVMe PCIe 4.0/5.0 SSD storage expansions, high-frequency DDR4/DDR5 RAM upgrades & instant performance revival.',
        badge: 'Speed Boost',
        icon: HardDrive,
      },
      {
        title: 'Genuine Spareparts',
        desc: '100% factory-authentic replacement screens, original batteries, certified power adapters, cooling fans & keyboards with warranty.',
        badge: 'OEM Warranty',
        icon: ShieldCheck,
      },
      {
        title: 'Doorstep Pickup & Delivery',
        desc: 'Secure, contactless doorstep pickup across Chennai & Tamil Nadu with live repair ticket tracking and safe insured return delivery.',
        badge: 'Contactless Service',
        icon: Truck,
      },
    ],
  },
  {
    id: 'home-automation',
    name: 'Home Automation',
    tagline: 'Smart Living & Connected Environments',
    subCategories: 'Security • Smart Lighting • Wi-Fi 6 Mesh • Access Control',
    slug: '/home-automation',
    icon: Home,
    color: 'from-cyan-500 to-teal-600',
    bgGlow: 'bg-cyan-500/10',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Smart Home Automation',
      'CCTV',
      'Smartdoor Locks',
      'Video Door Phones',
      'Smart Lighting',
      'Home WiFi & Mesh',
      'Access Control',
      'Voice Assistants',
      'Home Cyber Security',
    ],
    services: [
      {
        title: 'Smart Home Automation',
        desc: 'Centralized smart wall touch panels, customized scene scheduling, motorized curtains, and unified smartphone app control.',
        badge: 'Unified App Control',
        icon: Home,
      },
      {
        title: 'CCTV',
        desc: 'High-definition 4K color night-vision IP surveillance, intelligent human/vehicle AI motion detection, and encrypted NVR cloud recording.',
        badge: '4K Night Vision',
        icon: Video,
      },
      {
        title: 'Smartdoor Locks',
        desc: 'Keyless smart locks featuring high-accuracy biometric fingerprint scanners, digital PIN codes, RFID card entry, and remote OTP app unlocking.',
        badge: 'Biometric Access',
        icon: KeyRound,
      },
      {
        title: 'Video Door Phones',
        desc: 'Two-way crystal-clear audio/video calling, HD wide-angle door cameras, digital chime sync, and instant smartphone visitor snapshot alerts.',
        badge: '2-Way HD Video',
        icon: PhoneCall,
      },
      {
        title: 'Smart Lighting',
        desc: 'Tunable warm-to-cool white and full RGB architectural mood lighting, automated daylight harvesting sensors & motion-activated paths.',
        badge: 'Mood & Scene Sync',
        icon: Lightbulb,
      },
      {
        title: 'Home WiFi & Mesh',
        desc: 'High-speed Wi-Fi 6/7 multi-node mesh network installations eliminating dead zones across multi-floor bungalows, apartments & outdoor lawns.',
        badge: 'Zero Dead Zones',
        icon: Wifi,
      },
      {
        title: 'Access Control',
        desc: 'Automatic motorized boom barriers, RFID gate controllers, facial recognition readers & comprehensive visitor logging.',
        badge: 'Perimeter Security',
        icon: Lock,
      },
      {
        title: 'Voice Assistants',
        desc: 'Hands-free whole-home voice control integration with Amazon Alexa, Google Home, and Apple HomeKit Siri ecosystems.',
        badge: 'Hands-Free Control',
        icon: Mic,
      },
      {
        title: 'Home Cyber Security',
        desc: 'Hardware router firewalls, IoT smart device VLAN network isolation, parental content filtering, and malware DNS defense.',
        badge: 'IoT Shielding',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'business-solutions',
    name: 'Business Solutions',
    tagline: 'Enterprise IT & Digital Transformation',
    subCategories: 'Cloud • Cybersecurity • Managed IT • AI Applications',
    slug: '/business-solutions',
    icon: Building2,
    color: 'from-blue-600 to-indigo-700',
    bgGlow: 'bg-indigo-500/10',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'IT Infrastructure',
      'Cloud Solutions (Microsoft Azure, AWS, GCP)',
      'Cybersecurity',
      'Managed IT Services',
      'NOC/SOC/TAC',
      'AI & Business Applications',
      'CRM/ERP',
      'WhatsApp Automation',
      'Custom Software Development',
    ],
    services: [
      {
        title: 'IT Infrastructure',
        desc: 'Enterprise LAN/WAN, SD-WAN, core switching, structured CAT6/Fiber optic cabling, server rack engineering & high-availability UPS setups.',
        badge: 'High Availability',
        icon: Cpu,
      },
      {
        title: 'Cloud Solutions (Microsoft Azure, AWS, GCP)',
        desc: 'End-to-end cloud migrations, hybrid cloud architecture, disaster recovery automation, Kubernetes deployments & Azure/AWS cost optimization.',
        badge: 'Multi-Cloud Certified',
        icon: CloudSun,
      },
      {
        title: 'Cybersecurity',
        desc: 'Next-Generation Firewalls (Fortinet, Sophos), EDR/XDR endpoint detection, zero-trust network access (ZTNA) & comprehensive vulnerability assessments.',
        badge: 'Zero Trust Security',
        icon: ShieldCheck,
      },
      {
        title: 'Managed IT Services',
        desc: 'Dedicated on-site IT engineers, SLA-backed helpdesk support, proactive remote monitoring, IT asset lifecycle management & AMC contracts.',
        badge: 'SLA Guaranteed',
        icon: Headphones,
      },
      {
        title: 'NOC / SOC / TAC',
        desc: '24x7x365 Network Operations Center (NOC), Security Operations Center (SOC) threat hunting, and Technical Assistance Center (TAC) escalation.',
        badge: '24×7 Active NOC/SOC',
        icon: Headphones,
      },
      {
        title: 'AI & Business Applications',
        desc: 'Custom enterprise AI workflows, LLM agents, automated reporting, computer vision & intelligent data analytics engines.',
        badge: 'Enterprise AI',
        icon: Bot,
      },
      {
        title: 'CRM / ERP',
        desc: 'Tailored enterprise resource planning, customer pipeline management, automated invoicing, warehouse inventory & HR payroll software.',
        badge: 'Custom Workflow',
        icon: FileSpreadsheet,
      },
      {
        title: 'WhatsApp Automation',
        desc: 'Official Meta WhatsApp Business Cloud API integration, CRM sync, automated customer notifications, order tracking & 24/7 AI chatbot flows.',
        badge: 'Meta Cloud API',
        icon: MessageSquare,
      },
      {
        title: 'Custom Software Development',
        desc: 'Bespoke web applications, client portals, robust microservices, high-performance REST/GraphQL APIs, and scalable mobile app solutions.',
        badge: 'Full-Stack Modern Stack',
        icon: Code2,
      },
    ],
  },
];

export default function DivisionsSection() {
  const [selectedDivision, setSelectedDivision] = useState<DivisionItem | null>(null);

  return (
    <section 
      id="divisions"
      aria-labelledby="what-we-do-heading"
      className="pb-20 lg:pb-28 bg-[#f8fafc] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* 1. TOP WHAT WE DO BANNER (Dark Corporate Blue with Enhanced Tech Photography) */}
      <div className="relative bg-[#07193d] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 sm:mb-16">
        {/* Full-Bleed Background Tech Architecture Image (Enhanced Visibility) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.35] mix-blend-luminosity pointer-events-none scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')",
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
              id="what-we-do-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white"
            >
              What We Do
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-4 rounded-full" />

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              From personal devices to smart automation and enterprise digital transformation under one roof.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3 Interactive Cards (Normal: Top Image + White Base; Hover: Image Zooms to Full 100% Card with Frosted Overlay) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisionsData.map((division, idx) => {
            const Icon = division.icon;
            return (
              <ScrollReveal key={division.id} animation="fade-up" delay={idx * 150}>
                <div 
                  onClick={() => setSelectedDivision(division)}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-sky-300 shadow-md hover:shadow-2xl transition-all duration-500 ease-out flex flex-col overflow-hidden cursor-pointer h-[460px] sm:h-[480px] transform hover:-translate-y-2"
                >
                  {/* FULL-CARD IMAGE LAYER (Always 100% height, zooms on hover) */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-slate-950">
                    <img 
                      src={division.image} 
                      alt={division.name}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Dark gradient for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>

                  {/* NORMAL STATE SOLID WHITE COVER (Only covers the bottom 38% in normal state, fades away on hover) */}
                  <div className="absolute inset-x-0 bottom-0 h-[38%] bg-white group-hover:opacity-0 transition-opacity duration-500 z-10" />

                  {/* TOP FLOATING BADGES (Z-20) */}
                  <div className="relative z-20 p-5 flex items-center justify-between pointer-events-none">
                    {/* Top-Left: Division Icon */}
                    <div className="size-11 rounded-2xl bg-white/95 group-hover:bg-[#1e40af] backdrop-blur-md text-[#1e40af] group-hover:text-white flex items-center justify-center border border-white/60 shadow-md group-hover:scale-105 transition-all duration-300">
                      <Icon className="size-5.5" />
                    </div>

                    {/* Top-Right: Pill Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 group-hover:bg-slate-950/85 backdrop-blur-md border border-slate-200/60 group-hover:border-white/20 text-slate-800 group-hover:text-white text-xs font-bold shadow-sm transition-all duration-300">
                      <Clock className="size-3.5 text-sky-600 group-hover:text-sky-400" />
                      <span>24×7 SLA</span>
                    </div>
                  </div>

                  {/* BOTTOM TEXT CONTAINER (Z-20, Frosted Glass Gradient on Hover) */}
                  <div className="relative z-20 mt-auto inset-x-0 p-6 flex flex-col justify-end transition-all duration-500 bg-transparent group-hover:bg-gradient-to-t group-hover:from-white group-hover:via-white/90 group-hover:to-transparent group-hover:pt-16">
                    <div>
                      {/* Mini Category / Division Label */}
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#0284c7] uppercase">
                        DIVISION 0{idx + 1}
                      </span>

                      {/* Division Name */}
                      <h3 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#1e40af] transition-colors leading-tight mt-0.5">
                        {division.name}
                      </h3>

                      {/* Sub-keywords Line */}
                      <p className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 mt-1 leading-snug transition-colors line-clamp-1">
                        {division.subCategories}
                      </p>
                    </div>

                    {/* Bottom Action Link + Services Count */}
                    <div className="pt-3.5 mt-3.5 border-t border-slate-100 group-hover:border-slate-300/80 flex items-center justify-between transition-colors">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1e40af] group-hover:text-[#0284c7] transition-all">
                        <span>Explore {division.name}</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
                      </span>
                      <span className="text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                        {division.services.length} Services
                      </span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* DETAILED DRILL-DOWN MODAL / DRAWER (Opened when user clicks a card) */}
      {selectedDivision && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-division-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedDivision(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-[#0b1b3a] text-white p-6 sm:p-8 flex items-center justify-between overflow-hidden shrink-0">
              {/* Background ambient lighting */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute -top-10 right-0 w-[400px] h-[200px] bg-sky-500/20 blur-[100px] rounded-full"
              />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <span>TSK OneIT &bull; Division Overview</span>
                </div>
                <h3 id="modal-division-title" className="text-2xl sm:text-3xl font-black text-white">
                  {selectedDivision.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedDivision.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedDivision(null)}
                aria-label="Close detailed view"
                className="relative z-10 size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body: Complete Detailed Services List */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 [scrollbar-width:thin]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-slate-900">
                  Comprehensive Services Breakdown ({selectedDivision.services.length} Specialized Capabilities)
                </h4>
                <Link
                  href={selectedDivision.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e40af] hover:text-[#0284c7] transition-colors"
                >
                  <span>Open Full Page</span>
                  <ExternalLink className="size-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDivision.services.map((srv) => {
                  const SrvIcon = srv.icon;
                  return (
                    <div 
                      key={srv.title}
                      className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="size-9 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                            <SrvIcon className="size-4.5" />
                          </div>
                          <span className="text-[10px] font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                            {srv.badge}
                          </span>
                        </div>

                        <h5 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                          {srv.title}
                        </h5>

                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {srv.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                        <CheckCircle2 className="size-3.5" />
                        <span>Certified Support Available</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="text-xs text-slate-600">
                Need immediate assistance or free site assessment for <strong>{selectedDivision.name}</strong>?
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="#contact"
                  onClick={() => setSelectedDivision(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm shadow hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="https://wa.me/919150843991?text=Hi%20TSK%20OneIT,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
