import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import SocialIcon from '../ui/SocialIcon'
import { CONTACT_EMAIL, NAV_LINKS, SOCIAL_LINKS } from '../../data/site'

const EASE = [0.22, 1, 0.36, 1]

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] flex flex-col bg-electric px-6 pb-10 pt-6"
      initial={{ clipPath: 'circle(0% at 100% 0%)' }}
      animate={{ clipPath: 'circle(150% at 100% 0%)' }}
      exit={{ clipPath: 'circle(0% at 100% 0%)' }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <button
        type="button"
        onClick={onClose}
        className="ml-auto rounded-full border border-white/30 p-2.5"
        aria-label="Close menu"
      >
        <X className="size-5" />
      </button>

      <ul className="mt-10 flex flex-col gap-2">
        {NAV_LINKS.map(({ label, to }, i) => (
          <motion.li
            key={to}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: EASE }}
          >
            <Link
              to={to}
              onClick={onClose}
              className="font-display text-5xl uppercase leading-tight transition-colors hover:text-volt"
            >
              {label}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between">
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/80">
          {CONTACT_EMAIL}
        </a>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <SocialIcon name={icon} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
