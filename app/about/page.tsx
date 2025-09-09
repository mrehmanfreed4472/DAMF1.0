import type { Metadata } from 'next'
import { About } from '@/components/About'

export const metadata: Metadata = {
  title: 'About The DAM LLC | UAE Insulation Specialists',
  description:
    'Learn about The DAM LLC, a leading provider of insulation and waterproofing solutions in the UAE with a commitment to quality and sustainability.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return <About />
}
