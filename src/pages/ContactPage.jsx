import { useEffect } from 'react'
import { CONTACT_PAGE } from '../data/constants/contact.js'
import { Section } from '../components/ui.jsx'
import ContactHero from '../sections/contacts/ContactHero.jsx'
import ContactCards from '../sections/contacts/ContactCards.jsx'
import ContactForm from '../sections/contacts/ContactForm.jsx'

export default function ContactPage() {
  useEffect(() => {
    const previous = document.title
    document.title = CONTACT_PAGE.documentTitle
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <ContactHero />
      <Section id="contact" reveal innerClassName="flex flex-col gap-5 desktop:gap-[30px]">
        <ContactCards />
        <ContactForm />
      </Section>
    </>
  )
}
