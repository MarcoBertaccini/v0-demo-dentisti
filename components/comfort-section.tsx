'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Coffee, Music, ShieldCheck, HeartPulse } from 'lucide-react'

const features = [
    {
        icon: Coffee,
        title: 'Comfort Lounge',
        description: 'Area relax con selezione di tisane e caffè premium per il tuo pre-appuntamento.',
    },
    {
        icon: Music,
        title: 'Music Therapy',
        description: 'Cuffie noise-cancelling con playlist binaurali per eliminare ogni stress acustico.',
    },
    {
        icon: ShieldCheck,
        title: 'Sedazione Cosciente',
        description: 'Protocolli avanzati di rilassamento per chi vive con ansia l\'appuntamento dal dentista.',
    },
    {
        icon: HeartPulse,
        title: 'Approccio Empatico',
        description: 'Il nostro staff è formato per accoglierti con cura e ascoltare ogni tua preoccupazione.',
    },
]

export default function ComfortSection() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section ref={ref} className="w-full px-4 py-20 md:px-8 md:py-32 bg-background relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="grid gap-16 md:grid-cols-2 lg:gap-24 items-center">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-block">
                            Anxiety-Free Dentistry
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Dimentica lo stress. <br />
                            <span className="text-muted-foreground font-medium italic serif">Respira, rilassati.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                            Sappiamo che molti pazienti vivono con ansia l'appuntamento dal dentista. In Dente Altius abbiamo rivoluzionato l'esperienza clinica trasformandola in un momento di benessere assoluto.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: i * 0.1 + 0.5 }}
                                    className="space-y-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <f.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-foreground">{f.title}</h3>
                                    <p className="text-sm text-muted-foreground">{f.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-accent/20 mix-blend-multiply transition-opacity hover:opacity-0 duration-700" />
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                            alt="Ambiente rilassante Dente Altius"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-8 bottom-8 p-6 glass rounded-2xl">
                            <p className="text-sm italic font-medium">"Non sembrava nemmeno di essere dal dentista. Mi sono sentita totalmente a mio agio."</p>
                            <p className="text-xs font-bold mt-2 text-accent uppercase">— Elena M.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
