import { useMemo, useRef, useState } from 'react'
import { NOTICES, NOTICES_SECTION } from '../../data/notices.js'
import { Section, SectionHeading, PrimaryButton } from '../../components/ui.jsx'
import NoticeModal from '../../components/NoticeModal.jsx'

const SEE_MORE = 'See More'
const SHOW_LESS = 'Show Less'

const SORT_OPTIONS = [
  { value: 'newest', label: 'Most recent' },
  { value: 'oldest', label: 'Oldest' },
]

// Dates are free-form strings like "Nov 18, 2026"; Date.parse handles that format. Equal/invalid dates fall back to id.
const time = (n) => Date.parse(n.date) || 0
const sortNotices = (list, order) =>
  [...list].sort((a, b) => (order === 'oldest' ? 1 : -1) * (time(a) - time(b) || a.id - b.id))

function NoticeRow({ notice, onOpen }) {
  return (
    <li className="flex min-h-[72px] items-stretch rounded-md border border-stroke bg-white transition-colors hover:border-primary tablet:min-h-[84px]">
      <time className="t-highlight flex w-[104px] shrink-0 items-center justify-center whitespace-nowrap px-2 text-center text-[14px] text-body tablet:w-[170px] tablet:px-6 tablet:text-[16px]">
        {notice.date}
      </time>
      <span aria-hidden="true" className="my-4 w-px shrink-0 bg-stroke" />
      <button
        type="button"
        onClick={() => onOpen(notice)}
        aria-haspopup="dialog"
        className="t-h5 group flex min-w-0 flex-1 items-center justify-between gap-4 px-4 py-4 text-left text-dark transition-colors hover:text-primary tablet:px-8 text-[17px] tablet:text-[20px] desktop:text-[22px]"
      >
        <span className="underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-primary">
          {notice.heading}
        </span>
        <span aria-hidden="true" className="hidden shrink-0 text-primary tablet:block">→</span>
      </button>
    </li>
  )
}

export default function Notices() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState(null)
  const [order, setOrder] = useState('newest')
  const toggleRef = useRef(null)

  const { initialCount } = NOTICES_SECTION
  const canToggle = NOTICES.length > initialCount
  const sorted = useMemo(() => sortNotices(NOTICES, order), [order])
  const visible = canToggle && !expanded ? sorted.slice(0, initialCount) : sorted

  const toggle = () => {
    const collapsing = expanded
    setExpanded(!expanded)
    if (collapsing) requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: 'nearest' }))
  }

  return (
    <Section id="notices" innerClassName="flex flex-col items-center gap-[50px] desktop:gap-[60px]">
      <div data-reveal className="w-full max-w-[536px]">
        <SectionHeading tag={NOTICES_SECTION.tag} title={NOTICES_SECTION.title} align="center" />
      </div>

      <div data-reveal className="flex w-full max-w-[960px] flex-col items-center gap-[40px]">
        <div role="group" aria-label="Sort notices" className="flex w-full justify-end gap-2">
          {SORT_OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              aria-pressed={order === o.value}
              onClick={() => setOrder(o.value)}
              className={`t-highlight rounded-full border px-4 py-2 transition-colors ${
                order === o.value
                  ? 'border-primary bg-primary text-white'
                  : 'border-stroke text-body hover:border-primary hover:text-primary'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>

        <ul id="notices-list" className="flex w-full flex-col gap-4">
          {visible.map((n) => <NoticeRow key={n.id} notice={n} onOpen={setActive} />)}
        </ul>

        {canToggle && (
          <div ref={toggleRef} className="flex justify-center">
            <PrimaryButton as="button" type="button" aria-expanded={expanded} aria-controls="notices-list" onClick={toggle}>
              {expanded ? SHOW_LESS : SEE_MORE}
            </PrimaryButton>
          </div>
        )}
      </div>

      {/* key => fresh zoom/pan state whenever a different notice is opened */}
      {active && <NoticeModal key={active.id} notice={active} onClose={() => setActive(null)} />}
    </Section>
  )
}
