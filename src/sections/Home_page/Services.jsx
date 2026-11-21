import { useEffect, useRef, useState } from 'react'
import { A } from '../../data/assets.js'
import { SERVICES } from '../../data/content.js'
import { Section, SectionHeading, PrimaryButton, Img } from '../../components/ui.jsx'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        io.disconnect()
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, visible]
}

function ServiceCard({ title, text, icon, photo }) {
  const [ref, visible] = useInView(0.15)

  return (
    <article
      ref={ref}
      className={`flex flex-col-reverse gap-5 bg-light-bg p-5 transition-all duration-700 ease-out tablet:flex-row tablet:items-center tablet:gap-[30px] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="flex flex-1 flex-col justify-between gap-10 tablet:min-h-[200px] tablet:gap-[55px] tablet:py-[10px] tablet:pl-[10px]">
        <img src={icon} alt="" className="h-[49px] w-[49px] object-contain" loading="lazy" />
        <div className="flex flex-col gap-[14px]">
          <h3 className="t-h4 text-dark">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      <Img src={photo} alt="" className="h-[220px] w-full tablet:w-[220px] tablet:shrink-0" />
    </article>
  )
}

export default function Services() {
  const [headerRef, headerVisible] = useInView(0.2)

  return (
    <Section id="services" innerClassName="flex flex-col justify-between gap-[60px] desktop:flex-row desktop:gap-[100px]">
      <div
        ref={headerRef}
        className="flex max-w-[470px] flex-col items-start gap-10 desktop:gap-[60px] desktop:pr-10"
      >
        <div
          className={`transition-all duration-700 ease-out ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <SectionHeading tag={SERVICES.tag} title={SERVICES.title} />
        </div>
        <div
          className={`transition-all duration-700 delay-200 ease-out ${
            headerVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
          }`}
        >
          <div className="transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105">
            <PrimaryButton
              as="a"
              href="#appointment"
              variant="outline"
              className="transition-shadow duration-300 hover:shadow-lg"
            >
              {SERVICES.cta}
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[640px] flex-col gap-5">
        {SERVICES.items.map((s, i) => (
          <ServiceCard key={s.title} {...s} {...A.services[i]} />
        ))}
      </div>
    </Section>
  )
}