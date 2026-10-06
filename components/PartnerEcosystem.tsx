'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

interface Partner {
  name: string;
  category: string;
  badge?: string;
  svg: React.ReactNode;
}

// ROW 1: Computing, OEM Hardware, Cloud Infrastructure & Chipsets
const row1Partners: Partner[] = [
  {
    name: 'Apple',
    category: 'Hardware & OS',
    badge: 'Premium Business Partner',
    svg: (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 170 170" className="h-7 w-7 fill-slate-900" aria-hidden="true">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.71-7.94-12.04-14.57-6.5-9.98-11.41-21.2-14.73-33.68-3.32-12.48-4.98-23.75-4.98-33.82 0-14.82 3.65-27.12 10.96-36.89 7.31-9.76 16.63-14.76 27.95-15 4.58 0 9.77 1.25 15.57 3.75 5.8 2.5 9.74 3.75 11.81 3.75 1.7 0 5.84-1.35 12.42-4.04 6.58-2.7 12.18-3.88 16.79-3.55 12.98.66 23.36 5.48 31.13 14.48-11.51 6.98-17.15 16.48-16.92 28.51.23 9.77 4.04 18.06 11.44 24.87 7.4 6.81 16.27 10.74 26.61 11.8-2.6 7.6-5.91 15.22-9.93 22.84zM119.22 33.37c-.12-4.92 1.54-9.98 4.98-15.19 3.44-5.21 8.08-9.42 13.92-12.63.78 4.58-.33 9.4-3.33 14.48-3 5.07-7.6 9.4-13.8 12.99-.65.23-1.24.35-1.77.35z"/>
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-sm font-extrabold tracking-tight text-slate-900 leading-none">Apple</span>
          <span className="text-[9px] font-semibold text-sky-700 tracking-tight leading-tight mt-0.5">Premium Partner</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Cisco',
    category: 'Networking',
    svg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 100 40" className="h-6 w-12" aria-hidden="true">
          <g fill="#049FD9">
            <rect x="5" y="16" width="4" height="12" rx="2" />
            <rect x="15" y="8" width="4" height="20" rx="2" />
            <rect x="25" y="18" width="4" height="10" rx="2" />
            <rect x="35" y="4" width="4" height="24" rx="2" />
            <rect x="45" y="14" width="4" height="14" rx="2" />
            <rect x="55" y="4" width="4" height="24" rx="2" />
            <rect x="65" y="18" width="4" height="10" rx="2" />
            <rect x="75" y="8" width="4" height="20" rx="2" />
            <rect x="85" y="16" width="4" height="12" rx="2" />
          </g>
        </svg>
        <span className="text-base font-black tracking-widest text-[#049FD9]">CISCO</span>
      </div>
    ),
  },
  {
    name: 'Dell Technologies',
    category: 'Enterprise Servers & Laptops',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-lg font-black tracking-tighter text-[#007DB8] font-sans">DELL</span>
        <span className="text-xs font-semibold tracking-normal text-slate-700">Technologies</span>
      </div>
    ),
  },
  {
    name: 'HP Enterprise',
    category: 'Servers & Storage',
    svg: (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-[3px] border-[#01A982] rounded-xs shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-slate-900 leading-none">Hewlett Packard</span>
          <span className="text-[10px] font-bold text-[#01A982] tracking-wider uppercase leading-tight mt-0.5">Enterprise</span>
        </div>
      </div>
    ),
  },
  {
    name: 'NVIDIA',
    category: 'AI & GPU Compute',
    svg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 100 80" className="h-5 w-7 fill-[#76B900]" aria-hidden="true">
          <path d="M48.2 2.5C23.1 2.5 2.5 21.2 2.5 44.1c0 18.5 13.5 34.1 32.1 39.5l7.9-10.4C29.6 69.1 20 57.6 20 44.1c0-14.7 12.6-26.6 28.2-26.6 12.9 0 23.8 8.1 26.9 19.5l14.9-3.2C85.5 15.4 68.6 2.5 48.2 2.5z"/>
          <path d="M48.2 25.4c-11.2 0-20.3 8.4-20.3 18.7 0 8.2 5.9 15.2 14.4 17.6l4.2-5.5c-4.9-1.3-8.5-5.4-8.5-10.3 0-6 5.2-10.8 11.6-10.8 4.6 0 8.6 2.5 10.4 6.2l9.1-1.9c-3.5-8.2-11.7-14-20.9-14z"/>
        </svg>
        <span className="text-sm font-black tracking-widest text-[#76B900]">NVIDIA</span>
      </div>
    ),
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Services',
    svg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          <path fill="#34A853" d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.64.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
        </svg>
        <span className="text-xs font-bold text-slate-800">Google Cloud</span>
      </div>
    ),
  },
  {
    name: 'Nutanix',
    category: 'Hyperconverged Cloud',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-base font-black tracking-wider text-[#024DA1]">NUTANI<span className="text-[#64B5F6]">X</span></span>
      </div>
    ),
  },
  {
    name: 'Logitech',
    category: 'Peripherals & Video Conferencing',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-extrabold tracking-tight text-slate-900">logitech</span>
      </div>
    ),
  },
  {
    name: 'Android Enterprise',
    category: 'Enterprise Mobility',
    svg: (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-300/80">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#3DDC84]" aria-hidden="true">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1557-.2698.0632-.6142-.2066-.7699-.2699-.1557-.6142-.0631-.7699.2066l-2.0294 3.5152c-1.4646-.6675-3.1362-1.0456-4.9189-1.0456-1.7826 0-3.4542.3781-4.9188 1.0456L5.0044 5.301c-.1557-.2697-.5-.3623-.7699-.2066-.2698.1557-.3623.5001-.2066.7699l1.996 3.4572C2.6806 11.0854.4077 14.7337.0422 19h23.9156c-.3655-4.2663-2.6384-7.9146-6.0766-9.6786"/>
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-bold text-slate-800">Android Enterprise</span>
          <span className="text-[8px] font-semibold text-slate-500">Silver Partner</span>
        </div>
      </div>
    ),
  },
  {
    name: 'HP',
    category: 'Laptops & Workstations',
    svg: (
      <div className="flex items-center gap-1">
        <div className="size-7 rounded-full bg-[#0096D6] flex items-center justify-center text-white font-black text-xs italic tracking-tighter shadow-xs">
          hp
        </div>
      </div>
    ),
  },
  {
    name: 'Lenovo',
    category: 'ThinkPad & Servers',
    svg: (
      <div className="px-2.5 py-0.5 bg-[#E2231A] text-white font-black text-xs tracking-wider uppercase rounded-xs">
        Lenovo
      </div>
    ),
  },
  {
    name: 'Intel',
    category: 'Processors & VPro',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-base font-black tracking-tight text-[#0068B5]">intel.</span>
      </div>
    ),
  },
];

// ROW 2: Smart Home, Office Automation, Cloud Productivity & Audio/Video
const row2Partners: Partner[] = [
  {
    name: 'Samsung',
    category: 'Smart Displays & Mobility',
    svg: (
      <span className="text-base font-black tracking-widest text-[#034EA2]">
        SAMSUNG
      </span>
    ),
  },
  {
    name: 'Meta',
    category: 'WhatsApp Business Cloud API',
    svg: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 100 60" className="h-4 w-7 fill-[#0081FB]" aria-hidden="true">
          <path d="M78.6 8.5c-7.2 0-13.8 3.6-18.1 9.4-4.8-6-11.8-9.4-19.5-9.4-14.9 0-26 12.7-26 27.6 0 14.8 11.2 27.4 26 27.4 7.7 0 14.7-3.4 19.5-9.4 4.3 5.8 10.9 9.4 18.1 9.4 13.9 0 24.9-11.9 24.9-27.4 0-15.4-11-27.6-24.9-27.6zm-37.6 44.3c-10.4 0-18.4-9.1-18.4-19.9s8-19.9 18.4-19.9c6.4 0 12.3 3.6 15.6 9.3l-10.3 15.9-5.3-5.3zm37.6 0c-9.7 0-17.3-8.8-17.3-19.9s7.6-19.9 17.3-19.9c9.8 0 17.3 8.9 17.3 19.9s-7.5 19.9-17.3 19.9z"/>
        </svg>
        <span className="text-sm font-extrabold text-[#0081FB] tracking-tight">Meta</span>
      </div>
    ),
  },
  {
    name: 'AWS',
    category: 'Cloud Infrastructure',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-black tracking-tight text-[#232F3E]">aws</span>
        <svg viewBox="0 0 80 30" className="h-3.5 w-7" aria-hidden="true">
          <path d="M5 12 Q40 28 75 12" fill="none" stroke="#FF9900" strokeWidth="4" strokeLinecap="round"/>
          <polygon points="73,7 80,13 70,16" fill="#FF9900" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity & Azure',
    svg: (
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
          <div className="bg-[#F25022] rounded-[1px]" />
          <div className="bg-[#7FBA00] rounded-[1px]" />
          <div className="bg-[#00A4EF] rounded-[1px]" />
          <div className="bg-[#FFB900] rounded-[1px]" />
        </div>
        <span className="text-xs font-bold text-slate-800">Microsoft 365</span>
      </div>
    ),
  },
  {
    name: 'Google Workspace',
    category: 'Enterprise Collaboration',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-bold text-slate-700">Google Workspace</span>
      </div>
    ),
  },
  {
    name: 'Huawei',
    category: 'Enterprise Routers & Switches',
    svg: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 100 80" className="h-5 w-6 fill-[#CF0A2C]" aria-hidden="true">
          <path d="M50 0 C45 15 35 25 15 30 C35 35 45 45 50 60 C55 45 65 35 85 30 C65 25 55 15 50 0 Z"/>
        </svg>
        <span className="text-xs font-bold tracking-wider text-slate-800">HUAWEI</span>
      </div>
    ),
  },
  {
    name: 'Microsoft Surface',
    category: 'Enterprise Tablets & Laptops',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-semibold text-slate-800">Microsoft Surface</span>
      </div>
    ),
  },
  {
    name: 'Acer',
    category: 'Commercial PCs',
    svg: (
      <span className="text-sm font-black italic tracking-wide text-[#83B81A]">
        acer
      </span>
    ),
  },
  {
    name: 'Hikvision',
    category: 'Smart CCTV Surveillance',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-black tracking-widest text-[#D8232A]">HIKVISION</span>
      </div>
    ),
  },
  {
    name: 'Dahua Technology',
    category: 'IP Cameras & Access Control',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-black tracking-wider text-[#ED1C24]">alhua</span>
        <span className="text-[10px] font-semibold text-slate-700">TECHNOLOGY</span>
      </div>
    ),
  },
  {
    name: 'Philips Hue',
    category: 'Smart Lighting',
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="size-3.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500" />
        <span className="text-xs font-bold text-slate-800">Philips Hue</span>
      </div>
    ),
  },
  {
    name: 'Yale',
    category: 'Smart Door Locks',
    svg: (
      <div className="px-2 py-0.5 rounded-md bg-[#FFCC00] text-black font-black text-xs tracking-wider">
        Yale
      </div>
    ),
  },
  {
    name: 'Sonos',
    category: 'Multi-Room Smart Audio',
    svg: (
      <span className="text-xs font-extrabold tracking-widest text-slate-900">
        SONOS
      </span>
    ),
  },
];

// ROW 3: Cybersecurity, SOC Threat Defense, IAM, Unified Endpoint & Observability
const row3Partners: Partner[] = [
  {
    name: 'Fortinet',
    category: 'Next-Gen Firewalls',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-black tracking-widest text-[#EE3124]">F<span className="text-slate-900">::</span>RTINET</span>
      </div>
    ),
  },
  {
    name: 'Check Point',
    category: 'Quantum Cybersecurity',
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="size-3 rounded-full bg-[#EB1C24]" />
        <span className="text-xs font-extrabold tracking-wider text-slate-900">CHECK POINT</span>
      </div>
    ),
  },
  {
    name: 'SentinelOne',
    category: 'Autonomous EDR / XDR',
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="w-1 h-3.5 bg-[#7B1FA2] rounded-full" />
        <div className="w-1 h-5 bg-[#7B1FA2] rounded-full" />
        <div className="w-1 h-3.5 bg-[#7B1FA2] rounded-full" />
        <span className="text-xs font-bold text-slate-900">SentinelOne</span>
      </div>
    ),
  },
  {
    name: 'Zscaler',
    category: 'Zero Trust Cloud Security',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-black italic tracking-wide text-[#0077D7]">zscaler</span>
      </div>
    ),
  },
  {
    name: 'Jamf',
    category: 'Apple Enterprise Management',
    svg: (
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-extrabold tracking-tight text-[#E05A2B]">jamf</span>
      </div>
    ),
  },
  {
    name: 'JumpCloud',
    category: 'Cloud Directory & IAM',
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="size-2.5 rounded-full bg-[#00A887]" />
        <span className="text-xs font-bold text-slate-900">jumpcloud</span>
      </div>
    ),
  },
  {
    name: 'Google Pixel',
    category: 'Android Enterprise Hardware',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-extrabold text-[#4285F4]">G</span>
        <span className="text-xs font-semibold text-slate-700">Pixel</span>
      </div>
    ),
  },
  {
    name: 'Sophos',
    category: 'Managed Threat Response (MDR)',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-black tracking-widest text-[#0071C5]">SOPHOS</span>
      </div>
    ),
  },
  {
    name: 'Ubiquiti UniFi',
    category: 'Enterprise Mesh & Wi-Fi 7',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-black tracking-wider text-[#006FFF]">UniFi</span>
      </div>
    ),
  },
  {
    name: 'Tableau',
    category: 'Business Intelligence & Analytics',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-bold text-[#E97627]">+</span>
        <span className="text-xs font-bold text-slate-700">tableau</span>
      </div>
    ),
  },
  {
    name: 'Qlik',
    category: 'Data Integration & AI',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-black text-[#009845]">Qlik Q</span>
      </div>
    ),
  },
  {
    name: 'LG Electronics',
    category: 'Commercial Displays & Signage',
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="size-5 rounded-full bg-[#A50034] text-white flex items-center justify-center font-bold text-[10px]">
          LG
        </div>
      </div>
    ),
  },
  {
    name: 'TP-Link Omada',
    category: 'Cloud Managed Networks',
    svg: (
      <div className="flex items-center gap-1">
        <span className="text-xs font-extrabold text-[#30C39E]">tp-link</span>
        <span className="text-[10px] font-semibold text-slate-600">Omada</span>
      </div>
    ),
  },
];

export default function PartnerEcosystem() {
  return (
    <section 
      id="partners"
      aria-label="Partner Ecosystem"
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#f0f7fc]/40 to-white text-[#0b1b3a] relative overflow-hidden border-b border-sky-100/80"
    >
      {/* Subtle Ambient Background Lighting matching screenshots */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-sky-200/25 via-blue-200/20 to-indigo-200/20 rounded-full blur-[140px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-12">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f172a]">
              Our Partner Ecosystem
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-500">
              United by Technology
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* 3-Row Continuous Opposite-Direction Infinite Carousel */}
      <div className="space-y-6 sm:space-y-8 relative w-full">
        
        {/* Row 1: Scrolls LEFT. Hovering Row 1 pauses only Row 1. Hovered logo turns full colour */}
        <div 
          tabIndex={0}
          aria-label="Hardware and Compute Partners (Scrolling Left)"
          className="marquee-container marquee-row-container py-1.5 focus:outline-none"
        >
          {/* Loop Track 1 */}
          <div className="marquee-row-left">
            {row1Partners.map((p, idx) => (
              <div 
                key={`r1-a-${idx}`} 
                title={`${p.name} - ${p.category}`}
                className="group/item inline-flex items-center px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-sky-200 shadow-none hover:shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
              >
                <div className="filter grayscale opacity-60 contrast-75 brightness-95 group-hover/item:filter-none group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:brightness-100 transition-all duration-300">
                  {p.svg}
                </div>
              </div>
            ))}
          </div>

          {/* Loop Track 2 (Duplicate for smooth infinite wrap) */}
          <div className="marquee-row-left" aria-hidden="true">
            {row1Partners.map((p, idx) => (
              <div 
                key={`r1-b-${idx}`} 
                className="group/item inline-flex items-center px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-sky-200 shadow-none hover:shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
              >
                <div className="filter grayscale opacity-60 contrast-75 brightness-95 group-hover/item:filter-none group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:brightness-100 transition-all duration-300">
                  {p.svg}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls RIGHT (Opposite direction). Hovering Row 2 pauses only Row 2 */}
        <div 
          tabIndex={0}
          aria-label="Smart Living and Productivity Partners (Scrolling Right)"
          className="marquee-container marquee-row-container py-1.5 focus:outline-none"
        >
          {/* Loop Track 1 */}
          <div className="marquee-row-right">
            {row2Partners.map((p, idx) => (
              <div 
                key={`r2-a-${idx}`} 
                title={`${p.name} - ${p.category}`}
                className="group/item inline-flex items-center px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-sky-200 shadow-none hover:shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
              >
                <div className="filter grayscale opacity-60 contrast-75 brightness-95 group-hover/item:filter-none group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:brightness-100 transition-all duration-300">
                  {p.svg}
                </div>
              </div>
            ))}
          </div>

          {/* Loop Track 2 (Duplicate for smooth infinite wrap) */}
          <div className="marquee-row-right" aria-hidden="true">
            {row2Partners.map((p, idx) => (
              <div 
                key={`r2-b-${idx}`} 
                className="group/item inline-flex items-center px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-sky-200 shadow-none hover:shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
              >
                <div className="filter grayscale opacity-60 contrast-75 brightness-95 group-hover/item:filter-none group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:brightness-100 transition-all duration-300">
                  {p.svg}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scrolls LEFT (Opposite direction to Row 2). Hovering Row 3 pauses only Row 3 */}
        <div 
          tabIndex={0}
          aria-label="Cybersecurity and Enterprise SaaS Partners (Scrolling Left)"
          className="marquee-container marquee-row-container py-1.5 focus:outline-none"
        >
          {/* Loop Track 1 */}
          <div className="marquee-row-left-alt">
            {row3Partners.map((p, idx) => (
              <div 
                key={`r3-a-${idx}`} 
                title={`${p.name} - ${p.category}`}
                className="group/item inline-flex items-center px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-sky-200 shadow-none hover:shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
              >
                <div className="filter grayscale opacity-60 contrast-75 brightness-95 group-hover/item:filter-none group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:brightness-100 transition-all duration-300">
                  {p.svg}
                </div>
              </div>
            ))}
          </div>

          {/* Loop Track 2 (Duplicate for smooth infinite wrap) */}
          <div className="marquee-row-left-alt" aria-hidden="true">
            {row3Partners.map((p, idx) => (
              <div 
                key={`r3-b-${idx}`} 
                className="group/item inline-flex items-center px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-sky-200 shadow-none hover:shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
              >
                <div className="filter grayscale opacity-60 contrast-75 brightness-95 group-hover/item:filter-none group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:brightness-100 transition-all duration-300">
                  {p.svg}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
