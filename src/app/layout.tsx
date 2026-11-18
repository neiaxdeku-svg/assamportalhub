import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://assamportalhub.vercel.app'),
  title: 'AssamPortalHub - Direct Links to Assam Govt Portals',
  description: 'A fast, minimal utility directory for Assam Government web portals. Find direct links & steps for APDCL, Samarth, Sewa Setu, NVSP, and Parivahan.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AssamPortalHub - Direct Links to Assam Govt Portals',
    description: 'A fast, minimal utility directory for Assam Government web portals.',
    url: 'https://assamportalhub.vercel.app',
    siteName: 'AssamPortalHub',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssamPortalHub - Direct Links to Assam Govt Portals',
    description: 'A fast, minimal utility directory for Assam Government web portals.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AssamPortalHub',
    url: 'https://assamportalhub.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://assamportalhub.vercel.app/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen bg-slate-50 selection:bg-green-100 selection:text-green-900 font-sans relative">
        <script
          key="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
        {/* Adsterra Social Bar - Loaded lazily to protect PageSpeed & Core Web Vitals */}
        <Script
          id="adsterra-social-bar"
          src="https://bicea.org/14/c25861a9fe392e5250ecb55fe3bc077c"
          strategy="lazyOnload"
          data-cfasync="false"
        />
      </body>
    </html>
  );
}
