import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Laptop, 
  Wrench, 
  Cpu, 
  Database, 
  HardDrive, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import PartnerEcosystem from '@/components/PartnerEcosystem';
import EnquiryButton from '@/components/EnquiryButton';

export const metadata: Metadata = {
  title: 'Device Care | TSK OneIT - Laptop, Apple MacBook & Chip-Level Repair',
  description: 'Comprehensive chip-level motherboard repair, Apple MacBook repair, data recovery, SSD upgrades, and doorstep pickup across Chennai.',
};

const deviceServices = [
  {
    title: 'Laptop & Desktop Repair',
    desc: 'Precision hardware troubleshooting, cracked screen replacement, liquid spill remediation, thermal cleaning & OS optimization.',
    badge: 'Onsite & Lab Diagnostics',
    icon: Wrench,
  },
  {
    title: 'Apple Macbook Repair',
    desc: 'Certified repair for MacBook Pro, MacBook Air, and iMac. Logic board BGA repair, Retina displays, trackpads & genuine battery replacements.',
    badge: 'Apple Specialized',
    icon: Laptop,
  },
  {
    title: 'Chip Level Mother Board Repair',
    desc: 'Microscopic logic board track repair, power IC replacement, MOSFET diagnostics, and BGA chip re-balling on specialized rework stations.',
    badge: 'Micro-Soldering Rework',
    icon: Cpu,
  },
  {
    title: 'Data Recovery',
    desc: 'Cleanroom recovery from mechanically damaged HDDs, dead NVMe SSDs, corrupted flash memory, and complex RAID multi-disk arrays.',
    badge: 'Strict Data Privacy',
    icon: Database,
  },
  {
    title: 'SSD & RAM Upgrades',
    desc: 'Blazing-fast NVMe PCIe 4.0/5.0 SSD storage expansions, high-frequency DDR4/DDR5 RAM upgrades & instant performance revival.',
    badge: 'Performance Revival',
    icon: HardDrive,
  },
  {
    title: 'Genuine Spareparts',
    desc: '100% factory-authentic replacement screens, original batteries, certified power adapters, cooling fans & keyboards with warranty.',
    badge: 'OEM Warranty Backed',
    icon: ShieldCheck,
  },
  {
    title: 'Doorstep Pickup & Delivery',
    desc: 'Secure, contactless doorstep pickup across Chennai & Tamil Nadu with live repair ticket tracking and safe insured return delivery.',
    badge: 'Zero Hassle Pickup',
    icon: Truck,
  },
];

export default function DeviceCarePage() {
  return (
    <div className="pt-24 lg:pt-28 bg-[#ffffff] text-[#0b1b3a]">
      
      {/* Hero Header */}
      <section className="relative bg-[#0b1b3a] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/95 via-[#0b1b3a]/90 to-[#0b1b3a]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 border border-sky-800 text-xs font-semibold text-sky-300">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>Division 01 &bull; Personal Devices & Hardware Diagnostics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Device Care & Chip-Level Repair
          </h1>

          <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-2.5 mb-4 rounded-full" />

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From precision Apple MacBook logic board repairs and cleanroom data recovery to genuine spare parts and doorstep pickup across Chennai.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md transition-all duration-200"
            >
              <span>Book Device Pickup</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Comprehensive Device Care Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Certified engineers equipped with industrial BGA micro-soldering labs and calibrated diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deviceServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-sky-300 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span className="truncate">OEM Warranty</span>
                  </div>

                  <EnquiryButton serviceTitle={service.title} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PartnerEcosystem />
      <ContactSection />
    </div>
  );
}
