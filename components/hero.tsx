'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BookingModal from './booking-modal'
import LearnMoreModal from './learn-more-modal'
import BeforeAfterSlider from './before-after-slider'
import AnimatedCounter from './animated-counter'
import { fadeInUpVariants } from '@/lib/animations'
import { analyticsEvents } from '@/lib/analytics-events'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  return (
    <>
      <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-background pt-24 md:pt-32 hero-gradient">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

        {/* Section Dividers / Edge Gradients */}
        <div className="absolute top-0 left-0 w-full h-px teal-edge-gradient" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-subtle" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-24">
          <div className="grid gap-16 md:grid-cols-2 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInUpVariants}
              className="flex flex-col gap-8"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-balance">
                  Il Tuo Sorriso{' '}
                  <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">Perfetto</span> Vi Aspetta
                </h1>
                <div className="h-20 md:h-24">
                  <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-lg leading-relaxed">
                    Rispondiamo alle tue esigenze di{' '}
                    <span className="inline-flex flex-col h-[1.2em] overflow-hidden">
                      <motion.span
                        animate={{ y: [0, -40, -80, -120, 0] }}
                        transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1] }}
                        className="flex flex-col"
                      >
                        <span className="text-foreground font-semibold">Estetica</span>
                        <span className="text-foreground font-semibold">Tempo</span>
                        <span className="text-foreground font-semibold">Paura</span>
                        <span className="text-foreground font-semibold">Comfort</span>
                        <span className="text-foreground font-semibold">Estetica</span>
                      </motion.span>
                    </span>
                    {' '}con tecnologie d'avanguardia e cure dentali di eccellenza.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-full sm:w-auto relative group">
                  <button
                    onClick={() => {
                      analyticsEvents.bookingCTAClickedFrom('hero')
                      setIsModalOpen(true)
                    }}
                    className="w-full sm:w-auto relative z-10 rounded-xl bg-accent px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 glow-teal shadow-[0_0_20px_rgba(15,118,110,0.3)] hover:shadow-[0_0_30px_rgba(15,118,110,0.5)]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Prenota Check-up Gratis
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-10 left-0 w-full text-center sm:text-left"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent/80 flex items-center justify-center sm:justify-start gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Disponibili solo 3 appuntamenti questa settimana
                    </span>
                  </motion.div>
                </div>
                <button
                  onClick={() => setIsLearnMoreOpen(true)}
                  className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-4 font-bold text-white hover:bg-white/10 transition-all border-accent/20"
                >
                  Scopri di Più
                </button>
              </div>

              <div className="flex gap-8 pt-12 flex-wrap">
                <div className="flex-1 min-w-32">
                  <AnimatedCounter value={49} suffix="★" label="su 250+ Recensioni" />
                </div>
                <div className="flex-1 min-w-32">
                  <AnimatedCounter value={20} suffix="+" label="Anni di Esperienza" />
                </div>
                <div className="flex-1 min-w-32">
                  <AnimatedCounter value={5000} suffix="+" label="Pazienti Felici" />
                </div>
              </div>
            </motion.div>

            {/* Before/After Slider */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUpVariants}
            >
              <BeforeAfterSlider
                beforeImage="/hero-dental.png"
                afterImage="/testimonial-before-after-1.jpg"
                beforeLabel="Prima"
                afterLabel="Dopo"
                alt="Trasformazione sorriso"
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
