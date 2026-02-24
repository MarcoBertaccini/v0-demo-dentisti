'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
}

const reasons = [
  {
    title: 'Prevenzione Precoce',
    description: 'Identificare i problemi dentali in fase iniziale evita trattamenti più invasivi e costosi in futuro.',
  },
  {
    title: 'Sorriso Più Luminoso',
    description: 'I nostri esperti ti consiglieranno i trattamenti migliori per ottenere il sorriso perfetto che desideri.',
  },
  {
    title: 'Salute Orale Ottimale',
    description: 'Un check-up completo garantisce che i tuoi denti e le tue gengive siano in perfette condizioni.',
  },
  {
    title: 'Tecnologie Avanzate',
    description: 'Utilizziamo le tecnologie dentali più moderne per diagnosi precise e trattamenti confortevoli.',
  },
  {
    title: 'Piano di Cura Personalizzato',
    description: 'Riceverai un piano di cura su misura per le tue esigenze specifiche e i tuoi obiettivi estetici.',
  },
  {
    title: 'Fiducia e Tranquillità',
    description: 'Il nostro team esperto ti fornirà consulenze professionali e un supporto completo per la tua salute dentale.',
  },
]

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform"
          >
            <div className="glass rounded-lg p-8 md:p-12 shadow-2xl">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Perché Fare un Check-up?
                  </h2>
                  <p className="text-muted-foreground">
                    Scopri i 6 motivi per cui un check-up dentale è essenziale
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              {/* Reasons Grid */}
              <div className="grid gap-4 mb-8 md:grid-cols-2">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg bg-white/5 border border-white/10 p-5 hover:border-accent/50 transition-colors"
                  >
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:bg-white/5 transition-colors"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
