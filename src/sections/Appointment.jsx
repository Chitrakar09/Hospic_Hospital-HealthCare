import { useState } from 'react'
import { A } from '../data/assets.js'
import { APPOINTMENT } from '../data/content.js'
import { Section, PrimaryButton } from '../components/ui.jsx'

const field = 'w-full bg-stroke-dark px-5 py-3 text-white placeholder:text-white/50 outline-none focus-visible:ring-2 focus-visible:ring-primary'

export default function Appointment() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to your backend / form service here.
    setSent(true)
  }
  const { fields } = APPOINTMENT
  return (
    <Section id="appointment" top={false}>
      <div className="relative flex flex-col gap-[52px] overflow-hidden bg-dark px-5 py-10 tablet:px-[68px]">
        <img src={A.appointmentBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" />
        <h2 className="t-h3 relative max-w-[760px] text-white">{APPOINTMENT.title}</h2>
        {sent ? (
          <p role="status" className="t-h6 relative text-white">{APPOINTMENT.thanks}</p>
        ) : (
          <form onSubmit={onSubmit} className="relative grid grid-cols-1 items-end gap-5 tablet:grid-cols-2 desktop:grid-cols-[1fr_1fr_1fr_auto]">
            <label className="flex flex-col gap-[18px] text-white">
              {fields.name}
              <input required name="name" type="text" autoComplete="name" className={field} />
            </label>
            <label className="flex flex-col gap-[18px] text-white">
              {fields.phone}
              <input required name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="flex flex-col gap-[18px] text-white">
              {fields.dept}
              <select required name="department" defaultValue="" className={`${field} appearance-none`}>
                <option value="" disabled className="text-dark">Select</option>
                {APPOINTMENT.options.map((o) => <option key={o} value={o} className="text-dark">{o}</option>)}
              </select>
            </label>
            <PrimaryButton as="button" type="submit" className="w-full tablet:w-fit">{APPOINTMENT.submit}</PrimaryButton>
          </form>
        )}
      </div>
    </Section>
  )
}
