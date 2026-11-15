import { CONTACT_IMG, CONTACT_PAGE } from '../../data/contact.js'

/** Centered inner-page hero: full-bleed photo under an 80% navy overlay (Framer padding 310/235, 180/100, 140/80). */
export default function ContactHero() {
  const { title, text } = CONTACT_PAGE.hero
  return (
    <section className="relative overflow-hidden bg-dark px-5 pt-[140px] pb-20 tablet:px-[30px] tablet:pt-[180px] tablet:pb-[100px] desktop:pt-[310px] desktop:pb-[235px]">
      <img src={CONTACT_IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-dark/80" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-container flex-col items-center gap-5 text-center">
        <h1 className="t-h1 text-white">{title}</h1>
        <p className="max-w-[552px] text-body-dark">{text}</p>
      </div>
    </section>
  )
}
