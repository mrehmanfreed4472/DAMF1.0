import type { Metadata } from 'next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { AdminProvider } from '@/contexts/AdminContext'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { RootLayoutClient } from '@/components/RootLayoutClient'
import { WarningSuppressionProvider } from '@/components/WarningSuppressionProvider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thedamllc.com'),
  title: {
    default: 'DAM LLC | Dar Al Muaazil – Expert Insulation Solutions UAE',
    template: 'DAM LLC | Dar Al Muaazil – %s',
  },
  description:
    'Dar Al Muaazil (DAM LLC) is a leading insulation company in the UAE, providing premium insulation services for buildings, homes, and industries.',
  keywords:
    'Dar Al Muaazil, DAM LLC, thedamllc, insulation company UAE, insulation services, building insulation, UAE insulation experts, waterproofing, thermal insulation',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.thedamllc.com/',
    title: 'Dar Al Muaazil (DAM LLC) | UAE Insulation Experts',
    description:
      'Trusted insulation services by DAM LLC (Dar Al Muaazil). Serving UAE with quality insulation solutions for homes and industries.',
    images: [
      {
        url: 'https://www.thedamllc.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Dar Al Muaazil (DAM LLC) Logo',
      },
    ],
    siteName: 'Dar Al Muaazil (DAM LLC)',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dar Al Muaazil (DAM LLC) | UAE Insulation Experts',
    description:
      'Trusted insulation services by DAM LLC (Dar Al Muaazil). Serving UAE with quality insulation solutions for homes and industries.',
    images: ['https://www.thedamllc.com/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    sitemap: 'https://www.thedamllc.com/sitemap.xml',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <WarningSuppressionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <AuthProvider>
              <AdminProvider>
                <CartProvider>
                  <RootLayoutClient>
                    {children}
                    <Toaster
                      position="top-right"
                      toastOptions={{
                        duration: 3000,
                      }}
                    />
                    <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
                      {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Dar Al Muaazil (DAM LLC)',
                        url: 'https://www.thedamllc.com',
                        logo: 'https://www.thedamllc.com/images/logo.png',
                        sameAs: [
                          'https://www.linkedin.com/company/damllc',
                          'https://www.facebook.com/thedamllc'
                        ],
                        contactPoint: [
                          {
                            '@type': 'ContactPoint',
                            telephone: '+971502342218',
                            contactType: 'customer service',
                            areaServed: 'AE',
                            availableLanguage: ['en', 'ar']
                          }
                        ],
                        address: {
                          '@type': 'PostalAddress',
                          streetAddress: 'Shams Business Center',
                          addressLocality: 'Sharjah',
                          addressCountry: 'AE'
                        },
                        openingHoursSpecification: [
                          {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: [
                              'Sunday',
                              'Monday',
                              'Tuesday',
                              'Wednesday',
                              'Thursday'
                            ],
                            opens: '08:00',
                            closes: '18:00'
                          },
                          {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: 'Friday',
                            opens: '14:00',
                            closes: '18:00'
                          }
                        ]
                      })}
                    </Script>
                  </RootLayoutClient>
                </CartProvider>
              </AdminProvider>
            </AuthProvider>
          </ThemeProvider>
        </WarningSuppressionProvider>
      </body>
    </html>
  )
}
