import { useState } from 'react'
import { A } from '../../data/assets.js'
import { DOCTORS } from '../../data/content.js'
import { Section, SectionHeading, PrimaryButton } from '../../components/ui.jsx'
import { Plus, Minus, Phone, Pin } from '../../components/Icons.jsx'

function DoctorCard({ doctor, photo }) {
  const [open, setOpen] = useState(false)
  return (
    <article
      className="relative h-[440px] overflow-hidden bg-dark text-white"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img src={photo} alt={`${doctor.name}, ${doctor.role}`} loading="lazy" className="absolute inset-0 h-full w-full bg-bg-color object-cover object-top" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark from-60% to-transparent p-[30px] pt-20">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="t-h5">{doctor.name}</h3>
            <p className="t-highlight text-body-dark">{doctor.role}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={`${open ? 'Hide' : 'Show'} details for ${doctor.name}`}
            className="grid h-[34px] w-[34px] shrink-0 place-items-center bg-white/10 transition-colors hover:bg-primary"
          >
            {open ? <Minus width={20} height={20} /> : <Plus width={20} height={20} />}
          </button>
        </div>
        <div className={`grid transition-all duration-300 ${open ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-5">
              <p className="text-body-dark">{doctor.bio}</p>
              <div className="flex flex-col gap-3 text-body-dark">
                <a href={`tel:${doctor.phone.replace(/[^+\d]/g, '')}`} tabIndex={open ? 0 : -1} className="inline-flex items-center gap-[10px] hover:text-white">
                  <Phone width={18} height={18} /> {doctor.phone}
                </a>
                <span className="inline-flex items-center gap-[10px]"><Pin width={18} height={18} /> {DOCTORS.address}</span>
              </div>
              {/* <PrimaryButton className="!pl-4 !gap-4" tabIndex={open ? 0 : -1}>{DOCTORS.cta}</PrimaryButton> */}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Doctors() {
  return (
    <Section id="doctors" top={false} innerClassName="flex flex-col items-center gap-[50px] pt-[60px] tablet:pt-20 desktop:gap-20 desktop:pt-[120px]">
      <SectionHeading tag={DOCTORS.tag} title={DOCTORS.title} align="center" className="max-w-[536px]" />
      <div className="grid w-full grid-cols-1 gap-[30px] tablet:grid-cols-2 desktop:grid-cols-3">
        {DOCTORS.items.map((d, i) => <DoctorCard key={d.name} doctor={d} photo={A.doctors[i]} />)}
      </div>
    </Section>
  )
}