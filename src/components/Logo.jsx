import { BRAND } from '../data/constants/brand.js'
import logoImg from '../assets/images/components/logo.png'
import { Link } from 'react-router'

export default function Logo({ light = true }) {
  return (
    <Link to={'/'} className={`inline-flex items-center gap-2 ${light ? 'text-white' : 'text-dark'}`} aria-label={`${BRAND} home`}>
      <img 
        src={logoImg} 
        alt="" 
        className="h-9 w-9 object-contain" 
      />
      <span className="t-h5 !text-[24px]">{BRAND}</span>
    </Link>
  )
}