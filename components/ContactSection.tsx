'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  AlertCircle,
  Clock,
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

const serviceOptions = [
  { group: 'IT Device Care', items: [
    'Laptop & Desktop Repair',
    'Apple MacBook Repair',
    'Chip-Level Motherboard Repair',
    'Data Recovery',
    'SSD & RAM Upgrades',
    'Genuine Spare Parts',
    'AMC / Annual Maintenance Contracts',
    'Doorstep Pickup & Delivery',
  ]},
  { group: 'Home Automation', items: [
    'Smart Home Automation',
    'Smart Lighting',
    'Voice Assistants (Alexa / HomeKit / Google)',
    'Home Wi-Fi & Mesh Networking',
    'CCTV Surveillance Systems',
    'Smart Door Locks',
    'Video Door Phones',
    'Access Control',
    'Home Cyber Security',
  ]},
  { group: 'Business Solutions', items: [
    'IT Infrastructure',
    'Cloud Solutions (Azure, AWS, GCP)',
    'Managed IT Services & SLA',
    'NOC / SOC / TAC Monitoring',
    'Enterprise Cybersecurity',
    'AI & Business Applications',
    'CRM / ERP Implementations',
    'WhatsApp Business API Automation',
    'Custom Software Development',
  ]},
  { group: 'General', items: [
    'General Consultation / Free Site Assessment',
  ]}
];

interface ContactSectionProps {
  initialService?: string;
  isStandalonePage?: boolean;
}

export default function ContactSection({ initialService, isStandalonePage = false }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    service: initialService || '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string | null;
    phone?: string | null;
    email?: string | null;
    service?: string | null;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    service?: boolean;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mapZoom, setMapZoom] = useState({ active: false, x: 50, y: 50 });

  const currentCountry = COUNTRIES.find((c) => c.code === formData.countryCode) || COUNTRIES[0];

  const validateField = (field: 'name' | 'phone' | 'email' | 'service', value: string, code = formData.countryCode) => {
    if (field === 'name') {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter your name or organization.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
      return null;
    }

    if (field === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (!digits) return 'Please enter your mobile number.';

      const country = COUNTRIES.find((c) => c.code === code) || COUNTRIES[0];
      if (code === '+91') {
        if (digits.length !== 10) return 'Indian mobile numbers must be 10 digits.';
        if (!/^[6-9]/.test(digits)) return 'Mobile number must start with 6, 7, 8, or 9.';
      } else {
        if (digits.length < country.minDigits || digits.length > country.maxDigits) {
          return `Please enter a valid phone number.`;
        }
      }
      return null;
    }

    if (field === 'email') {
      const trimmed = value.trim();
      if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return null;
    }

    if (field === 'service') {
      if (!value) return 'Please select a service.';
      return null;
    }

    return null;
  };

  const handleBlur = (field: 'name' | 'phone' | 'email' | 'service') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') {
      setErrors((prev) => ({ ...prev, name: validateField('name', formData.name) }));
    } else if (field === 'phone') {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', formData.phone, formData.countryCode) }));
    } else if (field === 'email') {
      setErrors((prev) => ({ ...prev, email: validateField('email', formData.email) }));
    } else if (field === 'service') {
      setErrors((prev) => ({ ...prev, service: validateField('service', formData.service) }));
    }
  };

  useEffect(() => {
    const handleSelectService = (e: CustomEvent<string>) => {
      const selected = e.detail;
      if (!selected) return;

      setFormData((prev) => ({
        ...prev,
        service: selected,
      }));
      setErrors((prev) => ({ ...prev, service: null }));

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const nameErr = validateField('name', formData.name);
    const phoneErr = validateField('phone', formData.phone, formData.countryCode);
    const emailErr = validateField('email', formData.email);
    const serviceErr = validateField('service', formData.service);

    setTouched({
      name: true,
      phone: true,
      email: true,
      service: true,
    });

    setErrors({
      name: nameErr,
      phone: phoneErr,
      email: emailErr,
      service: serviceErr,
    });

    if (nameErr || phoneErr || emailErr || serviceErr) {
      if (nameErr) document.getElementById('name')?.focus();
      else if (phoneErr) document.getElementById('phone')?.focus();
      else if (serviceErr) document.getElementById('service')?.focus();
      else if (emailErr) document.getElementById('email')?.focus();
      return;
    }

    setIsSubmitting(true);

    const fullPhone = `${formData.countryCode} ${formData.phone.trim()}`;
    const emailLine = formData.email.trim() ? `\n*Email:* ${formData.email.trim()}` : '';
    const textContent = `*TSK One IT Inquiry*\n\n*Name:* ${formData.name.trim()}\n*Phone:* ${fullPhone}${emailLine}\n*Service Interested In:* ${formData.service}\n*Requirements/Notes:* ${formData.message.trim() || 'Requesting consultation & site assessment.'}`;
    const whatsappUrl = `https://wa.me/919150843991?text=${encodeURIComponent(textContent)}`;

    try {
      // Automatic Email Notification Dispatch to your configured email
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: fullPhone,
          email: formData.email.trim(),
          service: formData.service,
          message: formData.message.trim(),
          source: isStandalonePage ? 'Dedicated Contact Page (/contact)' : 'Homepage Contact Section',
        }),
      });

      setSubmitted(true);
      // Open WhatsApp chat in background/new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (err: any) {
      console.error('Submission error:', err);
      // Even if background email fails, still acknowledge submission
      setSubmitted(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact"
      aria-labelledby="contact-heading"
      className={`bg-white text-slate-900 relative ${isStandalonePage ? 'pt-28 pb-16' : 'py-20 lg:py-28'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main 2-Column Split matching Design Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Editorial Brand Narrative, Email, Hotline & Socials          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-10 lg:pr-4">
            
            {/* Main Heading & Subtitle */}
            <div className="space-y-4">
              <h2 
                id="contact-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 font-serif leading-[1.05]"
              >
                Let’s Talk
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-md">
                Connect directly with certified engineers or visit our Service Exploration Hub in Chennai.
              </p>
            </div>

            {/* Email Section */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-serif">
                Email
              </h3>
              <div className="space-y-1">
                <a 
                  href="mailto:info@tskoneit.com"
                  className="block text-sm sm:text-base text-slate-700 hover:text-[#0284c7] font-medium transition-colors"
                >
                  info@tskoneit.com
                </a>
                <a 
                  href="mailto:support@tskoneit.com"
                  className="block text-xs sm:text-sm text-slate-500 hover:text-[#0284c7] transition-colors"
                >
                  support@tskoneit.com
                </a>
              </div>
            </div>

            {/* Phone / Hotline Section */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-serif">
                Phone &amp; WhatsApp
              </h3>
              <div className="space-y-1 text-sm sm:text-base text-slate-700 font-medium">
                <div>
                  <a 
                    href="https://wa.me/919150843991" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors inline-flex items-center gap-2"
                  >
                    <span>+91 91508 43991</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      WhatsApp
                    </span>
                  </a>
                </div>
                <div>
                  <a 
                    href="tel:+914446030632" 
                    className="hover:text-[#0284c7] transition-colors inline-flex items-center gap-2"
                  >
                    <span>044 46030632</span>
                    <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      Landline
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Exploration Hub / Location Section */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-serif">
                Service Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
                Anna Salai, White Lane, Chennai, Tamil Nadu — 600002
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-slate-500">
                <Clock className="size-3.5 text-[#0284c7]" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM (Emergency 24x7)</span>
              </div>
            </div>

            {/* Socials Section */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-serif">
                Socials
              </h3>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm sm:text-base font-semibold text-slate-800">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 hover:text-[#0284c7] transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 hover:text-[#0284c7] transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 hover:text-[#0284c7] transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 hover:text-[#0284c7] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Minimalist Form matching Design Mockup                      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div id="contact-form" className="w-full">
              
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Your request has been prepared! Dispatching to our engineering desk on WhatsApp...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Field 1: Your Name / Organization */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-800">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (touched.name) setErrors((prev) => ({ ...prev, name: validateField('name', e.target.value) }));
                    }}
                    onBlur={() => handleBlur('name')}
                    placeholder=""
                    className={`w-full px-4 py-3.5 rounded-lg text-sm text-slate-900 bg-slate-100/80 hover:bg-slate-100 focus:bg-white border transition-all focus:outline-none ${
                      errors.name && touched.name
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-transparent focus:border-slate-300 focus:ring-1 focus:ring-slate-400'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Mobile Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-800">
                    Mobile Number
                  </label>
                  <div 
                    className={`flex rounded-lg border transition-all overflow-hidden ${
                      errors.phone && touched.phone
                        ? 'border-rose-400 bg-rose-50/30'
                        : 'border-transparent bg-slate-100/80 hover:bg-slate-100 focus-within:bg-white focus-within:border-slate-300 focus-within:ring-1 focus-within:ring-slate-400'
                    }`}
                  >
                    {/* Country Code Dropdown */}
                    <div className="relative border-r border-slate-200/80 bg-slate-200/50 flex items-center shrink-0">
                      <select
                        aria-label="Country Dial Code"
                        value={formData.countryCode}
                        onChange={(e) => {
                          setFormData({ ...formData, countryCode: e.target.value });
                          if (touched.phone) setErrors((prev) => ({ ...prev, phone: validateField('phone', formData.phone, e.target.value) }));
                        }}
                        className="appearance-none bg-transparent pl-3 pr-7 py-3 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.code + c.name} value={c.code} className="bg-white text-slate-800 py-1">
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2 size-3 text-slate-500" />
                    </div>

                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/[^\d\s-]/g, '');
                        setFormData({ ...formData, phone: digits });
                        if (touched.phone) setErrors((prev) => ({ ...prev, phone: validateField('phone', digits, formData.countryCode) }));
                      }}
                      onBlur={() => handleBlur('phone')}
                      maxLength={currentCountry.maxDigits}
                      placeholder={currentCountry.placeholder}
                      className="w-full px-4 py-3.5 bg-transparent text-sm text-slate-900 focus:outline-none"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: What service are you interested in */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-xs sm:text-sm font-bold text-slate-800">
                    What service are you interested in
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (touched.service) setErrors((prev) => ({ ...prev, service: validateField('service', e.target.value) }));
                      }}
                      onBlur={() => handleBlur('service')}
                      className={`w-full px-4 py-3.5 rounded-lg text-sm text-slate-900 bg-slate-100/80 hover:bg-slate-100 focus:bg-white border transition-all focus:outline-none appearance-none cursor-pointer ${
                        errors.service && touched.service
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-transparent focus:border-slate-300 focus:ring-1 focus:ring-slate-400'
                      }`}
                    >
                      <option value="" disabled className="text-slate-400">
                        Select project type
                      </option>
                      {serviceOptions.map((cat) => (
                        <optgroup key={cat.group} label={cat.group} className="font-bold text-slate-900">
                          {cat.items.map((srv) => (
                            <option key={srv} value={srv} className="text-slate-800 font-normal">
                              {srv}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                  </div>
                  {errors.service && touched.service && (
                    <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Field 4: e-mail */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-800">
                    e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (touched.email) setErrors((prev) => ({ ...prev, email: validateField('email', e.target.value) }));
                    }}
                    onBlur={() => handleBlur('email')}
                    placeholder=""
                    className={`w-full px-4 py-3.5 rounded-lg text-sm text-slate-900 bg-slate-100/80 hover:bg-slate-100 focus:bg-white border transition-all focus:outline-none ${
                      errors.email && touched.email
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-transparent focus:border-slate-300 focus:ring-1 focus:ring-slate-400'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field 5: Requirements / Notes */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-800">
                    Requirements / Notes
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3.5 rounded-lg text-sm text-slate-900 bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-slate-300 focus:ring-1 focus:ring-slate-400 transition-all focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-md text-sm font-black uppercase tracking-widest text-white bg-slate-950 hover:bg-[#0284c7] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="size-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-3 font-sans">
                    100% Privacy Protected &bull; Direct Email &amp; WhatsApp Engineering Desk Dispatch
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Google Map at the bottom */}
      <div 
        onMouseMove={handleMapMouseMove}
        onMouseEnter={() => setMapZoom((prev) => ({ ...prev, active: true }))}
        onMouseLeave={handleMapMouseLeave}
        className="w-full mt-20 relative overflow-hidden border-t border-slate-200 bg-slate-900 cursor-crosshair group"
      >
        <div
          style={{
            transformOrigin: `${mapZoom.x}% ${mapZoom.y}%`,
            transform: mapZoom.active ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s ease-in-out',
          }}
          className={`w-full h-[360px] sm:h-[420px] will-change-transform ${
            mapZoom.active 
              ? 'grayscale-0 contrast-100 brightness-100' 
              : 'grayscale contrast-125 brightness-95'
          }`}
        >
          <iframe
            title="TSK OneIT - Location Map"
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
