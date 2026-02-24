'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { analyticsEvents } from '@/lib/analytics-events'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      analyticsEvents.bookingModalOpened('booking-modal')
    } else {
      analyticsEvents.bookingModalClosed()
    }
  }, [isOpen])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track booking submission
    analyticsEvents.bookingModalSubmitted()

    // Simulate email sending - in production, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', date: '', message: '' })
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md rounded-2xl border border-border/50 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-1 hover:bg-accent/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Content */}
            <div className="p-8">
              {!submitted ? (
                <>
                  <h2 className="mb-2 text-2xl font-bold">Prenota Check-up Gratis</h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Compila il modulo e ti contatteremo al più presto per confermare il tuo appuntamento.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                        placeholder="Mario Rossi"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                        placeholder="+39 333 1234567"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                        placeholder="mario@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-1">
                        Data Preferita
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Messaggio (Opzionale)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                        placeholder="Raccontaci cosa ti interessa..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-50 transition-colors mt-6"
                    >
                      {isSubmitting ? 'Invio in corso...' : 'Prenota Ora'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-4 text-4xl"
                  >
                    ✓
                  </motion.div>
                  <h3 className="mb-2 text-lg font-bold">Prenotazione Confermata!</h3>
                  <p className="text-sm text-muted-foreground">
                    Ti contatteremo al più presto per confermare il tuo appuntamento.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
