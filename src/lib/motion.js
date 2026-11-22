/**
 * Appear-on-view engine (Framer "Appear" effect).
 * Mark an element with `data-reveal` (CSS in styles/motion.css animates it) and optionally:
 *   data-reveal-y="44"       start offset in px (default 120)
 *   data-reveal-scale="1.1"  start scale (hero / CTA backgrounds)
 *   data-reveal-delay="0.1"  delay in seconds
 * Elements animate once, as soon as any part enters the viewport (Framer: onInView, threshold 0, once).
 * One IntersectionObserver + one MutationObserver for the whole site, so elements added later (route changes,
 * "See more" lists) are picked up automatically. Does nothing for users who prefer reduced motion.
 */
export function initMotion() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const root = document.documentElement
  root.classList.add('motion-ok')

  const seen = new WeakSet()
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.setAttribute('data-revealed', '')
      io.unobserve(entry.target)
    }
  })

  const watch = (el) => {
    if (seen.has(el)) return
    seen.add(el)
    const { revealY, revealScale, revealDelay } = el.dataset
    if (revealY !== undefined) el.style.setProperty('--rv-y', `${revealY}px`)
    if (revealScale !== undefined) el.style.setProperty('--rv-s', revealScale)
    if (revealDelay !== undefined) el.style.setProperty('--rv-d', `${revealDelay}s`)
    io.observe(el)
  }
  const scan = (node) => {
    if (node.nodeType !== 1) return
    if (node.matches('[data-reveal]')) watch(node)
    node.querySelectorAll('[data-reveal]').forEach(watch)
  }

  scan(document.body)
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) m.addedNodes.forEach(scan)
  })
  mo.observe(document.body, { childList: true, subtree: true })

  return () => {
    mo.disconnect()
    io.disconnect()
    root.classList.remove('motion-ok')
  }
}
