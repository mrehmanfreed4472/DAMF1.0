import type { Metadata } from 'next'
import ProductDetail from '@/components/ProductDetail'
import { getProductById } from '@/data/products'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id)
  const title = product
    ? `${product.name.en} | Buy in UAE | The DAM LLC`
    : 'Product | The DAM LLC'
  const description = product
    ? product.description.en
    : 'Explore premium insulation and waterproofing products at The DAM LLC.'
  const image = product?.image || 'https://www.thedamllc.com/images/og-image.jpg'
  const url = `https://www.thedamllc.com/products/${params.id}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetail />
}
