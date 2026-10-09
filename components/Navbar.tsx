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
  ArrowRight, 
  ArrowUpRight 
} from 'lucide-react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export interface ServiceItem {
  name: string;
  href: string;
  image: string;
}

export interface ServiceSubCategory {
  title: string;
  href: string;
  image: string;
  items: ServiceItem[];
}

export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  href: string;
  badgeColor: string;
  accentColor: string;
  subCategories: ServiceSubCategory[];
  footerText: string;
  footerCta: string;
}

export const serviceHierarchy: ServiceDivision[] = [
  {
    id: 'device-care',
    number: '01',
    title: 'IT Device Care',
    href: '/device-care',
    badgeColor: 'text-sky-600 bg-sky-50 border-sky-200',
    accentColor: '#0284c7',
    footerText: 'Free doorstep pickup, diagnosis & genuine parts in Chennai',
    footerCta: 'Book Device Repair →',
    subCategories: [
      {
        title: 'Device Repair & Maintenance',
        href: '/device-repair-and-maintenance',
        image: CLOUDINARY_IMAGES.bannerDeviceRepair,
        items: [
          { 
            name: 'Laptop & Desktop Repair', 
            href: '/device-repair-and-maintenance',
            image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Apple MacBook Repair', 
            href: '/device-repair-and-maintenance',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Chip-Level Motherboard Repair', 
            href: '/device-repair-and-maintenance',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Data Recovery', 
            href: '/device-repair-and-maintenance',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'SSD & RAM Upgrades', 
            href: '/device-repair-and-maintenance',
            image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Genuine Spare Parts', 
            href: '/device-repair-and-maintenance',
            image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=300&q=80',
          },
        ],
      },
      {
        title: 'IT Support Services',
        href: '/it-support-services',
        image: CLOUDINARY_IMAGES.bannerItSupport,
        items: [
          { 
            name: 'AMC / Annual Maintenance Contracts', 
            href: '/it-support-services',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Doorstep Pickup & Delivery', 
            href: '/it-support-services',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'IT Troubleshooting', 
            href: '/it-support-services',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Managed Device Support', 
            href: '/it-support-services',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80',
          },
        ],
      },
    ],
  },
  {
    id: 'home-automation',
    number: '02',
    title: 'Home Automation',
    href: '/home-automation',
    badgeColor: 'text-amber-600 bg-amber-50 border-amber-200',
    accentColor: '#d97706',
    footerText: 'Smart villa & apartment automation design and installation',
    footerCta: 'Book Free Site Visit →',
    subCategories: [
      {
        title: 'Smart Home',
        href: '/smart-home',
        image: CLOUDINARY_IMAGES.bannerSmartHome,
        items: [
          { 
            name: 'Smart Lighting', 
            href: '/smart-home',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Voice Assistants', 
            href: '/smart-home',
            image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Home Wi-Fi & Mesh', 
            href: '/smart-home',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Smart Home Automation', 
            href: '/smart-home',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=300&q=80',
          },
        ],
      },
      {
        title: 'Home Security',
        href: '/home-security',
        image: CLOUDINARY_IMAGES.bannerHomeSecurity,
        items: [
          { 
            name: 'CCTV Surveillance', 
            href: '/home-security',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Smart Door Locks', 
            href: '/home-security',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Video Door Phones', 
            href: '/home-security',
            image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Access Control', 
            href: '/home-security',
            image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Home Cyber Security', 
            href: '/home-security',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80',
          },
        ],
      },
    ],
  },
  {
    id: 'business-solutions',
    number: '03',
    title: 'Business Solutions',
    href: '/business-solutions',
    badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    accentColor: '#4f46e5',
    footerText: 'Enterprise AMC, Cloud architecture & Custom ERP consultation',
    footerCta: 'Get Enterprise Proposal →',
    subCategories: [
      {
        title: 'IT Infrastructure & Cloud',
        href: '/it-infrastructure-and-cloud',
        image: CLOUDINARY_IMAGES.bannerItInfrastructure,
        items: [
          { 
            name: 'IT Infrastructure', 
            href: '/it-infrastructure-and-cloud',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Cloud Solutions (Azure, AWS, GCP)', 
            href: '/it-infrastructure-and-cloud',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Managed IT Services', 
            href: '/it-infrastructure-and-cloud',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'NOC / SOC / TAC', 
            href: '/it-infrastructure-and-cloud',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Cybersecurity', 
            href: '/it-infrastructure-and-cloud',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80',
          },
        ],
      },
      {
        title: 'Software & AI',
        href: '/software-and-ai',
        image: CLOUDINARY_IMAGES.bannerSoftwareAi,
        items: [
          { 
            name: 'AI & Business Applications', 
            href: '/software-and-ai',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'CRM / ERP', 
            href: '/software-and-ai',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'WhatsApp Automation', 
            href: '/software-and-ai',
            image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=300&q=80',
          },
          { 
            name: 'Custom Software Development', 
            href: '/software-and-ai',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&q=80',
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Track active sub-category per division for master-detail interaction
  const [activeSubMap, setActiveSubMap] = useState<Record<string, number>>({
    'device-care': 0,
    'home-automation': 0,
    'business-solutions': 0,
  });

  const [expandedDivision, setExpandedDivision] = useState<string | null>('device-care');
  const [isVisible, setIsVisible] = useState(true);
  const [isNearTop, setIsNearTop] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener for auto hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setIsVisible(true);
        setIsNearTop(true);
      } else {
        setIsNearTop(false);
        if (currentScrollY > lastScrollY.current + 10) {
          setIsVisible(false);
          setActiveDropdown(null);
        } else if (currentScrollY < lastScrollY.current - 10) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const handleSubCategorySelect = (divisionId: string, subIndex: number) => {
    setActiveSubMap((prev) => ({ ...prev, [divisionId]: subIndex }));
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
                const activeSubIndex = activeSubMap[div.id] ?? 0;
                const activeSubCategory = div.subCategories[activeSubIndex] || div.subCategories[0];

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

                    {/* Master-Detail Visual Dropdown Mega-Menu matching Mockup */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 top-full -mt-1 w-[860px] xl:w-[920px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 z-50 ${
                        isOpen 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {/* Top Header Strip */}
                      <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-sm font-black uppercase tracking-wider text-white">
                            {div.title}
                          </h3>
                        </div>
                        <Link 
                          href={div.href}
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 hover:underline transition-colors"
                        >
                          <span>Explore {div.title}</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>

                      {/* 2-Column Split Body matching User Mockup */}
                      <div className="grid grid-cols-12 p-3.5 sm:p-4 gap-3.5 bg-slate-50/60">
                        
                        {/* LEFT COLUMN: Large Category Cards (Image on Top + Title on Bottom) */}
                        <div className="col-span-4 flex flex-col gap-3">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-1">
                            Select Category
                          </span>

                          {div.subCategories.map((sub, idx) => {
                            const isSelected = activeSubIndex === idx;

                            return (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onMouseEnter={() => handleSubCategorySelect(div.id, idx)}
                                onClick={() => setActiveDropdown(null)}
                                className={`group/cat block bg-white rounded-2xl p-2.5 sm:p-3 border transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? 'border-[#0284c7] ring-2 ring-[#0284c7]/30 shadow-md bg-sky-50/30'
                                    : 'border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow'
                                }`}
                              >
                                {/* Top Thumbnail Image */}
                                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-2 border border-slate-200/60">
                                  <Image
                                    src={sub.image}
                                    alt={sub.title}
                                    fill
                                    sizes="260px"
                                    className="object-cover group-hover/cat:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                {/* Bottom Title */}
                                <h4 className={`text-xs font-black uppercase tracking-wider text-center transition-colors line-clamp-1 ${
                                  isSelected ? 'text-[#0284c7]' : 'text-slate-900 group-hover/cat:text-[#0284c7]'
                                }`}>
                                  {sub.title}
                                </h4>
                              </Link>
                            );
                          })}
                        </div>

                        {/* RIGHT COLUMN: 2-Column Grid of Service Cards with Matching Images */}
                        <div className="col-span-8 bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-3.5 flex flex-col shadow-sm">
                          {/* Dynamically equally-divided Grid of Service Cards */}
                          <div className={`grid grid-cols-2 gap-2.5 sm:gap-3.5 h-full flex-1 ${
                            activeSubCategory.items.length <= 4 ? 'grid-rows-2' : 'grid-rows-3'
                          }`}>
                            {activeSubCategory.items.map((item) => {
                              const isCompact = activeSubCategory.items.length > 4;

                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => handleServiceClick(item.name)}
                                  className={`group/item flex items-center rounded-2xl bg-slate-100/80 hover:bg-sky-50 border border-transparent hover:border-sky-200 hover:shadow-sm transition-all duration-150 cursor-pointer h-full ${
                                    isCompact ? 'gap-3 p-2.5 sm:p-3' : 'gap-4 p-3 sm:p-4'
                                  }`}
                                >
                                  {/* Left Thumbnail Image - Scaled to fill the card nicely */}
                                  <div className={`relative shrink-0 rounded-xl overflow-hidden bg-slate-200 border border-slate-300/70 shadow-inner ${
                                    isCompact 
                                      ? 'w-16 sm:w-20 h-14 sm:h-16' 
                                      : 'w-24 sm:w-28 h-20 sm:h-24'
                                  }`}>
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      fill
                                      sizes={isCompact ? "100px" : "150px"}
                                      className="object-cover group-hover/item:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  {/* Right Title */}
                                  <span className={`font-black text-slate-900 group-hover/item:text-[#0284c7] transition-colors leading-snug ${
                                    isCompact 
                                      ? 'text-xs sm:text-[13px] line-clamp-2' 
                                      : 'text-sm sm:text-base'
                                  }`}>
                                    {item.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* Dropdown Footer Strip */}
                      <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium truncate max-w-[500px]">
                          {div.footerText}
                        </span>
                        <button
                          type="button"
                          onClick={openQuoteModal}
                          className="font-bold text-[#0284c7] hover:underline shrink-0 cursor-pointer ml-3"
                        >
                          {div.footerCta}
                        </button>
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
                          className="w-full flex items-center justify-between p-3 text-left font-black text-xs uppercase tracking-wider text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          <span>{div.title}</span>
                          <ChevronDown className={`size-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isExpanded && (
                          <div className="p-3 pt-0 space-y-4 border-t border-slate-100 bg-white">
                            <Link
                              href={div.href}
                              onClick={() => setIsDrawerOpen(false)}
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#0284c7] pt-2 hover:underline"
                            >
                              <span>Explore all {div.title}</span>
                              <ArrowRight className="size-3" />
                            </Link>

                            {div.subCategories.map((subCat) => (
                              <div key={subCat.title} className="space-y-2 pt-1">
                                <Link
                                  href={subCat.href}
                                  onClick={() => setIsDrawerOpen(false)}
                                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-[#0284c7] flex items-center justify-between py-0.5"
                                >
                                  <span>{subCat.title}</span>
                                  <ChevronRight className="size-3 text-slate-400" />
                                </Link>

                                <div className="grid grid-cols-1 gap-1.5 pl-2 border-l border-slate-200">
                                  {subCat.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => handleServiceClick(item.name)}
                                      className="flex items-center gap-2 text-xs text-slate-700 hover:text-[#0284c7] py-1 font-medium group"
                                    >
                                      <div className="relative size-6 shrink-0 rounded overflow-hidden bg-slate-100 border border-slate-200">
                                        <Image
                                          src={item.image}
                                          alt={item.name}
                                          fill
                                          sizes="24px"
                                          className="object-cover"
                                        />
                                      </div>
                                      <span className="truncate">{item.name}</span>
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
