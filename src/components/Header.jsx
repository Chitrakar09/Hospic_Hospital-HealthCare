import { useState } from 'react'
import { NAV, HERO } from '../data/content.js'
import Logo from './Logo.jsx'
import { PrimaryButton } from './ui.jsx'
import { Menu, Close } from './Icons.jsx'
import { NavLink } from 'react-router'
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 tablet:px-[30px]">
      <div className="mx-auto flex h-[88px] w-full max-w-container items-center justify-between desktop:h-[110px]">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-9 desktop:flex">
          {NAV.map((n) => (
            <NavLink key={n.label} to={n.href} className="t-highlight text-white/90 transition-colors hover:text-white">
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden desktop:block">
          <PrimaryButton>{HERO.cta}</PrimaryButton>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center border border-stroke-dark text-white desktop:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="mx-auto flex w-full max-w-container flex-col gap-1 bg-dark p-5 desktop:hidden">
          {NAV.map((n) => (
            <a key={n.label} href={""} onClick={() => setOpen(false)} className="t-h6 border-b border-stroke-dark py-4 text-white">
              {n.label}
            </a>
          ))}
          <div className="pt-5">
            <PrimaryButton>{HERO.cta}</PrimaryButton>
          </div>
        </nav>
      )}
    </header>
  )
}
