import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * Global smooth scrolling, matching the Framer template's Lenis component (Smooth on, Intensity 15).
 * - Wheel / trackpad scrolling is eased; touch stays native.
 * - Skipped for reduced-motion users (the browser's native scrolling is used instead).
 * - Panels that scroll on their own (dialogs, the departments list) are excluded via `prevent`.
 */
export const HEADER_OFFSET = 0 // px of fixed header to clear when scrolling to a section. The header is absolute here, so 0.

let instance = null
export const getLenis = () => instance

export function initSmoothScroll() {
  if (instance || typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const lenis = new Lenis({
    duration: 1.5, // higher = softer / more delayed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    prevent: (node) => !!node.closest?.('[data-lenis-prevent], [role="dialog"], .departments-scroll'),
  })
  instance = lenis

  let raf = requestAnimationFrame(function loop(time) {
    lenis.raf(time)
    raf = requestAnimationFrame(loop)
  })

  // Plain in-page anchors (<a href="#appointment">) glide instead of jumping. Router <Link>s are handled by ScrollToHash.
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const a = e.target.closest?.('a[href^="#"]')
    if (!a || a.getAttribute('href').length < 2) return
    const el = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))
    if (!el) return
    e.preventDefault()
    scrollToTarget(el)
    window.history.replaceState(window.history.state, '', a.getAttribute('href'))
  }
  document.addEventListener('click', onClick)

  return () => {
    document.removeEventListener('click', onClick)
    cancelAnimationFrame(raf)
    lenis.destroy()
    instance = null
  }
}

/** Scroll to an element or a Y position (smooth by default). Works with or without Lenis. */
export function scrollToTarget(target, { immediate = false } = {}) {
  if (instance) {
    instance.scrollTo(target, { offset: -HEADER_OFFSET, immediate })
    return
  }
  const top =
    typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' })
}
