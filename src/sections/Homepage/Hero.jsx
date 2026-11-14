import { A } from '../../data/assets.js'
import { HERO } from '../../data/content.js'
import { PrimaryButton, Img } from '../../components/ui.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dark px-5 pt-[140px] pb-[60px] tablet:px-[30px] tablet:pt-[160px] tablet:pb-20 desktop:pt-[275px]">
      {/* Hero background photo (already has the navy fade on the left) */}
      <img src={A.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
      {/* Extra scrim below desktop so text stays readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/75 to-dark/20 desktop:hidden" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-container flex-col gap-12 desktop:flex-row desktop:items-end desktop:justify-between">
        <div className="flex max-w-[651px] flex-col items-start gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="t-h1 text-white">{HERO.title}</h1>
            <p className="max-w-[520px] text-body-dark">{HERO.text}</p>
          </div>
          <PrimaryButton>{HERO.cta}</PrimaryButton>
        </div>

        {/* Appointment card (glass) */}
        <div className="flex w-fit items-center gap-3 bg-white/10 py-[10px] pr-5 pl-[10px] backdrop-blur-md">
          <Img src={A.doctors[0]} alt="" className="h-[100px] w-[100px] object-top tablet:h-[130px] tablet:w-[130px]" />
          <div className="flex flex-col items-start gap-7">
            <h2 className="t-h6 text-white">{HERO.card}</h2>
            <PrimaryButton variant="primary" className="!gap-4 !pl-4 [&>span:last-child]:!h-8 [&>span:last-child]:!w-8">Book now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}