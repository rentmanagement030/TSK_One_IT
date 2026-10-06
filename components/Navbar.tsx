'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  Menu, 
  X,
  ChevronDown,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

export const deviceCareServices = [
  { title: 'Laptop & Desktop Repair', desc: 'Hardware diagnostics, OS troubleshooting & repairs' },
  { title: 'Apple MacBook Repair', desc: 'MacBook Pro & Air logic boards, screens & batteries' },
  { title: 'Chip-Level Motherboard Repair', desc: 'BGA rework, circuit diagnostics & micro-soldering' },
  { title: 'Data Recovery', desc: 'HDD, SSD, NVMe & RAID recovery from damaged media' },
  { title: 'SSD & RAM Upgrades', desc: 'Performance acceleration & NVMe storage expansion' },
  { title: 'Genuine Spare Parts', desc: 'OEM screens, batteries, keyboards & power adapters' },
  { title: 'Annual Maintenance (AMC)', desc: 'Preventive maintenance & priority breakdown support' },
  { title: 'Doorstep Pickup & Delivery', desc: 'Secure transit with live ticket tracking across Chennai' },
];

export const homeAutomationServices = [
  { title: 'Smart Home Automation', desc: 'Unified control of lighting, security, shades & climate' },
  { title: 'CCTV & IP Surveillance', desc: 'HD/4K security cameras with mobile monitoring' },
  { title: 'Smart Door Locks', desc: 'Biometric, keypad, RFID & mobile app keyless entry' },
  { title: 'Video Door Phones', desc: 'Smart intercoms, visitor verification & 2-way audio' },
  { title: 'Smart Lighting', desc: 'Automated schedules, scene control & energy optimization' },
  { title: 'Home Wi-Fi & Mesh', desc: 'Zero-deadzone high-speed Wi-Fi 6/7 mesh coverage' },
  { title: 'Access Control Systems', desc: 'RFID gates, smart entry barriers & visitor logs' },
  { title: 'Voice Assistants Integration', desc: 'Alexa, Google Home & Apple HomeKit synchronization' },
  { title: 'Home Cybersecurity', desc: 'IoT threat shielding, secure gateways & parental controls' },
];

export const businessSolutionsServices = [
  { title: 'IT Infrastructure', desc: 'LAN/WAN, enterprise Wi-Fi, switching & structured cabling' },
  { title: 'Cloud Solutions', desc: 'Microsoft Azure, AWS & Google Cloud (GCP) migrations' },
  { title: 'Cybersecurity', desc: 'Next-Gen Firewalls, Endpoint Defense, SOC & Vulnerability Audits' },
  { title: 'Managed IT Services', desc: 'Dedicated engineers, SLA helpdesk & 24x7 monitoring' },
  { title: 'NOC / SOC / TAC', desc: 'Proactive network, security & tech assistance centers' },
  { title: 'AI & Business Applications', desc: 'AI workflow automation, analytics & intelligent bots' },
  { title: 'CRM / ERP Solutions', desc: 'Custom enterprise resource planning & customer platforms' },
  { title: 'WhatsApp Automation', desc: 'Official WhatsApp Business API, CRM sync & bots' },
  { title: 'Custom Software Development', desc: 'Scalable web apps, portals & cloud-native backends' },
];

export const industriesList = [
  { name: 'Startups', desc: 'Agile cloud architecture & growth security' },
  { name: 'SMBs', desc: 'Managed IT, network & modern workplace' },
  { name: 'Enterprises', desc: '24x7 NOC/SOC, multi-cloud & SLA AMC' },
  { name: 'Manufacturing', desc: 'Plant floor IoT, biometric gates & CCTV' },
  { name: 'Healthcare', desc: 'HIPAA compliance, patient Wi-Fi & server DR' },
  { name: 'Hospitality', desc: 'Guest Wi-Fi, room automation & surveillance' },
  { name: 'Retail', desc: 'POS networking, inventory tracking & security' },
  { name: 'Education', desc: 'Campus-wide Wi-Fi, smart boards & lab IT' },
  { name: 'BFSI', desc: 'Banking-grade cybersecurity & disaster recovery' },
  { name: 'Government', desc: 'High-security networks & compliant IT infrastructure' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'divisions' | 'industries' | 'menu'>('divisions');

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100/90 bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(14,165,233,0.08)] transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main"
          className="relative flex h-16 sm:h-[68px] items-center justify-between gap-4"
        >
          {/* Brand Logo */}
          <Logo showTagline={false} />

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 xl:gap-2 lg:flex">
            
            {/* Home Link */}
            <li>
              <Link
                href="#top"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                Home
              </Link>
            </li>

            {/* Division 1: Device Care Dropdown */}
            <li className="group/mm relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-10 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 group-hover/mm:bg-sky-50 group-hover/mm:text-sky-800 group-focus-within/mm:bg-sky-50 group-focus-within/mm:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Device Care</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover/mm:rotate-180 group-focus-within/mm:rotate-180" />
              </button>

              <div 
                role="region"
                aria-label="Device Care Dropdown"
                className="invisible absolute top-full left-1/2 z-40 mt-1.5 w-[36rem] -translate-x-1/2 translate-y-2 rounded-3xl border border-sky-100 bg-white p-5 opacity-0 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.2)] transition-[opacity,translate,visibility] duration-200 ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 motion-reduce:transition-none"
              >
                <div className="mb-3 flex items-center justify-between border-b border-sky-100 pb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-sky-800 uppercase">
                    Device Care &bull; Individuals &amp; Businesses
                  </span>
                  <Link href="#divisions" className="text-[11px] font-bold text-sky-600 hover:text-sky-800">
                    View Division &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {deviceCareServices.map((service) => (
                    <Link
                      key={service.title}
                      href="#divisions"
                      className="group/item block rounded-xl p-2.5 transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50 outline-none"
                    >
                      <span className="block text-xs font-bold text-slate-900 group-hover/item:text-[#0a2a66] transition-colors truncate">
                        {service.title}
                      </span>
                      <span className="block text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                        {service.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Division 2: Home Automation Dropdown */}
            <li className="group/mm relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-10 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 group-hover/mm:bg-sky-50 group-hover/mm:text-sky-800 group-focus-within/mm:bg-sky-50 group-focus-within/mm:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Home Automation</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover/mm:rotate-180 group-focus-within/mm:rotate-180" />
              </button>

              <div 
                role="region"
                aria-label="Home Automation Dropdown"
                className="invisible absolute top-full left-1/2 z-40 mt-1.5 w-[38rem] -translate-x-1/2 translate-y-2 rounded-3xl border border-sky-100 bg-white p-5 opacity-0 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.2)] transition-[opacity,translate,visibility] duration-200 ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 motion-reduce:transition-none"
              >
                <div className="mb-3 flex items-center justify-between border-b border-sky-100 pb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-800 uppercase">
                    Home Automation &bull; Smart &amp; Connected Living
                  </span>
                  <Link href="#divisions" className="text-[11px] font-bold text-sky-600 hover:text-sky-800">
                    View Division &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {homeAutomationServices.map((service) => (
                    <Link
                      key={service.title}
                      href="#divisions"
                      className="group/item block rounded-xl p-2.5 transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50 outline-none"
                    >
                      <span className="block text-xs font-bold text-slate-900 group-hover/item:text-[#0a2a66] transition-colors truncate">
                        {service.title}
                      </span>
                      <span className="block text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                        {service.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Division 3: Business Solutions Dropdown */}
            <li className="group/mm relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-10 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 group-hover/mm:bg-sky-50 group-hover/mm:text-sky-800 group-focus-within/mm:bg-sky-50 group-focus-within/mm:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Business Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover/mm:rotate-180 group-focus-within/mm:rotate-180" />
              </button>

              <div 
                role="region"
                aria-label="Business Solutions Dropdown"
                className="invisible absolute top-full left-1/2 z-40 mt-1.5 w-[38rem] -translate-x-1/2 translate-y-2 rounded-3xl border border-sky-100 bg-white p-5 opacity-0 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.2)] transition-[opacity,translate,visibility] duration-200 ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 motion-reduce:transition-none"
              >
                <div className="mb-3 flex items-center justify-between border-b border-sky-100 pb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-indigo-800 uppercase">
                    Enterprise IT &bull; Cloud, Cyber &amp; AI Transformation
                  </span>
                  <Link href="#divisions" className="text-[11px] font-bold text-sky-600 hover:text-sky-800">
                    View Division &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {businessSolutionsServices.map((service) => (
                    <Link
                      key={service.title}
                      href="#divisions"
                      className="group/item block rounded-xl p-2.5 transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50 outline-none"
                    >
                      <span className="block text-xs font-bold text-slate-900 group-hover/item:text-[#0a2a66] transition-colors truncate">
                        {service.title}
                      </span>
                      <span className="block text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                        {service.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li className="group/mm relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-10 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 group-hover/mm:bg-sky-50 group-hover/mm:text-sky-800 group-focus-within/mm:bg-sky-50 group-focus-within/mm:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Industries</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover/mm:rotate-180 group-focus-within/mm:rotate-180" />
              </button>

              <div 
                role="region"
                aria-label="Industries Dropdown"
                className="invisible absolute top-full left-1/2 z-40 mt-1.5 grid w-[26rem] -translate-x-1/2 translate-y-2 grid-cols-2 gap-1.5 rounded-3xl border border-sky-100 bg-white p-4 opacity-0 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.2)] transition-[opacity,translate,visibility] duration-200 ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 motion-reduce:transition-none"
              >
                {industriesList.map((ind) => (
                  <Link
                    key={ind.name}
                    href="#industries"
                    className="rounded-2xl p-2.5 outline-none transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50"
                  >
                    <span className="block text-xs font-bold text-slate-900">{ind.name}</span>
                    <span className="mt-0.5 block text-[11px] text-slate-500 truncate">{ind.desc}</span>
                  </Link>
                ))}
              </div>
            </li>

            {/* Direct Links */}
            <li>
              <Link
                href="#why-us"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                Contact Us
              </Link>
            </li>

          </ul>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:+914446030632"
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#0a2a66] hover:bg-sky-50 border border-slate-200/80 transition-colors whitespace-nowrap"
              aria-label="Call TSK OneIT at 044 46030632"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              <span>044 46030632</span>
            </a>

            {/* Primary Standout CTA matching Brief: Book a Free Technology Consultation */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-black tracking-wide text-[#0b1b3a] bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-md shadow-amber-500/20 transition-all whitespace-nowrap"
            >
              <span>FREE CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0b1b3a]" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-black text-[#0b1b3a] bg-[#ffdd00] rounded-xl transition-all shadow-sm inline-flex items-center gap-1"
            >
              <span>Consultation</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              className="p-2 rounded-full text-slate-700 hover:bg-sky-50 hover:text-sky-800 transition-colors border border-sky-100"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </nav>
      </div>

      {/* CodeFronts Glassmorphism Responsive Sidepanel (tsm-10) */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[100] h-dvh w-screen bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="fixed inset-y-0 right-0 h-dvh max-w-sm w-[90vw] sm:w-[380px] bg-[#071329]/95 supports-[backdrop-filter:blur(1px)]:bg-[#071329]/85 backdrop-blur-2xl backdrop-saturate-180 border-l border-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),-12px_0_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile Navigation Sidebar"
          >
            {/* Drifting Ambient Glowing Blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-12 -left-10 size-64 rounded-full bg-violet-600/40 opacity-70 blur-[64px] animate-tsm10-drift-a motion-reduce:animate-none" />
              <div className="absolute top-[45%] -right-12 size-56 rounded-full bg-sky-500/40 opacity-70 blur-[64px] animate-tsm10-drift-b motion-reduce:animate-none" />
              <div className="absolute -bottom-10 left-10 size-60 rounded-full bg-emerald-500/35 opacity-60 blur-[64px] animate-tsm10-drift-c motion-reduce:animate-none" />
            </div>

            {/* Sidebar Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
              <div>
                <p className="text-sm font-black tracking-tight text-white">TSK OneIT</p>
                <p className="text-[10px] font-mono text-cyan-300/80">Repair. Connect. Secure. Transform.</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Tabs */}
            <div className="px-5 pt-3">
              <div className="grid grid-cols-3 p-1 bg-white/5 border border-white/10 rounded-xl text-center">
                <button
                  type="button"
                  onClick={() => setMobileSection('divisions')}
                  className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                    mobileSection === 'divisions'
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Divisions
                </button>
                <button
                  type="button"
                  onClick={() => setMobileSection('industries')}
                  className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                    mobileSection === 'industries'
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Industries
                </button>
                <button
                  type="button"
                  onClick={() => setMobileSection('menu')}
                  className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                    mobileSection === 'menu'
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Quick Links
                </button>
              </div>
            </div>

            {/* Mobile Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {mobileSection === 'divisions' && (
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs font-bold text-sky-300">1. Device Care</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Laptop, MacBook, Chip-Level &amp; Data Recovery</p>
                    <Link
                      href="#divisions"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-white"
                    >
                      <span>Explore Services &rarr;</span>
                    </Link>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs font-bold text-amber-300">2. Home Automation</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Smart Lighting, CCTV, Door Locks &amp; Mesh Wi-Fi</p>
                    <Link
                      href="#divisions"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-white"
                    >
                      <span>Explore Services &rarr;</span>
                    </Link>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs font-bold text-indigo-300">3. Business Solutions</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Cloud (Azure/AWS/GCP), Cybersecurity, NOC/SOC &amp; AI</p>
                    <Link
                      href="#divisions"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-white"
                    >
                      <span>Explore Services &rarr;</span>
                    </Link>
                  </div>
                </div>
              )}

              {mobileSection === 'industries' && (
                <div className="space-y-1.5">
                  {industriesList.map((ind) => (
                    <Link
                      key={ind.name}
                      href="#industries"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-white/12 hover:bg-white/8 transition-all"
                    >
                      <div>
                        <p className="text-xs font-bold text-white/90">{ind.name}</p>
                        <p className="text-[10px] text-white/50">{ind.desc}</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    </Link>
                  ))}
                </div>
              )}

              {mobileSection === 'menu' && (
                <div className="space-y-2">
                  <Link
                    href="#top"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs"
                  >
                    <span>Home</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>
                  <Link
                    href="#divisions"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs"
                  >
                    <span>3 Core Specialized Divisions</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>
                  <Link
                    href="#why-us"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs"
                  >
                    <span>Why Choose TSK OneIT (20+ Yrs Exp)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs"
                  >
                    <span>Contact &amp; Experience Lounge</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-5 border-t border-white/12 bg-black/40 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+914446030632"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/15 bg-white/10 text-white font-bold text-xs hover:bg-white/15 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                  <span>044 46030632</span>
                </a>

                <a
                  href="https://wa.me/919150843991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 font-bold text-xs hover:bg-emerald-500/25 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#ffdd00] text-[#0b1b3a] font-black text-xs shadow-md hover:brightness-105 transition-all"
              >
                <span>Free Technology Consultation &rarr;</span>
              </Link>
            </div>

          </aside>
        </div>
      )}
    </header>
  );
}
