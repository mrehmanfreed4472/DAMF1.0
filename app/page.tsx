// Updated for admin product integration
import { Hero } from '@/components/Hero'
import { StatsSection } from '@/components/StatsSection'
import { FeaturedCategories } from '@/components/FeaturedCategories'
import { ServicesOverview } from '@/components/ServicesOverview'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FAQSection } from '@/components/FAQSection'

export const metadata = {
  title: 'Insulation Experts in UAE - The DAM LLC',
  description:
    'The DAM LLC offers expert insulation and waterproofing solutions across the UAE. Premium materials, professional installation, and sustainable results.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedCategories />
      <ServicesOverview />
      <FeaturedProducts />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
