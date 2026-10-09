import React from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  MessageSquare, 
  Mail,
  MapPin, 
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const deviceCareServices = [
    { name: 'Laptop & Desktop Repair', href: '/device-repair-and-maintenance' },
    { name: 'Apple Macbook Repair', href: '/device-repair-and-maintenance' },
    { name: 'Chip Level Mother Board Repair', href: '/device-repair-and-maintenance' },
    { name: 'Data Recovery', href: '/device-repair-and-maintenance' },
    { name: 'SSD & RAM Upgrades', href: '/device-repair-and-maintenance' },
    { name: 'Genuine Spareparts', href: '/device-repair-and-maintenance' },
    { name: 'AMC Support Contracts', href: '/it-support-services' },
    { name: 'Doorstep Pickup & Delivery', href: '/it-support-services' },
  ];

  const automationServices = [
    { name: 'Smart Home Automation', href: '/smart-home' },
    { name: 'Smart Lighting', href: '/smart-home' },
    { name: 'Voice Assistants', href: '/smart-home' },
    { name: 'Home WiFi & Mesh', href: '/smart-home' },
    { name: 'CCTV Surveillance', href: '/home-security' },
    { name: 'Smart Door Locks', href: '/home-security' },
    { name: 'Video Door Phones', href: '/home-security' },
    { name: 'Access Control', href: '/home-security' },
    { name: 'Home Cyber Security', href: '/home-security' },
  ];

  const businessSolutions = [
    { name: 'IT Infrastructure', href: '/it-infrastructure-and-cloud' },
    { name: 'Cloud Solutions (Azure, AWS, GCP)', href: '/it-infrastructure-and-cloud' },
    { name: 'Managed IT Services', href: '/it-infrastructure-and-cloud' },
    { name: 'NOC / SOC / TAC', href: '/it-infrastructure-and-cloud' },
    { name: 'Cybersecurity', href: '/it-infrastructure-and-cloud' },
    { name: 'AI & Business Applications', href: '/software-and-ai' },
    { name: 'CRM / ERP', href: '/software-and-ai' },
    { name: 'WhatsApp Automation', href: '/software-and-ai' },
    { name: 'Custom Software Development', href: '/software-and-ai' },
  ];

  const industriesList = [
    { name: 'Startups & SMBs', href: '/#industries' },
    { name: 'Enterprises & BFSI', href: '/#industries' },
    { name: 'Manufacturing & Plants', href: '/#industries' },
    { name: 'Healthcare & Hospitals', href: '/#industries' },
    { name: 'Hospitality & Retail', href: '/#industries' },
    { name: 'Education & Institutions', href: '/#industries' },
  ];

  return (
    <footer className="bg-[#050b17] text-slate-300 border-t border-white/10 pt-12 pb-24 md:pb-12 text-sm relative isolate overflow-hidden">
      
      {/* Background Subtle Tech Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Company Name Banner (Pure White by default, color on hover) */}
        <div className="group/title pb-10 pt-2 border-b border-white/10 text-center cursor-default">
          <h2 
            className="font-black tracking-tight text-white uppercase select-none text-center transition-all duration-300"
            style={{ 
              fontSize: 'clamp(2.25rem, 6.2vw + 0.5rem, 5.25rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            <span className="text-white">TSK </span>
            <span className="text-white transition-all duration-300 group-hover/title:text-amber-400 group-hover/title:drop-shadow-[0_0_35px_rgba(245,158,11,0.65)] hover:!text-amber-400">ONE </span>
            <span className="text-white">IT </span>
            <span className="text-white">SOLUTIONS</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-mono tracking-widest text-slate-400 group-hover/title:text-sky-400 transition-colors duration-300 uppercase">
            Repair • Connect • Secure • Transform
          </p>
          <p className="mt-2 text-xs text-slate-400 max-w-2xl mx-auto font-sans normal-case">
            From personal devices to enterprise digital transformation, TSK OneIT provides complete end-to-end technology solutions under one roof.
          </p>
        </div>

        {/* 4-Column Footer Navigation Grid (Structured by Divisions & Contact) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">
          
          {/* Column 1: DEVICE CARE */}
          <div>
            <Link 
              href="/device-care"
              className="text-xs font-black uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors mb-4 inline-flex items-center gap-1.5"
            >
              <span>01. DEVICE CARE</span>
            </Link>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {deviceCareServices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HOME AUTOMATION */}
          <div>
            <Link 
              href="/home-automation"
              className="text-xs font-black uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors mb-4 inline-flex items-center gap-1.5"
            >
              <span>02. HOME AUTOMATION</span>
            </Link>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {automationServices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: BUSINESS SOLUTIONS */}
          <div>
            <Link 
              href="/business-solutions"
              className="text-xs font-black uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors mb-4 inline-flex items-center gap-1.5"
            >
              <span>03. BUSINESS SOLUTIONS</span>
            </Link>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {businessSolutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-indigo-400 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONNECT WITH US */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              CONNECT WITH US
            </h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="text-slate-400">Email: </span>
                <a 
                  href="mailto:info@tskoneit.com" 
                  className="text-white hover:text-amber-400 font-medium transition-colors"
                >
                  info@tskoneit.com
                </a>
              </div>

              <div>
                <span className="text-slate-400">Helpdesk: </span>
                <a 
                  href="tel:+914446030632" 
                  className="text-white hover:text-amber-400 font-medium transition-colors"
                >
                  044 46030632
                </a>
              </div>

              <div>
                <span className="text-slate-400">WhatsApp: </span>
                <a 
                  href="https://wa.me/919150843991" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  +91 91508 43991
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-slate-400 block mb-1">Experience Lounge:</span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Anna Salai, White Lane, Chennai, Tamil Nadu
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="pt-3 flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TSK OneIT on Instagram"
                  className="size-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TSK OneIT on LinkedIn"
                  className="size-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TSK OneIT on YouTube"
                  className="size-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TSK OneIT on X"
                  className="size-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} TSK OneIT Solutions. All rights reserved.
          </div>

          <div className="font-mono text-[11px] uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <span>REPAIR • CONNECT • SECURE • TRANSFORM</span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-400 font-bold">CHENNAI EXPERIENCE LOUNGE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
