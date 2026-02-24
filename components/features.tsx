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
    image: '/feature-implantology.jpg',
  },
  {
    icon: Award,
    title: 'Ortodonzia Moderna',
    description: 'Allineamento invisibile con tecnologie discrete e efficaci.',
    image: '/feature-orthodontics.jpg',
  },
  {
    icon: Heart,
    title: 'Cosmesi Dentale',
    description: 'Sbiancamento professionale e faccette in ceramica per il sorriso perfetto.',
    image: '/feature-cosmetic.jpg',
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
    <section id="features" ref={ref} className="relative w-full px-4 py-20 md:px-8 md:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid gap-12 md:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-2xl border border-border/50 glass p-6 hover:border-accent/50 transition-all hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>

                {/* Description */}
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Image */}
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Learn More Link */}
                <a href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  Scopri di Più
                  <span>→</span>
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
