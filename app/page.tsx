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
  title: 'DAM LLC | Dar Al Muaazil – Expert Insulation Solutions UAE',
  description:
    'Dar Al Muaazil (DAM LLC) is a leading insulation company in the UAE, providing premium insulation services for buildings, homes, and industries.',
  keywords:
    'Dar Al Muaazil, DAM LLC, thedamllc, insulation company UAE, insulation services, building insulation, UAE insulation experts',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* SEO subheadings for topical relevance */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="sr-only">Premium Insulation Services</h2>
        <div className="space-y-2">
          <h3 className="sr-only">Trusted Building Insulation</h3>
          <h3 className="sr-only">UAE Industrial Insulation Solutions</h3>
        </div>
      </section>
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
