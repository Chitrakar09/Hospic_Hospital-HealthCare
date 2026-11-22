import { CTA as C } from '../../data/constants/cta.js'
import { HOME_ASSETS } from '../../data/configs/home.js'
import { Section, SectionHeading, PrimaryButton } from '../../components/ui.jsx'

export default function CTA() {
  return (
    <Section top={false}>
      <div className="relative overflow-hidden bg-dark px-5 py-[60px] tablet:px-10 tablet:py-20 desktop:px-20 desktop:py-[105px]">
        <img src={HOME_ASSETS.hero} alt="" data-reveal data-reveal-y="0" data-reveal-scale="1.1" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark from-15% to-dark/20" aria-hidden="true" />
        <div data-reveal className="relative flex max-w-[536px] flex-col items-start gap-[60px]">
          <SectionHeading tag={C.tag} title={C.title} dark />
          <PrimaryButton>{C.cta}</PrimaryButton>
        </div>
      </div>
    </Section>
  )
}
