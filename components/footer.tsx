'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import BookingModal from './booking-modal'
import { analyticsEvents } from '@/lib/analytics-events'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Servizi',
      links: [
        { label: 'Implantologia', href: '#features' },
        { label: 'Ortodonzia', href: '#features' },
        { label: 'Cosmesi Dentale', href: '#features' },
        { label: 'Igiene Dentale', href: '/contact' },
      ],
    },
    {
      title: 'Studio',
      links: [
        { label: 'Chi Siamo', href: '#about' },
        { label: 'Il Nostro Team', href: '#trust' },
        { label: 'Testimonianze', href: '#testimonials' },
        { label: 'Contatti', href: '/contact' },
      ],
    },
    {
      title: 'Legale',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Termini di Utilizzo', href: '#' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <footer className="w-full border-t border-border/50 bg-card/50 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* CTA Section - Top of Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-lg glass-dark p-8 md:p-12 flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Pronto per il tuo check-up?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Prenota oggi il tuo check-up gratuito e scopri come possiamo aiutarti a raggiungere il sorriso dei tuoi sogni.
          </p>
          <button
            onClick={() => {
              analyticsEvents.bookingCTAClickedFrom('footer')
              setIsModalOpen(true)
            }}
            className="rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Prenota Ora
          </button>
        </motion.div>

        <div className="mb-8 h-px bg-border/50" />

        {/* Main Footer Content */}
        <div className="grid gap-8 mb-12 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <span className="text-xl font-bold">Dente Altius</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Studio dentale moderno con le tecnologie più avanzate e un team di professionisti certificati.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="col-span-3 grid gap-8 md:grid-cols-3"
          >
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="mb-4 font-semibold text-foreground">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>



        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dente Altius. Tutti i diritti riservati.
          </p>
          <p className="text-sm text-muted-foreground">
            Via Milano, 42 - 20100 Milano | P.I. 12345678901
          </p>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}
