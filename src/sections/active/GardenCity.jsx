import { motion } from 'framer-motion'
import { Trees } from 'lucide-react'
import { Reveal } from '../../components/ui/Reveal'
import { GARDEN_CITY } from '../../data/active'

const TREE_ROWS = 5

/** Colombo "Garden City" story with a playful animated tree canopy. */
export default function GardenCity() {
  return (
    <section className="relative overflow-hidden bg-leaf py-28 text-ink sm:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">{GARDEN_CITY.eyebrow}</p>
          <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">{GARDEN_CITY.title}</h2>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">{GARDEN_CITY.body}</p>
          <p className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-leaf">{GARDEN_CITY.cta}</p>
        </Reveal>

        <div aria-hidden className="grid grid-cols-5 gap-4 rounded-3xl bg-ink/10 p-8">
          {Array.from({ length: TREE_ROWS * 5 }, (_, i) => (
            <motion.span
              key={i}
              className="grid aspect-square place-items-center rounded-2xl bg-white/20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.06 + Math.floor(i / 5) * 0.08, type: 'spring', stiffness: 260 }}
            >
              <Trees className="size-2/3 text-ink/80" strokeWidth={1.5} />
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
