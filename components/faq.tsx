'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Quanto costa il primo check-up?',
    answer: 'Il primo check-up è completamente gratuito! Include una visita completa, radiografia digitale e un piano di trattamento personalizzato.',
  },
  {
    question: 'Quali metodi di pagamento accettate?',
    answer: 'Accettiamo contanti, carte di credito, bonifici bancari e offriamo anche piani di finanziamento flessibili per trattamenti più importanti.',
  },
  {
    question: 'Quanto durano i trattamenti dentali?',
    answer: 'La durata varia a seconda del tipo di trattamento. Un trattamento base dura 30-60 minuti, mentre gli impianti richiedono più sedute. Durante la consulenza vi forniremo una stima precisa.',
  },
  {
    question: 'Offrite garanzie sui vostri lavori?',
    answer: 'Sì, tutti i nostri trattamenti sono garantiti. Le corone e i ponti hanno una garanzia di 5 anni, gli impianti di 10 anni sui materiali e sulla lavorazione.',
  },
  {
    question: 'Sono disponibile per gli orari serali?',
    answer: 'Sì, abbiamo orari flessibili. Siamo aperti da lunedì a venerdì dalle 8:00 alle 20:00 e il sabato dalle 9:00 alle 17:00.',
  },
  {
    question: 'Come posso prenotare un appuntamento?',
    answer: 'Potete prenotare online compilando il modulo nel nostro sito, telefonando al 333-1234567 o visitandoci direttamente in via Milano 42, a Milano.',
  },
]

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" ref={ref} className="relative w-full px-4 py-20 md:px-8 md:py-32 bg-card/50">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            Domande Frequenti
          </h2>
          <p className="text-lg text-muted-foreground">
            Trova risposte alle tue domande riguardanti i nostri servizi e prezzi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-border/50 rounded-lg border px-4 py-2 glass hover:border-accent/50 transition-colors data-[state=open]:border-accent"
                >
                  <AccordionTrigger className="hover:text-accent transition-colors font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
