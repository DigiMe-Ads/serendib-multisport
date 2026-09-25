import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Logo from '../ui/Logo'
import MobileMenu from './MobileMenu'
import { CONTACT_EMAIL, NAV_LINKS } from '../../data/site'

// Routes whose hero is light, so the header needs a solid background from the start.
const LIGHT_HERO_ROUTES = ['/kaya-expo']

function isActive(pathname, to) {
  return !to.includes('#') && pathname === to
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const solid = scrolled || LIGHT_HERO_ROUTES.includes(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-ink/75 py-3 shadow-lg shadow-black/30 backdrop-blur-xl' : 'py-6'
        }`}
      >
        <nav className="container-x flex items-center justify-between" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to} className="relative" onMouseEnter={() => setHovered(to)}>
                <Link
                  to={to}
                  className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(pathname, to) ? 'text-volt' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
                {hovered === to && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hidden rounded-full bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105 lg:inline-block"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/20 p-2.5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}
