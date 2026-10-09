import React from 'react';
import type { Metadata } from 'next';
import ServiceCategoryPageTemplate, { ServiceCardItem } from '@/components/ServiceCategoryPageTemplate';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'IT Device Repair & Maintenance | TSK One IT - Laptop, MacBook & Motherboard Repairs',
  description: 'Precision laptop & desktop repairs, Apple MacBook logic board micro-soldering, cleanroom data recovery, SSD upgrades, and genuine spare parts across Chennai.',
};

const cards: ServiceCardItem[] = [
  {
    title: 'Laptop & Desktop Repair',
    desc: 'Precision hardware troubleshooting, cracked screen replacement, cooling thermal overhaul, liquid spill remediation & OS optimization.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    badge: 'Onsite & Lab',
  },
  {
    title: 'Apple MacBook Repair',
    desc: 'Certified repair for MacBook Pro, MacBook Air & iMac. Logic board BGA repair, Retina displays, trackpads & OEM batteries.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    badge: 'Apple Certified',
  },
  {
    title: 'Chip-Level Motherboard Repair',
    desc: 'Microscopic logic board track repair, power IC replacement, MOSFET diagnostics & BGA chip re-balling on specialized rework stations.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80',
    badge: 'Micro-Soldering',
  },
  {
    title: 'Data Recovery',
    desc: 'Class-100 cleanroom recovery from crashed HDDs, unreadable NVMe SSDs, corrupted flash storage & complex RAID arrays.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
    badge: '100% Privacy',
  },
  {
    title: 'SSD & RAM Upgrades',
    desc: 'Blazing-fast NVMe PCIe 4.0/5.0 SSD storage expansions, high-frequency DDR4/DDR5 RAM upgrades & performance tuning.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80',
    badge: 'Speed Boost',
  },
  {
    title: 'Genuine Spare Parts',
    desc: '100% factory-authentic replacement screens, certified batteries, original power adapters, fans & keyboards with warranty.',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80',
    badge: 'OEM Warranty',
  },
];

export default function DeviceRepairPage() {
  return (
    <ServiceCategoryPageTemplate
      heroBannerImage={CLOUDINARY_IMAGES.bannerDeviceRepair}
      heroAlt="TSK One IT - IT Device Repair & Maintenance: Laptop, Desktop & Chip-Level Motherboard Diagnostics"
      bannerAspectRatio="aspect-[1024/434]"
      bannerBg="bg-white border-b border-slate-100"
      overlayTitle="IT Device Repair & Maintenance"
      overlayButtonText="Explore Services"
      servicesSectionKicker="OUR REPAIR &amp; MAINTENANCE SERVICES"
      servicesSectionTitle="Master Diagnostics, Precision Repairs"
      servicesSectionDesc="Every device is diagnosed with calibrated telemetry equipment and repaired by certified micro-electronics engineers."
      cards={cards}
      ctaKicker="NEED FAST DEVICE REPAIR?"
      ctaTitle="Let's Fix Your Device Today"
      ctaDesc="Get free doorstep pickup, transparent diagnostic reports, and OEM warranty-backed repairs across Chennai."
      ctaButtonText="Book Doorstep Pickup"
      whatsappMessage="Hi TSK One IT, I would like to book a repair diagnosis for my device."
    />
  );
}
