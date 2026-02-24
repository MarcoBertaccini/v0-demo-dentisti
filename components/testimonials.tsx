'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marco Bianchi',
    role: 'Imprenditore',
    text: 'Studio incredibile! Il Dr. Rossini mi ha restituito il sorriso perfetto con la massima professionalità. Consigliato!',
    image: '/testimonial-before-after-1.jpg',
    rating: 5,
  },
  {
    name: 'Giulia Rossi',
    role: 'Insegnante',
    text: 'Mi è piaciuto tutto: l\'atmosfera, la preparazione dello staff e soprattutto i risultati. Fantastico!',
    image: '/testimonial-before-after-2.jpg',
    rating: 5,
  },
  {
    name: 'Andrea Verdi',
    role: 'Fotografo',
    text: 'Professionisti veri. Ho fatto l\'implantologia e il risultato è naturale come i miei denti. Top!',
    image: '/hero-dental.jpg',
    rating: 5,
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" ref={ref} className="relative w-full px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            Cosa Dicono I Nostri Pazienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leggi le testimonianze autentiche di chi ha scelto Dente Altius
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border border-border/50 glass p-6 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Rating */}
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mb-4 flex-1 text-sm text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-accent/20 border-accent hover:bg-accent/30" />
            <CarouselNext className="hidden md:flex -right-12 bg-accent/20 border-accent hover:bg-accent/30" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
