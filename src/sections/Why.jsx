import { A } from '../data/assets.js'
import { WHY } from '../data/content.js'
import { Section, SectionHeading, Img } from '../components/ui.jsx'
import { WHY_ICONS } from '../components/Icons.jsx'

export default function Why() {
  return (
    <Section bg="light" innerClassName="flex flex-col items-center gap-[50px] desktop:gap-20">
      <SectionHeading tag={WHY.tag} title={WHY.title} align="center" className="max-w-[504px]" />
      <div className="flex w-full flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 desktop:grid-cols-2">
          {WHY.items.map((it) => {
            const Icon = WHY_ICONS[it.icon]
            return (
              <article key={it.title} className="flex items-center justify-between gap-2.5 bg-white p-[10px]">
                <div className="flex flex-1 flex-col gap-[14px] p-5">
                  <h3 className="t-h5 text-dark">{it.title}</h3>
                  <p className="max-w-[325px]">{it.text}</p>
                </div>
                <div className="grid h-[100px] w-[100px] shrink-0 place-items-center bg-light-bg text-primary tablet:h-[140px] tablet:w-[140px]">
                  <Icon width={64} height={64} strokeWidth={1.2} />
                </div>
              </article>
            )
          })}
        </div>
        <Img src={A.whyBanner} alt="Modern hospital building and care team" className="h-[260px] w-full tablet:h-[400px] desktop:h-[591px]" />
      </div>
    </Section>
  )
}
