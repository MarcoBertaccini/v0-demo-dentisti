'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Search, PenTool, Sparkles } from 'lucide-react'

const steps = [
    {
        icon: Search,
        title: 'Analisi & Diagnostica',
        description: 'Utilizziamo scanner 3D e intelligenza artificiale per mappare ogni dettaglio della tua anatomia dentale.',
        color: 'bg-blue-500',
    },
    {
        icon: PenTool,
        title: 'Precisione & Studio',
        description: 'Progettiamo digitalmente il tuo nuovo sorriso, garantendo un risultato armonioso e funzionale.',
        color: 'bg-accent',
    },
    {
        icon: Sparkles,
        title: 'Il Tuo Sorriso',
        description: 'Applichiamo le tecnologie più avanzate per trasformare il progetto in realtà, con il minimo fastidio.',
        color: 'bg-emerald-500',
    },
]

export default function DigitalRoadmap() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section ref={ref} className="w-full px-4 py-20 md:px-8 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Digital Smile Roadmap</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Il tuo percorso verso un sorriso perfetto è guidato dalla precisione del digitale. Scopri come trasformiamo la tua visione in realtà.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border/30 -translate-y-1/2 hidden md:block" />

                    <div className="grid gap-12 md:grid-cols-3 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative group"
                                >
                                    <div className="flex flex-col items-center text-center p-8 rounded-3xl glass border border-border/50 hover:border-accent/50 transition-all duration-500 group-hover:-translate-y-2">
                                        <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-inherit/20`}>
                                            <Icon className="text-white w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Step Number Dot */}
                                    <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-accent -translate-y-1/2 hidden md:group-first:hidden group-first:hidden" />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
