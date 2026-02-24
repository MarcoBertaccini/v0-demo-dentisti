'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 rounded-2xl border border-border/50 glass p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="Mario Rossi"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="mario@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="+39 333 1234567"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-2">
            Argomento *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          >
            <option value="">Seleziona un argomento...</option>
            <option value="implantologia">Implantologia</option>
            <option value="ortodonzia">Ortodonzia</option>
            <option value="cosmesi">Cosmesi Dentale</option>
            <option value="igiene">Igiene Dentale</option>
            <option value="altro">Altro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
          placeholder="Condividi con noi i tuoi dubbi o le tue domande..."
        />
      </div>

      {!submitted ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-lg bg-accent/10 border border-accent/50 p-4 text-center"
        >
          <p className="font-semibold text-accent">Grazie! 📨</p>
          <p className="text-sm text-muted-foreground mt-1">
            Il tuo messaggio è stato inviato con successo. Ti contatteremo a breve.
          </p>
        </motion.div>
      )}
    </motion.form>
  )
}
