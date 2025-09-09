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
    default: 'The DAM LLC | Expert Insulation Solutions',
    template: 'The DAM LLC | %s',
  },
  description:
    'The DAM LLC provides premium insulation and waterproofing services with top-quality materials, expert installation, and sustainable solutions across the UAE.',
  keywords:
    'The DAM LLC, insulation, thermal insulation, waterproofing, UAE insulation company, building insulation services, construction materials, energy efficiency',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.thedamllc.com/',
    title: 'The DAM LLC | Expert Insulation Solutions',
    description:
      'Premium insulation and waterproofing services for homes and businesses. Quality and sustainability at The DAM LLC.',
    images: [
      {
        url: 'https://www.thedamllc.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The DAM LLC - Insulation and Waterproofing Services in UAE',
      },
    ],
    siteName: 'The DAM LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The DAM LLC | Expert Insulation Solutions',
    description:
      'Premium insulation and waterproofing services for homes and businesses. Quality and sustainability at The DAM LLC.',
    images: ['https://www.thedamllc.com/images/og-image.jpg'],
    creator: '@thedamllc',
  },
  robots: {
    index: true,
    follow: true,
    sitemap: 'https://www.thedamllc.com/sitemap.xml',
  },
  icons: {
    icon:
      'https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2F038432f1035b4e15868079ba9991d3e9?format=webp&width=32',
    apple:
      'https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2F038432f1035b4e15868079ba9991d3e9?format=webp&width=180',
  },
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
                        name: 'The DAM LLC',
                        url: 'https://www.thedamllc.com',
                        logo: 'https://www.thedamllc.com/images/logo.png',
                        sameAs: [
                          'https://www.facebook.com/thedamllc',
                          'https://www.linkedin.com/company/thedamllc',
                        ],
                        contactPoint: [
                          {
                            '@type': 'ContactPoint',
                            telephone: '+971502342218',
                            contactType: 'customer service',
                            areaServed: 'AE',
                            availableLanguage: ['en', 'ar'],
                          },
                        ],
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
