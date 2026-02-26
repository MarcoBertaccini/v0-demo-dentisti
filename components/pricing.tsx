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
      <section id="pricing" ref={ref} className="relative w-full px-6 py-24 md:px-8 md:py-32 overflow-hidden bg-background">
        {/* Decorative backgrounds */}
        <div className="absolute top-0 left-0 w-full h-px teal-edge-gradient" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Piani <span className="text-accent">Trasparenti</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tutti i nostri prezzi includono materiali premium e garanzie estese. Scegli il percorso più adatto alle tue esigenze.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-3 items-stretch"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative rounded-3xl p-10 border transition-all duration-500 hover-lift flex flex-col ${plan.popular
                    ? 'border-accent bg-accent/5 glow-teal-strong shadow-2xl scale-105 z-10'
                    : 'border-white/5 glass-morphism hover:border-accent/30'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg glow-teal">
                    Consigliato
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{plan.description}</p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter text-foreground">{plan.price}</span>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full mb-10 rounded-xl px-6 py-4 font-bold transition-all duration-300 hover:scale-[1.02] shadow-sm ${plan.popular
                      ? 'bg-accent text-white hover:glow-teal'
                      : 'border border-accent/30 text-accent hover:bg-accent/10'
                    }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-accent/20 p-1">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground/80 font-medium">{feature}</span>
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
