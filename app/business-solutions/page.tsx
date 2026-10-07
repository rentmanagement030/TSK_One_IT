import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Cpu, 
  CloudSun, 
  ShieldCheck, 
  Headphones, 
  Bot, 
  FileSpreadsheet, 
  MessageSquare, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import PartnerEcosystem from '@/components/PartnerEcosystem';
import EnquiryButton from '@/components/EnquiryButton';

export const metadata: Metadata = {
  title: 'Business Solutions | TSK OneIT - Enterprise IT & Digital Transformation',
  description: 'Enterprise IT infrastructure, multi-cloud (Azure, AWS, GCP), cybersecurity, managed IT services, 24x7 NOC/SOC, and custom software development.',
};

const businessServices = [
  {
    title: 'IT Infrastructure',
    desc: 'Enterprise LAN/WAN, SD-WAN, core switching, structured CAT6/Fiber optic cabling, server rack engineering & high-availability UPS setups.',
    badge: 'High Availability',
    icon: Cpu,
  },
  {
    title: 'Cloud Solutions (Microsoft Azure, AWS, GCP)',
    desc: 'End-to-end cloud migrations, hybrid cloud architecture, disaster recovery automation, Kubernetes deployments & Azure/AWS cost optimization.',
    badge: 'Multi-Cloud Certified',
    icon: CloudSun,
  },
  {
    title: 'Cybersecurity',
    desc: 'Next-Generation Firewalls (Fortinet, Sophos), EDR/XDR endpoint detection, zero-trust network access (ZTNA) & comprehensive vulnerability assessments.',
    badge: 'Zero Trust Security',
    icon: ShieldCheck,
  },
  {
    title: 'Managed IT Services',
    desc: 'Dedicated on-site IT engineers, SLA-backed helpdesk support, proactive remote monitoring, IT asset lifecycle management & AMC contracts.',
    badge: 'SLA Guaranteed',
    icon: Headphones,
  },
  {
    title: 'NOC/SOC/TAC',
    desc: '24x7x365 Network Operations Center (NOC), Security Operations Center (SOC) threat hunting, and Technical Assistance Center (TAC) escalation.',
    badge: '24×7 Active NOC/SOC',
    icon: Headphones,
  },
  {
    title: 'AI & Business Applications',
    desc: 'Custom enterprise AI workflows, LLM agents, automated reporting, computer vision & intelligent data analytics engines.',
    badge: 'Enterprise AI',
    icon: Bot,
  },
  {
    title: 'CRM/ERP',
    desc: 'Tailored enterprise resource planning, customer pipeline management, automated invoicing, warehouse inventory & HR payroll software.',
    badge: 'Custom Workflow',
    icon: FileSpreadsheet,
  },
  {
    title: 'WhatsApp Automation',
    desc: 'Official Meta WhatsApp Business Cloud API integration, CRM sync, automated customer notifications, order tracking & 24/7 AI chatbot flows.',
    badge: 'Meta Cloud API',
    icon: MessageSquare,
  },
  {
    title: 'Custom Software Development',
    desc: 'Bespoke web applications, client portals, robust microservices, high-performance REST/GraphQL APIs, and scalable mobile app solutions.',
    badge: 'Modern Full-Stack',
    icon: Code2,
  },
];

export default function BusinessSolutionsPage() {
  return (
    <div className="pt-24 lg:pt-28 bg-[#ffffff] text-[#0b1b3a]">
      
      {/* Hero Header */}
      <section className="relative bg-[#0b1b3a] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/95 via-[#0b1b3a]/90 to-[#0b1b3a]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-xs font-semibold text-blue-300">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>Division 03 &bull; Enterprise IT & Digital Transformation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Enterprise IT & Digital Solutions
          </h1>

          <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-2.5 mb-4 rounded-full" />

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mission-critical cloud infrastructure, 24×7 NOC/SOC security operations, managed IT services, and custom software engineered for scalable growth.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md transition-all duration-200"
            >
              <span>Schedule Enterprise Consultation</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Enterprise IT & Digital Transformation Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Global system integrator standards with guaranteed SLAs and single-point accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
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
                    <span className="truncate">SLA Backed</span>
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
