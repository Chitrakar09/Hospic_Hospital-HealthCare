import { ABOUT_PAGE } from '../../data/about.js'
import { Section, SectionHeading } from '../../components/ui.jsx'

/** Framer "How It Work Card" has no hover state; "Title & Tag" and "Card Wrapper" rise together (120px, once). */
function StepCard({ n, title, text }) {
  return (
    <article className="flex h-full flex-col gap-[45px] rounded-[10px] bg-light-bg p-[30px]">
      <span className="t-h6 text-dark">{n}</span>
      <div className="flex flex-col gap-[10px]">
        <h3 className="t-h5 text-dark">{title}</h3>
        <p className="max-w-[394px]">{text}</p>
      </div>
    </article>
  )
}

export default function HowItWorks() {
  const { tag, title, steps } = ABOUT_PAGE.how

  return (
    <Section
      top={false}
      innerClassName="flex flex-col items-center gap-10 border-t border-bg-color pt-[60px] tablet:gap-[50px] tablet:pt-20 desktop:gap-20 desktop:pt-[120px]"
    >
      <div data-reveal className="w-full max-w-[504px]">
        <SectionHeading tag={tag} title={title} align="center" />
      </div>

      <div data-reveal className="grid w-full grid-cols-1 gap-5 tablet:grid-cols-2">
        {steps.map((s) => (
          <StepCard key={s.n} {...s} />
        ))}
      </div>
    </Section>
  )
}
