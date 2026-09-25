import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../../components/ui/SectionHeading'
import RaceDetail from './RaceDetail'
import { RACES } from '../../data/sprint'

export default function RaceFormats() {
  const [activeId, setActiveId] = useState(RACES[0].id)
  const active = RACES.find((race) => race.id === activeId)

  return (
    <section id="races" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Race formats" title="Choose your challenge" />
          <p className="max-w-sm text-white/60">
            Four formats, one pathway. Pick the race that matches where you are today.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Sprint Colombo race formats"
          className="mt-14 flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-night p-1.5"
        >
          {RACES.map((race) => (
            <button
              key={race.id}
              type="button"
              role="tab"
              aria-selected={race.id === activeId}
              aria-controls="race-panel"
              onClick={() => setActiveId(race.id)}
              className={`relative flex-1 whitespace-nowrap rounded-full px-5 py-3 font-display text-lg uppercase tracking-wide transition-colors ${
                race.id === activeId ? 'text-ink' : 'text-white/70 hover:text-white'
              }`}
            >
              {race.id === activeId && (
                <motion.span
                  layoutId="race-pill"
                  className="absolute inset-0 rounded-full bg-volt"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{race.name}</span>
            </button>
          ))}
        </div>

        <div id="race-panel" role="tabpanel" className="mt-8">
          <AnimatePresence mode="wait">
            <RaceDetail key={active.id} race={active} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
