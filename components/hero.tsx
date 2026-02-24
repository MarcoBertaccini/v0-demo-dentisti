'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BookingModal from './booking-modal'
import LearnMoreModal from './learn-more-modal'
import { fadeInUpVariants } from '@/lib/animations'
import { analyticsEvents } from '@/lib/analytics-events'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  return (
    <>
      <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background pt-24 md:pt-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInUpVariants}
              className="flex flex-col gap-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-4">
                  Il Tuo Sorriso{' '}
                  <span className="text-accent">Perfetto</span> Vi Aspetta
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-balance">
                  Scopri tecnologie d'avanguardia e cure dentali di eccellenza presso Dente Altius. Check-up iniziale completamente gratuito.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    analyticsEvents.bookingCTAClickedFrom('hero')
                    setIsModalOpen(true)
                  }}
                  className="rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Prenota Check-up Gratis
                </button>
                <button
                  onClick={() => setIsLearnMoreOpen(true)}
                  className="rounded-lg border border-accent px-8 py-3 font-semibold text-accent hover:bg-accent/10 transition-colors"
                >
                  Scopri di Più
                </button>
              </div>

              <div className="flex gap-6 pt-4">
                <div>
                  <p className="text-2xl font-bold text-accent">4.9★</p>
                  <p className="text-sm text-muted-foreground">su 250+ Recensioni</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">10+</p>
                  <p className="text-sm text-muted-foreground">Anni di Esperienza</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">1000+</p>
                  <p className="text-sm text-muted-foreground">Pazienti Felici</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUpVariants}
              className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden glass"
            >
              <Image
                src="/hero-dental.jpg"
                alt="Studio dentale moderno con tecnologie avanzate"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </>
  )
}
