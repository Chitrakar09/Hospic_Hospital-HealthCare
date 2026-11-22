import { SERVICES, SERVICES_ASSETS } from '../../data/configs/services.js'
import { Section, SectionHeading, PrimaryButton, Img } from '../../components/ui.jsx'

/**
 * Card stacking, exactly as the Framer template builds it: from tablet up every card is `position: sticky` with the
 * same top offset (80px), so each card pins there while the next one scrolls over it; later cards sit on top.
 * Phones render plain blocks. Desktop also pins the heading column. The whole container rises in once (Framer appear).
 */
const STACK_TOP = 80    // px: where the cards pin (Framer: positionStickyTop 80px)
const STACK_OFFSET = 0  // px: extra top offset per card. 0 = cards cover each other exactly (original);
                        // e.g. 12 lets the edge of each earlier card peek out above the next.

function ServiceCard({ title, text, icon, photo, index }) {
  return (
    <article
      style={{ '--stack-top': `${STACK_TOP + index * STACK_OFFSET}px` }}
      className="relative z-[1] flex flex-col-reverse gap-5 bg-light-bg p-5 tablet:sticky tablet:top-[var(--stack-top)] tablet:flex-row tablet:items-center tablet:gap-[30px]"
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
  return (
    // `desktop:items-start` lets the heading column be shorter than the cards column so it can stay sticky.
    <Section
      id="services"
      reveal
      innerClassName="flex flex-col justify-between gap-[60px] desktop:flex-row desktop:items-start desktop:gap-[100px]"
    >
      <div className="flex max-w-[470px] flex-col items-start gap-10 desktop:sticky desktop:top-20 desktop:gap-[60px] desktop:pr-10">
        <SectionHeading tag={SERVICES.tag} title={SERVICES.title} />
        <PrimaryButton as="a" href="#appointment" variant="outline">
          {SERVICES.cta}
        </PrimaryButton>
      </div>

      <div className="flex w-full max-w-[640px] flex-col gap-5">
        {SERVICES.items.map((s, i) => (
          <ServiceCard key={s.title} {...s} {...SERVICES_ASSETS[i % SERVICES_ASSETS.length]} index={i} />
        ))}
      </div>
    </Section>
  )
}
