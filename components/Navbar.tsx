'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  User
} from 'lucide-react';

export const deviceCareList = [
  'Laptop & Desktop Repair',
  'Apple Macbook Repair',
  'Chip Level Mother Board Repair',
  'Data Recovery',
  'SSD & RAM Upgrades',
  'Genuine Spareparts',
  'AMC',
  'Doorstep Pickup & Delivery',
];

export const homeAutomationList = [
  'Smart Home Automation',
  'CCTV',
  'Smartdoor Locks',
  'Video Door Phones',
  'Smart Lighting',
  'Home WiFi & Mesh',
  'Access Control',
  'Voice Assistants',
  'Home Cyber Security',
];

export const businessSolutionsList = [
  'IT Infrastructure',
  'Cloud Solutions (Microsoft Azure, AWS, GCP)',
  'Cybersecurity',
  'Managed IT Services',
  'NOC/SOC/TAC',
  'AI & Business Applications',
  'CRM/ERP',
  'WhatsApp Automation',
  'Custom Software Development',
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [fontSizeIndex, setFontSizeIndex] = useState(1); // 0 = A-, 1 = A, 2 = A+
  const [highContrast, setHighContrast] = useState(false);

  // Smart Visibility State: Hide on scroll down, show on scroll up or mouse hover near top
  const [isVisible, setIsVisible] = useState(true);
  const [isNearTop, setIsNearTop] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll listener for dynamic hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top of page
      if (currentScrollY <= 15) {
        setIsVisible(true);
      } 
      // Scrolling down -> Hide navbar
      else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } 
      // Scrolling up -> Reveal navbar
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Mouse movement listener to reveal navbar when cursor comes near top
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 65) {
        setIsNearTop(true);
      } else if (e.clientY > 110) {
        setIsNearTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Toggle drawer body scroll lock & ESC key listener
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

  const toggleAccordion = (name: string) => {
    setExpandedMenu(expandedMenu === name ? null : name);
  };

  const adjustFontSize = (level: number) => {
    setFontSizeIndex(level);
    const htmlEl = document.documentElement;
    if (level === 0) htmlEl.style.fontSize = '14px';
    if (level === 1) htmlEl.style.fontSize = '16px';
    if (level === 2) htmlEl.style.fontSize = '18px';
  };

  const showNavbar = isVisible || isNearTop || isDrawerOpen;

  return (
    <>
      {/* Invisible Hover Sensor Zone at the very top of screen */}
      <div 
        className="fixed top-0 left-0 right-0 h-5 z-40 pointer-events-auto"
        onMouseEnter={() => setIsNearTop(true)}
      />

      {/* Main Floating / Dynamic Header Wrapper */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
        onMouseEnter={() => setIsNearTop(true)}
      >
        {/* 1. TOP UTILITY & ACCESSIBILITY BAR (Full Screen Width) */}
        <div className="bg-[#070e1c] text-slate-300 text-xs border-b border-white/10 hidden md:block w-full">
          <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between h-10">
            
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:+919150843991" 
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors duration-200"
              >
                <PhoneCall className="size-3.5 text-amber-400" />
                <span>+91 91508 43991</span>
              </a>

              <a 
                href="mailto:info@tskoneit.com" 
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors duration-200"
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
                className="px-2.5 py-1 rounded bg-white/10 text-slate-200 text-[11px] font-semibold border border-white/15 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 inline-flex items-center gap-1 hover:scale-105"
              >
                <Sparkles className="size-3 text-amber-400" />
                <span>Skip to Content</span>
              </a>

              {/* Font Sizer */}
              <div className="flex items-center rounded bg-white/10 border border-white/15 overflow-hidden text-[11px] font-bold">
                <button 
                  onClick={() => adjustFontSize(0)} 
                  className={`px-2 py-0.5 hover:bg-white/20 transition-colors duration-150 ${fontSizeIndex === 0 ? 'bg-sky-500 text-white' : ''}`}
                  title="Decrease font size"
                >
                  A-
                </button>
                <button 
                  onClick={() => adjustFontSize(1)} 
                  className={`px-2 py-0.5 border-x border-white/15 hover:bg-white/20 transition-colors duration-150 ${fontSizeIndex === 1 ? 'bg-sky-500 text-white' : ''}`}
                  title="Default font size"
                >
                  A
                </button>
                <button 
                  onClick={() => adjustFontSize(2)} 
                  className={`px-2 py-0.5 hover:bg-white/20 transition-colors duration-150 ${fontSizeIndex === 2 ? 'bg-sky-500 text-white' : ''}`}
                  title="Increase font size"
                >
                  A+
                </button>
              </div>

              {/* Contrast Toggle */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className="size-7 rounded bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 text-slate-200 transition-all duration-200 hover:scale-105"
                title="Toggle High Contrast"
                aria-label="Toggle High Contrast"
              >
                <Contrast className="size-3.5" />
              </button>

              {/* Accessibility Icon */}
              <button
                className="size-7 rounded bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 text-slate-200 transition-all duration-200 hover:scale-105"
                title="Accessibility Tools"
                aria-label="Accessibility Tools"
              >
                <User className="size-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 2. MAIN NAVBAR WITH FULL SCREEN WIDTH FLUSH LOGO & ONLY 2 BUTTONS */}
        <header className="w-full bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-slate-100 transition-all">
          <div className="w-full flex items-center justify-between h-16 sm:h-20 pr-4 sm:pr-8 lg:pr-12">
            
            {/* Left: Angled Blue Brand Block FLUSH to the Left Edge of Screen */}
            <div className="flex items-center h-full">
              <Link
                href="#top"
                className="group relative flex items-center h-full bg-[#1e40af] text-white pl-6 sm:pl-10 lg:pl-14 pr-12 sm:pr-20 [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] transition-colors hover:bg-[#1d4ed8]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Delta Tech Logo Icon */}
                  <div className="relative size-8 sm:size-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="size-full text-white" viewBox="0 0 32 32" fill="currentColor">
                      <polygon points="16,2 30,28 2,28" stroke="currentColor" strokeWidth="2" fill="none" />
                      <polygon points="16,8 26,26 6,26" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Brand Typography */}
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-black tracking-wider uppercase leading-tight font-sans text-white">
                      TSK ONE<span className="text-cyan-300">IT</span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-200/80 uppercase -mt-0.5">
                      INSPIRED BY YOU
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right: ONLY "Get A Quote" Button & Sandwich Menu Trigger Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Yellow/Gold "Get A Quote" Button */}
              <Link
                href="#contact"
                className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                Get A Quote
              </Link>

              {/* Round Blue Sandwich / Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isDrawerOpen}
                className="size-11 sm:size-12 rounded-full bg-[#0a2558] hover:bg-[#1e40af] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-900/40 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <Menu className="size-5 sm:size-6 transition-transform duration-300 hover:rotate-90" />
              </button>
            </div>

          </div>
        </header>
      </div>

      {/* 3. FULL-SCREEN / RESPONSIVE DRAWER MENU (Scrollbar Hidden, Clean Animations) */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-[100] h-dvh w-screen bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div 
            className="fixed inset-0 flex flex-col lg:flex-row h-full w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Left Panel / Main Scrollable Container (Scrollbar Hidden with CSS) */}
            <div className="relative w-full lg:w-[68%] h-full bg-[#0d2870] text-white p-6 sm:p-10 lg:p-14 flex flex-col justify-between overflow-y-auto isolate [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              
              {/* 18% Transparent Background Photography Layer */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-[0.18] mix-blend-luminosity"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')` 
                }}
              />

              {/* Royal Blue Deep Gradient Overlay */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#123896]/95 via-[#0c266e]/90 to-[#07194d]/95"
              />

              {/* Decorative Watermark Curved Lines & Dot Grid */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 -right-24 size-[550px] rounded-full border border-white/10 opacity-40" />
                <div className="absolute -top-10 -right-10 size-[400px] rounded-full border border-white/10 opacity-40" />
                <div className="absolute -bottom-20 -left-20 size-[450px] rounded-full border border-white/10 opacity-30" />
                <div className="absolute bottom-28 right-12 w-48 h-48 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              </div>

              {/* Top Drawer Header (Mobile Close Button Only shown on mobile) */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="size-9 sm:size-10 text-white">
                    <svg className="size-full text-white" viewBox="0 0 32 32" fill="currentColor">
                      <polygon points="16,2 30,28 2,28" stroke="currentColor" strokeWidth="2" fill="none" />
                      <polygon points="16,8 26,26 6,26" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white leading-tight">
                      TSK ONE<span className="text-cyan-300">IT</span>
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-200/80 uppercase">
                      INSPIRED BY YOU
                    </p>
                  </div>
                </div>

                {/* Circular Close Button on Left Panel (ONLY VISIBLE ON MOBILE) */}
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close navigation menu"
                  className="lg:hidden size-11 sm:size-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/60 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shrink-0"
                >
                  <X className="size-6 transition-transform duration-200 hover:rotate-90" />
                </button>
              </div>

              {/* Navigation Items (Single column, Smooth Collapsible Accordions) */}
              <nav className="my-6 space-y-1">
                
                {/* 1. Home */}
                <div className="border-b border-white/10 py-3.5">
                  <Link
                    href="#top"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-amber-300 hover:translate-x-2 transition-all duration-200 block"
                  >
                    Home
                  </Link>
                </div>

                {/* 2. Device Care */}
                <div className="border-b border-white/10 py-3.5">
                  <button
                    onClick={() => toggleAccordion('device-care')}
                    className="w-full flex items-center justify-between text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-amber-300 text-left transition-colors duration-200 cursor-pointer group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Device Care</span>
                    <ChevronDown className={`size-6 text-cyan-300 transition-transform duration-300 ${expandedMenu === 'device-care' ? 'rotate-180 text-amber-300' : ''}`} />
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                      expandedMenu === 'device-care' 
                        ? 'grid-rows-[1fr] opacity-100 mt-3' 
                        : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#061845]/75 border border-white/15 backdrop-blur-md space-y-2">
                        {deviceCareList.map((item) => (
                          <Link
                            key={item}
                            href="#divisions"
                            onClick={() => setIsDrawerOpen(false)}
                            className="group/sub flex items-center gap-3 py-1.5 px-2.5 rounded-xl text-sm sm:text-base font-medium text-cyan-100 hover:text-amber-300 hover:bg-white/10 hover:translate-x-2 transition-all duration-200"
                          >
                            <span className="size-2 rounded-full bg-cyan-400 group-hover/sub:bg-amber-400 group-hover/sub:scale-125 transition-all shrink-0" />
                            <span>{item}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Home Automation */}
                <div className="border-b border-white/10 py-3.5">
                  <button
                    onClick={() => toggleAccordion('home-automation')}
                    className="w-full flex items-center justify-between text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-amber-300 text-left transition-colors duration-200 cursor-pointer group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Home Automation</span>
                    <ChevronDown className={`size-6 text-cyan-300 transition-transform duration-300 ${expandedMenu === 'home-automation' ? 'rotate-180 text-amber-300' : ''}`} />
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                      expandedMenu === 'home-automation' 
                        ? 'grid-rows-[1fr] opacity-100 mt-3' 
                        : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#061845]/75 border border-white/15 backdrop-blur-md space-y-2">
                        {homeAutomationList.map((item) => (
                          <Link
                            key={item}
                            href="#divisions"
                            onClick={() => setIsDrawerOpen(false)}
                            className="group/sub flex items-center gap-3 py-1.5 px-2.5 rounded-xl text-sm sm:text-base font-medium text-cyan-100 hover:text-amber-300 hover:bg-white/10 hover:translate-x-2 transition-all duration-200"
                          >
                            <span className="size-2 rounded-full bg-amber-400 group-hover/sub:scale-125 transition-all shrink-0" />
                            <span>{item}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Business Solutions */}
                <div className="border-b border-white/10 py-3.5">
                  <button
                    onClick={() => toggleAccordion('business-solutions')}
                    className="w-full flex items-center justify-between text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-amber-300 text-left transition-colors duration-200 cursor-pointer group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Business Solutions</span>
                    <ChevronDown className={`size-6 text-cyan-300 transition-transform duration-300 ${expandedMenu === 'business-solutions' ? 'rotate-180 text-amber-300' : ''}`} />
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                      expandedMenu === 'business-solutions' 
                        ? 'grid-rows-[1fr] opacity-100 mt-3' 
                        : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#061845]/75 border border-white/15 backdrop-blur-md space-y-2">
                        {businessSolutionsList.map((item) => (
                          <Link
                            key={item}
                            href="#divisions"
                            onClick={() => setIsDrawerOpen(false)}
                            className="group/sub flex items-center gap-3 py-1.5 px-2.5 rounded-xl text-sm sm:text-base font-medium text-cyan-100 hover:text-amber-300 hover:bg-white/10 hover:translate-x-2 transition-all duration-200"
                          >
                            <span className="size-2 rounded-full bg-indigo-400 group-hover/sub:bg-amber-400 group-hover/sub:scale-125 transition-all shrink-0" />
                            <span>{item}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. About Us */}
                <div className="border-b border-white/10 py-3.5">
                  <Link
                    href="#why-us"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-amber-300 hover:translate-x-2 transition-all duration-200 block"
                  >
                    About Us
                  </Link>
                </div>

                {/* 6. Contact Us */}
                <div className="border-b border-white/10 py-3.5">
                  <Link
                    href="#contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-2xl sm:text-3xl font-extrabold text-white/95 hover:text-amber-300 hover:translate-x-2 transition-all duration-200 block"
                  >
                    Contact Us
                  </Link>
                </div>

              </nav>

              {/* Mobile Embedded Contact & Follow Us Section */}
              <div className="lg:hidden mt-8 pt-8 border-t border-white/20 space-y-8 pb-6">
                
                {/* Mobile Contact Us */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Contact Us
                  </h3>
                  <div className="w-10 h-0.5 bg-amber-400 mb-5" />

                  <div className="space-y-4 text-xs sm:text-sm text-slate-200">
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
                      <a href="mailto:info@tskoneit.com" className="hover:text-amber-400 transition-colors duration-200">
                        info@tskoneit.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                        <PhoneCall className="size-4" />
                      </div>
                      <a href="tel:+919150843991" className="hover:text-amber-400 font-bold transition-colors duration-200">
                        +91 91508 43991
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile Follow Us */}
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
                      className="size-11 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200"
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
                      className="size-11 rounded-xl bg-white/10 hover:bg-slate-700 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <span className="font-bold text-sm">𝕏</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="size-11 rounded-xl bg-white/10 hover:bg-blue-700 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200"
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
                      className="size-11 rounded-xl bg-white/10 hover:bg-red-600 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Mobile Bottom Get A Quote CTA */}
                <div className="pt-2">
                  <Link
                    href="#contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-white text-slate-950 font-black text-sm shadow-xl hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-400 hover:shadow-amber-500/30 hover:scale-102 active:scale-98 transition-all duration-200 group"
                  >
                    <span>Get A Quote</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

              </div>

              {/* Tagline footer in left drawer (Desktop) */}
              <div className="hidden lg:block pt-6 border-t border-white/15 text-xs font-mono text-cyan-200">
                Repair &bull; Connect &bull; Secure &bull; Transform &bull; Chennai Lounge
              </div>

            </div>

            {/* Right Panel: Dark Navy Contact & Socials (Desktop Only, 32% Width) */}
            <div className="hidden lg:flex relative w-[32%] h-full bg-[#050c1a] text-white p-6 sm:p-10 lg:p-12 flex-col justify-between border-l border-white/10 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              
              {/* Close Button at Top Right (Desktop Only) */}
              <div className="flex justify-end mb-6">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close menu"
                  className="size-11 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/60 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
                >
                  <X className="size-5 transition-transform duration-200 hover:rotate-90" />
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
                      <a href="mailto:info@tskoneit.com" className="hover:text-amber-400 transition-colors duration-200">
                        info@tskoneit.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                        <PhoneCall className="size-4" />
                      </div>
                      <a href="tel:+919150843991" className="hover:text-amber-400 font-bold transition-colors duration-200">
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
                      className="size-10 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white hover:scale-115 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
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
                      className="size-10 rounded-xl bg-white/10 hover:bg-slate-700 flex items-center justify-center text-white hover:scale-115 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                      <span className="font-bold text-sm">𝕏</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="size-10 rounded-xl bg-white/10 hover:bg-blue-700 flex items-center justify-center text-white hover:scale-115 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
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
                      className="size-10 rounded-xl bg-white/10 hover:bg-red-600 flex items-center justify-center text-white hover:scale-115 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
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
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-white text-slate-950 font-black text-sm shadow-xl hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-400 hover:shadow-amber-500/30 hover:scale-102 active:scale-98 transition-all duration-200 group"
                >
                  <span>Get A Quote</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
