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
      <section ref={ref} className="relative w-full px-6 py-24 md:px-8 md:py-32 overflow-hidden bg-background">
        {/* Decorative Background Mesh */}
        <div className="absolute inset-0 hero-gradient opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] teal-edge-gradient" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.1]">
                Pronto Per Il Tuo <br />
                <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">Sorriso Perfetto?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Non aspettare ancora. Prenota il tuo check-up gratuito oggi e scopri come possiamo trasformare il tuo sorriso con tecnologie d'eccellenza.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-accent px-12 py-5 font-bold text-white transition-all shadow-[0_0_20px_rgba(15,118,110,0.3)] hover:shadow-[0_0_40px_rgba(15,118,110,0.5)] glow-teal"
              >
                Prenota Subito
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              <a
                href="tel:+393331234567"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-12 py-5 font-bold text-white hover:bg-white/10 transition-all border-accent/20"
              >
                <Phone className="h-5 w-5 text-accent" />
                Chiama Ora
              </a>
            </div>

            {/* Quick Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid gap-6 md:grid-cols-3 mt-16"
            >
              {[
                { title: "Telefono", value: "+39 333 123 4567", href: "tel:+393331234567" },
                { title: "Email", value: "info@dentealtius.it", href: "mailto:info@dentealtius.it" },
                { title: "Orari", value: "Lun-Ven 8-20", sub: "Sabato 9-17" }
              ].map((item, i) => (
                <div key={i} className="group rounded-2xl border border-white/5 glass-morphism p-6 hover:border-accent/30 transition-all duration-300">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 opacity-70">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-bold text-foreground hover:text-accent transition-colors block leading-none">
                      {item.value}
                    </a>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-foreground leading-none">{item.value}</p>
                      {item.sub && <p className="text-sm text-muted-foreground font-medium">{item.sub}</p>}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
