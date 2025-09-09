import type { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Insulation & Waterproofing Services UAE | The DAM LLC',
  description:
    'Professional insulation and waterproofing services for residential and commercial projects across the UAE. Expert team at The DAM LLC.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return <Services />
}
