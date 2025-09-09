import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact The DAM LLC | Insulation Experts in UAE',
  description:
    'Contact The DAM LLC for insulation and waterproofing services in the UAE. Call +971 50 234 2218 or email info@damgcc.com.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <Contact />
}
