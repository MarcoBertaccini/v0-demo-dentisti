'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function FoundersNote() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section ref={ref} className="w-full px-4 py-20 md:px-8 md:py-32 bg-accent/5">
            <div className="mx-auto max-w-5xl">
                <div className="grid gap-12 md:grid-cols-5 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-2 relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
                    >
                        <Image
                            src="/founder.png"
                            alt="Dr. Marco Altius"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="text-xl font-bold text-white">Dr. Marco Altius</p>
                            <p className="text-sm text-white/80 font-medium uppercase tracking-wider">Direttore Sanitario</p>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-3 flex flex-col justify-center"
                    >
                        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
                            La Nostra Filosofia
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif italic mb-8 leading-tight text-foreground/90">
                            "L'odontoiatria moderna non è solo tecnologia, è l'arte di restituire fiducia attraverso un sorriso sano e naturale."
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                In Dente Altius, abbiamo abbandonato il concetto tradizionale di "studio dentistico" per creare un ambiente dove l'eccellenza clinica incontra il comfort assoluto.
                            </p>
                            <p>
                                Ogni piano di trattamento è una collaborazione. Utilizziamo la diagnostica digitale non solo per la precisione, ma per rendervi partecipi di ogni fase del vostro percorso verso il benessere. La vostra serenità è il nostro successo più grande.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full border border-accent/20 flex items-center justify-center">
                                <span className="font-serif italic text-accent text-2xl">M</span>
                            </div>
                            <div>
                                <p className="font-bold text-foreground">Marco Altius</p>
                                <p className="text-sm text-muted-foreground">Fondatore & Chirurgo Senior</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
