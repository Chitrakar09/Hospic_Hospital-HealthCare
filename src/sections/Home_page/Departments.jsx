import { useRef, useState } from 'react'
import { DEPARTMENTS, DEPARTMENTS_ASSETS } from '../../data/configs/departments.js'
import { Section, SectionHeading, PrimaryButton, Img } from '../../components/ui.jsx'

const INITIAL_COUNT = 4
const SEE_MORE = 'See More'
const SEE_LESS = 'See Less'

/** Framer department card: on hover the photo zooms to 1.05 inside its frame (spring 0.6s, no bounce). */
function DepartmentCard({ title, text, photo, icon }) {
  return (
    <article className="group flex flex-col tablet:flex-row">
      <div className="h-[240px] w-full overflow-hidden tablet:h-auto tablet:min-h-[310px] tablet:w-[240px] tablet:shrink-0 desktop:w-[280px]">
        <Img src={photo} alt="" className="zoom-card h-full w-full group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-10 bg-light-bg p-[30px]">
        <img src={icon} alt="" className="h-[50px] w-[50px] object-contain" loading="lazy" />
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="t-h5 text-dark">{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Departments() {
  const [expanded, setExpanded] = useState(false)
  const toggleRef = useRef(null)

  const items = DEPARTMENTS.items
  const canToggle = items.length > INITIAL_COUNT
  const visible = canToggle && !expanded ? items.slice(0, INITIAL_COUNT) : items

  const toggle = () => {
    const collapsing = expanded
    setExpanded(!expanded)
    // Keep the button in view when the section gets shorter.
    if (collapsing) requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: 'nearest' }))
  }

  return (
    <Section id="departments" innerClassName="flex flex-col gap-[50px] desktop:gap-20">
      <div data-reveal className="flex flex-col items-start justify-center gap-8 tablet:flex-row tablet:items-end">
        <SectionHeading tag={DEPARTMENTS.tag} title={DEPARTMENTS.title} align="center" className="max-w-[562px]" />
      </div>

      <div data-reveal className="flex flex-col gap-[50px] desktop:gap-[60px]">
        <div id="departments-grid" className="grid grid-cols-1 gap-5 desktop:grid-cols-2">
          {visible.map((d, i) => (
            // Photos/icons live in assets.js by position; cycle them if there are more departments than assets.
            <DepartmentCard key={d.title} {...d} {...DEPARTMENTS_ASSETS[i % DEPARTMENTS_ASSETS.length]} />
          ))}
        </div>

        {canToggle && (
          <div ref={toggleRef} className="flex justify-center">
            <PrimaryButton as="button" type="button" aria-expanded={expanded} aria-controls="departments-grid" onClick={toggle}>
              {expanded ? SEE_LESS : SEE_MORE}
            </PrimaryButton>
          </div>
        )}
      </div>
    </Section>
  )
}
