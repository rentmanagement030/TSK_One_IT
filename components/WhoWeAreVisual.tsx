'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Server, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Radio, 
  Play, 
  Pause 
} from 'lucide-react';

export default function WhoWeAreVisual() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'simulation' | 'video'>('simulation');
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative max-w-md mx-auto lg:max-w-none select-none">
      
      {/* CARD 1: TOP MAIN CARD - Cloud & Enterprise IT Infrastructure Animation */}
      <div className="w-[88%] sm:w-[84%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 aspect-[4/3] relative z-10 group">
        {/* Dynamic Background Image with Depth */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80')",
          }}
        />
        
        {/* Deep Tech Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#021333]/90 via-[#071d49]/70 to-[#0284c7]/40" />

        {/* Animated Cyber Grid Canvas Simulation */}
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Top Card Animated Scanning Line */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-[scanline_3s_ease-in-out_infinite] pointer-events-none shadow-[0_0_12px_#38bdf8]" />

        {/* Live HUD Header */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#021333]/80 backdrop-blur-md border border-sky-400/40 text-[10px] sm:text-xs font-mono font-bold text-sky-200 shadow-md">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="size-2 rounded-full bg-emerald-500 -ml-3.5" />
            <span>NOC & CLOUD 24/7</span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-300/90 bg-slate-900/80 px-2 py-0.5 rounded-md border border-cyan-500/30">
            <Activity className="size-3 text-cyan-400 animate-pulse" />
            <span>99.99% UP</span>
          </div>
        </div>

        {/* Interactive Hologram Telemetry Center Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
          {/* Pulsing Concentric Radar Rings */}
          <div className="relative size-24 sm:size-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping opacity-30" />
            <div className="absolute inset-2 rounded-full border border-sky-400/30 animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-300/40 animate-[spin_12s_linear_infinite]" />
            <div className="size-14 rounded-2xl bg-gradient-to-br from-[#0284c7]/40 to-[#1e40af]/60 backdrop-blur-md border border-sky-300/50 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Server className="size-7 text-cyan-300 animate-pulse" />
            </div>
          </div>

          <div className="mt-2 text-center">
            <div className="text-xs sm:text-sm font-black tracking-wide text-white drop-shadow-md">
              Enterprise Cloud & Network
            </div>
            <div className="text-[10px] font-mono text-cyan-200/80 mt-0.5">
              Multi-Region Active Telemetry
            </div>
          </div>
        </div>

        {/* Live Bottom Activity Bar */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none text-[9px] sm:text-[10px] font-mono text-slate-300 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/50">
          <span className="flex items-center gap-1 text-emerald-400">
            <Zap className="size-3" /> SECURE TUNNEL
          </span>
          <span className="text-cyan-300">0.8ms LATENCY</span>
        </div>
      </div>

      {/* CARD 2: BOTTOM OVERLAPPING CARD - Chip-Level Motherboard & Hardware Repair Lab */}
      <div className="w-[84%] sm:w-[80%] -mt-16 sm:-mt-20 ml-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 aspect-[4/3] relative z-20 group">
        {/* Dynamic Background Image with Depth */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80')",
          }}
        />

        {/* Emerald & Royal Blue Diagnostic Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540]/85 via-[#064e3b]/60 to-[#0284c7]/45" />

        {/* Diagonal Tech Hatch Pattern */}
        <div className="absolute inset-0 opacity-15 [background-image:repeating-linear-gradient(45deg,#34d399_0,#34d399_1px,transparent_0,transparent_16px)] pointer-events-none" />

        {/* Laser Sweep Scan Animation */}
        <div className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-80 animate-[scanlaser_4s_ease-in-out_infinite] pointer-events-none shadow-[0_0_15px_#10b981]" />

        {/* Live Lab Status Top Badge */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#06201b]/80 backdrop-blur-md border border-emerald-400/40 text-[10px] sm:text-xs font-mono font-bold text-emerald-200 shadow-md">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="size-2 rounded-full bg-emerald-500 -ml-3.5" />
            <span>CHIP-LEVEL LAB</span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-slate-900/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
            <Radio className="size-3 text-emerald-400 animate-pulse" />
            <span>CALIBRATED</span>
          </div>
        </div>

        {/* Central Motherboard & BGA Diagnostics Telemetry */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
          <div className="relative size-20 sm:size-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-[spin_8s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-dashed border-teal-300/40 animate-[spin_6s_linear_infinite_reverse]" />
            <div className="size-12 sm:size-14 rounded-2xl bg-gradient-to-br from-emerald-600/50 to-[#0a2540]/80 backdrop-blur-md border border-emerald-300/50 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Cpu className="size-6 sm:size-7 text-emerald-300 animate-pulse" />
            </div>
          </div>

          <div className="mt-1.5 text-center">
            <div className="text-xs sm:text-sm font-black tracking-wide text-white drop-shadow-md">
              Hardware & BGA Diagnostics
            </div>
            <div className="text-[10px] font-mono text-emerald-200/90 mt-0.5">
              Apple Mac & Multi-Vendor Precision
            </div>
          </div>
        </div>

        {/* Bottom Status Banner */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none text-[9px] sm:text-[10px] font-mono text-slate-300 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/50">
          <span className="flex items-center gap-1 text-teal-300">
            <ShieldCheck className="size-3" /> 100% GENUINE OEM
          </span>
          <span className="text-emerald-400">RESTORED</span>
        </div>
      </div>

    </div>
  );
}
