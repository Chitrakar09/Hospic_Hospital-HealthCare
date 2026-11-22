import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { scrollToTarget } from '../lib/smoothScroll.js'

// Let the app, not the browser, decide the scroll position (no surprising restore after refresh / back).
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

/**
 * Scroll behaviour for every router navigation:
 * - `/#section` (same page or from another page): glide to the section (after jumping to the top on a page change).
 * - new page without a hash: jump to the top.
 * - same page without a hash (logo, "Home", back to top): glide to the top.
 * Uses Lenis when it is running, native smooth scrolling otherwise.
 */
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(null)

  useEffect(() => {
    const pageChanged = previousPath.current !== null && previousPath.current !== pathname
    previousPath.current = pathname

    if (pageChanged) scrollToTarget(0, { immediate: true })

    if (!hash) {
      if (!pageChanged) scrollToTarget(0)
      return
    }

    // The target may mount a frame or two after the route changes.
    const id = decodeURIComponent(hash.slice(1))
    let frame
    let tries = 0
    const find = () => {
      const el = document.getElementById(id)
      if (el) scrollToTarget(el)
      else if (tries++ < 30) frame = requestAnimationFrame(find)
    }
    frame = requestAnimationFrame(find)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
