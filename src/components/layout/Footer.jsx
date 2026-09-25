import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import Newsletter from './Newsletter'
import Logo from '../ui/Logo'
import SocialIcon from '../ui/SocialIcon'
import Marquee from '../ui/Marquee'
import { CONTACT_EMAIL, LOCATION, NAV_LINKS, SOCIAL_LINKS } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-electric/20 blur-[160px]" />

      <Marquee
        items={['Swim', 'Bike', 'Run', 'Serendib Multisport']}
        className="border-b border-white/10 py-5 font-display text-3xl uppercase text-white/15"
      />

      <div className="container-x relative grid gap-16 py-20 lg:grid-cols-[1.4fr_1fr]">
        <Newsletter />

        <div className="flex flex-col gap-8">
          <Logo />
          <ul className="flex flex-col gap-3 text-white/70">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-volt" /> {LOCATION}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-volt" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:bg-volt hover:text-ink"
              >
                <SocialIcon name={icon} />
              </a>
            ))}
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm text-white/60">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className="hover:text-volt">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-x relative flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
        <p>© {year} Serendib Multisport (Pvt) Ltd. All rights reserved.</p>
        <p>Official licensee of IRONMAN in Sri Lanka</p>
      </div>
    </footer>
  )
}
