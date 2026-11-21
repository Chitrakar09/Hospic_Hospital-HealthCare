import { useEffect, useRef, useState } from 'react'
import { ABOUT_IMG, ABOUT_PAGE } from '../../data/about.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'
import { CountUp } from './About.jsx'

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

function InfoCard({ title, text, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col gap-[10px] rounded-[10px] bg-light-bg p-5 transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <h3 className="t-highlight text-dark">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function StatCard({ to, suffix, label, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col items-start gap-[14px] rounded-[10px] bg-light-bg p-6 transition-all duration-700 ease-out desktop:p-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="text-[36px] font-semibold leading-none tracking-[-0.02em] text-dark tabular-nums tablet:text-5xl desktop:text-[64px]">
        <CountUp to={to} suffix={suffix} />
      </div>
      <div className="t-highlight text-body">{label}</div>
    </div>
  )
}

export default function AboutIntro() {
  const { tag, title, text, cards, stats } = ABOUT_PAGE.intro
  const [topRef, topVisible] = useInView(0.15)
  const [statsRef, statsVisible] = useInView(0.15)

  return (
    <Section innerClassName="flex flex-col gap-10 tablet:gap-[50px] desktop:gap-20">
      <div
        ref={topRef}
        className="flex flex-col gap-5 tablet:gap-9 desktop:flex-row desktop:items-stretch desktop:justify-between desktop:gap-[10px]"
      >
        {/* Left Team Photo */}
        <div
          className={`order-2 w-full transition-all duration-1000 ease-out desktop:order-1 desktop:max-w-[590px] desktop:flex-1 ${
            topVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Img
            src={ABOUT_IMG.team}
            alt="Hospital doctors and nurses standing together in a corridor"
            className="h-[302px] w-full rounded-[10px] tablet:h-[509px] desktop:h-full desktop:min-h-[516px]"
          />
        </div>

        {/* Right Content Column */}
        <div className="order-1 flex w-full flex-col gap-10 tablet:gap-[50px] desktop:order-2 desktop:max-w-[570px] desktop:flex-1 desktop:justify-center desktop:pl-10">
          <div className="flex flex-col gap-6">
            <div
              className={`transition-all duration-700 ease-out ${
                topVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              <SectionHeading tag={tag} title={title} />
            </div>
            <p
              className={`transition-all duration-700 delay-150 ease-out ${
                topVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-[10px] tablet:flex-row">
            <div className="flex flex-1 flex-col gap-[10px]">
              {cards.map((c, i) => (
                <InfoCard key={c.title} {...c} visible={topVisible} delay={250 + i * 120} />
              ))}
            </div>

            <div
              style={{ transitionDelay: '350ms' }}
              className={`w-full transition-all duration-1000 ease-out tablet:w-[200px] tablet:shrink-0 ${
                topVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <Img
                src={ABOUT_IMG.surgeon}
                alt="Surgeon with arms crossed in a hospital corridor"
                className="aspect-[4/5] w-full rounded-[10px] tablet:aspect-auto tablet:h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4-column Stat Cards */}
      <div ref={statsRef} className="grid grid-cols-1 gap-[14px] tablet:grid-cols-2 desktop:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} visible={statsVisible} delay={i * 120} />
        ))}
      </div>
    </Section>
  )
}