import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { allServicesList, servicesBySlug } from '@/lib/servicesData';
import EnquiryButton from '@/components/EnquiryButton';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allServicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    return {
      title: 'Service Not Found | TSK One IT',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/service/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/service/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  // Find other services in the same category for related exploration
  const relatedServices = allServicesList.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 4);

  const whatsappText = `Hi TSK One IT, I would like to inquire about ${service.title} services.`;
  const whatsappUrl = `https://wa.me/919150843991?text=${encodeURIComponent(whatsappText)}`;

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 lg:pt-32 pb-20">
      
      {/* Top Breadcrumb & Hero Container matching Reference Screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 hover:text-[#0284c7] transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>
          <span className="text-slate-300">/</span>
          <Link 
            href={service.divisionSlug} 
            className="hover:text-[#0284c7] transition-colors"
          >
            {service.division}
          </Link>
          <span className="text-slate-300">/</span>
          <Link 
            href={service.parentSlug} 
            className="hover:text-[#0284c7] transition-colors"
          >
            {service.parentTitle}
          </Link>
        </div>

        {/* 2-Column Hero Section matching User Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          
          {/* Left Column: Category Badge + Title + Deep Description + Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Category Pill Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
                <span className="size-1.5 rounded-full bg-[#0284c7]" />
                <span>{service.category}</span>
              </span>
            </div>

            {/* Main Service Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              {service.title}
            </h1>

            {/* Primary Description Paragraph */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mb-4">
              {service.description}
            </p>

            {/* Secondary Description Paragraph */}
            {service.secondaryDescription && (
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                {service.secondaryDescription}
              </p>
            )}

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <EnquiryButton
                serviceTitle={service.title}
                className="px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Consultation / Diagnosis</span>
                <ArrowRight className="size-4" />
              </EnquiryButton>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 text-center inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="size-4.5 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href="tel:+914446030632"
                className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="size-4 text-[#0284c7]" />
                <span>Call Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Resolution Visual Card in Rounded Frame matching Screenshot */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Tag Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                  <ShieldCheck className="size-3.5 text-emerald-600" />
                  <span>TSK Certified SLA</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold shadow-sm">
                  <Clock className="size-3 text-sky-400" />
                  <span>24×7 Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Key Capabilities & Technical Highlights */}
        <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 lg:mb-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-2">
              SERVICE SCOPE &amp; SPECIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Key Capabilities &amp; Engineering Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {service.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start gap-3.5 hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                <div className="size-8 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4.5 text-[#0284c7]" />
                </div>
                <div>
                  <span className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug block">
                    {highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Related Category Services Grid */}
        {relatedServices.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  EXPLORE MORE IN {service.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Related Specialized Services
                </h3>
              </div>
              <Link
                href={service.parentSlug}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284c7] hover:underline"
              >
                <span>View all {service.parentTitle}</span>
                <ChevronRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/service/${item.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5 border border-slate-200/60">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="260px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                    <span>Learn More</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Bottom Call To Action Banner */}
        <div className="relative rounded-3xl bg-[#0b1b3a] text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
              <Sparkles className="size-4" />
              <span>TSK One IT &bull; Direct Engineering Desk</span>
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Ready to schedule service for {service.title}?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect with our certified technical engineers in Chennai for immediate diagnosis, transparent quotation, and rapid SLA delivery.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <EnquiryButton
                serviceTitle={service.title}
                className="px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm shadow active:scale-95 transition-all text-center cursor-pointer"
              >
                <span>Request Free Site Visit / Quote</span>
              </EnquiryButton>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow active:scale-95 transition-all text-center inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="size-4 fill-white" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
