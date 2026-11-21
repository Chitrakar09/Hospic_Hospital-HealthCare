import { useEffect, useState } from 'react'
import { CONTACT_IMG, CONTACT_PAGE } from '../../data/contact.js'

/** Centered inner-page hero: full-screen crisp photo under a subtle dark overlay. */
export default function ContactHero() {
  const { title, text } = CONTACT_PAGE.hero
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setBooted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-dark px-5 py-20 tablet:px-[30px]">
      <img
        src={CONTACT_IMG.hero}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-out ${
          booted ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
      />
      <div
        className={`absolute inset-0 bg-dark/50 transition-opacity duration-1000 ${
          booted ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-container flex-col items-center gap-5 text-center">
        <h1
          className={`t-h1 text-white transition-all duration-700 delay-150 ease-out ${
            booted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {title}
        </h1>
        <p
          className={`max-w-[552px] text-body-dark transition-all duration-700 delay-300 ease-out ${
            booted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {text}
        </p>
      </div>
    </section>
  )
}