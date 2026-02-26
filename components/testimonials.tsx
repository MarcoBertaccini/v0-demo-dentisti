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
    <section id="testimonials" ref={ref} className="relative w-full px-6 py-24 md:px-8 md:py-32 overflow-hidden bg-background">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Cosa Dicono I Nostri <span className="text-accent">Pazienti</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leggi le testimonianze autentiche di chi ha scelto Dente Altius per trasformare il proprio sorriso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="group relative rounded-2xl border border-white/5 glass-morphism p-8 h-full flex flex-col hover-lift transition-all hover:border-accent/30 hover:glow-teal"
                  >
                    {/* Floating Quote Icon */}
                    <div className="absolute -top-4 right-8 bg-accent p-3 rounded-xl shadow-lg glow-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H13.017C12.4647 8 12.017 8.44772 12.017 9V15C12.017 17.6111 10.4633 19.8242 8.1691 20.735L7.017 21L7.017 18C7.017 16.8954 7.9124 16 9.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15C3.017 18.866 6.151 22 10.017 22H14.017V21ZM22.017 21L22.017 18C22.017 16.8954 22.9124 16 24.017 16H27.017C27.5693 16 28.017 15.5523 28.017 15V9C28.017 8.44772 27.5693 8 27.017 8H21.017C20.4647 8 20.017 8.44772 20.017 9V15C20.017 17.6111 18.4633 19.8242 16.1691 20.735L15.017 21L15.017 18C15.017 16.8954 15.9124 16 17.017 16H18.017C18.5693 16 19.017 15.5523 19.017 15V9C19.017 8.44772 18.5693 8 18.017 8H12.017C11.4647 8 11.017 8.44772 11.017 9V15C11.017 18.866 14.151 22 18.017 22H22.017V21Z" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="mb-6 flex gap-1 transform group-hover:scale-110 transition-transform origin-left">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent text-accent drop-shadow-sm"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-8 flex-1">
                      <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                        "{testimonial.text}"
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent/20 p-0.5">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground tracking-tight group-hover:text-accent transition-colors">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground/80 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/5 border-white/10 hover:bg-accent/20 hover:border-accent text-accent transition-all" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/5 border-white/10 hover:bg-accent/20 hover:border-accent text-accent transition-all" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
