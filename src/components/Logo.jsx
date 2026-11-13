import { BRAND } from '../data/content.js'

export default function Logo({ light = true }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${light ? 'text-white' : 'text-dark'}`} aria-label={`${BRAND} home`}>
      <span className="grid h-9 w-9 place-items-center bg-primary text-white">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <path d="M12 5v14" /><path d="M5 12h14" />
        </svg>
      </span>
      <span className="t-h5 !text-[24px]">{BRAND}</span>
    </a>
  )
}
