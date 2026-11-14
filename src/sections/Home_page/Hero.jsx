import { A } from "../../data/assets.js";
import { HERO } from "../../data/content.js";
import { PrimaryButton } from "../../components/ui.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-dark px-5 pt-[140px] pb-[60px] tablet:px-[30px] tablet:pt-[160px] tablet:pb-20 desktop:pt-[200px]"
    >
      {/* Hero background photo (already has the navy fade on the left) */}
      <img
        src={A.hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-100"
      />
      {/* Extra scrim below desktop so text stays readable over the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-container flex-col gap-12 desktop:flex-row desktop:items-end desktop:justify-between">
        <div className="flex max-w-[651px] flex-col items-start gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="t-h1 text-white">{HERO.title}</h1>
            <p className="max-w-[520px] text-body-dark">{HERO.text}</p>
          </div>
          <PrimaryButton>{HERO.cta}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
