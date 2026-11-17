import { CONTACT_IMG, CONTACT_PAGE } from '../../data/contact.js'
import { SectionHeading } from '../../components/ui.jsx'
import { FORM_GRID, Field, TextInput, TextArea, SubmitButton } from '../../components/FormFields.jsx'

function handleSubmit(e) {
  e.preventDefault()

  const form = e.target

  const name = form['contact-name'].value
  const email = form['contact-email'].value
  const subject = form['contact-subject'].value
  const message = form['contact-message'].value

  const mailSubject = `New Contact Message - ${name}`

  const body = `
New Contact Request

Sender Details
----------------

Name: ${name}
Email: ${email}

Subject:
${subject}

Message:
${message}


Sent from Hospital Website
`

  const mail = `https://mail.google.com/mail/?view=cm&fs=1&to=hospital@rupandehimodalhospital.com&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`

  window.open(mail, '_blank')
}

/** Contact Us form with Gmail compose integration. */
export default function ContactForm() {
  const { tag, title, submit } = CONTACT_PAGE.form

  return (
    <div className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[10px] px-5 py-[60px] tablet:gap-[50px] tablet:px-[30px] tablet:py-20 desktop:gap-20 desktop:py-[120px]">
      <img src={CONTACT_IMG.panelBg} alt="" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <SectionHeading tag={tag} title={title} align="center" className="relative max-w-[436px] desktop:max-w-[553px]" />

      <form onSubmit={handleSubmit} className={`${FORM_GRID} max-w-[970px]`}>
        <Field label="Full Name *" id="contact-name">
          <TextInput id="contact-name" required autoComplete="name" placeholder="Enter Your Name ..." />
        </Field>

        <Field label="Email Address *" id="contact-email">
          <TextInput id="contact-email" type="email" required autoComplete="email" placeholder="Enter Your Email ..." />
        </Field>

        <Field label="Subject *" id="contact-subject" className="tablet:col-span-2">
          <TextInput id="contact-subject" required placeholder="How can we help you ?" />
        </Field>

        <Field label="Message *" id="contact-message" className="tablet:col-span-2">
          <TextArea id="contact-message" required placeholder="Enter Your Message ..." />
        </Field>

        <div className="tablet:col-span-2">
          <SubmitButton>{submit}</SubmitButton>
        </div>
      </form>
    </div>
  )
}