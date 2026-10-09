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
}

export interface ServiceColumn {
  heading: string;
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
  columns: ServiceColumn[];
}

export const serviceHierarchy: ServiceDivision[] = [
  {
    id: 'device-care',
    number: '01',
    title: 'IT Device Care',
    href: '/device-care',
    footerText: 'Free doorstep diagnosis, certified BGA chip technicians & genuine OEM parts in Chennai',
    footerCta: 'Explore All Device Care Services',
    columns: [
      {
        heading: 'Device Repair & Diagnostics',
        href: '/device-repair-and-maintenance',
        items: [
          { name: 'Laptop & Desktop Hardware Repair', href: '/device-repair-and-maintenance' },
          { name: 'Apple MacBook & iMac Specialist', href: '/device-repair-and-maintenance' },
          { name: 'Chip-Level & Motherboard BGA Repair', href: '/device-repair-and-maintenance' },
          { name: 'Screen, Display & Hinge Replacement', href: '/device-repair-and-maintenance' },
          { name: 'Liquid Spill Remediation & Deep Cleaning', href: '/device-repair-and-maintenance' },
          { name: 'Battery, Keyboard & Trackpad Replacement', href: '/device-repair-and-maintenance' },
          { name: 'Custom PC Assembly & Gaming Rig Builds', href: '/device-repair-and-maintenance' },
          { name: 'OS Installation & System Optimization', href: '/device-repair-and-maintenance' },
        ],
      },
      {
        heading: 'Data Recovery & Upgrades',
        href: '/device-repair-and-maintenance',
        items: [
          { name: 'Hard Drive (HDD) & SSD Data Recovery', href: '/device-repair-and-maintenance' },
          { name: 'High-Speed NVMe & SSD Upgrades', href: '/device-repair-and-maintenance' },
          { name: 'RAM Memory Capacity Expansion', href: '/device-repair-and-maintenance' },
          { name: 'Certified OEM Spare Parts & Accessories', href: '/device-repair-and-maintenance' },
          { name: 'Malware, Virus & Ransomware Removal', href: '/device-repair-and-maintenance' },
          { name: 'Thermal Paste Servicing & Fan Tuning', href: '/device-repair-and-maintenance' },
          { name: 'Corrupted BIOS & OS Crash Remediation', href: '/device-repair-and-maintenance' },
          { name: 'Automated Cloud Backup Configuration', href: '/device-repair-and-maintenance' },
        ],
      },
      {
        heading: 'Managed IT Support & AMC',
        href: '/it-support-services',
        items: [
          { name: 'Annual Maintenance Contracts (AMC)', href: '/it-support-services' },
          { name: 'Doorstep Pickup & Delivery in Chennai', href: '/it-support-services' },
          { name: '24/7 Remote IT Helpdesk & Diagnostics', href: '/it-support-services' },
          { name: 'Onsite Technical Engineer Dispatch', href: '/it-support-services' },
          { name: 'Managed Device Fleet & Asset Care', href: '/it-support-services' },
          { name: 'SLA-Backed Hardware Warranty', href: '/it-support-services' },
          { name: 'IT Equipment Lifecycle & Buyback Advisory', href: '/it-support-services' },
          { name: 'Preventive Periodic Maintenance Audits', href: '/it-support-services' },
        ],
      },
    ],
  },
  {
    id: 'home-automation',
    number: '02',
    title: 'Home Automation',
    href: '/home-automation',
    footerText: 'Smart villa & apartment automation design, architectural lighting & biometric access control',
    footerCta: 'Explore All Home Automation',
    columns: [
      {
        heading: 'Smart Living & Lighting',
        href: '/smart-home',
        items: [
          { name: 'Smart Ambient & Architectural Lighting', href: '/smart-home' },
          { name: 'Voice Assistants (Alexa / Google Home)', href: '/smart-home' },
          { name: 'Smart Touch Switches & Scene Controllers', href: '/smart-home' },
          { name: 'Motorized Curtains & Blinds Automation', href: '/smart-home' },
          { name: 'Smart Climate, HVAC & Fan Automation', href: '/smart-home' },
          { name: 'Multi-Room Audio & Home Theater Systems', href: '/smart-home' },
          { name: 'Energy Monitoring & Smart Power Plugs', href: '/smart-home' },
          { name: 'Smart Villa Master Automation Control', href: '/smart-home' },
        ],
      },
      {
        heading: 'Security & Surveillance',
        href: '/home-security',
        items: [
          { name: 'High-Definition CCTV & IP Camera Setup', href: '/home-security' },
          { name: 'Smart Biometric & Digital Door Locks', href: '/home-security' },
          { name: 'Video Door Phones & Wireless Intercoms', href: '/home-security' },
          { name: 'Motion Sensors & Intrusion Detection', href: '/home-security' },
          { name: 'Perimeter Laser & Glass Break Sensors', href: '/home-security' },
          { name: 'Smart Safety Alarms & Gas Leak Detectors', href: '/home-security' },
          { name: '24/7 Mobile Cloud Monitoring & Remote Alerts', href: '/home-security' },
          { name: 'Boom Barriers & Automated Access Gates', href: '/home-security' },
        ],
      },
      {
        heading: 'Networking & Smart Infrastructure',
        href: '/smart-home',
        items: [
          { name: 'Whole-Home High-Speed Wi-Fi 6 Mesh', href: '/smart-home' },
          { name: 'Structured Cat6/Fiber LAN Cabling', href: '/smart-home' },
          { name: 'Smart Gateway & Central IoT Hubs', href: '/smart-home' },
          { name: 'Home Router Firewall & Cyber Defense', href: '/smart-home' },
          { name: 'Parental Controls & Guest Wi-Fi Setup', href: '/smart-home' },
          { name: 'Smart Garden & Outdoor Automation', href: '/smart-home' },
          { name: 'Uninterrupted Smart Power & UPS Sync', href: '/smart-home' },
          { name: 'Smart Water Tank & Pump Controllers', href: '/smart-home' },
        ],
      },
    ],
  },
  {
    id: 'business-solutions',
    number: '03',
    title: 'Business Solutions',
    href: '/business-solutions',
    footerText: 'Enterprise IT infrastructure, SOC cybersecurity, multi-cloud architecture & custom software engineering',
    footerCta: 'Explore All Business Solutions',
    columns: [
      {
        heading: 'Cyber Security',
        href: '/it-infrastructure-and-cloud',
        items: [
          { name: 'Cybersecurity Consulting & Security Advisory', href: '/it-infrastructure-and-cloud' },
          { name: 'Next-Generation Firewall (NGFW) Management', href: '/it-infrastructure-and-cloud' },
          { name: 'Managed Security Services (MSSP)', href: '/it-infrastructure-and-cloud' },
          { name: 'Security Operations Center (SOC) as a Service', href: '/it-infrastructure-and-cloud' },
          { name: 'Managed Detection & Response (MDR / XDR / EDR)', href: '/it-infrastructure-and-cloud' },
          { name: 'Vulnerability Assessment & Penetration Testing (VAPT)', href: '/it-infrastructure-and-cloud' },
          { name: 'Network Penetration Testing', href: '/it-infrastructure-and-cloud' },
          { name: 'API Security Testing & API Protection', href: '/it-infrastructure-and-cloud' },
          { name: 'Governance, Risk & Compliance (GRC) & DPDP', href: '/it-infrastructure-and-cloud' },
          { name: 'Web Application Firewall (WAF) Deployment', href: '/it-infrastructure-and-cloud' },
          { name: 'Cloud Security Services (AWS / Azure / GCP)', href: '/it-infrastructure-and-cloud' },
        ],
      },
      {
        heading: 'Managed IT',
        href: '/it-infrastructure-and-cloud',
        items: [
          { name: 'IT Infrastructure Management', href: '/it-infrastructure-and-cloud' },
          { name: 'Managed Network Services & Monitoring', href: '/it-infrastructure-and-cloud' },
          { name: 'Server Management & Administration', href: '/it-infrastructure-and-cloud' },
          { name: '24/7 Network Operations Center (NOC) Services', href: '/it-infrastructure-and-cloud' },
          { name: 'Endpoint & Device Management (MDM)', href: '/it-infrastructure-and-cloud' },
          { name: 'Backup & Disaster Recovery (DRaaS)', href: '/it-infrastructure-and-cloud' },
          { name: 'IT Helpdesk & TAC Tier 1-3 Support', href: '/it-infrastructure-and-cloud' },
          { name: 'Virtualization Management (VMware / Hyper-V)', href: '/it-infrastructure-and-cloud' },
          { name: 'Data Center Infrastructure Management', href: '/it-infrastructure-and-cloud' },
          { name: 'Enterprise Storage & Backup Management', href: '/it-infrastructure-and-cloud' },
          { name: 'IT Asset & Lifecycle Management', href: '/it-infrastructure-and-cloud' },
        ],
      },
      {
        heading: 'Cloud & DevOps Services',
        href: '/it-infrastructure-and-cloud',
        items: [
          { name: 'Cloud Consulting & Architecture Design', href: '/it-infrastructure-and-cloud' },
          { name: 'Cloud Migration & Modernization Services', href: '/it-infrastructure-and-cloud' },
          { name: 'AWS / Azure / Google Cloud Deployment & Ops', href: '/it-infrastructure-and-cloud' },
          { name: 'Cloud Infrastructure Management', href: '/it-infrastructure-and-cloud' },
          { name: 'Hybrid & Multi-Cloud Solutions', href: '/it-infrastructure-and-cloud' },
          { name: 'DevOps Consulting & Implementation', href: '/it-infrastructure-and-cloud' },
          { name: 'CI/CD Pipeline Automation', href: '/it-infrastructure-and-cloud' },
          { name: 'Infrastructure as Code (Terraform / Ansible)', href: '/it-infrastructure-and-cloud' },
          { name: 'Containerization & Kubernetes Management', href: '/it-infrastructure-and-cloud' },
          { name: 'Cloud Monitoring, Logging & Observability', href: '/it-infrastructure-and-cloud' },
          { name: 'Cloud Cost Optimization (FinOps)', href: '/it-infrastructure-and-cloud' },
        ],
      },
      {
        heading: 'Digital Engineering',
        href: '/software-and-ai',
        items: [
          { name: 'Enterprise Application Development', href: '/software-and-ai' },
          { name: 'Custom Software Development', href: '/software-and-ai' },
          { name: 'ERP Implementation & Integration', href: '/software-and-ai' },
          { name: 'CRM Implementation & Integration', href: '/software-and-ai' },
          { name: 'Official Meta WhatsApp Business Cloud API', href: '/software-and-ai' },
          { name: 'Generative AI & Automation Chatbots', href: '/software-and-ai' },
          { name: 'SaaS Platform & Portal Development', href: '/software-and-ai' },
          { name: 'Cloud-Native Application Development', href: '/software-and-ai' },
          { name: 'API Development & System Integration', href: '/software-and-ai' },
          { name: 'Application Modernization & Lifecycle Management', href: '/software-and-ai' },
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

                    {/* Multi-Column Mega-Menu Dropdown matching Reference Screenshot */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-slate-200/90 overflow-hidden transition-all duration-200 z-50 ${
                        div.columns.length === 4 
                          ? 'w-[96vw] max-w-[1240px]' 
                          : 'w-[92vw] max-w-[1040px]'
                      } ${
                        isOpen 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {/* Top Accent Strip */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#0284c7] via-sky-400 to-[#1e40af]" />

                      {/* Columns Grid matching exact design */}
                      <div className={`p-6 sm:p-8 lg:p-9 grid gap-7 lg:gap-8 ${
                        div.columns.length === 4 
                          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                          : 'grid-cols-1 md:grid-cols-3'
                      }`}>
                        {div.columns.map((col) => (
                          <div key={col.heading} className="flex flex-col">
                            {/* Column Heading */}
                            <Link
                              href={col.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group/col-hdr inline-flex items-center justify-between gap-1.5 text-[15px] xl:text-[16px] font-extrabold tracking-tight text-slate-900 hover:text-[#0284c7] transition-colors mb-3 pb-2 border-b border-slate-100"
                            >
                              <span>{col.heading}</span>
                              <ArrowUpRight className="size-3.5 text-slate-400 group-hover/col-hdr:text-[#0284c7] group-hover/col-hdr:translate-x-0.5 group-hover/col-hdr:-translate-y-0.5 transition-transform shrink-0" />
                            </Link>

                            {/* Links Stack */}
                            <ul className="space-y-1.5 flex-1">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    onClick={() => handleServiceClick(item.name)}
                                    className="text-[12.5px] xl:text-[13px] text-slate-600 hover:text-[#0284c7] font-medium leading-snug block py-1 transition-all duration-150 hover:translate-x-1"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mega-Menu Footer Strip */}
                      <div className="bg-slate-50/90 px-6 sm:px-8 lg:px-9 py-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                          <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          <span className="line-clamp-1">{div.footerText}</span>
                        </div>
                        <Link
                          href={div.href}
                          onClick={() => setActiveDropdown(null)}
                          className="font-bold text-[#0284c7] hover:text-[#0369a1] hover:underline inline-flex items-center gap-1 shrink-0 ml-auto"
                        >
                          <span>{div.footerCta}</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
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

                            {div.columns.map((col) => (
                              <div key={col.heading} className="space-y-1.5 pt-1">
                                <Link
                                  href={col.href}
                                  onClick={() => setIsDrawerOpen(false)}
                                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 hover:text-[#0284c7] flex items-center justify-between py-0.5"
                                >
                                  <span>{col.heading}</span>
                                  <ChevronRight className="size-3 text-slate-400" />
                                </Link>

                                <div className="grid grid-cols-1 gap-1 pl-2.5 border-l-2 border-slate-100">
                                  {col.items.map((item) => (
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
