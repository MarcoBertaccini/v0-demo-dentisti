import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Trust from '@/components/trust'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import BackToTop from '@/components/back-to-top'
import LogoCloud from '@/components/logo-cloud'
import FoundersNote from '@/components/founders-note'
import DigitalRoadmap from '@/components/digital-roadmap'
import ExitIntentOffer from '@/components/exit-intent-offer'
import ComfortSection from '@/components/comfort-section'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <LogoCloud />
      <Features />
      <DigitalRoadmap />
      <FoundersNote />
      <ComfortSection />
      <Testimonials />
      <Pricing />
      <Trust />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
      <ExitIntentOffer />
    </main>
  )
}
