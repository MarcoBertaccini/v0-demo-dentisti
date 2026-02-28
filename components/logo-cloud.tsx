'use client'

import { motion } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const brands = [
    { name: 'Sirona', description: 'Leader mondiale nella diagnostica 3D imaging' },
    { name: 'Invisalign', description: 'Sistema di allineatori trasparenti per ortodonzia invisibile' },
    { name: 'iTero', description: 'Scanner intraorale ad alta precisione' },
    { name: 'Nobel Biocare', description: 'Eccellenza svizzera in implantologia avanzata' },
    { name: 'Straumann', description: 'Leader nel campo dell\'implantologia e rigenerazione tessutale' },
]

export default function LogoCloud() {
    return (
        <section className="w-full py-12 bg-background border-y border-border/40">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-10">
                    Partner Tecnologici d'Elite
                </p>
                <TooltipProvider>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
                        {brands.map((brand) => (
                            <Tooltip key={brand.name}>
                                <TooltipTrigger asChild>
                                    <motion.div
                                        whileHover={{ scale: 1.05, opacity: 1 }}
                                        initial={{ opacity: 0.5 }}
                                        animate={{ opacity: 0.6 }}
                                        className="cursor-help"
                                    >
                                        <span className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground/80 grayscale hover:grayscale-0 transition-all">
                                            {brand.name.toUpperCase()}
                                        </span>
                                    </motion.div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-popover/90 backdrop-blur-md border-border/50">
                                    <p className="text-sm font-medium">{brand.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </section>
    )
}
