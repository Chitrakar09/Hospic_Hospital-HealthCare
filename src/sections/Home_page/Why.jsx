import { useEffect, useRef, useState } from 'react'
import { A } from '../../data/assets.js'
import { WHY } from '../../data/content.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'
import { WHY_ICONS } from '../../components/Icons.jsx'

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

export default function Why() {
  const [headerRef, headerVisible] = useInView(0.2)
  const [gridRef, gridVisible] = useInView(0.15)
  const [bannerRef, bannerVisible] = useInView(0.15)

  return (
    <Section bg="light" innerClassName="flex flex-col items-center gap-[50px] desktop:gap-20">
      <div
        ref={headerRef}
        className={`w-full max-w-[504px] transition-all duration-700 ease-out ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading tag={WHY.tag} title={WHY.title} align="center" />
      </div>

      <div className="flex w-full flex-col gap-5">
        <div ref={gridRef} className="grid grid-cols-1 gap-5 desktop:grid-cols-2">
          {WHY.items.map((it, i) => {
            const Icon = WHY_ICONS[it.icon]
            return (
              <article
                key={it.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group flex items-center justify-between gap-2.5 bg-white p-[10px] transition-all duration-700 ease-out ${
                  gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <div className="flex flex-1 flex-col gap-[14px] p-5">
                  <h3 className="t-h5 text-dark">{it.title}</h3>
                  <p className="max-w-[325px]">{it.text}</p>
                </div>
                <div className="grid h-[100px] w-[100px] shrink-0 place-items-center bg-light-bg text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white tablet:h-[140px] tablet:w-[140px]">
                  <Icon width={64} height={64} strokeWidth={1.2} />
                </div>
              </article>
            )
          })}
        </div>

        <div
          ref={bannerRef}
          className={`transition-all duration-1000 ease-out ${
            bannerVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-[0.99] opacity-0'
          }`}
        >
          <Img
            src={A.whyBanner}
            alt="Modern hospital building and care team"
            className="h-[260px] w-full tablet:h-[400px] desktop:h-[591px]"
          />
        </div>
      </div>
    </Section>
  )
}