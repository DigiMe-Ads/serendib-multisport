import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import DisciplineIcon from '../../components/ui/DisciplineIcon'

const COLOR = {
  sky: { text: 'text-sky', bg: 'bg-sky' },
  electric: { text: 'text-electric', bg: 'bg-electric' },
  blaze: { text: 'text-blaze', bg: 'bg-blaze' },
  volt: { text: 'text-volt', bg: 'bg-volt' },
}

export default function RaceDetail({ race }) {
  const color = COLOR[race.color]

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-10 rounded-3xl border border-white/10 bg-night p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]"
    >
      <div>
        <div className="flex items-center gap-3">
          {race.legs.map((leg, i) => (
            <span key={`${leg}-${i}`} className={`grid size-12 place-items-center rounded-full ${color.bg} text-ink`}>
              <DisciplineIcon type={leg} className="size-6" />
            </span>
          ))}
        </div>
        <h3 className="mt-6 font-display text-6xl uppercase sm:text-7xl">{race.name}</h3>
        <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.25em] ${color.text}`}>{race.format}</p>
        <p className="mt-6 text-xl font-semibold">{race.summary}</p>
        <p className="mt-3 text-white/70">{race.detail}</p>
      </div>

      <div className="flex flex-col gap-8">
        <dl className="grid grid-cols-3 gap-3">
          {race.distance.map(([leg, km], i) => (
            <motion.div
              key={leg}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="rounded-2xl bg-white/5 p-4 text-center"
            >
              <dt className="text-xs uppercase tracking-widest text-white/50">{leg}</dt>
              <dd className={`mt-1 font-display text-3xl ${color.text}`}>{km}</dd>
            </motion.div>
          ))}
        </dl>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Why {race.name}?</p>
          <ul className="mt-4 flex flex-col gap-3">
            {race.why.map((reason, i) => (
              <motion.li
                key={reason}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="flex gap-3"
              >
                <CheckCircle2 className={`mt-0.5 size-5 shrink-0 ${color.text}`} />
                <span>{reason}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}
