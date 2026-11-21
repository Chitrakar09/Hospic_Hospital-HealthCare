import { useEffect, useRef, useState } from 'react'
import { ABOUT_PAGE } from '../../data/about.js'
import { Section, SectionHeading } from '../../components/ui.jsx'

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

function StepCard({ n, title, text, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <article className="group flex h-full flex-col gap-[45px] rounded-[10px] bg-light-bg p-[30px] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-primary hover:shadow-lg">
        <span className="t-h6 text-dark transition-colors duration-300 group-hover:text-white">
          {n}
        </span>
        <div className="flex flex-col gap-[10px]">
          <h3 className="t-h5 text-dark transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="max-w-[394px] transition-colors duration-300 group-hover:text-white/90">
            {text}
          </p>
        </div>
      </article>
    </div>
  )
}

export default function HowItWorks() {
  const { tag, title, steps } = ABOUT_PAGE.how
  const [headerRef, headerVisible] = useInView(0.2)
  const [gridRef, gridVisible] = useInView(0.15)

  return (
    <Section
      top={false}
      innerClassName="flex flex-col items-center gap-10 border-t border-bg-color pt-[60px] tablet:gap-[50px] tablet:pt-20 desktop:gap-20 desktop:pt-[120px]"
    >
      <div
        ref={headerRef}
        className={`w-full max-w-[504px] transition-all duration-700 ease-out ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading tag={tag} title={title} align="center" />
      </div>

      <div ref={gridRef} className="grid w-full grid-cols-1 gap-5 tablet:grid-cols-2">
        {steps.map((s, i) => (
          <StepCard key={s.n} {...s} visible={gridVisible} delay={i * 120} />
        ))}
      </div>
    </Section>
  )
}