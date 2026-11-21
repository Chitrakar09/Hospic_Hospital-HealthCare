import { useEffect, useRef, useState } from 'react'
import { A } from '../../data/assets.js'
import { ABOUT } from '../../data/content.js'
import { Section, Tag, PrimaryButton, Img } from '../../components/ui.jsx'

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

function CountUp({ to, suffix }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (typeof to !== 'number') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setValue(to); return }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 1400, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{typeof to === 'number' ? value : to}{suffix}</span>
}

function Stat({ to, suffix, label }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="t-h1 text-dark tabular-nums"><CountUp to={to} suffix={suffix} /></div>
      <div className="t-highlight text-body">{label}</div>
    </div>
  )
}

export default function About() {
  const [topRef, topVisible] = useInView(0.2)
  const [bottomRef, bottomVisible] = useInView(0.15)

  return (
    <Section id="about" bg="light" innerClassName="flex flex-col gap-[60px] desktop:gap-[100px]">
      {/* Top row: Tag, heading paragraph, and CTA */}
      <div
        ref={topRef}
        className="flex flex-col items-start gap-8 desktop:flex-row desktop:items-start desktop:justify-between"
      >
        <div
          className={`transition-all duration-700 ease-out ${
            topVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <Tag>{ABOUT.tag}</Tag>
        </div>

        <div className="flex max-w-[745px] flex-col items-start gap-10 desktop:gap-[60px]">
          <p
            className={`t-h4 text-dark transition-all duration-700 delay-150 ease-out ${
              topVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            {ABOUT.text}
          </p>
          <div
            className={`transition-all duration-700 delay-300 ease-out ${
              topVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-5 scale-95 opacity-0'
            }`}
          >
            <div className="transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105">
              <PrimaryButton href="/about" variant="outline" className="transition-shadow duration-300 hover:shadow-lg">
                {ABOUT.cta}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: Two staggered photos on left + staggered stats on right */}
      <div
        ref={bottomRef}
        className="flex flex-col gap-10 tablet:flex-row tablet:items-center tablet:justify-between"
      >
        <div className="flex gap-3 tablet:gap-5">
          <div
            className={`w-[56%] transition-all duration-1000 ease-out tablet:w-auto ${
              bottomVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-[0.98] opacity-0'
            }`}
          >
            <Img
              src={A.aboutLeft}
              alt="Doctors collaborating in a hospital corridor"
              className="h-[300px] w-full tablet:h-[420px] tablet:w-[260px] desktop:h-[500px] desktop:w-[400px]"
            />
          </div>
          <div
            className={`w-[44%] transition-all duration-1000 delay-150 ease-out tablet:w-auto ${
              bottomVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-[0.98] opacity-0'
            }`}
          >
            <Img
              src={A.aboutRight}
              alt="Surgeon preparing for an operation"
              className="h-[300px] w-full tablet:h-[420px] tablet:w-[200px] desktop:h-[500px] desktop:w-[300px]"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[450px] flex-col gap-10 tablet:pl-6 desktop:pl-[50px]">
          {ABOUT.stats.map((s, i) => (
            <div
              key={s.label}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
              className={`flex flex-col gap-10 transition-all duration-700 ease-out ${
                bottomVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              {i > 0 && <div className="h-px w-full bg-bg-color" />}
              <Stat {...s} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}