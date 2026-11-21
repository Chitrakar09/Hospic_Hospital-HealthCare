import { useEffect, useState } from 'react'
import { ABOUT_IMG, ABOUT_PAGE } from '../../data/about.js'

/** Inner-page hero: full-bleed photo, navy fade on the left, Heading 1 + body (Framer padding 310/235, 180/100, 140/80). */
export default function AboutHero() {
  const { title, text } = ABOUT_PAGE.hero
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setBooted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-dark px-5 pt-[140px] pb-20 tablet:px-[30px] tablet:pt-[180px] tablet:pb-[100px] desktop:pt-[310px] desktop:pb-[235px]">
      <img
        src={ABOUT_IMG.hero}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
          booted ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
      />
      <div
        className={`absolute inset-y-0 left-0 w-[331px] bg-[linear-gradient(90deg,#1E293B_12%,rgba(30,41,59,0.4)_100%)] transition-opacity duration-1000 tablet:bg-[linear-gradient(90deg,#1E293B_12%,rgba(30,41,59,0.05)_100%)] ${
          booted ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-container flex-col items-start gap-5">
        <h1
          className={`t-h1 text-white transition-all duration-700 delay-150 ease-out ${
            booted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {title}
        </h1>
        <p
          className={`max-w-[488px] text-body-dark transition-all duration-700 delay-300 ease-out ${
            booted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {text}
        </p>
      </div>
    </section>
  )
}