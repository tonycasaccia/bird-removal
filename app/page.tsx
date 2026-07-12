import { Hero } from "@/components/home/hero"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseSection />
      <ServicesSection />
      <IndustriesSection />
      <CtaSection />
    </>
  )
}
