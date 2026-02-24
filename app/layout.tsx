import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dente Altius | Studio Dentale Moderno a Milano',
  description: 'Studio dentale moderno con le tecnologie più avanzate. Implantologia, ortodonzia e cosmesi. Prenota il tuo check-up gratuito oggi.',
  keywords: 'dentista Milano, implantologia, ortodonzia, studio dentale, sorriso perfetto',
  generator: 'v0.app',
  openGraph: {
    title: 'Dente Altius | Studio Dentale Moderno',
    description: 'Scopri il vostro sorriso perfetto con Dente Altius',
    url: 'https://dentealtius.it',
    siteName: 'Dente Altius',
    type: 'website',
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
    <html lang="it" className="dark scroll-smooth">
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
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  )
}