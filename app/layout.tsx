import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script'
import Preloader from '@/components/preloader'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const _signature = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-signature" });

export const metadata: Metadata = {
  title: 'Dente Altius | Studio Dentale Moderno a Milano',
  description: 'Studio dentale moderno con le tecnologie più avanzate. Implantologia, ortodonzia e cosmesi. Prenota il tuo check-up gratuito oggi.',
  keywords: 'dentista Milano, implantologia, ortodonzia, studio dentale, sorriso perfetto',
  generator: 'v0.app',
  alternates: {
    canonical: 'https://dentealtius.it',
  },
  openGraph: {
    title: 'Dente Altius | Studio Dentale Moderno',
    description: 'Scopri il vostro sorriso perfetto con Dente Altius',
    url: 'https://dentealtius.it',
    siteName: 'Dente Altius',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dente Altius Studio Dentale',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dente Altius | Studio Dentale Moderno',
    description: 'Scopri il vostro sorriso perfetto con Dente Altius',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F766E',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`dark scroll-smooth ${_geist.variable} ${_geistMono.variable} ${_playfair.variable} ${_signature.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Dente Altius',
              image: 'https://dentealtius.it/og-image.jpg',
              '@id': 'https://dentealtius.it',
              url: 'https://dentealtius.it',
              telephone: '+393331234567',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Via Milano, 42',
                addressLocality: 'Milano',
                postalCode: '20100',
                addressCountry: 'IT'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.4642,
                longitude: 9.1900
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '20:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '17:00'
                }
              ],
              priceRange: '€€'
            })
          }}
        />
      </head>

      <body className="font-sans antialiased">
        <Preloader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  )
}