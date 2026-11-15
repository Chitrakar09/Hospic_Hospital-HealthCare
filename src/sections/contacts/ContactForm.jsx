import { useState } from 'react'
import { CONTACT_IMG, CONTACT_PAGE } from '../../data/contact.js'
import { SectionHeading, PrimaryButton } from '../../components/ui.jsx'

const control =
  'w-full border border-stroke bg-transparent px-5 py-3 text-dark outline-none transition-colors placeholder:text-body focus:border-primary'
const pill = `${control} rounded-full`

function Field({ label, id, className = '', children }) {
  return (
    <div className={`flex flex-col items-start gap-[18px] ${className}`}>
      <label htmlFor={id} className="t-highlight text-dark">{label}</label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const { tag, title, departments, submit, success } = CONTACT_PAGE.form
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send `Object.fromEntries(new FormData(e.currentTarget))` to your backend / form service.
    e.currentTarget.reset()
    setSent(true)
  }

  return (
    <div className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[10px] px-5 py-[60px] tablet:gap-[50px] tablet:px-[30px] tablet:py-20 desktop:gap-20 desktop:py-[120px]">
      <img src={CONTACT_IMG.panelBg} alt="" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <SectionHeading tag={tag} title={title} align="center" className="relative max-w-[436px] desktop:max-w-[553px]" />

      <form onSubmit={onSubmit} className="relative grid w-full max-w-[970px] grid-cols-1 gap-x-5 gap-y-6 tablet:grid-cols-2 desktop:gap-y-[30px]">
        <Field label="Full Name *" id="cf-name">
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Michael Scott" className={pill} />
        </Field>
        <Field label="Email Address *" id="cf-email">
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="info@hospic.com" className={pill} />
        </Field>
        <Field label="Phone Number *" id="cf-phone">
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (212) 555-0100" className={pill} />
        </Field>
        <Field label="Department *" id="cf-department">
          <div className="relative w-full">
            <select id="cf-department" name="department" required defaultValue="" className={`${pill} appearance-none pr-12 invalid:text-body`}>
              <option value="" disabled>Select…</option>
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-body">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </Field>
        <Field label="Appointment Date *" id="cf-date">
          <input id="cf-date" name="date" type="date" required className={`${pill} [color-scheme:light]`} />
        </Field>
        <Field label="Doctor Name *" id="cf-doctor">
          <input id="cf-doctor" name="doctor" type="text" required placeholder="James Carter" className={pill} />
        </Field>
        <Field label="Message *" id="cf-message" className="tablet:col-span-2">
          <textarea id="cf-message" name="message" required placeholder="Write your message…" className={`${control} min-h-[140px] resize-y rounded-[10px]`} />
        </Field>
        <div className="tablet:col-span-2">
          <PrimaryButton as="button" type="submit" className="!w-full !justify-between !rounded-full [&>span:last-child]:!rounded-full">
            {submit}
          </PrimaryButton>
          <p role="status" aria-live="polite" className={`mt-4 text-dark ${sent ? '' : 'hidden'}`}>{sent ? success : ''}</p>
        </div>
      </form>
    </div>
  )
}
