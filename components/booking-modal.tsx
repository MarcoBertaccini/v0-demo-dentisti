'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, Calendar, Smile, ShieldAlert, Sparkles } from 'lucide-react'
import { analyticsEvents } from '@/lib/analytics-events'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    goal: '',
    urgency: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      analyticsEvents.bookingModalOpened('booking-modal')
      setStep(1)
      setSubmitted(false)
    } else {
      analyticsEvents.bookingModalClosed()
    }
  }, [isOpen])

  const nextStep = () => setStep((s) => s + 1)
  const prevStep = () => setStep((s) => s - 1)

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    nextStep()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    analyticsEvents.bookingModalSubmitted()
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      z: 0,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-card/80 shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            {!submitted && (
              <div className="absolute top-0 left-0 h-1 bg-accent/20 w-full">
                <motion.div
                  className="h-full bg-accent"
                  animate={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 md:p-12">
              {!submitted ? (
                <div className="min-h-[380px] flex flex-col">
                  <AnimatePresence mode="wait" custom={step}>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={1}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold tracking-tight">Qual è il tuo obiettivo?</h2>
                          <p className="text-muted-foreground">Aiutaci a capire come possiamo assisterti al meglio.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { id: 'estetica', label: 'Estetica & Sorriso', icon: Sparkles },
                            { id: 'cura', label: 'Cura & Dolore', icon: ShieldAlert },
                            { id: 'controllo', label: 'Check-up & Pulizia', icon: Smile },
                            { id: 'altro', label: 'Invisalign / Altro', icon: Calendar },
                          ].map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleSelect('goal', item.id)}
                              className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-white/5 hover:bg-accent/10 hover:border-accent/50 transition-all text-left group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                              </div>
                              <span className="font-semibold">{item.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={1}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <button onClick={prevStep} className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
                            <ChevronLeft className="w-4 h-4 mr-1" /> Indietro
                          </button>
                          <h2 className="text-3xl font-bold tracking-tight">Quanto è urgente?</h2>
                          <p className="text-muted-foreground">Valutiamo la priorità del tuo appuntamento.</p>
                        </div>
                        <div className="space-y-3">
                          {[
                            { id: 'urgente', label: 'Ho dolore / È un\'emergenza', desc: 'Contatto entro 1 ora' },
                            { id: 'normale', label: 'Vorrei un appuntamento a breve', desc: 'Nei prossimi giorni' },
                            { id: 'informativo', label: 'Solo per informazioni', desc: 'Nessuna fretta particolare' },
                          ].map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleSelect('urgency', item.id)}
                              className="w-full flex items-center justify-between p-5 rounded-2xl border border-border/50 bg-white/5 hover:bg-accent/10 hover:border-accent/50 transition-all text-left"
                            >
                              <div>
                                <p className="font-bold text-lg">{item.label}</p>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                              </div>
                              <ChevronRight className="w-5 h-5 text-accent" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={1}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <button onClick={prevStep} className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
                            <ChevronLeft className="w-4 h-4 mr-1" /> Indietro
                          </button>
                          <h2 className="text-3xl font-bold tracking-tight">I tuoi recapiti</h2>
                          <p className="text-muted-foreground">Ti chiamerà un nostro esperto a breve.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              name="name"
                              placeholder="Nome Completo"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Cellulare"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            />
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                          />
                          <textarea
                            name="message"
                            placeholder="Note extra (opzionale)"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all h-24 resize-none"
                          />
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 rounded-xl bg-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-accent/20 transition-all disabled:opacity-50"
                          >
                            {isSubmitting ? 'Richiesta in corso...' : 'Invia Richiesta'}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Smile className="w-12 h-12" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Richiesta Ricevuta!</h3>
                    <p className="text-muted-foreground text-lg">
                      Il team di Dente Altius ti contatterà telefonicamente entro pochissimo tempo.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
