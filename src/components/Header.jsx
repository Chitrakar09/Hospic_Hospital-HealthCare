import { useState } from "react";
import { NAV } from "../data/constants/navigation.js";
import { HERO } from "../data/constants/hero.js";
import { NOTICES } from "../data/configs/notices.js";
import Logo from "./Logo.jsx";
import { PrimaryButton } from "./ui.jsx";
import {
  Menu,
  Close,
  NewsNoticeBellActive,
  NewsNoticeBellInactive,
} from "./Icons.jsx";
import { NavLink, Link } from "react-router";
import { DepartmentsMegaMenu } from "./index.js";

// NAV entry that opens the mega menu (desktop) / accordion (phone + tablet).
const MEGA_MENU_LABEL = "Departments";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // header starts
    <header className="absolute inset-x-0 top-0 z-20 px-5 tablet:px-[30px]">
      {/* nav starts */}
      <div className="mx-auto flex h-[88px] w-full max-w-container items-center justify-between desktop:h-[110px]">
        <Logo />

        {/* navigation bar */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-9 desktop:flex"
        >
          {NAV.map((n) =>
            n.label !== "Notices" ? (
              n.label === MEGA_MENU_LABEL ? (
                <DepartmentsMegaMenu key={n.label} label={n.label}/>
              ) : (
                <NavLink
                  key={n.label}
                  to={n.href}
                  className="nav-link t-highlight text-white/90 transition-colors hover:text-white"
                >
                  {n.label}
                </NavLink>
              )
            ) : null,
          )}
        </nav>

        {/* notices */}
        <nav
          aria-label="Notices"
          className="hidden items-center gap-9 desktop:flex"
        >
          {NAV.map((n) =>
            n.label === "Notices" ? (
              <a
                key={n.label}
                href={n.href}
                aria-label="NOTICE AND NEWS"
                className="group relative inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/40 hover:bg-red-500/10 hover:text-white [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-white"
              >
                {NOTICES.length > 0 ? (
                  <NewsNoticeBellActive className="h-5 w-5 fill-white text-white" />
                ) : (
                  <NewsNoticeBellInactive className="h-5 w-5 fill-white text-white" />
                )}

                <span className="animate-pulse text-xs font-medium tracking-wider text-white/90 group-hover:text-white">
                  NOTICE AND NEWS
                </span>

                {NOTICES.length > 0 && (
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                )}
              </a>
            ) : null,
          )}
        </nav>

        {/* navigation for mobile devices */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center text-white desktop:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mx-auto flex w-full max-w-container flex-col gap-1 rounded-xl border border-stroke-dark bg-white p-5 desktop:hidden"
        >
          {NAV.map((n) => (
            n.label==="Departments"||n.label==="Notices"? (<a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="w-full t-h6 border-b text-center border-dark py-4 text-dark"
            >
              {n.label}
            </a>):
            <Link
              key={n.label}
              to={n.href}
              onClick={() => setOpen(false)}
              className="w-full t-h6 border-b text-center border-dark py-4 text-dark"
            >
              {n.label}
            </Link>
          ))}
          {/* book an appointment cta for mobile */}
          <div className="pt-5 flex justify-center">
            <PrimaryButton as={"a"} href="#appointment">{HERO.cta}</PrimaryButton>
          </div>
        </nav>
      )}
    </header>
  );
}