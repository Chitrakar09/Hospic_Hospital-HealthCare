import { useState } from "react";
import { NAV, HERO, BLOG } from "../data/content.js";
import { NOTICES } from "../data/notices.js";
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
                  className="t-highlight text-white/90 transition-colors hover:text-white"
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
              <NavLink
                key={n.label}
                to={n.href}
                aria-label="NOTICE"
                className="group relative grid h-15 w-15 place-items-center text-white/90 transition-colors hover:text-white [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white"
              >
                {NOTICES.length > 0 ? (
                  <NewsNoticeBellActive className="h-7 w-7 fill-white text-white" />
                ) : (
                  <NewsNoticeBellInactive className="h-7 w-7 fill-white text-white" />
                )}

                {/* Hover tooltip */}
                <span className="pointer-events-none absolute bottom-full mb-1 whitespace-nowrap rounded border border-stroke-dark bg-dark px-2.5 py-1 text-xs font-semibold tracking-wider text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                  NOTICE
                </span>
              </NavLink>
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
            n.label==="Departments"? (<a
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
