
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { getLenis, scrollToTarget } from '../lib/smoothScroll.js'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(null)

  useEffect(() => {
    let cancelled = false
    let frame1
    let frame2

    const pageChanged =
      previousPath.current !== null &&
      previousPath.current !== pathname

    previousPath.current = pathname

    if (pageChanged) {
      scrollToTarget(0, { immediate: true })
    }

    if (!hash) {
      if (!pageChanged) scrollToTarget(0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))

    const navigateToSection = async () => {
      // Wait for web fonts and browser rendering.
      if (document.fonts?.ready) {
        await document.fonts.ready
      }

      if (cancelled) return

      frame1 = requestAnimationFrame(() => {
        frame2 = requestAnimationFrame(() => {
          if (cancelled) return

          const target = document.getElementById(id)

          if (!target) return

          // Refresh Lenis dimensions before calculating position.
          getLenis()?.resize()

          scrollToTarget(target)
        })
      })
    }

    navigateToSection()

    return () => {
      cancelled = true
      cancelAnimationFrame(frame1)
      cancelAnimationFrame(frame2)
    }
  }, [pathname, hash, key])

  return null
}
