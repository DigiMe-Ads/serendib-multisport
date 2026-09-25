import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'
import { Reveal } from '../../components/ui/Reveal'
import { NEWS } from '../../data/active'

const PREVIEW_LENGTH = 180

export default function NewsSection() {
  const [expanded, setExpanded] = useState(false)
  const preview = `${NEWS.body.slice(0, PREVIEW_LENGTH).trimEnd()}…`

  return (
    <section className="bg-white py-24 text-ink sm:py-32">
      <Reveal className="container-x max-w-4xl">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-leaf">
          <Newspaper className="size-4" /> In the news
        </p>
        <h2 className="mt-5 font-display text-4xl uppercase leading-tight sm:text-5xl">{NEWS.title}</h2>

        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={expanded ? 'full' : 'preview'}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-6 overflow-hidden text-lg leading-relaxed text-ink/70"
          >
            {expanded ? NEWS.body : preview}
          </motion.p>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-8 rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-leaf hover:text-ink"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </Reveal>
    </section>
  )
}
