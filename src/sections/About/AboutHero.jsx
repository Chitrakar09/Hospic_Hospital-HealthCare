import { ABOUT_IMG, ABOUT_PAGE } from '../../data/constants/about.js'

/** Inner-page hero: full-bleed photo, navy fade on the left, Heading 1 + body (Framer padding 310/235, 180/100, 140/80).
 *  Framer animates only the text container (rises 120px, spring). */
export default function AboutHero() {
  const { title, text } = ABOUT_PAGE.hero

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-dark px-5 pt-[140px] pb-20 tablet:px-[30px] tablet:pt-[180px] tablet:pb-[100px] desktop:pt-[310px] desktop:pb-[235px]">
      <img src={ABOUT_IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-y-0 left-0 w-[331px] bg-[linear-gradient(90deg,#1E293B_12%,rgba(30,41,59,0.4)_100%)] tablet:bg-[linear-gradient(90deg,#1E293B_12%,rgba(30,41,59,0.05)_100%)]"
        aria-hidden="true"
      />
      <div data-reveal className="relative mx-auto flex w-full max-w-container flex-col items-start gap-5">
        <h1 className="t-h1 text-white">{title}</h1>
        <p className="max-w-[488px] text-body-dark">{text}</p>
      </div>
    </section>
  )
}
