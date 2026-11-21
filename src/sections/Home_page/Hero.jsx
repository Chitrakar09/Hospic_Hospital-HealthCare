import { useEffect, useState } from "react";
import { HERO } from "../../data/content.js";
import { A } from "../../data/assets.js";
import { PrimaryButton } from "../../components/ui.jsx";

export default function Hero() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Triggers the entrance transition immediately after mount
    const frame = requestAnimationFrame(() => setBooted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-dvh items-center overflow-hidden bg-dark px-5 pt-[140px] pb-20 tablet:px-[30px] tablet:pt-[180px] tablet:pb-[100px] desktop:pt-[220px] desktop:pb-[145px]"
    >
      {/* Background image: fades in and gently settles from 105% scale to 100% */}
      <img
        src={A.hero}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
          booted ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
      />

      <div className="relative mx-auto w-full max-w-container">
        <div className="flex max-w-[651px] flex-col items-start gap-10">
          <div className="flex flex-col gap-5">
            {/* Title: fades and rises first */}
            <h1
              className={`t-h1 text-white transition-all duration-700 delay-150 ease-out ${
                booted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {HERO.title}
            </h1>

            {/* Subtitle: follows slightly behind */}
            <p
              className={`max-w-[488px] text-body-dark transition-all duration-700 delay-300 ease-out ${
                booted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {HERO.text}
            </p>
          </div>

          {/* CTA Button: pops in on boot and pops up on hover */}
          <div
            className={`transition-all duration-700 delay-500 ease-out ${
              booted ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <div className="transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105">
              <PrimaryButton as={"a"} href="#appointment" className="transition-shadow duration-300 hover:shadow-lg">
                {HERO.cta}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}