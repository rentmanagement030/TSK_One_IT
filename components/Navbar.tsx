'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export interface ServiceItem {
  name: string;
  href: string;
}

export interface ServiceSubCategory {
  title: string;
  href: string;
  items: ServiceItem[];
}

export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  href: string;
  footerText: string;
  footerCta: string;
  subCategories: ServiceSubCategory[];
}

export const serviceHierarchy: ServiceDivision[] = [
  {
    id: 'device-care',
    number: '01',
    title: 'IT Device Care',
    href: '/device-repair-and-maintenance',
    footerText: 'Free doorstep pickup, diagnosis & genuine parts in Chennai',
    footerCta: 'Book Device Repair →',
    subCategories: [
      {
        title: 'Device Repair & Maintenance',
        href: '/device-repair-and-maintenance',
        items: [
          { name: 'Laptop & Desktop Repair', href: '/service/laptop-and-desktop-repair' },
          { name: 'Apple MacBook Repair', href: '/service/apple-macbook-repair' },
          { name: 'Chip-Level Motherboard Repair', href: '/service/chip-level-motherboard-repair' },
          { name: 'Data Recovery', href: '/service/data-recovery' },
          { name: 'SSD & RAM Upgrades', href: '/service/ssd-and-ram-upgrades' },
          { name: 'Genuine Spare Parts', href: '/service/genuine-spare-parts' },
        ],
      },
      {
        title: 'IT Support Services',
        href: '/it-support-services',
        items: [
          { name: 'AMC / Annual Maintenance Contracts', href: '/service/amc-annual-maintenance-contracts' },
          { name: 'Doorstep Pickup & Delivery', href: '/service/doorstep-pickup-and-delivery' },
          { name: 'IT Troubleshooting', href: '/service/it-troubleshooting' },
          { name: 'Managed Device Support', href: '/service/managed-device-support' },
        ],
      },
    ],
  },
  {
    id: 'home-automation',
    number: '02',
    title: 'Home Automation',
    href: '/smart-home',
    footerText: 'Smart villa & apartment automation design and installation',
    footerCta: 'Book Free Site Visit →',
    subCategories: [
      {
        title: 'Smart Home',
        href: '/smart-home',
        items: [
          { name: 'Smart Lighting', href: '/service/smart-lighting' },
          { name: 'Voice Assistants', href: '/service/voice-assistants' },
          { name: 'Home Wi-Fi & Mesh', href: '/service/home-wi-fi-and-mesh' },
          { name: 'Smart Home Automation', href: '/service/smart-home-automation' },
        ],
      },
      {
        title: 'Home Security',
        href: '/home-security',
        items: [
          { name: 'CCTV Surveillance', href: '/service/cctv-surveillance' },
          { name: 'Smart Door Locks', href: '/service/smart-door-locks' },
          { name: 'Video Door Phones', href: '/service/video-door-phones' },
          { name: 'Access Control', href: '/service/access-control' },
          { name: 'Home Cyber Security', href: '/service/home-cyber-security' },
        ],
      },
    ],
  },
  {
    id: 'business-solutions',
    number: '03',
    title: 'Business Solutions',
    href: '/it-infrastructure-and-cloud',
    footerText: 'Enterprise AMC, Cloud architecture & Custom ERP consultation',
    footerCta: 'Get Enterprise Proposal →',
    subCategories: [
      {
        title: 'IT Infrastructure & Cloud',
        href: '/it-infrastructure-and-cloud',
        items: [
          { name: 'IT Infrastructure', href: '/service/it-infrastructure' },
          { name: 'Cloud Solutions (Azure, AWS, GCP)', href: '/service/cloud-solutions' },
          { name: 'Managed IT Services', href: '/service/managed-it-services' },
          { name: 'NOC / SOC / TAC', href: '/service/noc-soc-tac' },
          { name: 'Cybersecurity', href: '/service/cybersecurity' },
        ],
      },
      {
        title: 'Software & AI',
        href: '/software-and-ai',
        items: [
          { name: 'AI & Business Applications', href: '/service/ai-and-business-applications' },
          { name: 'CRM / ERP', href: '/service/crm-erp' },
          { name: 'WhatsApp Automation', href: '/service/whatsapp-automation' },
          { name: 'Custom Software Development', href: '/service/custom-software-development' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedDivision, setExpandedDivision] = useState<string | null>('device-care');
  const [isVisible, setIsVisible] = useState(true);
  const [isNearTop, setIsNearTop] = useState(true);
  const lastScrollY = useRef(0);
  const isTicking = useRef(false);
  const lastVisibleRef = useRef(true);
  const lastNearTopRef = useRef(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // High-Performance RAF Scroll listener for smooth 60fps scrolling
  useEffect(() => {
    const onScroll = () => {
      if (!isTicking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const nextNearTop = currentScrollY < 40;

          if (nextNearTop !== lastNearTopRef.current) {
            setIsNearTop(nextNearTop);
            lastNearTopRef.current = nextNearTop;
          }

          let nextVisible = lastVisibleRef.current;
          if (nextNearTop) {
            nextVisible = true;
          } else if (currentScrollY > lastScrollY.current + 15) {
            nextVisible = false;
          } else if (currentScrollY < lastScrollY.current - 15) {
            nextVisible = true;
          }

          if (nextVisible !== lastVisibleRef.current) {
            setIsVisible(nextVisible);
            lastVisibleRef.current = nextVisible;
            if (!nextVisible) {
              setActiveDropdown(null);
            }
          }

          lastScrollY.current = currentScrollY;
          isTicking.current = false;
        });
        isTicking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleServiceClick = (_serviceName?: string) => {
    setActiveDropdown(null);
    setIsDrawerOpen(false);
  };

  const openQuoteModal = () => {
    setIsDrawerOpen(false);
    setActiveDropdown(null);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service: 'General Consultation / Free Site Assessment' } }));
    }
  };

  const showNavbar = isVisible || isNearTop || isDrawerOpen;

  return (
    <>
      {/* Top Hover Sensor Zone */}
      <div 
        className="fixed top-0 left-0 right-0 h-4 z-40 pointer-events-auto"
        onMouseEnter={() => setIsNearTop(true)}
      />

      {/* Main Header */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
        onMouseEnter={() => setIsNearTop(true)}
      >
        <header className="w-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border-b border-slate-200/90 relative">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-15 sm:h-16">
            
            {/* Left: Official Brand Logo */}
            <Link 
              href="/" 
              className="flex items-center group focus:outline-none shrink-0"
              aria-label="TSK One IT - Home"
            >
              <div className="relative h-11 sm:h-12 w-36 sm:w-44 flex items-center justify-start shrink-0">
                <Image
                  src={CLOUDINARY_IMAGES.logo}
                  alt="TSK One IT Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </Link>

            {/* Center Navigation: IT Device Care, Home Automation, Business Solutions */}
            <nav aria-label="Desktop primary navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
              
              {serviceHierarchy.map((div) => {
                const isOpen = activeDropdown === div.id;

                return (
                  <div 
                    key={div.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(div.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Top Level Nav Button */}
                    <Link
                      href={div.href}
                      className={`flex items-center gap-1.5 text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wide transition-colors py-5 cursor-pointer ${
                        isOpen ? 'text-[#0284c7]' : 'text-slate-800 hover:text-[#0284c7]'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{div.title}</span>
                      <ChevronDown className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0284c7]' : 'text-slate-500'}`} />
                    </Link>

                    {/* Exact Screenshot UI: Clean Multi-Column Mega Menu Panel */}
                    <div 
                      className={`fixed left-0 right-0 top-full mt-0 w-full bg-white shadow-2xl border-b border-slate-200 transition-all duration-200 z-50 ${
                        isOpen 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
                        <div className={`grid gap-8 lg:gap-12 ${
                          div.subCategories.length >= 4 
                            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                            : div.subCategories.length === 3 
                              ? 'grid-cols-1 md:grid-cols-3' 
                              : 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                        }`}>
                          {div.subCategories.map((subCat) => (
                            <div key={subCat.title} className="flex flex-col">
                              {/* Bold Category Header */}
                              <Link
                                href={subCat.href}
                                onClick={() => setActiveDropdown(null)}
                                className="text-[16px] sm:text-[17px] font-bold text-slate-900 hover:text-[#0284c7] transition-colors mb-4 tracking-tight block"
                              >
                                {subCat.title}
                              </Link>

                              {/* Clean Text Links List */}
                              <ul className="space-y-1.5 flex-1">
                                {subCat.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      onClick={() => handleServiceClick(item.name)}
                                      className="text-[13px] sm:text-[13.5px] text-slate-500 hover:text-[#0284c7] transition-colors font-normal leading-[2] block"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </nav>

            {/* Right: Contact & Get Quote Button */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              
              {/* Contact Link */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs xl:text-sm font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#0284c7] transition-colors px-2 py-1"
              >
                <PhoneCall className="size-3.5 text-[#0284c7]" />
                <span>Contact</span>
              </Link>

              {/* Standout "Get Quote" Button */}
              <button
                type="button"
                onClick={openQuoteModal}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black text-xs sm:text-[13px] uppercase tracking-wider shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get Quote
              </button>

              {/* Mobile Hamburger Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
              >
                <Menu className="size-5" />
              </button>

            </div>

          </div>
        </header>
      </div>

      {/* MOBILE RESPONSIVE DRAWER */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden animate-fadeIn" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-[88vw] max-w-md bg-white shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsDrawerOpen(false)}
                  className="relative h-10 w-36 flex items-center justify-start"
                >
                  <Image
                    src={CLOUDINARY_IMAGES.logo}
                    alt="TSK One IT Logo"
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-4 space-y-4">
                
                {/* 3 Divisions Accordion */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                    SERVICES &amp; SOLUTIONS
                  </span>

                  {serviceHierarchy.map((div) => {
                    const isExpanded = expandedDivision === div.id;

                    return (
                      <div key={div.id} className="rounded-xl border border-slate-100 overflow-hidden bg-slate-50/50">
                        <button
                          type="button"
                          onClick={() => setExpandedDivision(isExpanded ? null : div.id)}
                          className="w-full flex items-center justify-between p-3.5 text-left font-black text-xs uppercase tracking-wider text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          <span>{div.title}</span>
                          <ChevronDown className={`size-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isExpanded && (
                          <div className="p-3.5 pt-0 space-y-4 border-t border-slate-100 bg-white">
                            <Link
                              href={div.href}
                              onClick={() => setIsDrawerOpen(false)}
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#0284c7] pt-2 hover:underline"
                            >
                              <span>Explore all {div.title}</span>
                              <ArrowRight className="size-3" />
                            </Link>

                            {div.subCategories.map((subCat) => (
                              <div key={subCat.title} className="space-y-1.5 pt-1">
                                <Link
                                  href={subCat.href}
                                  onClick={() => setIsDrawerOpen(false)}
                                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 hover:text-[#0284c7] flex items-center justify-between py-0.5"
                                >
                                  <span>{subCat.title}</span>
                                  <ChevronRight className="size-3 text-slate-400" />
                                </Link>

                                <div className="grid grid-cols-1 gap-1 pl-2.5 border-l-2 border-slate-100">
                                  {subCat.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => handleServiceClick(item.name)}
                                      className="text-xs text-slate-600 hover:text-[#0284c7] py-1 font-medium block"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Contact */}
                <div className="border-t border-slate-100 pt-3">
                  <Link
                    href="/contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="block text-sm font-extrabold uppercase text-slate-900 hover:text-[#0284c7] transition-colors py-1"
                  >
                    CONTACT
                  </Link>
                </div>

              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2.5">
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
              >
                <span>Get Quote</span>
                <ArrowRight className="size-3.5" />
              </button>

              <a
                href="tel:+919150843991"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                <PhoneCall className="size-3 text-[#0284c7]" />
                <span>Call: +91 91508 43991</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
