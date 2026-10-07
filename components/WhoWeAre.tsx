'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import WhoWeAreVisual from './WhoWeAreVisual';
import { 
  Briefcase, 
  Building2, 
  Layers, 
  Heart, 
  ArrowRight, 
  CheckCircle2,
  Lightbulb,
  Target,
  ShieldCheck,
  Award,
  Clock,
  UserCheck
} from 'lucide-react';

export default function WhoWeAre() {
  // 4 Numerical Metric Proof Points
  const stats = [
    {
      icon: Award,
      value: '20+',
      label: 'Years of Industry Experience',
    },
    {
      icon: Building2,
      value: '500+',
      label: 'Enterprise Setups & Deployments',
    },
    {
      icon: Layers,
      value: '26+',
      label: 'Specialized Tech Services',
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Customer-First Commitment',
    },
  ];

  // 5 Signature Why TSK Pillars (Exact highlights requested)
  const whyTskHighlights = [
    { text: '20+ Years of Industry Experience', icon: Award },
    { text: 'Certified Technology Experts', icon: ShieldCheck },
    { text: 'End-to-End Technology Solutions', icon: Layers },
    { text: '24×7 Support', icon: Clock },
    { text: 'Customer-First Approach', icon: UserCheck },
  ];

  return (
    <section 
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="bg-[#ffffff] text-[#0b1b3a] relative overflow-hidden"
    >
      {/* 1. TOP ABOUT BANNER (Dark Corporate Blue with Enhanced Tech Photography) */}
      <div className="relative bg-[#07193d] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-Bleed Background Tech Architecture Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.35] mix-blend-luminosity pointer-events-none scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden="true"
        />
        
        {/* Deep Blue Gradient Contrast Scrim */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#061430]/85 via-[#07193d]/65 to-[#0b1b3a]/90 pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Ambient Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Soft Blue Radial Glow */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-sky-500/15 blur-[140px] rounded-full"
        />

        {/* Banner Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              About Us
            </h2>
            
            {/* Signature Red Accent Bar */}
            <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-4 rounded-full" />

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              Welcome to <strong className="text-white font-bold">TSK OneIT</strong>, where intelligent infrastructure oversight and advanced security strengthen modern digital environments. As a trusted partner, we enable continuous visibility, proactive risk management, and reliable protection of critical systems.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. FLOATING STATS PILL BAR (Overlapping Banner & White Body) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 sm:-mt-12 mb-16 lg:mb-20">
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0369a1] text-white p-4 sm:p-6 shadow-xl shadow-sky-900/15 border border-sky-300/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className={`flex items-center gap-3 sm:gap-4 p-2 sm:px-4 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
                  >
                    <div className="size-11 sm:size-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0 shadow-inner">
                      <Icon className="size-5 sm:size-6 text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium text-sky-100 mt-1 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 3. WHO WE ARE 2-COLUMN SECTION (Image Composite on Left, Vision/Mission & Why TSK on Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Animated Tech Video Telemetry Visual with 20+ Years Badge */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="slide-right">
              <WhoWeAreVisual />
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Who We Are Narrative + Vision/Mission + Why TSK Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="space-y-5">
                
                {/* Title & Brand Accent Line */}
                <div>
                  <h3 
                    id="who-we-are-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f172a]"
                  >
                    Who We Are
                  </h3>
                  
                  <div className="w-16 h-1 bg-[#1e40af] mt-2.5 rounded-full flex overflow-hidden">
                    <div className="w-6 h-full bg-[#ef4444]" />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  Your trusted technology partner enabling continuous visibility, proactive risk management, and reliable protection of critical systems.
                </p>

                {/* 2 Vision & Mission Interactive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {/* Card 1: Our Vision */}
                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 hover:border-sky-300 transition-all space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2.5 text-[#0a2a66]">
                      <div className="size-8 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-700">
                        <Lightbulb className="size-4" />
                      </div>
                      <h5 className="font-extrabold text-sm text-[#0f172a]">Our Vision</h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      To create safe, reliable, and trusted digital systems for everyone.
                    </p>
                  </div>

                  {/* Card 2: Our Mission */}
                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 hover:border-sky-300 transition-all space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2.5 text-[#0a2a66]">
                      <div className="size-8 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-700">
                        <Target className="size-4" />
                      </div>
                      <h5 className="font-extrabold text-sm text-[#0f172a]">Our Mission</h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      To protect business systems and keep them running smoothly every day.
                    </p>
                  </div>
                </div>

                {/* 5 Why TSK Highlight Badges (Exact 5 items requested) */}
                <div className="pt-2">
                  <div>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0f172a]">
                      Why Choose TSK OneIT?
                    </h4>
                    
                    <div className="w-16 h-1 bg-[#1e40af] mt-2.5 mb-4 rounded-full flex overflow-hidden">
                      <div className="w-6 h-full bg-[#ef4444]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr items-stretch">
                    {whyTskHighlights.map((item) => {
                      const Icon = item.icon || CheckCircle2;
                      return (
                        <div 
                          key={item.text} 
                          className="h-full min-h-[62px] flex items-center gap-3 p-3 sm:px-3.5 rounded-xl bg-slate-50/90 hover:bg-sky-50/60 border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-sm transition-all duration-200 group"
                        >
                          <div className="size-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 shadow-2xs transition-colors">
                            <Icon className="size-4.5" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-[#0f172a] leading-snug">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="#divisions"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 group"
                  >
                    <span>Explore Our Solutions</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform text-white" />
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs hover:shadow hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <span>Book Free Consultation</span>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
