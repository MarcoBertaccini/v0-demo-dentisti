'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText, ArrowRight } from 'lucide-react'

export default function ExitIntentOffer() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true)
                setHasShown(true)
            }
        }

        document.addEventListener('mouseout', handleMouseOut)
        return () => document.removeEventListener('mouseout', handleMouseOut)
    }, [hasShown])

    const handleClose = () => setIsVisible(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubscribed(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 3000)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/20 bg-card shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute right-6 top-6 rounded-full p-2 hover:bg-accent/10 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="grid md:grid-cols-5 h-full">
                            <div className="md:col-span-2 bg-accent/10 p-8 flex flex-col justify-center items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-accent">PDF Gratuito</p>
                                    <p className="font-bold text-foreground">Guida al Sorriso</p>
                                </div>
                            </div>

                            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                                {!subscribed ? (
                                    <>
                                        <h2 className="text-2xl font-bold mb-2">Non andartene ancora!</h2>
                                        <p className="text-muted-foreground mb-6 text-sm">
                                            Scarica la nostra guida esclusiva: "7 segreti per un sorriso bianco e sano che dura una vita".
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-3">
                                            <input
                                                type="email"
                                                placeholder="Inserisci la tua email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-accent outline-none"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white hover:shadow-lg hover:shadow-accent/20 transition-all"
                                            >
                                                Inviatela Ora <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="text-center space-y-4">
                                        <div className="text-4xl text-emerald-500">✓</div>
                                        <h3 className="text-xl font-bold">Guida Inviata!</h3>
                                        <p className="text-sm text-muted-foreground">Controlla la tua casella di posta tra pochi istanti.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
