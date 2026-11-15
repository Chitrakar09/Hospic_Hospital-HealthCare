import { CONTACT_PAGE } from '../../data/contact.js'
import { Phone, Pin } from '../../components/Icons.jsx'

const Mail = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
)
const ICONS = { phone: Phone, mail: Mail, pin: Pin }

/** Contact Card: light card, 60px (50px below desktop) Primary icon tile, title (Highlight) + body lines. */
function ContactCard({ icon, title, lines, className = '' }) {
  const Icon = ICONS[icon]
  return (
    <article className={`flex items-start gap-5 rounded-[10px] bg-light-bg p-5 desktop:gap-[30px] desktop:p-[30px] ${className}`}>
      <div className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-md bg-primary text-white desktop:h-[60px] desktop:w-[60px]">
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
  )
}

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-[1fr_1fr_380px] desktop:gap-[30px]">
      {CONTACT_PAGE.cards.map((c, i) => (
        <ContactCard key={c.title} {...c} className={i === 2 ? 'tablet:col-span-2 desktop:col-span-1' : ''} />
      ))}
    </div>
  )
}
