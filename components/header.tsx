'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Chi Siamo', href: '#about' },
    { label: 'Servizi', href: '#features' },
    { label: 'Testimonianze', href: '#testimonials' },
    { label: 'Prezzi', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contatti', href: '/contact' },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
          >
            <span className="text-xl">🦷</span>
            <span>Dente Altius</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+393331234567"
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Chiama</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            className="border-t border-border/40 bg-card/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+393331234567"
                className="flex items-center gap-2 mt-2 rounded-lg bg-accent px-3 py-2 font-medium text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">Chiama</span>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
