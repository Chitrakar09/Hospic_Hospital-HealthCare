import { useEffect, useRef, useState } from 'react'
import { A } from '../../data/assets.js'
import { DOCTORS } from '../../data/content.js'
import { Section, SectionHeading, PrimaryButton } from '../../components/ui.jsx'
import { Plus, Minus, Phone, Pin } from '../../components/Icons.jsx'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        io.disconnect()
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, visible]
}

function DoctorCard({ doctor, photo, index }) {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useInView(0.15)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <article
        className="relative h-[440px] overflow-hidden bg-dark text-white"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <img
          src={photo}
          alt={`${doctor.name}, ${doctor.role}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full bg-bg-color object-cover object-top"
        />
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
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

const SEE_MORE = 'See More'
const SEE_LESS = 'See Less'

/**
- `initialCount`: how many doctors show before "See More". Omit it to show everyone (no button),
- e.g. the About page. The homepage passes `initialCount={3}`.
 */
export default function Doctors({ initialCount = Infinity }) {
  const [expanded, setExpanded] = useState(false)
  const toggleRef = useRef(null)
  const [headerRef, headerVisible] = useInView(0.2)
  const [buttonRef, buttonVisible] = useInView(0.2)

  const items = DOCTORS.items
  const canToggle = items.length > initialCount
  const visible = canToggle && !expanded ? items.slice(0, initialCount) : items

  const toggle = () => {
    const collapsing = expanded
    setExpanded(!expanded)
    // Keep the button in view when the section gets shorter.
    if (collapsing) requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: 'nearest' }))
  }

  return (
    <Section id="doctors" top={false} innerClassName="flex flex-col items-center gap-[50px] pt-[60px] tablet:pt-20 desktop:gap-20 desktop:pt-[120px]">
      <div
        ref={headerRef}
        className={`w-full max-w-[536px] transition-all duration-700 ease-out ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading tag={DOCTORS.tag} title={DOCTORS.title} align="center" />
      </div>

      <div className="flex w-full flex-col gap-[50px] desktop:gap-[60px]">
        <div id="doctors-grid" className="grid w-full grid-cols-1 gap-[30px] tablet:grid-cols-2 desktop:grid-cols-3">
          {visible.map((d, i) => (
            // Photos live in assets.js by position; cycle them if there are more doctors than photos.
            <DoctorCard key={d.name} index={i} doctor={d} photo={A.doctors[i % A.doctors.length]} />
          ))}
        </div>

        {canToggle && (
          <div
            ref={(el) => {
              toggleRef.current = el
              buttonRef.current = el
            }}
            className={`flex justify-center transition-all duration-700 ease-out ${
              buttonVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <PrimaryButton as="button" type="button" aria-expanded={expanded} aria-controls="doctors-grid" onClick={toggle}>
              {expanded ? SEE_LESS : SEE_MORE}
            </PrimaryButton>
          </div>
        )}
      </div>
    </Section>
  )
}