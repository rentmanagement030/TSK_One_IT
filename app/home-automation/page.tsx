import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  Video, 
  KeyRound, 
  PhoneCall, 
  Lightbulb, 
  Wifi, 
  Lock, 
  Mic, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import PartnerEcosystem from '@/components/PartnerEcosystem';

export const metadata: Metadata = {
  title: 'Home Automation | TSK OneIT - Smart Connected Living & Security',
  description: 'Smart home automation, CCTV 4K surveillance, smart door locks, video door phones, smart lighting, and whole-home Wi-Fi mesh.',
};

const automationServices = [
  {
    title: 'Smart Home Automation',
    desc: 'Centralized smart wall touch panels, customized scene scheduling, motorized curtains, and unified smartphone app control.',
    badge: 'Unified App Control',
    icon: Home,
  },
  {
    title: 'CCTV',
    desc: 'High-definition 4K color night-vision IP surveillance, intelligent human/vehicle AI motion detection, and encrypted NVR cloud recording.',
    badge: '4K Night Vision',
    icon: Video,
  },
  {
    title: 'Smartdoor Locks',
    desc: 'Keyless smart locks featuring high-accuracy biometric fingerprint scanners, digital PIN codes, RFID card entry, and remote OTP app unlocking.',
    badge: 'Biometric Access',
    icon: KeyRound,
  },
  {
    title: 'Video Door Phones',
    desc: 'Two-way crystal-clear audio/video calling, HD wide-angle door cameras, digital chime sync, and instant smartphone visitor snapshot alerts.',
    badge: '2-Way HD Video',
    icon: PhoneCall,
  },
  {
    title: 'Smart Lighting',
    desc: 'Tunable warm-to-cool white and full RGB architectural mood lighting, automated daylight harvesting sensors & motion-activated paths.',
    badge: 'Mood & Scene Sync',
    icon: Lightbulb,
  },
  {
    title: 'Home WiFi & Mesh',
    desc: 'High-speed Wi-Fi 6/7 multi-node mesh network installations eliminating dead zones across multi-floor bungalows, apartments & outdoor lawns.',
    badge: 'Zero Dead Zones',
    icon: Wifi,
  },
  {
    title: 'Access Control',
    desc: 'Automatic motorized boom barriers, RFID gate controllers, facial recognition readers & comprehensive visitor logging.',
    badge: 'Perimeter Security',
    icon: Lock,
  },
  {
    title: 'Voice Assistants',
    desc: 'Hands-free whole-home voice control integration with Amazon Alexa, Google Home, and Apple HomeKit Siri ecosystems.',
    badge: 'Hands-Free Control',
    icon: Mic,
  },
  {
    title: 'Home Cyber Security',
    desc: 'Hardware router firewalls, IoT smart device VLAN network isolation, parental content filtering, and malware DNS defense.',
    badge: 'IoT Shielding',
    icon: ShieldCheck,
  },
];

export default function HomeAutomationPage() {
  return (
    <div className="pt-24 lg:pt-28 bg-[#ffffff] text-[#0b1b3a]">
      
      {/* Hero Header */}
      <section className="relative bg-[#0b1b3a] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/95 via-[#0b1b3a]/90 to-[#0b1b3a]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-semibold text-cyan-300">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>Division 02 &bull; Smart Living & Connected Ecosystems</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Smart Home Automation & Connected Living
          </h1>

          <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-2.5 mb-4 rounded-full" />

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Elevate your lifestyle with intelligent automation, keyless security, 4K CCTV surveillance, and whole-home mesh Wi-Fi ecosystems.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md transition-all duration-200"
            >
              <span>Book Free Site Assessment</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Intelligent Home Automation Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Turn your villa or modern apartment into an intuitive, energy-efficient smart ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-cyan-300 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center shadow-md">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
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

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="size-4" />
                  <span>Installed by Certified Smart Engineers</span>
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
