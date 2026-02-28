'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Star, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Marco Bianchi',
    role: 'Imprenditore',
    problem: 'Anni di disagio estetico e difficoltà nella masticazione.',
    journey: 'Recupero totale con impianto a carico immediato in 24 ore.',
    result: 'Un sorriso naturale e la libertà di mangiare senza pensieri.',
    image: '/testimonial-before-after-1.jpg',
    rating: 5,
  },
  {
    name: 'Giulia Rossi',
    role: 'Insegnante',
    problem: 'Affollamento dentale e paura del dolore dei trattamenti classici.',
    journey: 'Trattamento Invisalign con scansione digitale iTero.',
    result: 'Denti perfettamente allineati in 12 mesi, senza ferretti visibili.',
    image: '/testimonial-before-after-2.jpg',
    rating: 5,
  },
  {
    name: 'Andrea Verdi',
    role: 'Fotografo',
    problem: 'Ingiallimento e macchie dovute a caffè e fumo.',
    journey: 'Sbiancamento laser professionale e faccette in ceramica.',
    result: 'Un bianco luminoso e naturale che ha riacceso il mio volto.',
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Success Stories: <span className="text-accent">Risultati Reali</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non solo recensioni, ma veri percorsi di trasformazione. Scopri come abbiamo aiutato i nostri pazienti.
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
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="group relative rounded-3xl border border-white/5 bg-accent/5 p-8 h-full flex flex-col hover:bg-accent/10 transition-all duration-500"
                  >
                    {/* Rating */}
                    <div className="mb-8 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Narrative Journey */}
                    <div className="space-y-6 flex-1">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">La Sfida</span>
                        <p className="text-sm italic text-foreground/80">"{testimonial.problem}"</p>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-px h-6 bg-accent/20" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Il Percorso</span>
                        <p className="text-sm font-medium">{testimonial.journey}</p>
                      </div>

                      <div className="flex justify-center">
                        <ArrowRight className="w-4 h-4 text-accent/50 rotate-90" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Il Risultato</span>
                        <p className="text-lg font-bold tracking-tight text-foreground">{testimonial.result}</p>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-8 mt-8 border-t border-white/5">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-accent/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/5 border-white/10 hover:bg-accent/20 transition-all" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/5 border-white/10 hover:bg-accent/20 transition-all" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
