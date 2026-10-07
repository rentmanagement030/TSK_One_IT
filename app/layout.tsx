import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactBar from '@/components/FloatingContactBar';
import EnquiryModal from '@/components/EnquiryModal';

export const viewport: Viewport = {
  themeColor: '#f4f9fd',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tskoneit.com'),
  title: {
    default: 'TSK One IT | One Partner. Every IT Need.',
    template: '%s | TSK One IT',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  description:
    'Complete IT Solutions for Homes, Businesses & Enterprises. IT Support & Repairs, Enterprise Wi-Fi, Servers, CCTV, Cybersecurity, Cloud, Custom CRM/ERP/AI, 24x7 AMC, and Smart Automation.',
  keywords: [
    'TSK One IT',
    'IT Support Chennai',
    'Enterprise Wi-Fi',
    'Structured Cabling',
    'Cybersecurity SOC',
    'CCTV Surveillance',
    'Biometric Access Control',
    'Cloud Migration',
    'AMC IT Maintenance Contract',
    'Smart Home Automation Chennai',
    'Office Workspace Automation',
    'Meeting Room AV',
  ],
  authors: [{ name: 'TSK One IT' }],
  creator: 'TSK One IT',
  publisher: 'TSK One IT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.tskoneit.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.tskoneit.com',
    siteName: 'TSK One IT',
    title: 'TSK One IT | Complete IT Solutions & Smart Automation',
    description:
      'Technology Should Work. Not Become Your Problem. End-to-end IT infrastructure, cybersecurity, 24x7 AMC, and smart workspace automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TSK One IT - One Partner. Every IT Need.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSK One IT | One Partner. Every IT Need.',
    description:
      'Complete IT Solutions for Homes, Businesses & Enterprises. Smart. Secure. Connected.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TSK One IT',
  image: 'https://www.tskoneit.com/og-image.png',
  url: 'https://www.tskoneit.com',
  telephone: '+914446030632',
  priceRange: '$$',
  description:
    'Complete IT Solutions for Homes, Businesses & Enterprises. From everyday IT support to enterprise infrastructure, cybersecurity, business applications, 24x7 AMC, and smart automation.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Anna Salai, White Lane',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600002',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0604,
    longitude: 80.2496,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.tskoneit.com',
    'https://wa.me/919150843991',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f4f9fd] text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {/* Skip to Main Content Link for WCAG AA Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0a2a66] text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingContactBar />
        <EnquiryModal />
      </body>
    </html>
  );
}
