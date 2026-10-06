'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const serviceOptions = [
  'General Consultation / Free Site Assessment',
  '-- DIVISION 1: DEVICE CARE --',
  'Laptop & Desktop Repair',
  'Apple MacBook Repair',
  'Chip-Level Motherboard Repair',
  'Data Recovery',
  'SSD & RAM Upgrades',
  'Genuine Spare Parts & Upgrades',
  'Doorstep Pickup & Delivery',
  '-- DIVISION 2: HOME AUTOMATION --',
  'Smart Home Automation',
  'CCTV & IP Surveillance',
  'Smart Door Locks & Biometrics',
  'Video Door Phones',
  'Smart Lighting Solutions',
  'Home Wi-Fi & Mesh Systems',
  'Access Control & Smart Gates',
  '-- DIVISION 3: BUSINESS SOLUTIONS --',
  'IT Infrastructure & Cabling',
  'Cloud Solutions (Azure, AWS, GCP)',
  'Enterprise Cybersecurity & Firewalls',
  '24x7 NOC / SOC / TAC Operations',
  'Managed IT Services & AMC Contracts',
  'AI & Custom Enterprise Software',
  'CRM, ERP & WhatsApp Automation',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Consultation / Free Site Assessment',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message URL
    const textContent = `*TSK One IT Inquiry*\n\n*Name:* ${formData.name.trim()}\n*Phone:* ${formData.phone.trim()}\n*Service Needed:* ${formData.service}\n*Message/Requirements:* ${formData.message.trim() || 'Requesting Free Site Assessment & Consultation.'}`;
    
    const whatsappUrl = `https://wa.me/919150843991?text=${encodeURIComponent(textContent)}`;

    setSubmitted(true);

    // Open WhatsApp in a new tab safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#eef6ff] via-[#ffffff] to-[#f4f9ff] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* Background Lighting with float animation */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-[160px] animate-float"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-cyan-200/30 blur-[150px] animate-float-delayed"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner: FREE Site Assessment Highlight */}
        <ScrollReveal animation="fade-down">
          <div className="mb-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0a2a66] via-[#1d5fd1] to-[#0284c7] text-white shadow-xl shadow-sky-950/20 relative overflow-hidden border border-sky-300/30 hover:shadow-2xl transition-all">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-mono font-bold uppercase tracking-wider shimmer-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Special Initiative</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                  FREE Site Assessment &amp; Expert Consultation
                </h2>
                <p className="text-sm sm:text-base font-semibold text-sky-100 max-w-2xl">
                  Identify IT bottlenecks &bull; Map infrastructure requirements &bull; Evaluate smart automation feasibility &amp; upgrade paths.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href="https://wa.me/919150843991?text=Hi%20TSK%20One%20IT%2C%20I%20would%20like%20to%20book%20a%20FREE%20Site%20Assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-extrabold text-[#0a2a66] bg-white hover:bg-sky-50 hover:scale-102 transition-all shadow-lg min-h-[50px] min-w-[200px] group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp to Book</span>
                </a>
                <a
                  href="tel:+914446030632"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-extrabold text-white bg-[#0a2a66] hover:bg-[#061a45] hover:scale-102 transition-all border border-sky-400/40 min-h-[50px] min-w-[180px] group"
                >
                  <PhoneCall className="w-4 h-4 text-sky-300 group-hover:rotate-12 transition-transform" />
                  <span>044 46030632</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Experience Lounge */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="slide-right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 mb-3 shadow-sm shimmer-badge">
                  <Compass className="w-3.5 h-3.5 text-sky-600" />
                  <span>Direct Channels</span>
                </div>
                <h3 
                  id="contact-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#0b1b3a] mb-2"
                >
                  Get in Touch with Our Team
                </h3>
                <div className="title-accent-line !mx-0 mb-3" />
                <p className="text-sm text-slate-600 pt-1">
                  Connect directly with certified engineers or visit our Service Exploration Lounge in Chennai.
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="space-y-3.5 mt-5">
                <a
                  href="tel:+914446030632"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all group duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:scale-110 group-hover:bg-[#0a2a66] group-hover:text-white transition-all shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium font-mono">Landline / Phone Support</div>
                    <div className="text-base font-bold text-[#0b1b3a] group-hover:text-[#1d5fd1] transition-colors">
                      044 46030632
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919150843991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sky-100 hover:border-emerald-300 hover:shadow-md transition-all group duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium font-mono">WhatsApp / Mobile Support</div>
                    <div className="text-base font-bold text-[#0b1b3a] group-hover:text-emerald-700 transition-colors">
                      +91 9150843991
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.tskoneit.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all group duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#1d5fd1] group-hover:scale-110 group-hover:bg-[#1d5fd1] group-hover:text-white transition-all shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium font-mono">Official Portal</div>
                    <div className="text-base font-bold text-[#0b1b3a] group-hover:text-[#1d5fd1] transition-colors">
                      www.tskoneit.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Service Exploration Lounge Location Card */}
              <div className="mt-6 p-6 rounded-2xl bg-white border border-sky-200 shadow-md space-y-3 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#0a2a66] font-bold text-sm">
                    <MapPin className="w-5 h-5 shrink-0 text-sky-600" />
                    <span>Service Exploration Lounge</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 radar-ring text-emerald-500" />
                    <span>Live &bull; Open</span>
                  </span>
                </div>
                <p className="text-base font-bold text-[#0b1b3a]">
                  Anna Salai, White Lane, Chennai
                </p>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-amber-700">Experience &bull; Plan &bull; Get Expert Advice</span>
                  <br />
                  Visit our physical lounge to test live smart automation controllers, touch-panel meeting AV, biometric gates, and enterprise Wi-Fi systems.
                </div>
                <div className="pt-2 flex items-center gap-2 text-xs text-sky-800 font-mono font-medium">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM (Emergency 24x7)</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Pre-filled WhatsApp Instant Consultation Form */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                    Direct Dispatch Form
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b1b3a] mt-2">
                    Request a Callback or Site Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill in your details below to instantly connect with our lead engineering desk on WhatsApp.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Connecting you to WhatsApp desk... Our team will respond shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider mb-1.5 font-mono">
                      Your Name / Organization <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe or TSK Enterprises"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider mb-1.5 font-mono">
                      Phone / Mobile Number <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider mb-1.5 font-mono">
                      Service Needed <span className="text-sky-600">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 text-[#0b1b3a] text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#0b1b3a]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider mb-1.5 font-mono">
                      Requirements / Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your IT setup, number of systems, or automation goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#1d5fd1] to-[#0284c7] hover:brightness-110 hover:shadow-lg transition-all shadow-md shadow-sky-500/20 min-h-[52px] group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Submit &amp; Chat on WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Instant direct dispatch &bull; No spam &bull; 100% Privacy Protected
                    </p>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
