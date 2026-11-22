import { ABOUT_IMG, ABOUT_PAGE } from '../../data/constants/about.js'
import { Section, SectionHeading, Img } from '../../components/ui.jsx'
import { CountUp } from './About.jsx'

function InfoCard({ title, text }) {
  return (
    <div className="flex flex-col gap-[10px] rounded-[10px] bg-light-bg p-5">
      <h3 className="t-highlight text-dark">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function StatCard({ to, suffix, label }) {
  return (
    <div className="flex flex-col items-start gap-[14px] rounded-[10px] bg-light-bg p-6 desktop:p-10">
      <div className="text-[36px] font-semibold leading-none tracking-[-0.02em] text-dark tabular-nums tablet:text-5xl desktop:text-[64px]">
        <CountUp to={to} suffix={suffix} />
      </div>
      <div className="t-highlight text-body">{label}</div>
    </div>
  )
}

/** Framer: "Top" rises 120px, "Stat Wrapper" rises 35px (both spring, once, no stagger). */
export default function AboutIntro() {
  const { tag, title, text, cards, stats } = ABOUT_PAGE.intro

  return (
    <Section innerClassName="flex flex-col gap-10 tablet:gap-[50px] desktop:gap-20">
      <div
        data-reveal
        className="flex flex-col gap-5 tablet:gap-9 desktop:flex-row desktop:items-stretch desktop:justify-between desktop:gap-[10px]"
      >
        {/* Left Team Photo */}
        <div className="order-2 w-full desktop:order-1 desktop:max-w-[590px] desktop:flex-1">
          <Img
            src={ABOUT_IMG.team}
            alt="Hospital doctors and nurses standing together in a corridor"
            className="h-[302px] w-full rounded-[10px] tablet:h-[509px] desktop:h-full desktop:min-h-[516px]"
          />
        </div>

        {/* Right Content Column */}
        <div className="order-1 flex w-full flex-col gap-10 tablet:gap-[50px] desktop:order-2 desktop:max-w-[570px] desktop:flex-1 desktop:justify-center desktop:pl-10">
          <div className="flex flex-col gap-6">
            <SectionHeading tag={tag} title={title} />
            <p>{text}</p>
          </div>

          <div className="flex flex-col gap-[10px] tablet:flex-row">
            <div className="flex flex-1 flex-col gap-[10px]">
              {cards.map((c) => (
                <InfoCard key={c.title} {...c} />
              ))}
            </div>

            <div className="w-full tablet:w-[200px] tablet:shrink-0">
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
      <div data-reveal data-reveal-y="35" className="grid grid-cols-1 gap-[14px] tablet:grid-cols-2 desktop:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </Section>
  )
}
