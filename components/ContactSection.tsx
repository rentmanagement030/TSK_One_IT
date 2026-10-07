'use client';

import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  BookmarkCheck,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
  minDigits: number;
  maxDigits: number;
  placeholder: string;
}

const COUNTRIES: Country[] = [
  { code: '+91', name: 'India', flag: '🇮🇳', minDigits: 10, maxDigits: 10, placeholder: '98765 43210' },
  { code: '+1', name: 'USA / Canada', flag: '🇺🇸', minDigits: 10, maxDigits: 10, placeholder: '(555) 000-0000' },
  { code: '+971', name: 'UAE', flag: '🇦🇪', minDigits: 9, maxDigits: 9, placeholder: '50 123 4567' },
  { code: '+44', name: 'UK', flag: '🇬🇧', minDigits: 10, maxDigits: 11, placeholder: '7911 123456' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬', minDigits: 8, maxDigits: 8, placeholder: '8123 4567' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', minDigits: 9, maxDigits: 9, placeholder: '50 123 4567' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦', minDigits: 8, maxDigits: 8, placeholder: '3312 3456' },
  { code: '+968', name: 'Oman', flag: '🇴🇲', minDigits: 8, maxDigits: 8, placeholder: '9123 4567' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼', minDigits: 8, maxDigits: 8, placeholder: '9123 4567' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭', minDigits: 8, maxDigits: 8, placeholder: '3612 3456' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾', minDigits: 9, maxDigits: 10, placeholder: '12-345 6789' },
  { code: '+61', name: 'Australia', flag: '🇦🇺', minDigits: 9, maxDigits: 9, placeholder: '412 345 678' },
  { code: '+49', name: 'Germany', flag: '🇩🇪', minDigits: 10, maxDigits: 11, placeholder: '151 23456789' },
  { code: '+33', name: 'France', flag: '🇫🇷', minDigits: 9, maxDigits: 9, placeholder: '6 12 34 56 78' },
  { code: '+81', name: 'Japan', flag: '🇯🇵', minDigits: 10, maxDigits: 10, placeholder: '90-1234-5678' },
];

const serviceCategories = {
  general: ['General Consultation / Free Site Assessment'],
  deviceCare: [
    'Laptop & Desktop Repair',
    'Apple Macbook Repair',
    'Chip Level Mother Board Repair',
    'Data Recovery',
    'SSD & RAM Upgrades',
    'Genuine Spareparts',
    'AMC',
    'Doorstep Pickup & Delivery',
  ],
  automation: [
    'Smart Home Automation',
    'CCTV',
    'Smartdoor Locks',
    'Video Door Phones',
    'Smart Lighting',
    'Home WiFi & Mesh',
    'Access Control',
    'Voice Assistants',
    'Home Cyber Security',
  ],
  business: [
    'IT Infrastructure',
    'Cloud Solutions (Microsoft Azure, AWS, GCP)',
    'Cybersecurity',
    'Managed IT Services',
    'NOC/SOC/TAC',
    'AI & Business Applications',
    'CRM/ERP',
    'WhatsApp Automation',
    'Custom Software Development',
  ],
};

const allFlatServices = [
  ...serviceCategories.general,
  ...serviceCategories.deviceCare,
  ...serviceCategories.automation,
  ...serviceCategories.business,
];

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    service: initialService || 'General Consultation / Free Site Assessment',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string | null;
    phone?: string | null;
    service?: string | null;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    phone?: boolean;
    service?: boolean;
  }>({});

  const [highlightedService, setHighlightedService] = useState<string | null>(initialService || null);
  const [submitted, setSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState({ active: false, x: 50, y: 50 });

  const currentCountry = COUNTRIES.find((c) => c.code === formData.countryCode) || COUNTRIES[0];

  const validateField = (field: 'name' | 'phone' | 'service', value: string, code = formData.countryCode) => {
    if (field === 'name') {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter your name or organization.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters long.';
      if (!/^[a-zA-Z0-9\s.,&'-]+$/.test(trimmed)) return 'Please enter a valid name.';
      return null;
    }

    if (field === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Please enter your phone number.';

      const country = COUNTRIES.find((c) => c.code === code) || COUNTRIES[0];
      if (code === '+91') {
        if (digits.length !== 10) {
          return 'Indian mobile numbers must be exactly 10 digits.';
        }
        if (!/^[6-9]/.test(digits)) {
          return 'Mobile numbers in India must start with 6, 7, 8, or 9.';
        }
      } else {
        if (digits.length < country.minDigits || digits.length > country.maxDigits) {
          return `Please enter a valid ${country.minDigits}${country.minDigits !== country.maxDigits ? `-${country.maxDigits}` : ''}-digit phone number.`;
        }
      }
      return null;
    }

    if (field === 'service') {
      if (!value || value.startsWith('--')) {
        return 'Please select a valid service.';
      }
      return null;
    }

    return null;
  };

  const handleNameChange = (val: string) => {
    setFormData((prev) => ({ ...prev, name: val }));
    if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateField('name', val) }));
    }
  };

  const handleCountryChange = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', formData.phone, code) }));
    }
  };

  const handlePhoneChange = (val: string) => {
    const rawDigits = val.replace(/\D/g, '');
    const max = currentCountry.maxDigits;
    const cleanDigits = rawDigits.slice(0, max);

    setFormData((prev) => ({ ...prev, phone: cleanDigits }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', cleanDigits, formData.countryCode) }));
    }
  };

  const handleServiceChange = (val: string) => {
    setFormData((prev) => ({ ...prev, service: val }));
    if (touched.service) {
      setErrors((prev) => ({ ...prev, service: validateField('service', val) }));
    }
  };

  const handleBlur = (field: 'name' | 'phone' | 'service') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') {
      setErrors((prev) => ({ ...prev, name: validateField('name', formData.name) }));
    } else if (field === 'phone') {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', formData.phone, formData.countryCode) }));
    } else if (field === 'service') {
      setErrors((prev) => ({ ...prev, service: validateField('service', formData.service) }));
    }
  };

  useEffect(() => {
    const handleSelectService = (e: CustomEvent<string>) => {
      const selected = e.detail;
      if (!selected) return;

      const matched = allFlatServices.find(
        (opt) => 
          opt.toLowerCase() === selected.toLowerCase() ||
          opt.toLowerCase().includes(selected.toLowerCase()) ||
          selected.toLowerCase().includes(opt.toLowerCase())
      );

      const finalService = matched || selected;

      setFormData((prev) => ({
        ...prev,
        service: finalService,
      }));

      setHighlightedService(finalService);
      setErrors((prev) => ({ ...prev, service: null }));

      // Scroll smoothly into view
      setTimeout(() => {
        const formEl = document.getElementById('contact-form') || document.getElementById('contact');
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
    };

    window.addEventListener('select-service' as any, handleSelectService as any);
    return () => {
      window.removeEventListener('select-service' as any, handleSelectService as any);
    };
  }, []);

  const handleMapMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMapZoom({ active: true, x, y });
  };

  const handleMapMouseLeave = () => {
    setMapZoom({ active: false, x: 50, y: 50 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField('name', formData.name);
    const phoneErr = validateField('phone', formData.phone, formData.countryCode);
    const serviceErr = validateField('service', formData.service);

    setTouched({
      name: true,
      phone: true,
      service: true,
    });

    setErrors({
      name: nameErr,
      phone: phoneErr,
      service: serviceErr,
    });

    if (nameErr || phoneErr || serviceErr) {
      if (nameErr) {
        document.getElementById('name')?.focus();
      } else if (phoneErr) {
        document.getElementById('phone')?.focus();
      } else if (serviceErr) {
        document.getElementById('service')?.focus();
      }
      return;
    }

    // Construct the WhatsApp message URL with full international country code
    const fullPhone = `${formData.countryCode} ${formData.phone.trim()}`;
    const textContent = `*TSK One IT Inquiry*\n\n*Name:* ${formData.name.trim()}\n*Phone:* ${fullPhone}\n*Service Needed:* ${formData.service}\n*Message/Requirements:* ${formData.message.trim() || 'Requesting Free Site Assessment & Consultation.'}`;
    
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
              <div id="contact-form" className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="mb-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                      Direct Dispatch Form
                    </span>
                    {highlightedService && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 animate-pulse">
                        <BookmarkCheck className="size-3.5 text-emerald-600" />
                        <span>Pre-selected: {highlightedService}</span>
                      </span>
                    )}
                  </div>
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

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Field 1: Name / Organization */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="name" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider font-mono">
                        Your Name / Organization <span className="text-sky-600">*</span>
                      </label>
                      {touched.name && !errors.name && formData.name.trim() && (
                        <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                          <CheckCircle className="size-3" /> Valid
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Rajesh Kumar or TSK Enterprises"
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-4 py-3 rounded-xl border text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                        errors.name && touched.name
                          ? 'bg-rose-50/40 border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                          : 'bg-sky-50/50 border-sky-200 focus:border-sky-500 focus:ring-sky-200'
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="size-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2: Phone / Mobile Number with Country Code Dropdown */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="phone" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider font-mono">
                        Phone / Mobile Number <span className="text-sky-600">*</span>
                      </label>
                      {touched.phone && !errors.phone && formData.phone.trim() && (
                        <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                          <CheckCircle className="size-3" /> Valid
                        </span>
                      )}
                    </div>

                    <div 
                      className={`flex rounded-xl border transition-all overflow-hidden focus-within:ring-2 focus-within:bg-white shadow-xs ${
                        errors.phone && touched.phone
                          ? 'border-rose-400 bg-rose-50/40 focus-within:border-rose-500 focus-within:ring-rose-200'
                          : 'border-sky-200 bg-sky-50/50 focus-within:border-sky-500 focus-within:ring-sky-200'
                      }`}
                    >
                      {/* Country Selector Dropdown */}
                      <div className="relative border-r border-sky-200 bg-sky-100/50 hover:bg-sky-100 transition-colors flex items-center shrink-0">
                        <select
                          aria-label="Country Dial Code"
                          value={formData.countryCode}
                          onChange={(e) => handleCountryChange(e.target.value)}
                          className="appearance-none bg-transparent pl-3 pr-7 py-3 text-xs sm:text-sm font-bold text-[#0b1b3a] focus:outline-none cursor-pointer"
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c.code + c.name} value={c.code} className="bg-white text-slate-800 py-1">
                              {c.flag} {c.code} ({c.name})
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-2 size-3.5 text-slate-500" />
                      </div>

                      {/* Phone Digits Input */}
                      <input
                        type="tel"
                        id="phone"
                        placeholder={currentCountry.placeholder}
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        maxLength={currentCountry.maxDigits}
                        className="w-full px-4 py-3 bg-transparent text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none font-sans"
                      />
                    </div>

                    {errors.phone && touched.phone && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="size-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 3: Service Needed */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="service" className="block text-xs font-bold text-[#0b1b3a] uppercase tracking-wider font-mono">
                        Service Needed <span className="text-sky-600">*</span>
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleServiceChange(e.target.value)}
                        onBlur={() => handleBlur('service')}
                        className={`w-full px-4 py-3 rounded-xl border text-[#0b1b3a] text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all cursor-pointer appearance-none ${
                          errors.service && touched.service
                            ? 'bg-rose-50/40 border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                            : 'bg-sky-50/50 border-sky-200 focus:border-sky-500 focus:ring-sky-200'
                        }`}
                      >
                        {serviceCategories.general.map((s) => (
                          <option key={s} value={s} className="bg-white text-[#0b1b3a] font-semibold">
                            {s}
                          </option>
                        ))}

                        <optgroup label="01. IT DEVICE CARE" className="font-bold text-sky-700 bg-sky-50/60">
                          {serviceCategories.deviceCare.map((s) => (
                            <option key={s} value={s} className="bg-white text-slate-800 font-normal">
                              {s}
                            </option>
                          ))}
                        </optgroup>

                        <optgroup label="02. HOME AUTOMATION" className="font-bold text-amber-700 bg-amber-50/60">
                          {serviceCategories.automation.map((s) => (
                            <option key={s} value={s} className="bg-white text-slate-800 font-normal">
                              {s}
                            </option>
                          ))}
                        </optgroup>

                        <optgroup label="03. BUSINESS SOLUTIONS" className="font-bold text-indigo-700 bg-indigo-50/60">
                          {serviceCategories.business.map((s) => (
                            <option key={s} value={s} className="bg-white text-slate-800 font-normal">
                              {s}
                            </option>
                          ))}
                        </optgroup>

                        {/* Any custom or dynamically passed service */}
                        {!allFlatServices.includes(formData.service) && formData.service && (
                          <option value={formData.service} className="bg-white text-[#0b1b3a]">
                            {formData.service}
                          </option>
                        )}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    </div>

                    {errors.service && touched.service && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="size-3.5 shrink-0" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 4: Requirements / Notes (Optional) */}
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

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#1d5fd1] to-[#0284c7] hover:brightness-110 hover:shadow-lg transition-all shadow-md shadow-sky-500/20 min-h-[52px] group cursor-pointer"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Submit &amp; Chat on WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5 font-sans">
                      Instant direct dispatch &bull; No spam &bull; 100% Privacy Protected
                    </p>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>

      {/* 100% Full Screen Width Google Map with Cursor-Tracking Magnification & Color Transition */}
      <div 
        onMouseMove={handleMapMouseMove}
        onMouseEnter={() => setMapZoom(prev => ({ ...prev, active: true }))}
        onMouseLeave={handleMapMouseLeave}
        className="w-full mt-16 sm:mt-20 relative overflow-hidden border-t border-slate-200 bg-slate-900 cursor-crosshair group"
      >
        <div
          style={{
            transformOrigin: `${mapZoom.x}% ${mapZoom.y}%`,
            transform: mapZoom.active ? 'scale(1.25)' : 'scale(1)',
            transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease-in-out',
          }}
          className={`w-full h-[380px] sm:h-[440px] lg:h-[480px] will-change-transform ${
            mapZoom.active 
              ? 'grayscale-0 contrast-100 brightness-100' 
              : 'grayscale contrast-125 brightness-95'
          }`}
        >
          {/* Google Maps Embed */}
          <iframe
            title="TSK OneIT - TSK AUTOMATIONS Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.587823901968!2d80.2566042!3d13.0559237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c34cda0b5b%3A0xb851e48614c0383d!2sTSK%20AUTOMATIONS!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full block"
          />
        </div>
      </div>
    </section>
  );
}
