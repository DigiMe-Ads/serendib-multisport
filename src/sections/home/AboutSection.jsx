import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LogoMark } from '../../components/ui/Logo'
import { Reveal } from '../../components/ui/Reveal'
import Marquee from '../../components/ui/Marquee'
import { ABOUT_COPY } from '../../data/site'
import { DISCIPLINES } from '../../data/home'

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-45, 90])

  return (
    <section id="about" ref={ref} className="relative scroll-mt-20 overflow-hidden bg-ink">
      <Marquee
        items={DISCIPLINES}
        className="-rotate-2 bg-volt py-4 font-display text-4xl uppercase text-ink sm:text-5xl"
      />

      <div className="container-x grid items-center gap-16 py-28 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-volt">About us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl">
              {ABOUT_COPY.lead}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{ABOUT_COPY.body}</p>
          </Reveal>
        </div>

        <motion.div style={{ rotate }} className="relative mx-auto grid size-64 place-items-center sm:size-80">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
          <div className="absolute inset-8 rounded-full bg-electric/30 blur-3xl" />
          <LogoMark className="size-40 text-white sm:size-52" />
        </motion.div>
      </div>
    </section>
  )
}
