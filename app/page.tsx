import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MeritsSection } from "@/components/merits-section"
import { FlowSection } from "@/components/flow-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MeritsSection />
        <FlowSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
