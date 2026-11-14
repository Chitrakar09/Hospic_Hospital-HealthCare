import { PRICING } from '../../data/content.js'
import { Section, SectionHeading, PrimaryButton } from '../../components/ui.jsx'
import { Check } from '../../components/Icons.jsx'

function Plan({ name, price, note, text, items, featured }) {
  const dark = !!featured
  return (
    <article className={`flex flex-col gap-8 p-[30px] tablet:p-10 ${dark ? 'bg-dark text-body-dark' : 'bg-light-bg'}`}>
      <div className="flex flex-col gap-[10px]">
        <span className={`t-highlight ${dark ? 'text-white' : 'text-primary'}`}>{note}</span>
        <h3 className={`t-h5 ${dark ? 'text-white' : 'text-dark'}`}>{name}</h3>
        <p>{text}</p>
      </div>
      <div className={`t-h2 ${dark ? 'text-white' : 'text-dark'}`}>{price}</div>
      <ul className={`flex flex-1 flex-col gap-4 border-t pt-8 ${dark ? 'border-stroke-dark' : 'border-bg-color'}`}>
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center ${dark ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <Check width={16} height={16} strokeWidth={2.4} />
            </span>
            {it}
          </li>
        ))}
      </ul>
      <PrimaryButton variant={dark ? 'primary' : 'outline'}>{PRICING.cta}</PrimaryButton>
    </article>
  )
}

export default function Pricing() {
  return (
    <Section id="pricing" top={false} innerClassName="flex flex-col items-center gap-[50px] desktop:gap-20">
      <SectionHeading tag={PRICING.tag} title={PRICING.title} align="center" className="max-w-[616px]" />
      <div className="grid w-full grid-cols-1 gap-5 desktop:grid-cols-3">
        {PRICING.plans.map((p) => <Plan key={p.name} {...p} />)}
      </div>
    </Section>
  )
}
