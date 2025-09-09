import type { Metadata } from 'next'
import HierarchicalProducts from '@/components/HierarchicalProducts'

export const metadata: Metadata = {
  title: 'Buy Insulation Products in UAE | The DAM LLC',
  description:
    'Shop premium insulation and waterproofing products in the UAE. High-quality membranes, primers, coatings, and more from The DAM LLC.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return <HierarchicalProducts />
}
