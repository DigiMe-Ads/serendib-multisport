import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { itemVariants } from '../../lib/motion'

/** Event card with a subtle 3D tilt that follows the cursor. */
export default function WorkCard({ item, index }) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.article variants={itemVariants} style={{ perspective: 1000 }}>
      <motion.div style={{ rotateX, rotateY }} onMouseMove={onMove} onMouseLeave={onLeave}>
        <Link
          to={item.to}
          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-night p-7"
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-volt),transparent_55%),radial-gradient(circle_at_80%_90%,var(--color-blaze),transparent_50%)] opacity-50 transition-opacity duration-700 group-hover:opacity-80" />
          )}
          <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} via-ink/70 to-transparent opacity-90`} />

          <span className="absolute left-7 top-7 font-display text-6xl text-white/20">0{index + 1}</span>
          <span className="absolute right-7 top-7 grid size-12 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
            <ArrowUpRight className="size-5" />
          </span>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">{item.tag}</p>
            <h3 className="mt-2 font-display text-4xl uppercase leading-none">{item.title}</h3>
            <p className="mt-4 max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
              {item.blurb}
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  )
}
