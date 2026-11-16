import { HERO } from "../../data/content.js";
import { A } from "../../data/assets.js";
import { PrimaryButton } from "../../components/ui.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-dvh items-center overflow-hidden bg-dark px-5 pt-[140px] pb-20 tablet:px-[30px] tablet:pt-[180px] tablet:pb-[100px] desktop:pt-[220px] desktop:pb-[145px]"
    >
      <img
        src={A.hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-y-0 left-0 w-[331px] bg-[linear-gradient(90deg,#1E293B_12%,rgba(30,41,59,0.4)_100%)] tablet:bg-[linear-gradient(90deg,#1E293B_12%,rgba(30,41,59,0.05)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-container">
        <div className="flex max-w-[651px] flex-col items-start gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="t-h1 text-white">{HERO.title}</h1>
            <p className="max-w-[488px] text-body-dark">{HERO.text}</p>
          </div>
          <PrimaryButton as={'a'} href="#appointment">{HERO.cta}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}