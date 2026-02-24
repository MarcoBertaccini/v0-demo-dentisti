'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Award, Users, Zap } from 'lucide-react'

export default function Trust() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    {
      icon: Star,
      value: '4.9/5',
      label: 'Valutazione Media',
      description: '250+ Recensioni Verificate',
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Pazienti Felici',
      description: 'Dal 2014 ad oggi',
    },
    {
      icon: Award,
      value: '10+',
      label: 'Anni di Esperienza',
      description: 'Eccellenza Riconosciuta',
    },
    {
      icon: Zap,
      value: '100%',
      label: 'Materiali Premium',
      description: 'Certificati Internazionali',
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="relative w-full px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden glass"
          >
            <Image
              src="/clinic-team.jpg"
              alt="Team professionista Dente Altius"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="mb-4 text-4xl md:text-5xl font-bold">
                Perché Scegliere Dente Altius
              </h2>
              <p className="text-lg text-muted-foreground">
                Siamo il vostro partner di fiducia per la salute orale. Con tecnologie all'avanguardia e un team di professionisti certificati, garantiamo risultati eccellenti.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-border/50 glass p-4 hover:border-accent/50 transition-colors"
                >
                  <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Certificazioni
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  ✓ Albo Professionisti
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  ✓ Iscritto ANDI
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  ✓ ISO 9001:2015
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Helper to map icon names
const Icon = ({ name }: { name: any }) => {
  if (name === Award) return <Award className="h-5 w-5" />
  if (name === Users) return <Users className="h-5 w-5" />
  if (name === Zap) return <Zap className="h-5 w-5" />
  return null
}

const Star = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
