'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap, Award, Heart } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    icon: Zap,
    title: 'Implantologia Avanzata',
    description: 'Tecnologie 3D e implanti all-on-4 per risultati duraturi e naturali.',
    image: '/feature-implantology.png',
  },
  {
    icon: Award,
    title: 'Ortodonzia Moderna',
    description: 'Allineamento invisibile con tecnologie discrete e efficaci.',
    image: '/feature-orthodontics.png',
  },
  {
    icon: Heart,
    title: 'Cosmesi Dentale',
    description: 'Sbiancamento professionale e faccette in ceramica per il sorriso perfetto.',
    image: '/feature-cosmetic.png', // keeping this as jpg for now or using a placeholder
  },
]

export default function Features() {
  const { ref, isVisible } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="features" ref={ref} className="relative w-full px-6 py-24 md:px-8 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className={`mb-4 text-3xl font-bold md:text-5xl ${isVisible ? 'blur-reveal' : ''}`}>
              Un Sorriso <span className="text-accent">Senza Compromessi</span>
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-accent opacity-50" />
          </motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Offriamo soluzioni personalizzate per ogni esigenza dentale, utilizzando le tecnologie più avanzate del settore.</p>
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl border border-white/5 glass-morphism p-8 hover-lift hover:border-accent/30 transition-all hover:glow-teal"
              >
                {/* Decorative Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-1/2 transition-all duration-500" />

                {/* Icon */}
                <div className="mb-8 inline-flex rounded-xl bg-accent/10 p-4 group-hover:bg-accent/20 transition-all group-hover:scale-110 shadow-inner">
                  <Icon className="h-8 w-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{feature.title}</h3>

                {/* Description */}
                <p className="mb-8 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 blur-sm group-hover:blur-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
