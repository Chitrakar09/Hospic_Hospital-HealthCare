import { HERO } from "../../data/constants/hero.js";
import { HOME_ASSETS } from "../../data/configs/home.js";
import { PrimaryButton } from "../../components/ui.jsx";

/**
 * Framer hero: on mount the background settles from scale 1.1 (with a fade) and the content container rises 120px
 * with a 0.1s delay, both on the same spring. See styles/motion.css and lib/motion.js (data-reveal).
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-dvh items-center overflow-hidden bg-dark px-5 pt-[140px] pb-20 tablet:px-[30px] tablet:pt-[180px] tablet:pb-[100px] desktop:pt-[220px] desktop:pb-[145px]"
    >
      <img
        src={HOME_ASSETS.hero}
        alt=""
        data-reveal
        data-reveal-y="0"
        data-reveal-scale="1.1"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div data-reveal data-reveal-delay="0.1" className="relative mx-auto w-full max-w-container">
        <div className="flex max-w-[651px] flex-col items-start gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="t-h1 text-white">{HERO.title}</h1>
            <p className="max-w-[488px] text-body-dark">{HERO.text}</p>
          </div>

          <PrimaryButton as="a" href="#appointment">
            {HERO.cta}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
