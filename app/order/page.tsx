import type { Metadata } from 'next'
import Order from '@/components/Order'

export const metadata: Metadata = {
  title: 'Order | Dar Al Muaazil (DAM LLC)',
  description: 'Place your order for insulation and waterproofing products and services with Dar Al Muaazil (DAM LLC) in the UAE.',
  keywords: 'Dar Al Muaazil, DAM LLC, order insulation, UAE insulation services, waterproofing order',
  alternates: { canonical: '/order' },
}

export default function OrderPage() {
  return <Order />
}
