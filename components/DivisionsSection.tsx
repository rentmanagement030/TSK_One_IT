'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { 
  Laptop, 
  Home, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
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
  Lightbulb
} from 'lucide-react';

export const divisionsData = [
  {
    id: 'device-care',
    divisionNum: '01',
    name: 'Device Care',
    headline: 'Personal Devices & Chip-Level Repairs',
    tagline: 'For Individual Users & Businesses',
    color: 'from-[#0284c7] via-[#0ea5e9] to-[#38bdf8]',
    borderGlow: 'border-sky-300',
    icon: Laptop,
    intro: 'Comprehensive diagnosis, chip-level logic board recovery, Apple repairs, and doorstep pickup across Chennai.',
    services: [
      {
        title: 'Laptop & Desktop Repair',
        desc: 'Precision hardware troubleshooting, screen replacement, liquid spill remediation & OS tuning.',
        badge: 'Onsite & Lab',
        icon: Wrench,
      },
      {
        title: 'Apple MacBook Repair',
        desc: 'Certified repair for MacBook Pro, MacBook Air & iMac. Logic boards, Retina displays & battery swaps.',
        badge: 'Apple Specialized',
        icon: Laptop,
      },
      {
        title: 'Chip-Level Motherboard Repair',
        desc: 'Advanced BGA rework stations, microscopic track repair, power IC & MOSFET level restoration.',
        badge: 'Micro-Soldering',
        icon: Cpu,
      },
      {
        title: 'Data Recovery',
        desc: 'Cleanroom recovery from mechanically failed HDDs, corrupted SSDs, NVMe drives & broken RAID arrays.',
        badge: 'Strict Confidentiality',
        icon: Database,
      },
      {
        title: 'SSD & RAM Upgrades',
        desc: 'High-speed NVMe/SATA SSD upgrades, thermal repasting & RAM expansion for instant speed acceleration.',
        badge: 'Performance Boost',
        icon: HardDrive,
      },
      {
        title: 'Genuine Spare Parts',
        desc: '100% OEM original screens, batteries, high-efficiency cooling fans, hinges & certified adapters.',
        badge: 'Warranty Backed',
        icon: ShieldCheck,
      },
      {
        title: 'Annual Maintenance (AMC)',
        desc: 'Preventive health audits, thermal cleaning, antivirus shielding & priority emergency response.',
        badge: 'Priority Support',
        icon: Headphones,
      },
      {
        title: 'Doorstep Pickup & Delivery',
        desc: 'Safe, insured pickup and contactless drop-off with live SMS/WhatsApp ticket tracking.',
        badge: 'Zero Hassle',
        icon: Truck,
      },
    ],
  },
  {
    id: 'home-automation',
    divisionNum: '02',
    name: 'Home Automation',
    headline: 'Smart Living & Connected Environments',
    tagline: 'Smarter Spaces. Safer People. Seamless Living.',
    color: 'from-[#d97706] via-[#f59e0b] to-[#fbbf24]',
    borderGlow: 'border-amber-300',
    icon: Home,
    intro: 'Transform your residence into an intelligent ecosystem with automated lighting, multi-layer security, and whole-home Wi-Fi.',
    services: [
      {
        title: 'Smart Home Automation',
        desc: 'Centralized mobile & touch-panel control of lighting, ambient climate, curtains, motorized shades & scenes.',
        badge: 'IoT Ecosystem',
        icon: Home,
      },
      {
        title: 'CCTV & IP Surveillance',
        desc: 'High-definition 4K night-vision cameras, smart motion detection, AI human tracking & remote phone streaming.',
        badge: '24x7 Recording',
        icon: Video,
      },
      {
        title: 'Smart Door Locks',
        desc: 'Biometric fingerprint, encrypted digital PIN, RFID smart card & remote mobile unlock keyless entry.',
        badge: 'Bank-Grade Security',
        icon: KeyRound,
      },
      {
        title: 'Video Door Phones',
        desc: 'Two-way video intercom, visitor snapshot capture, mobile push alerts & automated gate release.',
        badge: 'Visitor Verification',
        icon: PhoneCall,
      },
      {
        title: 'Smart Lighting',
        desc: 'Automated sunrise/sunset dimming, mood color scenes, motion activation & drastic power conservation.',
        badge: 'Energy Optimization',
        icon: Lightbulb,
      },
      {
        title: 'Home Wi-Fi & Mesh',
        desc: 'Ultra-low latency Wi-Fi 6/7 mesh systems designed to eliminate dead zones across duplexes & villas.',
        badge: 'Zero Deadzones',
        icon: Wifi,
      },
      {
        title: 'Access Control Systems',
        desc: 'Smart perimeter barriers, automated boom gates, keypad entry & comprehensive digital access logs.',
        badge: 'Perimeter Defense',
        icon: Lock,
      },
      {
        title: 'Voice Assistants Integration',
        desc: 'Seamless voice command integration with Apple Siri (HomeKit), Amazon Alexa & Google Assistant.',
        badge: 'Hands-Free Control',
        icon: Mic,
      },
      {
        title: 'Home Cybersecurity',
        desc: 'Secure home router gateways, IoT isolation firewalls & parental content filtering protections.',
        badge: 'Cyber Shield',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'business-solutions',
    divisionNum: '03',
    name: 'Business Solutions',
    headline: 'Enterprise IT & Digital Transformation',
    tagline: 'Enterprise Cloud, Cyber Defense & Managed NOC/SOC',
    color: 'from-[#4338ca] via-[#6366f1] to-[#0ea5e9]',
    borderGlow: 'border-indigo-300',
    icon: Building2,
    intro: 'Mission-critical enterprise infrastructure, multi-cloud migrations, certified NOC/SOC operations, and custom AI software.',
    services: [
      {
        title: 'IT Infrastructure',
        desc: 'Enterprise LAN/WAN, SD-WAN, core switching, structured CAT6/Fiber cabling & server rack engineering.',
        badge: 'High Availability',
        icon: Cpu,
      },
      {
        title: 'Cloud Solutions (Azure, AWS, GCP)',
        desc: 'End-to-end cloud migrations, hybrid cloud architecture, disaster recovery & Azure/AWS cost optimization.',
        badge: 'Multi-Cloud Certified',
        icon: CloudSun,
      },
      {
        title: 'Cybersecurity',
        desc: 'Next-Generation Firewalls (Fortinet, Sophos), EDR/XDR endpoint protection & vulnerability assessments.',
        badge: 'Zero Trust',
        icon: ShieldCheck,
      },
      {
        title: 'Managed IT Services',
        desc: 'Dedicated on-site IT engineers, SLA-backed helpdesk, remote troubleshooting & hardware lifecycle AMC.',
        badge: 'SLA Guaranteed',
        icon: Headphones,
      },
      {
        title: 'NOC / SOC / TAC Operations',
        desc: '24x7x365 Network Operations Center (NOC), Security Operations Center (SOC) & Technical Assistance (TAC).',
        badge: '24x7x365 Active',
        icon: Headphones,
      },
      {
        title: 'AI & Business Applications',
        desc: 'Custom enterprise AI workflows, LLM agents, automated reporting & intelligent data analytics.',
        badge: 'AI Transformation',
        icon: Bot,
      },
      {
        title: 'CRM / ERP Solutions',
        desc: 'Tailored enterprise resource planning, customer pipeline management, inventory & billing software.',
        badge: 'Custom Workflow',
        icon: FileSpreadsheet,
      },
      {
        title: 'WhatsApp Automation',
        desc: 'Official Meta WhatsApp Business API integration, CRM sync, automated notifications & chatbot flows.',
        badge: 'Meta Cloud API',
        icon: MessageSquare,
      },
      {
        title: 'Custom Software Development',
        desc: 'Bespoke web applications, customer portals, robust microservices & high-performance APIs.',
        badge: 'Modern Stack',
        icon: Code2,
      },
    ],
  },
];

export default function DivisionsSection() {
  const [activeTab, setActiveTab] = useState('device-care');
  const activeDivision = divisionsData.find((d) => d.id === activeTab) || divisionsData[0];
  const DivisionIcon = activeDivision.icon;

  return (
    <section 
      id="divisions"
      aria-labelledby="divisions-heading"
      className="py-20 lg:py-28 bg-[#f4f9fd] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Ambient Atmospheric Glows */}
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
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 shadow-sm shimmer-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Full Technology Lifecycle Coverage</span>
            </div>

            <h2 
              id="divisions-heading"
              className="font-black tracking-tight text-[#0b1b3a]"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.2rem)' }}
            >
              Our Three Core Divisions
            </h2>
            
            <div className="title-accent-line" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl mx-auto">
              Whether you need precision hardware repair, connected smart home automation, or scalable enterprise IT, our certified divisions deliver excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Division Tab Switcher */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex justify-center mb-10">
            <div 
              role="tablist" 
              aria-label="TSK OneIT Divisions"
              className="inline-flex p-1.5 rounded-2xl bg-white border border-sky-200 shadow-md max-w-full overflow-x-auto gap-1"
            >
              {divisionsData.map((div) => {
                const isSelected = div.id === activeTab;
                const Icon = div.icon;
                return (
                  <button
                    key={div.id}
                    role="tab"
                    id={`tab-${div.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${div.id}`}
                    onClick={() => setActiveTab(div.id)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[48px] ${
                      isSelected
                        ? 'bg-[#0a2a66] text-white shadow-md shadow-sky-950/20 scale-[1.02]'
                        : 'text-slate-700 hover:text-[#0a2a66] hover:bg-sky-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-sky-600'}`} />
                    <span>{div.divisionNum}. {div.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Active Division Panel */}
        <ScrollReveal animation="scale-up" delay={200}>
          <div 
            id={`panel-${activeDivision.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeDivision.id}`}
            className="rounded-3xl bg-white p-6 sm:p-10 border border-sky-100 shadow-[0_20px_50px_-15px_rgba(14,165,233,0.12)]"
          >
            {/* Division Banner Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 mb-8 border-b border-slate-100">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded border border-sky-200">
                    Division {activeDivision.divisionNum}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {activeDivision.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-3">
                  <span>{activeDivision.name}</span>
                  <span className="text-sm font-medium text-slate-500 hidden sm:inline">&mdash; {activeDivision.headline}</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {activeDivision.intro}
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-[#0b1b3a] bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-md shadow-amber-500/20 transition-all shrink-0 min-h-[48px] group"
              >
                <Sparkles className="w-4 h-4 text-[#0b1b3a]" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Services Grid (All Division Services) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeDivision.services.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.title}
                    className="p-5 rounded-2xl bg-sky-50/40 border border-sky-100/90 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all group duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badge & Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-white text-[#0a2a66] border border-sky-200 shadow-xs group-hover:scale-105 group-hover:bg-[#0a2a66] group-hover:text-white transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded border border-sky-200/60">
                          {srv.badge}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1.5">
                        {srv.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] font-bold text-sky-700">
                      <span>Certified Delivery</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 radar-ring text-emerald-500 opacity-80" />
                    </div>
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
