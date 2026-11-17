import { A } from '../../data/assets.js'
import { APPOINTMENT } from '../../data/content.js'
import { Section } from '../../components/ui.jsx'
import { FORM_GRID, Field, TextInput, SelectInput, TextArea, SubmitButton } from '../../components/FormFields.jsx'

const SUBMIT_LABEL = 'Book Appointment'

function handleSubmit(e) {
  e.preventDefault()

  const form = e.target

  const name = form['appointment-name'].value
  const email = form['appointment-email'].value
  const phone = form['appointment-phone'].value
  const department = form['appointment-department'].value
  const date = form['appointment-date'].value
  const doctor = form['appointment-doctor'].value
  const message = form['appointment-message'].value

  const subject = `New Appointment Request - ${name}`

  const body = `
New Online Appointment Request

Patient Details
----------------

Name: ${name}
Email: ${email}
Phone: ${phone}

Appointment Details
-------------------

Department: ${department}
Doctor: ${doctor}
Preferred Date: ${date}

Message:
${message}


Sent from Hospital Website
`

  const mail = `https://mail.google.com/mail/?view=cm&fs=1&to=hospital@rupandehimodalhospital.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.open(mail, '_blank') 
}

/** Appointment Booking Form: same navy panel, background and heading as before, with the full 7-field form. */
export default function Appointment() {
  return (
    <Section id="appointment" top={false}>
      <div className="relative flex flex-col gap-10 overflow-hidden bg-dark px-5 py-10 tablet:gap-[52px] tablet:px-[68px] rounded-2xl">
        <img src={A.appointmentBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" />
        <h2 id="appointment-title" className="t-h3 relative max-w-[760px] text-white">{APPOINTMENT.title}</h2>

        <form onSubmit={handleSubmit} aria-labelledby="appointment-title" className={FORM_GRID}>
          <Field tone="dark" label="Full Name *" id="appointment-name">
            <TextInput tone="dark" id="appointment-name" required autoComplete="name" placeholder="Enter Your Full Name ..." />
          </Field>

          <Field tone="dark" label="Email Address *" id="appointment-email">
            <TextInput tone="dark" id="appointment-email" type="email" required autoComplete="email" placeholder="Enter Your Email ..." />
          </Field>

          <Field tone="dark" label="Phone Number *" id="appointment-phone">
            <TextInput tone="dark" id="appointment-phone" type="tel" required autoComplete="tel" placeholder="Enter Your Phone Number ..." />
          </Field>

          <Field tone="dark" label="Department *" id="appointment-department">
            <SelectInput tone="dark" id="appointment-department" required options={APPOINTMENT.options} />
          </Field>

          <Field tone="dark" label="Appointment Date *" id="appointment-date">
            <TextInput tone="dark" id="appointment-date" type="date" required />
          </Field>

          <Field tone="dark" label="Doctor Name *" id="appointment-doctor">
            <TextInput tone="dark" id="appointment-doctor" required placeholder="Enter Preferred Doctor Name ..." />
          </Field>

          <Field tone="dark" label="Message *" id="appointment-message" className="tablet:col-span-2">
            <TextArea tone="dark" id="appointment-message" required placeholder="Write your message…" />
          </Field>

          <div className="tablet:col-span-2">
            <SubmitButton>{SUBMIT_LABEL}</SubmitButton>
          </div>
        </form>
      </div>
    </Section>
  )
}