import { useEffect, useRef, useState } from 'react'
import { A } from '../../data/assets.js'
import { ABOUT } from '../../data/content.js'
import { Section, Tag, PrimaryButton, Img } from '../../components/ui.jsx'

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
  return (
    <Section id="about" bg="light" innerClassName="flex flex-col gap-[60px] desktop:gap-[100px]">
      <div className="flex flex-col items-start gap-8 desktop:flex-row desktop:items-start desktop:justify-between">
        <Tag>{ABOUT.tag}</Tag>
        <div className="flex max-w-[745px] flex-col items-start gap-10 desktop:gap-[60px]">
          <p className="t-h4 text-dark">{ABOUT.text}</p>
          <PrimaryButton href='/about' variant="outline">{ABOUT.cta}</PrimaryButton>
        </div>
      </div>

      <div className="flex flex-col gap-10 tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="flex gap-3 tablet:gap-5">
          <Img src={A.aboutLeft} alt="Doctors collaborating in a hospital corridor" className="h-[300px] w-[56%] tablet:h-[420px] tablet:w-[260px] desktop:h-[500px] desktop:w-[400px]" />
          <Img src={A.aboutRight} alt="Surgeon preparing for an operation" className="h-[300px] w-[44%] tablet:h-[420px] tablet:w-[200px] desktop:h-[500px] desktop:w-[300px]" />
        </div>
        <div className="flex w-full max-w-[450px] flex-col gap-10 tablet:pl-6 desktop:pl-[50px]">
          {ABOUT.stats.map((s, i) => (
            <div key={s.label} className="flex flex-col gap-10">
              {i > 0 && <div className="h-px w-full bg-bg-color" />}
              <Stat {...s} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
