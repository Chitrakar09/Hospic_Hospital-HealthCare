import { FOOTER, NAV } from '../data/content.js'
import Logo from '../components/Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-dark px-5 pt-[60px] pb-8 text-body-dark tablet:px-[30px] tablet:pt-20">
      <div data-reveal data-reveal-y="44" className="mx-auto grid w-full max-w-container grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex max-w-[320px] flex-col gap-5">
          <Logo />
          <p>{FOOTER.blurb}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="t-h6 text-white">Opening hours</h3>
          {FOOTER.hours.map((h) => <p key={h}>{h}</p>)}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="t-h6 text-white">Essential pages</h3>
          {NAV.map((n) => <a key={n.label} href={n.href} className="nav-link w-fit transition-colors duration-300 ease-linear hover:text-white">{n.label}</a>)}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="t-h6 text-white">Contact info</h3>
          {FOOTER.contact.map((c) => <p key={c}>{c}</p>)}
        </div>
      </div>
      <div data-reveal data-reveal-y="44" className="mx-auto mt-12 w-full max-w-container border-t border-stroke-dark pt-6 text-center">
        <p>{FOOTER.copyright}</p>
      </div>
    </footer>
  )
}
