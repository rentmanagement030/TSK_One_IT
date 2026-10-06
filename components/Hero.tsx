'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';
import { 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Rocket, 
  Landmark, 
  FileSpreadsheet, 
  Cpu, 
  Activity, 
  Sliders, 
  LifeBuoy,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto cycle active step highlight every 3 seconds for dynamic feel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const audiences = [
    { name: 'Homes', icon: Home, desc: 'Smart living & Wi-Fi' },
    { name: 'Businesses', icon: Building2, desc: 'Workspaces & IT Ops' },
    { name: 'Startups', icon: Rocket, desc: 'Agile Cloud & Growth' },
    { name: 'Enterprises', icon: Landmark, desc: 'NOC / SOC & Scale' },
  ];

  const processSteps = [
    { step: '01', title: 'Planning', icon: FileSpreadsheet, desc: 'Architecture & Site Assessment' },
    { step: '02', title: 'Implementation', icon: Cpu, desc: 'Hardware, Cabling & Deployment' },
    { step: '03', title: 'Monitoring', icon: Activity, desc: '24x7 NOC / SOC Diagnostics' },
    { step: '04', title: 'Management', icon: Sliders, desc: 'Policy, SLA & Updates' },
    { step: '05', title: 'Support', icon: LifeBuoy, desc: 'Rapid Emergency Dispatch' },
  ];

  return (
    <section 
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#e0f7fa]/60 via-[#eef8ff] to-[#f4f9fd] text-slate-900 pt-8 pb-16 lg:py-20"
    >
      {/* Dynamic Animated Ambient Glow Orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-cyan-300/25 blur-[120px] animate-float"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-sky-300/25 blur-[130px] animate-float-delayed"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-200/20 blur-[100px] animate-pulse-glow"
      />

      {/* Grid line subtle overlay */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow badge with glowing beacon */}
            <ScrollReveal animation="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-xs sm:text-sm font-bold text-sky-800 shadow-sm shimmer-badge">
                <span className="w-2 h-2 rounded-full bg-cyan-500 radar-ring text-cyan-500" />
                <span>Smart &bull; Secure &bull; Connected</span>
              </div>
            </ScrollReveal>

            {/* Main H1 Headline with staggered animation */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div>
                <h1 
                  id="hero-heading"
                  className="font-black tracking-tight text-[#0b1b3a] text-balance"
                  style={{ fontSize: 'clamp(2.2rem, 4.3vw + 0.5rem, 3.85rem)', lineHeight: 1.12 }}
                >
                  Technology Should <span className="text-[#0284c7] relative inline-block">
                    Work.
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />
                  </span><br />
                  <span>Not Become Your Problem.</span>
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full mt-3" />
              </div>
            </ScrollReveal>

            {/* Sub-headline & Secondary Line */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="space-y-1.5">
                <p className="text-lg sm:text-xl font-bold text-[#0f172a]">
                  Complete IT Solutions for Homes, Businesses &amp; Enterprises.
                </p>
                <p className="text-sm sm:text-base font-semibold text-sky-700 tracking-wide">
                  Your Technology. Our Responsibility. Smart. Secure. Connected.
                </p>
              </div>
            </ScrollReveal>

            {/* Intro Paragraph */}
            <ScrollReveal animation="fade-up" delay={400}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                From everyday IT support to enterprise infrastructure, cybersecurity, business applications and smart automation, 
                <strong className="text-slate-900 font-bold"> TSK One IT</strong> provides complete end-to-end technology solutions.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
                <MagneticButton as="div" strength={0.35}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-black uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 hover:brightness-105 shadow-lg shadow-amber-400/25 transition-all text-center min-h-[52px] group"
                  >
                    <span>Book Free Site Assessment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton as="div" strength={0.25}>
                  <a
                    href="tel:+914446030632"
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-sky-200 shadow-sm transition-all text-center min-h-[52px] group"
                    aria-label="Call Now: 044 46030632"
                  >
                    <PhoneCall className="w-4 h-4 text-sky-600 group-hover:rotate-12 transition-transform" />
                    <span>Call Now: 044 46030632</span>
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Key Assurance Highlights */}
            <ScrollReveal animation="fade-up" delay={600}>
              <div className="pt-2 grid grid-cols-2 sm:flex items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-bold">
                <div className="flex items-center gap-1.5 hover:text-sky-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified Engineers</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-sky-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24x7 Support Available</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1 hover:text-sky-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>End-to-End Delivery</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Glass Card with Staggered Steps */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="scale-up" delay={300}>
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(14,165,233,0.18)] border border-sky-100 hover:border-sky-300 transition-all duration-300">
                
                {/* Top Card Header: Audiences */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700">
                      Who We Empower
                    </span>
                    <span className="text-[11px] font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                      Enterprise &bull; SMB &bull; Home
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2.5">
                    {audiences.map((aud) => {
                      const Icon = aud.icon;
                      return (
                        <div
                          key={aud.name}
                          className="flex items-start gap-2.5 p-3 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 hover:bg-white transition-all group cursor-default"
                        >
                          <div className="p-2 rounded-xl bg-sky-100 text-sky-700 shrink-0 group-hover:scale-110 group-hover:bg-[#0a2a66] group-hover:text-white transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{aud.name}</div>
                            <div className="text-[11px] text-slate-500 leading-tight">{aud.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Middle Divider with animated shimmer */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent my-5" />

                {/* Bottom Card: 5-Step Process with Interactive Highlight */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>5-Step Execution Workflow</span>
                    </span>
                    <span className="text-[11px] text-slate-600 font-semibold font-mono">End-to-End</span>
                  </div>

                  <div className="space-y-2">
                    {processSteps.map((p, idx) => {
                      const Icon = p.icon;
                      const isCurrent = activeStep === idx;
                      return (
                        <div
                          key={p.title}
                          onMouseEnter={() => setActiveStep(idx)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-all duration-300 text-xs cursor-pointer ${
                            isCurrent
                              ? 'bg-sky-50 border-sky-300 shadow-sm translate-x-1'
                              : 'bg-slate-50/80 border-slate-100 hover:border-sky-200'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`font-mono font-bold text-[11px] px-2 py-0.5 rounded border transition-colors ${
                              isCurrent 
                                ? 'bg-[#0a2a66] text-white border-[#0a2a66]' 
                                : 'bg-sky-100 text-sky-700 border-sky-200'
                            }`}>
                              {p.step}
                            </span>
                            <span className="font-bold text-slate-800">{p.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-500 hidden sm:inline">{p.desc}</span>
                            <Icon className={`w-3.5 h-3.5 transition-colors ${isCurrent ? 'text-sky-600' : 'text-slate-400'}`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
