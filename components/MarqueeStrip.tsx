import React from 'react';
import { 
  Wrench, 
  Wifi, 
  Server, 
  Video, 
  ShieldAlert, 
  Fingerprint, 
  Cloud, 
  Cpu, 
  Headphones, 
  Home, 
  Tv, 
  CheckCircle 
} from 'lucide-react';

const serviceKeywords = [
  { name: 'IT Support & Chip-Level Repairs', icon: Wrench },
  { name: 'Networking & Enterprise Wi-Fi', icon: Wifi },
  { name: 'Servers & Storage Virtualization', icon: Server },
  { name: 'CCTV & Smart Surveillance', icon: Video },
  { name: 'Cybersecurity & SOC Monitoring', icon: ShieldAlert },
  { name: 'Office Biometrics & RFID Access', icon: Fingerprint },
  { name: 'Cloud & Disaster Recovery Solutions', icon: Cloud },
  { name: 'CRM, ERP & AI Applications', icon: Cpu },
  { name: '24x7x365 Managed IT & NOC', icon: Headphones },
  { name: 'Smart Home & Office Automation', icon: Home },
  { name: 'Home Entertainment & AV Solutions', icon: Tv },
  { name: 'Comprehensive AMC Support', icon: CheckCircle },
];

export default function MarqueeStrip() {
  return (
    <section 
      aria-label="Capabilities ticker"
      className="relative w-full py-3.5 bg-white/90 border-y border-sky-100 shadow-sm overflow-hidden"
    >
      <div className="marquee-container" tabIndex={0} aria-label="TSK One IT Core Service Capabilities">
        
        {/* Track 1 */}
        <div className="marquee-track">
          {serviceKeywords.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`track1-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-50/70 border border-sky-100 text-xs sm:text-sm font-bold text-slate-700 shrink-0 hover:bg-sky-100 hover:border-sky-300 transition-colors"
              >
                <Icon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicated with aria-hidden for seamless loop) */}
        <div className="marquee-track" aria-hidden="true">
          {serviceKeywords.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`track2-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-50/70 border border-sky-100 text-xs sm:text-sm font-bold text-slate-700 shrink-0 hover:bg-sky-100 hover:border-sky-300 transition-colors"
              >
                <Icon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
