import type { Metadata } from 'next'
import Checkout from '@/components/Checkout'

export const metadata: Metadata = {
  title: 'Checkout | The DAM LLC',
  description: 'Secure checkout for your insulation and waterproofing products at The DAM LLC.',
  alternates: { canonical: '/checkout' },
}

export default function CheckoutPage() {
  return <Checkout />
}
