import { useEffect, useRef, useState } from 'react'
import { A } from '../../data/assets.js'
import { DEPARTMENTS } from '../../data/content.js'
import { Section, SectionHeading, PrimaryButton, Img } from '../../components/ui.jsx'
import { ArrowUpRight } from '../../components/Icons.jsx'

const INITIAL_COUNT = 4
const SEE_MORE = 'See More'
const SEE_LESS = 'See Less'

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

function DepartmentCard({ title, text, photo, icon, index }) {
  const [ref, visible] = useInView(0.15)

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
      className={`flex flex-col transition-all duration-700 ease-out tablet:flex-row ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <Img
        src={photo}
        alt=""
        className="h-[240px] w-full tablet:h-auto tablet:min-h-[310px] tablet:w-[240px] tablet:shrink-0 desktop:w-[280px]"
      />
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
  const [headerRef, headerVisible] = useInView(0.2)
  const [buttonRef, buttonVisible] = useInView(0.2)

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
      <div
        ref={headerRef}
        className={`flex flex-col items-start justify-center gap-8 transition-all duration-700 ease-out tablet:flex-row tablet:items-end ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading tag={DEPARTMENTS.tag} title={DEPARTMENTS.title} align="center" className="max-w-[562px]" />
      </div>

      <div className="flex flex-col gap-[50px] desktop:gap-[60px]">
        <div id="departments-grid" className="grid grid-cols-1 gap-5 desktop:grid-cols-2">
          {visible.map((d, i) => (
            // Photos/icons live in assets.js by position; cycle them if there are more departments than assets.
            <DepartmentCard key={d.title} index={i} {...d} {...A.departments[i % A.departments.length]} />
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
            <PrimaryButton as="button" type="button" aria-expanded={expanded} aria-controls="departments-grid" onClick={toggle}>
              {expanded ? SEE_LESS : SEE_MORE}
            </PrimaryButton>
          </div>
        )}
      </div>
    </Section>
  )
}