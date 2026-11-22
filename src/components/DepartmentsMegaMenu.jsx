import { useCallback, useEffect, useRef, useState } from "react";
import { A } from "../data/assets.js";
import { DEPARTMENTS, HERO } from "../data/content.js";
import { PrimaryButton } from "./ui.jsx";
import { ChevronDown, HealthCross } from "./Icons.jsx";

/*
 * Departments mega menu (desktop) + accordion (phone / tablet).
 *
 * - Department list is rendered from DEPARTMENTS.items (content.js); icons come from A.departments (assets.js)
 *   by position. A department without an icon asset falls back to the HealthCross icon.
 * - Department links point at the existing #departments section (no new routes).
 * - The promo image is the one the Framer template uses in its Dropdown Large component.
 */

const PROMO_IMAGE =
  "https://framerusercontent.com/images/5isxMVXETo2eIuNdHdekzlcWEE4.png";
const PROMO_TITLE = "Trusted medical care, experienced specialists needed.";
const DEPARTMENT_HREF = "#departments";
const CLOSE_DELAY = 120; // ms grace period so the pointer can cross the gap between trigger and panel

function DepartmentIcon({ index, size }) {
  const icon = A.departments[index]?.icon;
  return icon ? (
    <img
      src={icon}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className="object-contain"
      style={{ width: size, height: size }}
    />
  ) : (
    <HealthCross
      width={size * 0.8}
      height={size * 0.8}
      className="text-primary"
    />
  );
}

/** One row of the desktop grid: 50px icon tile, title, one-line truncated description, bottom divider. */
function MegaMenuItem({ title, text, index }) {
  return (
    <li className="min-w-0">
      <span
        className="group flex min-w-0 items-center gap-[14px] border-b border-bg-color pb-[34px] transition-colors duration-300 hover:border-primary"
      >
        <span className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-md bg-light-bg transition-colors duration-300 group-hover:bg-blue-500">
          <DepartmentIcon index={index} size={30} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="t-highlight capitalize text-dark">{title}</span>
          <span className="truncate text-body">{text}</span>
        </span>
      </span>
    </li>
  );
}

/** Desktop nav item: "Departments" trigger plus the hover / click mega menu panel. */
export default function DepartmentsMegaMenu({ label, className = "" }) {
  const [open, setOpen] = useState(false);
  const pinned = useRef(false); // opened by click/tap/keyboard: stays open until outside click, Escape or second click
  const timer = useRef(null);
  const root = useRef(null);
  const trigger = useRef(null);
 const [showAll, setShowAll] = useState(false)

const visibleDepartments = showAll
  ? DEPARTMENTS.items
  : DEPARTMENTS.items.slice(0, 6)

const hasMore = DEPARTMENTS.items.length > 6

  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const close = useCallback(() => {
    clearTimer();
    pinned.current = false;
    setOpen(false);
    setShowAll(false)
  }, []);

  useEffect(() => clearTimer, []);

  // Click / tap outside and Escape close the menu.
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (root.current && !root.current.contains(e.target)) close();
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  // Hover is for mice only; touch/pen go through click so a tap does not open-then-close.
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    clearTimer();
    setOpen(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;

  clearTimer();

  timer.current = setTimeout(() => {
    setOpen(false);
    setShowAll(false);
    pinned.current = false;
  }, CLOSE_DELAY);
  };

  const onTriggerClick = (e) => {
   e.preventDefault();
  clearTimer();

  if (open) {
    close();
  } else {
    setOpen(true);
    pinned.current = false;
  }
  };

  const onBlur = (e) => {
    // Tabbing out of the menu closes it (null relatedTarget = click on non-focusable area, handled elsewhere).
    if (
      e.relatedTarget &&
      root.current &&
      !root.current.contains(e.relatedTarget)
    )
      close();
  };

  return (
    <div
      ref={root}
      className={`flex items-center self-stretch ${className}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={onBlur}
    >
      <a
        ref={trigger}
        href={DEPARTMENT_HREF}
        onClick={onTriggerClick}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="departments-mega-menu"
        className="t-highlight inline-flex items-center gap-1 text-white/90 transition-colors hover:text-white"
      >
        {label}
        <ChevronDown
          width={16}
          height={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </a>

      {/* Absolutely positioned against the header container: overlays the hero, never pushes it down.
          The visible card sits 20px below the header row. The wrapper itself starts 44px higher (top-[calc(100%-44px)] +
          pt-16 = same card position) so it forms a transparent, full-width hover bridge: the pointer can travel from the
          trigger to any item, even diagonally, without ever leaving the menu's hover area. It only exists while open. */}
      <div
        id="departments-mega-menu"
        role="region"
        aria-label={`${label} menu`}
        aria-hidden={!open}
        className={`absolute mx-5 inset-x-0 top-[calc(100%-44px)] z-30 pt-16 transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex gap-5 rounded-[10px] bg-white p-5">
          <ul className={`grid min-w-0 flex-1 grid-cols-2 content-start gap-x-10 gap-y-6 rounded-[10px] border border-stroke px-[30px] pb-[30px] pt-[22px] ${
    showAll
      ? 'departments-scroll max-h-[413px] overflow-y-auto'
      : ''
  }`}>
           {visibleDepartments.map((d, i) => (
    <MegaMenuItem
      key={d.title}
      index={i}
      title={d.title}
      text={d.text}
    />
  ))}

  {!showAll && hasMore && (
    <li className="col-span-2 flex justify-center pt-2">
      <button
        type="button"
        onClick={() => setShowAll(true)}
        className="t-highlight text-primary transition-colors hover:text-dark"
      >
        See More
      </button>
    </li>
  )}
          </ul>

          <div className="relative flex min-h-[413px] w-[clamp(300px,35%,422px)] shrink-0 flex-col justify-end overflow-hidden rounded-[10px] bg-bg-color">
            <img
              src={PROMO_IMAGE}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[448px] w-[85%] rounded-[160px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(30,41,59,0.05) 37%, rgb(30,41,59) 79%)",
              }}
            />
            <div className="relative flex flex-col items-start gap-[30px] p-[30px]">
              <p className="t-h6 text-white">{PROMO_TITLE}</p>
              <PrimaryButton variant="light" onClick={close} to="/#appointment">
                <span className="capitalize">{HERO.cta}</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
