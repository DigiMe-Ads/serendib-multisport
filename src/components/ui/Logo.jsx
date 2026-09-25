import { Link } from 'react-router-dom'

export function LogoMark({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none" strokeWidth="3.5" strokeLinecap="round">
      <rect x="9" y="9" width="17" height="17" rx="5" transform="rotate(45 17.5 17.5)" stroke="currentColor" />
      <rect x="22" y="22" width="17" height="17" rx="5" transform="rotate(45 30.5 30.5)" stroke="currentColor" />
      <rect x="22" y="9" width="17" height="17" rx="5" transform="rotate(45 30.5 17.5)" className="stroke-volt" />
      <rect x="9" y="22" width="17" height="17" rx="5" transform="rotate(45 17.5 30.5)" className="stroke-volt" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Serendib Multisport home">
      <LogoMark className="size-9 transition-transform duration-700 group-hover:rotate-90" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-wide">SERENDIB</span>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.42em] text-white/70">multisport</span>
      </span>
    </Link>
  )
}
