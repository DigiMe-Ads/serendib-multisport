import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Shared full-bleed hero for inner pages: animated title lines,
 * a glowing accent orb and parallax on scroll.
 */
export default function PageHero({ eyebrow, lines, subtitle, glow = 'bg-electric', image, imageAlt, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative flex min-h-[88svh] items-end overflow-hidden pb-20 pt-36">
      {image && (
        <motion.img
          src={image}
          alt={imageAlt}
          style={{ y }}
          className="absolute inset-0 size-full object-cover opacity-30"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
      <div className={`absolute -right-40 -top-40 size-[34rem] rounded-full ${glow} opacity-30 blur-[140px]`} />
      <div className="grain absolute inset-0 opacity-40" />

      <motion.div style={{ opacity }} className="container-x relative">
        {eyebrow && (
          <motion.p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {eyebrow}
          </motion.p>
        )}
        <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] uppercase leading-[0.88]">
          {lines.map(({ text, className = '' }, i) => (
            <span key={text} className="block overflow-hidden">
              <motion.span
                className={`block ${className}`}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: EASE }}
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>
        {subtitle && (
          <motion.p
            className="mt-8 max-w-xl text-lg text-white/80 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
