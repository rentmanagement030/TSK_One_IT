'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Contrast, 
  User, 
  Globe,
  CheckCircle2,
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [fontSizeIndex, setFontSizeIndex] = useState(1); // 0 = A-, 1 = A, 2 = A+
  const [highContrast, setHighContrast] = useState(false);

  // Toggle drawer body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const adjustFontSize = (level: number) => {
    setFontSizeIndex(level);
    const htmlEl = document.documentElement;
    if (level === 0) htmlEl.style.fontSize = '14px';
    if (level === 1) htmlEl.style.fontSize = '16px';
    if (level === 2) htmlEl.style.fontSize = '18px';
  };

  return (
    <>
      {/* 1. TOP UTILITY & ACCESSIBILITY BAR (Dark Navy Bar from Reference) */}
      <div className="bg-[#070e1c] text-slate-300 text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919150843991" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <PhoneCall className="size-3.5 text-amber-400" />
              <span>+91 91508 43991</span>
            </a>

            <a 
              href="mailto:info@tskoneit.com" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="size-3.5 text-amber-400" />
              <span>info@tskoneit.com</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="size-3.5 text-amber-400" />
              <span>Anna Salai, Chennai, India</span>
            </div>
          </div>

          {/* Right: Accessibility Controls */}
          <div className="flex items-center gap-2">
            <a
              href="#main-content"
              className="px-2.5 py-1 rounded bg-white/10 text-slate-200 text-[11px] font-semibold border border-white/15 hover:bg-amber-400 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
            >
              <Sparkles className="size-3 text-amber-400" />
              <span>Skip to Content</span>
            </a>

            {/* Font Sizer */}
            <div className="flex items-center rounded bg-white/10 border border-white/15 overflow-hidden text-[11px] font-bold">
              <button 
                onClick={() => adjustFontSize(0)} 
                className={`px-2 py-0.5 hover:bg-white/20 transition-colors ${fontSizeIndex === 0 ? 'bg-sky-500 text-white' : ''}`}
                title="Decrease font size"
              >
                A-
              </button>
              <button 
                onClick={() => adjustFontSize(1)} 
                className={`px-2 py-0.5 border-x border-white/15 hover:bg-white/20 transition-colors ${fontSizeIndex === 1 ? 'bg-sky-500 text-white' : ''}`}
                title="Default font size"
              >
                A
              </button>
              <button 
                onClick={() => adjustFontSize(2)} 
                className={`px-2 py-0.5 hover:bg-white/20 transition-colors ${fontSizeIndex === 2 ? 'bg-sky-500 text-white' : ''}`}
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Contrast Toggle */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="size-7 rounded bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 text-slate-200 transition-colors"
              title="Toggle High Contrast"
              aria-label="Toggle High Contrast"
            >
              <Contrast className="size-3.5" />
            </button>

            {/* Accessibility Icon */}
            <button
              className="size-7 rounded bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 text-slate-200 transition-colors"
              title="Accessibility Tools"
              aria-label="Accessibility Tools"
            >
              <User className="size-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR WITH ANGLED BLUE SLANT (Exact Avuetech Reference Layout) */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Angled Blue Brand Block */}
            <div className="flex items-center h-full">
              <Link
                href="#top"
                className="group relative flex items-center h-full bg-[#1e40af] text-white px-5 sm:px-8 [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] pr-10 sm:pr-14 transition-colors hover:bg-[#1d4ed8]"
              >
                <div className="flex items-center gap-3">
                  {/* Delta Tech Logo Icon */}
                  <div className="relative size-8 sm:size-9 flex items-center justify-center">
                    <svg className="size-full text-white" viewBox="0 0 32 32" fill="currentColor">
                      <polygon points="16,2 30,28 2,28" stroke="currentColor" strokeWidth="2" fill="none" />
                      <polygon points="16,8 26,26 6,26" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Brand Typography */}
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-black tracking-wider uppercase leading-tight font-sans text-white">
                      TSK ONE<span className="text-cyan-300">IT</span>
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-cyan-200/80 uppercase -mt-0.5">
                      INSPIRED BY YOU
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links (Clean & Direct) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="#top"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#divisions"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                Divisions
              </Link>
              <Link
                href="#digital-transformation"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#industries"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                Industries
              </Link>
              <Link
                href="#amc"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                AMC Support
              </Link>
              <Link
                href="#why-us"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#contact"
                className="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right: Gold CTA & Round Blue Hamburger Trigger (Matching Avuetech Exactly) */}
            <div className="flex items-center gap-3">
              {/* Yellow/Gold "Get A Quote" Button */}
              <Link
                href="#contact"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap"
              >
                Get A Quote
              </Link>

              {/* Round Blue Hamburger Trigger Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open full-screen navigation menu"
                aria-expanded={isDrawerOpen}
                className="size-10 sm:size-11 rounded-full bg-[#0a2558] hover:bg-[#1e40af] text-white flex items-center justify-center transition-all shadow-md hover:scale-105"
              >
                <Menu className="size-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 3. FULL-SCREEN SPLIT DRAWER MENU (Exact Avuetech Slide 3 Layout) */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-[100] h-dvh w-screen bg-black/70 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div 
            className="fixed inset-0 flex flex-col lg:flex-row h-full w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Left Panel: Royal Blue Menu List (70% Width on Desktop) */}
            <div className="relative w-full lg:w-[68%] h-full bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#0f2761] text-white p-6 sm:p-12 lg:p-16 flex flex-col justify-between overflow-y-auto">
              
              {/* Top Left Logo in Drawer */}
              <div className="flex items-center justify-between pb-8">
                <div className="flex items-center gap-3">
                  <div className="size-9 text-white">
                    <svg className="size-full text-white" viewBox="0 0 32 32" fill="currentColor">
                      <polygon points="16,2 30,28 2,28" stroke="currentColor" strokeWidth="2" fill="none" />
                      <polygon points="16,8 26,26 6,26" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black tracking-wider uppercase text-white">
                      TSK ONE<span className="text-cyan-300">IT</span>
                    </p>
                    <p className="text-[10px] font-mono tracking-widest text-cyan-200/80 uppercase">
                      INSPIRED BY YOU
                    </p>
                  </div>
                </div>

                {/* Mobile-only Close button on left panel */}
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  aria-label="Close menu"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* Big Vertical Navigation Items */}
              <nav className="space-y-4 my-auto py-6">
                
                {/* 1. Home */}
                <div>
                  <Link
                    href="#top"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white hover:translate-x-2 transition-all block"
                  >
                    Home
                  </Link>
                </div>

                {/* 2. Company / About Us */}
                <div>
                  <Link
                    href="#why-us"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white hover:translate-x-2 transition-all block"
                  >
                    Company
                  </Link>
                </div>

                {/* 3. Services (Expandable) */}
                <div>
                  <button
                    onClick={() => toggleSection('services')}
                    className="w-full flex items-center justify-between text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white text-left transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`size-6 text-cyan-300 transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedSection === 'services' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 pl-4 border-l-2 border-cyan-400/40 my-2">
                      <Link 
                        href="#divisions" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        💻 Device Care &amp; Chip-Level Repairs
                      </Link>
                      <Link 
                        href="#divisions" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        🏠 Home Automation &amp; Smart Living
                      </Link>
                      <Link 
                        href="#divisions" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        🏢 Business Solutions &amp; Cloud IT
                      </Link>
                      <Link 
                        href="#digital-transformation" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        ⚡ Digital Transformation Grid
                      </Link>
                    </div>
                  )}
                </div>

                {/* 4. Solutions (Expandable) */}
                <div>
                  <button
                    onClick={() => toggleSection('solutions')}
                    className="w-full flex items-center justify-between text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white text-left transition-colors"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`size-6 text-cyan-300 transition-transform ${expandedSection === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedSection === 'solutions' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 pl-4 border-l-2 border-cyan-400/40 my-2">
                      <Link 
                        href="#divisions" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        Cloud Migrations (Azure, AWS, GCP)
                      </Link>
                      <Link 
                        href="#divisions" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        Cybersecurity &amp; 24x7 SOC
                      </Link>
                      <Link 
                        href="#divisions" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        AI &amp; WhatsApp Business Automation
                      </Link>
                      <Link 
                        href="#amc" 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white text-sm font-semibold"
                      >
                        Annual Maintenance Contracts (AMC)
                      </Link>
                    </div>
                  )}
                </div>

                {/* 5. Industries (Expandable) */}
                <div>
                  <button
                    onClick={() => toggleSection('industries')}
                    className="w-full flex items-center justify-between text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white text-left transition-colors"
                  >
                    <span>Industries</span>
                    <ChevronDown className={`size-6 text-cyan-300 transition-transform ${expandedSection === 'industries' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedSection === 'industries' && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 pl-4 border-l-2 border-cyan-400/40 my-2 text-xs">
                      {industriesList.map((ind) => (
                        <Link 
                          key={ind.name}
                          href="#industries" 
                          onClick={() => setIsDrawerOpen(false)}
                          className="p-2 rounded-lg hover:bg-white/10 text-white font-medium"
                        >
                          &bull; {ind.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 6. Products & Spares */}
                <div>
                  <Link
                    href="#divisions"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white hover:translate-x-2 transition-all block"
                  >
                    Products &amp; Spares
                  </Link>
                </div>

                {/* 7. Resources */}
                <div>
                  <Link
                    href="#why-us"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white hover:translate-x-2 transition-all block"
                  >
                    Resources
                  </Link>
                </div>

                {/* 8. Contact */}
                <div>
                  <Link
                    href="#contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white/90 hover:text-white hover:translate-x-2 transition-all block"
                  >
                    Contact
                  </Link>
                </div>

              </nav>

              {/* Tagline footer in left drawer */}
              <div className="pt-6 border-t border-white/15 text-xs font-mono text-cyan-200">
                Repair &bull; Connect &bull; Secure &bull; Transform &bull; Chennai Lounge
              </div>

            </div>

            {/* Right Panel: Dark Navy Contact & Socials (32% Width on Desktop) */}
            <div className="relative w-full lg:w-[32%] h-full bg-[#050c1a] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-l border-white/10 overflow-y-auto">
              
              {/* Close Button at Top Right */}
              <div className="flex justify-end mb-6">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close menu"
                  className="size-11 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-105"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Contact Us Block */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Contact Us
                  </h3>
                  <div className="w-10 h-0.5 bg-amber-400 mb-5" />

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <MapPin className="size-4" />
                      </div>
                      <p className="leading-relaxed">
                        1629 Anna Salai, White Lane, Chennai - 600002, Tamil Nadu, India
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                        <Mail className="size-4" />
                      </div>
                      <a href="mailto:info@tskoneit.com" className="hover:text-amber-400 transition-colors">
                        info@tskoneit.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                        <PhoneCall className="size-4" />
                      </div>
                      <a href="tel:+919150843991" className="hover:text-amber-400 font-bold transition-colors">
                        +91 91508 43991
                      </a>
                    </div>
                  </div>
                </div>

                {/* Follow Us Block */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Follow Us
                  </h3>
                  <div className="w-10 h-0.5 bg-amber-400 mb-5" />

                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="size-10 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-all hover:scale-105"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X Twitter"
                      className="size-10 rounded-xl bg-white/10 hover:bg-slate-700 flex items-center justify-center text-white transition-all hover:scale-105"
                    >
                      <span className="font-bold text-sm">𝕏</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="size-10 rounded-xl bg-white/10 hover:bg-blue-700 flex items-center justify-center text-white transition-all hover:scale-105"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="size-10 rounded-xl bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-all hover:scale-105"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom White CTA Button */}
              <div className="pt-8">
                <Link
                  href="#contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-white text-slate-900 font-extrabold text-sm shadow-xl hover:bg-amber-400 transition-all group"
                >
                  <span>Get A Quote</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
