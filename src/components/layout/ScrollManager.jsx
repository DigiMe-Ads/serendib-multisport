import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the hash target (e.g. /#about) or to the top on route change. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return undefined
    }
    // Wait for the page transition to mount the target section.
    const timer = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }, 450)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
