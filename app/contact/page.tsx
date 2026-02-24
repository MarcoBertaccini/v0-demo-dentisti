import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import BackToTop from '@/components/back-to-top'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti | Dente Altius',
  description: 'Contattaci per domande o per prenotare un appuntamento. Siamo qui per aiutarti.',
}

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden bg-background text-foreground">
      <Header />
      
      <section className="min-h-screen w-full px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Contattaci
            </h1>
            <p className="text-lg text-muted-foreground">
              Hai domande? Desideri prenotare un appuntamento? Compilare il modulo sottostante e ti contatteremo al più presto.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </main>
  )
}
