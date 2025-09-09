import type { Metadata } from 'next'
import ServiceDetail from '@/components/ServiceDetail'
import { getServiceById } from '@/data/services'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = getServiceById(params.id)
  const title = service
    ? `${service.name.en} | Waterproofing & Insulation | The DAM LLC`
    : 'Service | The DAM LLC'
  const description = service
    ? service.description.en
    : 'Professional insulation and waterproofing services by The DAM LLC.'
  const image = service?.image || 'https://www.thedamllc.com/images/og-image.jpg'
  const url = `https://www.thedamllc.com/services/${params.id}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return <ServiceDetail />
}
