import type { Metadata } from 'next'
import Cart from '@/components/Cart'

export const metadata: Metadata = {
  title: 'Your Cart | The DAM LLC',
  description: 'View and manage items in your cart at The DAM LLC.',
  alternates: { canonical: '/cart' },
}

export default function CartPage() {
  return <Cart />
}
