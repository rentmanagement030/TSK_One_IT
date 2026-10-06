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

export const allServicesList = [
  {
    id: 'it-support',
    title: 'IT Support & Repairs',
    desc: 'Laptops, desktops & chip-level repairs',
    category: 'Hardware & Onsite',
  },
  {
    id: 'networking-wifi',
    title: 'Enterprise Wi-Fi & LAN',
    desc: 'SD-WAN, structured cabling & network design',
    category: 'Connectivity',
  },
  {
    id: 'servers-storage',
    title: 'Servers & Storage',
    desc: 'Virtualization, SAN/NAS & disaster recovery',
    category: 'Enterprise Compute',
  },
  {
    id: 'cctv-surveillance',
    title: 'CCTV & Surveillance',
    desc: 'IP cameras, remote monitoring & video analytics',
    category: 'Visual Security',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & SOC',
    desc: 'Next-gen firewall, endpoint security & SOC',
    category: 'Threat Defense',
  },
  {
    id: 'biometric-access',
    title: 'Biometric Access Control',
    desc: 'RFID, time attendance & visitor management',
    category: 'Access Systems',
  },
  {
    id: 'cloud-backup',
    title: 'Cloud & Backup Solutions',
    desc: 'Cloud migration, hybrid cloud & automated backup',
    category: 'Cloud Infrastructure',
  },
  {
    id: 'business-applications',
    title: 'Business Applications (CRM / ERP / AI)',
    desc: 'Custom CRM/ERP, AI apps & web development',
    category: 'Custom Software',
  },
  {
    id: 'managed-it',
    title: 'Managed IT & 24x7 NOC',
    desc: 'AMC support, dedicated engineers, NOC & TAC',
    category: '24x7 Managed Ops',
  },
  {
    id: 'smart-automation',
    title: 'Smart Home & Office Automation',
    desc: 'Smart lighting, security, door locks & scenes',
    category: 'Smart Living & Workspaces',
  },
  {
    id: 'audio-video-av',
    title: 'Audio/Video & Conference Rooms',
    desc: 'Smart boards, video walls & acoustic automation',
    category: 'Enterprise AV',
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy & Projects',
    desc: 'Turnkey IT audits, vendor mgmt & tech roadmap',
    category: 'Advisory & Execution',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<'services' | 'menu'>('services');

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
            
            {/* Mega Menu: Clean Textual 12 Services (No Numbers, No Icons) */}
            <li className="group/mm static">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-10 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 group-hover/mm:bg-sky-50 group-hover/mm:text-sky-800 group-focus-within/mm:bg-sky-50 group-focus-within/mm:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Our Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover/mm:rotate-180 group-focus-within/mm:rotate-180" />
              </button>

              {/* Clean Minimalist 3-Column Mega Panel */}
              <div 
                role="region"
                aria-label="Services Mega Menu"
                className="invisible absolute top-full left-1/2 z-40 mt-1.5 w-[min(64rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-2 rounded-3xl border border-sky-100 bg-white p-6 opacity-0 shadow-[0_30px_70px_-15px_rgba(14,165,233,0.22)] transition-[opacity,translate,visibility] duration-200 ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 motion-reduce:transition-none"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Column 1: Core IT & Hardware */}
                  <div>
                    <div className="mb-3 border-b border-sky-100 pb-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-sky-800 uppercase">
                        Core IT &amp; Hardware
                      </span>
                    </div>
                    <div className="space-y-1">
                      {allServicesList.slice(0, 4).map((service) => (
                        <Link
                          key={service.id}
                          href="#services"
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

                  {/* Column 2: Security & Software */}
                  <div>
                    <div className="mb-3 border-b border-sky-100 pb-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-emerald-800 uppercase">
                        Security &amp; Software
                      </span>
                    </div>
                    <div className="space-y-1">
                      {allServicesList.slice(4, 8).map((service) => (
                        <Link
                          key={service.id}
                          href="#services"
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

                  {/* Column 3: Managed Ops & Smart */}
                  <div>
                    <div className="mb-3 border-b border-sky-100 pb-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-indigo-800 uppercase">
                        Managed Ops &amp; Smart
                      </span>
                    </div>
                    <div className="space-y-1">
                      {allServicesList.slice(8, 12).map((service) => (
                        <Link
                          key={service.id}
                          href={service.id === 'smart-automation' || service.id === 'audio-video-av' ? '#smart-automation' : '#services'}
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

                </div>

                {/* Bottom Feasibility Check Bar */}
                <div className="mt-5 pt-4 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-sky-50/70 via-blue-50/50 to-cyan-50/70 -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-sky-500 text-white shadow-xs">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="block text-xs font-bold text-[#0b1b3a]">
                        Free Site Assessment &amp; Feasibility Check
                      </span>
                      <span className="block text-[11px] text-slate-600">
                        Zero-obligation technical survey across Chennai &amp; Tamil Nadu
                      </span>
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0a2a66] hover:bg-[#061a45] shadow-sm transition-all shrink-0"
                  >
                    <span>Book Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </li>

            {/* Dropdown 2: Solutions (No SVG Icons) */}
            <li className="group/mm relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex h-10 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 group-hover/mm:bg-sky-50 group-hover/mm:text-sky-800 group-focus-within/mm:bg-sky-50 group-focus-within/mm:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover/mm:rotate-180 group-focus-within/mm:rotate-180" />
              </button>

              <div 
                role="region"
                aria-label="Solutions Dropdown"
                className="invisible absolute top-full left-1/2 z-40 mt-1.5 grid w-[20rem] -translate-x-1/2 translate-y-2 grid-cols-2 gap-1.5 rounded-3xl border border-sky-100 bg-white p-3.5 opacity-0 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.2)] transition-[opacity,translate,visibility] duration-200 ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-[''] group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 motion-reduce:transition-none"
              >
                <Link href="#hero-heading" className="rounded-2xl p-2.5 outline-none transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50">
                  <span className="block text-xs font-bold text-slate-900">Enterprises</span>
                  <span className="mt-0.5 block text-[11px] text-slate-500">NOC, SOC &amp; SLA</span>
                </Link>

                <Link href="#hero-heading" className="rounded-2xl p-2.5 outline-none transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50">
                  <span className="block text-xs font-bold text-slate-900">Businesses</span>
                  <span className="mt-0.5 block text-[11px] text-slate-500">Workspaces &amp; IT Ops</span>
                </Link>

                <Link href="#hero-heading" className="rounded-2xl p-2.5 outline-none transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50">
                  <span className="block text-xs font-bold text-slate-900">Startups</span>
                  <span className="mt-0.5 block text-[11px] text-slate-500">Cloud &amp; Security</span>
                </Link>

                <Link href="#smart-automation" className="rounded-2xl p-2.5 outline-none transition-colors hover:bg-sky-50/80 focus-visible:bg-sky-50">
                  <span className="block text-xs font-bold text-slate-900">Homes</span>
                  <span className="mt-0.5 block text-[11px] text-slate-500">Smart Living &amp; AV</span>
                </Link>
              </div>
            </li>

            {/* Direct Navigation Links */}
            <li>
              <Link
                href="#smart-automation"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                Smart Automation
              </Link>
            </li>

            <li>
              <Link
                href="#amc"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                AMC Support
              </Link>
            </li>

            <li>
              <Link
                href="#why-us"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                Why Us
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="flex h-10 items-center rounded-full px-3.5 text-[13px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Desktop Right CTAs (Styled with tskautomations.com aesthetics) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:+914446030632"
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#0a2a66] hover:bg-sky-50 border border-slate-200/80 transition-colors whitespace-nowrap"
              aria-label="Call TSK One IT at 044 46030632"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              <span>044 46030632</span>
            </a>

            {/* Senti AI / Consultation Gradient Pill (Matching tskautomations.com) */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef] hover:brightness-110 shadow-sm transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Consultation</span>
            </Link>

            {/* LEVELUP / FREE ASSESSMENT Yellow Standout Pill (Matching tskautomations.com) */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-black tracking-wide text-[#0b1b3a] bg-[#ffdd00] hover:bg-[#ffea00] hover:brightness-105 shadow-md shadow-amber-500/20 transition-all whitespace-nowrap"
            >
              <span>FREE ASSESSMENT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0b1b3a]" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-black text-[#0b1b3a] bg-[#ffdd00] rounded-xl transition-all shadow-sm inline-flex items-center gap-1"
            >
              <span>Assessment</span>
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

      {/* CodeFronts Glassmorphism Responsive Sidepanel (tsm-10 Architecture) */}
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
                <p className="text-sm font-black tracking-tight text-white">TSK ONE IT</p>
                <p className="text-[10px] font-mono text-cyan-300/80">Smart. Secure. Connected.</p>
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

            {/* Mobile Tab Switches */}
            <div className="px-5 pt-3">
              <div className="grid grid-cols-2 p-1 bg-white/5 border border-white/10 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveMobileTab('services')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeMobileTab === 'services'
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  All Services
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMobileTab('menu')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeMobileTab === 'menu'
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Overview &amp; AMC
                </button>
              </div>
            </div>

            {/* Mobile Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {activeMobileTab === 'services' ? (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-1 pb-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Solutions Catalog
                    </span>
                  </div>

                  {allServicesList.map((service) => (
                    <Link
                      key={service.id}
                      href={service.id === 'smart-automation' || service.id === 'audio-video-av' ? '#smart-automation' : '#services'}
                      onClick={() => setIsOpen(false)}
                      className="block p-2.5 rounded-xl border border-transparent hover:border-white/12 hover:bg-white/8 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-white/90 group-hover:text-cyan-300 transition-colors truncate">
                          {service.title}
                        </p>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 transition-all shrink-0" />
                      </div>
                      <p className="text-[10px] text-white/50 truncate mt-0.5">
                        {service.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-colors"
                  >
                    <span>Our Core Services</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>

                  <Link
                    href="#smart-automation"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-colors"
                  >
                    <span>Smart Home &amp; Automation</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>

                  <Link
                    href="#amc"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-colors"
                  >
                    <span>AMC Support &amp; SLA Packages</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>

                  <Link
                    href="#why-us"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-colors"
                  >
                    <span>Why TSK One IT</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>

                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-colors"
                  >
                    <span>Anna Salai Experience Lounge</span>
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
                  <span>Call Desk</span>
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
                <span>Free Site Assessment &rarr;</span>
              </Link>
            </div>

          </aside>
        </div>
      )}
    </header>
  );
}
