'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BookingModal from './booking-modal'
import { Phone, Mail } from 'lucide-react'

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="relative w-full px-4 py-20 md:px-8 md:py-32 bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
              Pronto Per Il Tuo{' '}
              <span className="text-accent">Sorriso Perfetto?</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Non aspettare ancora. Prenota il tuo check-up gratuito oggi e scopri come possiamo trasformare il tuo sorriso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Prenota Subito
              </motion.button>
              <a
                href="tel:+393331234567"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent px-8 py-3 font-semibold text-accent hover:bg-accent/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Chiama Ora
              </a>
            </div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid gap-4 md:grid-cols-3 mt-12"
            >
              <div className="rounded-lg border border-border/50 glass p-4">
                <p className="text-sm text-muted-foreground mb-1">Telefono</p>
                <a href="tel:+393331234567" className="font-semibold text-accent hover:text-accent/80 transition-colors">
                  +39 333 123 4567
                </a>
              </div>
              <div className="rounded-lg border border-border/50 glass p-4">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:info@dentealtius.it" className="font-semibold text-accent hover:text-accent/80 transition-colors">
                  info@dentealtius.it
                </a>
              </div>
              <div className="rounded-lg border border-border/50 glass p-4">
                <p className="text-sm text-muted-foreground mb-1">Orari</p>
                <p className="font-semibold text-foreground">
                  Lun-Ven 8-20<br />
                  <span className="text-sm">Sab 9-17</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
