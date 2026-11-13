import { A } from '../data/assets.js'
import { SERVICES } from '../data/content.js'
import { Section, SectionHeading, PrimaryButton, Img } from '../components/ui.jsx'

function ServiceCard({ title, text, icon, photo }) {
  return (
    <article className="flex flex-col-reverse gap-5 bg-light-bg p-5 tablet:flex-row tablet:items-center tablet:gap-[30px]">
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
  return (
    <Section id="services" innerClassName="flex flex-col justify-between gap-[60px] desktop:flex-row desktop:gap-[100px]">
      <div className="flex max-w-[470px] flex-col items-start gap-10 desktop:gap-[60px] desktop:pr-10">
        <SectionHeading tag={SERVICES.tag} title={SERVICES.title} />
        <PrimaryButton variant="outline">{SERVICES.cta}</PrimaryButton>
      </div>
      <div className="flex w-full max-w-[640px] flex-col gap-5">
        {SERVICES.items.map((s, i) => (
          <ServiceCard key={s.title} {...s} {...A.services[i]} />
        ))}
      </div>
    </Section>
  )
}
