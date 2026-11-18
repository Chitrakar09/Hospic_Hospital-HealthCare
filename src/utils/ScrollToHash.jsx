import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.substring(1)

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [pathname, hash])

  return null
}