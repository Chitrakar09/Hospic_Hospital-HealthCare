import { CONTACT_IMG, CONTACT_PAGE } from '../../data/constants/contact.js'

/** Centered inner-page hero: full-screen crisp photo under a subtle dark overlay.
 *  Framer animates only the text container (rises 120px, spring). */
export default function ContactHero() {
  const { title, text } = CONTACT_PAGE.hero

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-dark px-5 py-20 tablet:px-[30px]">
      <img src={CONTACT_IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-dark/50" aria-hidden="true" />
      <div data-reveal className="relative mx-auto flex w-full max-w-container flex-col items-center gap-5 text-center">
        <h1 className="t-h1 text-white">{title}</h1>
        <p className="max-w-[552px] text-body-dark">{text}</p>
      </div>
    </section>
  )
}
