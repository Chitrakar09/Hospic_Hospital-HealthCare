import { BRAND } from '../data/content.js'
import logoImg from '../data/images/logo.png'

export default function Logo({ light = true }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${light ? 'text-white' : 'text-dark'}`} aria-label={`${BRAND} home`}>
      <img 
        src={logoImg} 
        alt="" 
        className="h-9 w-9 object-contain" 
      />
      <span className="t-h5 !text-[24px]">{BRAND}</span>
    </a>
  )
}