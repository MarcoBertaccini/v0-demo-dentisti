'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Check } from 'lucide-react'
import { useState } from 'react'
import BookingModal from './booking-modal'

const pricingPlans = [
  {
    name: 'Check-up Base',
    price: 'Gratis',
    description: 'Valutazione completa e consulenza',
    features: [
      'Visita iniziale',
      'Radiografia digitale',
      'Consulenza personalizzata',
      'Piano di trattamento',
    ],
    cta: 'Prenota Subito',
    popular: false,
  },
  {
    name: 'Trattamento Completo',
    price: 'da 500€',
    description: 'Soluzioni professionali e durature',
    features: [
      'Diagnosi avanzata',
      'Trattamento personalizzato',
      'Materiali premium',
      'Garanzia 5 anni',
      'Finanziamento disponibile',
    ],
    cta: 'Scopri Piani',
    popular: true,
  },
  {
    name: 'Implantologia Avanzata',
    price: 'da 2.500€',
    description: 'Impianti 3D all-on-4',
    features: [
      'Scansione 3D completa',
      'Impianto integrato',
      'Protesi ceramica',
      'Garanzia 10 anni',
      'Supporto post-operatorio',
    ],
    cta: 'Consulenza Gratuita',
    popular: false,
  },
]

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      <section id="pricing" ref={ref} className="relative w-full px-4 py-20 md:px-8 md:py-32 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold">
              Piani Trasparenti e Convenzioni
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tutti i nostri prezzi includono materiali premium e garanzie estese
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-3"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`rounded-2xl p-8 border transition-all ${
                  plan.popular
                    ? 'border-accent bg-accent/5 ring-2 ring-accent/20 shadow-xl scale-105 md:scale-100'
                    : 'border-border/50 glass'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Più Popolare
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full mb-6 rounded-lg px-4 py-3 font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'border border-accent text-accent hover:bg-accent/10'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
