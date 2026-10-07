'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles
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

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: 'General Consultation / Free Site Assessment',
    notes: '',
  });

  const [errors, setErrors] = useState<{
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    service?: string | null;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    service?: boolean;
  }>({});

  const [submitted, setSubmitted] = useState(false);

  const currentCountry = COUNTRIES.find((c) => c.code === formData.countryCode) || COUNTRIES[0];

  // Automatic popup after 15 seconds of browsing
  useEffect(() => {
    const timer = setTimeout(() => {
      const alreadyOpened = sessionStorage.getItem('tsk_modal_seen');
      if (!alreadyOpened) {
        setIsOpen(true);
        sessionStorage.setItem('tsk_modal_seen', 'true');
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Listen for custom trigger events across the app
  useEffect(() => {
    const handleOpenModal = (e: CustomEvent<{ service?: string }>) => {
      if (e?.detail?.service) {
        const selected = e.detail.service;
        const matched = allFlatServices.find(
          (opt) =>
            opt.toLowerCase() === selected.toLowerCase() ||
            opt.toLowerCase().includes(selected.toLowerCase()) ||
            selected.toLowerCase().includes(opt.toLowerCase())
        );
        setFormData((prev) => ({ ...prev, service: matched || selected }));
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener('open-enquiry-modal' as any, handleOpenModal as any);

    // Escape key listener to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-enquiry-modal' as any, handleOpenModal as any);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateField = (
    field: 'name' | 'email' | 'phone' | 'service',
    value: string,
    code = formData.countryCode
  ) => {
    if (field === 'name') {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter your name or organization.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters long.';
      if (!/^[a-zA-Z0-9\s.,&'-]+$/.test(trimmed)) return 'Please enter a valid name.';
      return null;
    }

    if (field === 'email') {
      const trimmed = value.trim();
      if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return null;
    }

    if (field === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Please enter your mobile/phone number.';

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

  const handleEmailChange = (val: string) => {
    setFormData((prev) => ({ ...prev, email: val }));
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateField('email', val) }));
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

  const handleBlur = (field: 'name' | 'email' | 'phone' | 'service') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') {
      setErrors((prev) => ({ ...prev, name: validateField('name', formData.name) }));
    } else if (field === 'email') {
      setErrors((prev) => ({ ...prev, email: validateField('email', formData.email) }));
    } else if (field === 'phone') {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', formData.phone, formData.countryCode) }));
    } else if (field === 'service') {
      setErrors((prev) => ({ ...prev, service: validateField('service', formData.service) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone, formData.countryCode);
    const serviceErr = validateField('service', formData.service);

    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
    });

    setErrors({
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
      service: serviceErr,
    });

    if (nameErr || emailErr || phoneErr || serviceErr) {
      return;
    }

    // Format full phone number
    const fullPhone = `${formData.countryCode} ${formData.phone.trim()}`;
    const emailText = formData.email.trim() ? `\n*Email:* ${formData.email.trim()}` : '';
    const notesText = formData.notes.trim() ? `\n*Requirements:* ${formData.notes.trim()}` : '';

    const textContent = `*TSK One IT Inquiry (Popup Form)*\n\n*Name:* ${formData.name.trim()}${emailText}\n*Phone:* ${fullPhone}\n*Service Needed:* ${formData.service}${notesText || '\n*Requirements:* Requesting Free Assessment & Consultation.'}`;

    const whatsappUrl = `https://wa.me/919150843991?text=${encodeURIComponent(textContent)}`;

    setSubmitted(true);

    // Open WhatsApp safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Auto close after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
      />

      {/* Main Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row z-10 animate-scaleUp max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close form popup"
          className="absolute top-4 right-4 z-30 size-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
        >
          <X className="size-5" />
        </button>

        {/* Left Side: Brand Visual & High-Impact Value Props */}
        <div className="md:w-5/12 bg-[#06142f] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shrink-0">
          
          {/* Light Visible High-Tech Server & Network Background Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop')` }}
          />

          {/* Rich Royal Blue Depth Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06142f]/92 via-[#0a2a66]/88 to-[#1e40af]/80 -z-0 pointer-events-none" />

          {/* Ambient Lighting Accents */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
            <div className="absolute -top-12 -left-12 size-48 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 size-48 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <div className="relative z-10 space-y-4">
            {/* Clean Logo Header */}
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="TSK One IT Logo"
                  width={40}
                  height={40}
                  className="size-full object-contain rounded-lg shadow-sm"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider uppercase leading-none font-sans text-white">
                  TSK ONE<span className="text-cyan-300">IT</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-200/80 uppercase mt-0.5">
                  INSPIRED BY YOU
                </span>
              </div>
            </div>

            {/* Header Style Accent & Headline (Matching Site Section Headers) */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 bg-cyan-300 rounded-full" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                  One Partner. Every IT Need.
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Transform Your <br />
                <span className="text-cyan-300">IT Infrastructure</span> <br />
                Today!
              </h3>
            </div>

            {/* High-Trust Stats Box */}
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold text-base sm:text-lg">
                <ShieldCheck className="size-5 shrink-0 text-cyan-300" />
                <span>20+ Years Experience</span>
              </div>
              <p className="text-[11px] text-slate-200 leading-snug">
                Trusted by 5000+ businesses &amp; homes across Chennai &amp; Tamil Nadu.
              </p>
            </div>
          </div>

          {/* Bottom Bullet Points */}
          <div className="relative z-10 pt-4 border-t border-white/15 space-y-2 text-xs font-semibold text-sky-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-emerald-400 shrink-0" />
              <span>Chip-Level Repair &amp; Cleanroom Recovery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-emerald-400 shrink-0" />
              <span>Smart Home &amp; CCTV Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-emerald-400 shrink-0" />
              <span>Cloud, Cybersecurity &amp; 24x7 AMC Support</span>
            </div>
          </div>
        </div>

        {/* Right Side: High-Converting Validation Form with Indian Names */}
        <div className="md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="pr-8">
              <h3 
                id="enquiry-modal-title"
                className="text-xl sm:text-2xl font-black text-[#0b1b3a] tracking-tight"
              >
                Request a Free Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your details — our lead engineering desk will call/connect within minutes.
              </p>
            </div>

            {/* Submission Success Alert */}
            {submitted && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5 animate-fadeIn">
                <CheckCircle className="size-5 text-emerald-600 shrink-0" />
                <span>Dispatching details to WhatsApp desk... Our engineer is connecting!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-3.5 mt-5">
              {/* Field 1: Your Name (Indian Name Placeholder) */}
              <div>
                <label htmlFor="modal-name" className="block text-[11px] font-bold text-[#0b1b3a] uppercase tracking-wider mb-1 font-mono">
                  Your Name / Organization <span className="text-sky-600">*</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  placeholder="e.g. Rajesh Kumar or TSK Enterprises"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.name && touched.name
                      ? 'bg-rose-50/40 border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                      : 'bg-sky-50/40 border-sky-200 focus:border-sky-500 focus:ring-sky-200'
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle className="size-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Email Address (Optional) */}
              <div>
                <label htmlFor="modal-email" className="block text-[11px] font-bold text-[#0b1b3a] uppercase tracking-wider mb-1 font-mono">
                  Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  placeholder="e.g. rajesh@company.com or contact@business.in"
                  value={formData.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.email && touched.email
                      ? 'bg-rose-50/40 border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                      : 'bg-sky-50/40 border-sky-200 focus:border-sky-500 focus:ring-sky-200'
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle className="size-3 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Phone Number with Country Dropdown */}
              <div>
                <label htmlFor="modal-phone" className="block text-[11px] font-bold text-[#0b1b3a] uppercase tracking-wider mb-1 font-mono">
                  Phone / Mobile Number <span className="text-sky-600">*</span>
                </label>
                
                <div 
                  className={`flex rounded-xl border transition-all overflow-hidden focus-within:ring-2 focus-within:bg-white shadow-xs ${
                    errors.phone && touched.phone
                      ? 'border-rose-400 bg-rose-50/40 focus-within:border-rose-500 focus-within:ring-rose-200'
                      : 'border-sky-200 bg-sky-50/40 focus-within:border-sky-500 focus-within:ring-sky-200'
                  }`}
                >
                  {/* Country Selector */}
                  <div className="relative border-r border-sky-200 bg-sky-100/50 hover:bg-sky-100 transition-colors flex items-center shrink-0">
                    <select
                      aria-label="Country Dial Code"
                      value={formData.countryCode}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="appearance-none bg-transparent pl-2.5 pr-6 py-2.5 text-xs font-bold text-[#0b1b3a] focus:outline-none cursor-pointer"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code + c.name} value={c.code} className="bg-white text-slate-800 py-1">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-1.5 size-3 text-slate-500" />
                  </div>

                  {/* Phone Digits */}
                  <input
                    type="tel"
                    id="modal-phone"
                    placeholder={currentCountry.placeholder}
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    maxLength={currentCountry.maxDigits}
                    className="w-full px-3 py-2.5 bg-transparent text-[#0b1b3a] placeholder-slate-400 text-sm focus:outline-none font-sans"
                  />
                </div>

                {errors.phone && touched.phone && (
                  <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle className="size-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Field 4: Select Service */}
              <div>
                <label htmlFor="modal-service" className="block text-[11px] font-bold text-[#0b1b3a] uppercase tracking-wider mb-1 font-mono">
                  Select Required Service <span className="text-sky-600">*</span>
                </label>
                <div className="relative">
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    onBlur={() => handleBlur('service')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-[#0b1b3a] text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all cursor-pointer appearance-none ${
                      errors.service && touched.service
                        ? 'bg-rose-50/40 border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                        : 'bg-sky-50/40 border-sky-200 focus:border-sky-500 focus:ring-sky-200'
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

                    {!allFlatServices.includes(formData.service) && formData.service && (
                      <option value={formData.service} className="bg-white text-[#0b1b3a]">
                        {formData.service}
                      </option>
                    )}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-500" />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#1d5fd1] to-[#0284c7] hover:brightness-110 hover:shadow-lg transition-all shadow-md shadow-sky-500/20 min-h-[48px] group cursor-pointer"
                >
                  <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Submit &amp; Connect on WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center mt-2 font-sans flex items-center justify-center gap-1.5">
                  <span>🔒</span>
                  <span>No spam. 100% Free Consultation. No obligation.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
