import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 bg-white text-slate-900 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center size-20 rounded-3xl bg-sky-50 text-[#0284c7] font-black text-3xl shadow-md border border-sky-100">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The service or page you are looking for might have been moved, updated, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <Home className="size-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all active:scale-95"
          >
            <PhoneCall className="size-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
