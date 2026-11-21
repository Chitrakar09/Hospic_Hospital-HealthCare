import { useEffect, useRef, useState } from 'react'
import { CONTACT_PAGE } from '../../data/contact.js'
import { Phone, Pin } from '../../components/Icons.jsx'

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

const Mail = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
)
const ICONS = { phone: Phone, mail: Mail, pin: Pin }

/** Contact Card: light card, 60px (50px below desktop) Primary icon tile, title (Highlight) + body lines. */
function ContactCard({ icon, title, lines, className = '', visible, delay }) {
  const Icon = ICONS[icon]
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
      } ${className}`}
    >
      <article className="group flex h-full items-start gap-5 rounded-[10px] bg-light-bg p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-white hover:shadow-lg desktop:gap-[30px] desktop:p-[30px]">
        <div className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-md bg-primary text-white transition-transform duration-300 group-hover:scale-110 desktop:h-[60px] desktop:w-[60px]">
          <Icon width={24} height={24} />
        </div>
        <div className="flex flex-1 flex-col gap-[14px] desktop:gap-[22px]">
          <h3 className="t-highlight text-dark">{title}</h3>
          <div className="flex flex-col gap-0.5 desktop:gap-1.5">
            {lines.map((l) => (
              <a
                key={l.text}
                href={l.href}
                {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="w-fit transition-colors hover:text-primary"
              >
                {l.text}
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default function ContactCards() {
  const [gridRef, gridVisible] = useInView(0.15)

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-[1fr_1fr_380px] desktop:gap-[30px]"
    >
      {CONTACT_PAGE.cards.map((c, i) => (
        <ContactCard
          key={c.title}
          {...c}
          visible={gridVisible}
          delay={i * 120}
          className={i === 2 ? 'tablet:col-span-2 desktop:col-span-1' : ''}
        />
      ))}
    </div>
  )
}