import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const VARIANTS = {
  primary: 'bg-volt text-ink hover:bg-white',
  light: 'bg-white text-ink hover:bg-volt',
  dark: 'bg-ink text-white hover:bg-electric',
  ghost: 'border border-white/25 text-white hover:border-volt hover:text-volt',
}

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'

export default function Button({ to, href, variant = 'primary', icon = true, className = '', children, ...rest }) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:rotate-45"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
