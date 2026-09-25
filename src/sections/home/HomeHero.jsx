import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../../components/ui/Button'
import { MEDIA } from '../../data/site'

const EASE = [0.22, 1, 0.36, 1]
const TITLE = [
  { text: 'Endurance', className: '' },
  { text: 'Starts Here', className: 'text-outline' },
]

export default function HomeHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.video
        style={{ scale }}
        className="absolute inset-0 size-full object-cover"
        src={MEDIA.heroVideo}
        poster={MEDIA.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Runner training for an endurance race in Sri Lanka"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-electric/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="container-x relative flex h-full flex-col justify-end pb-24 sm:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur"
        >
          <span className="size-2 animate-pulse rounded-full bg-volt" />
          Official IRONMAN licensee · Sri Lanka
        </motion.p>

        <h1 className="font-display text-[clamp(3.8rem,13vw,11.5rem)] uppercase leading-[0.86]">
          {TITLE.map(({ text, className }, i) => (
            <span key={text} className="block overflow-hidden">
              <motion.span
                className={`block ${className}`}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.15, ease: EASE }}
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-lg text-white/80">
            Sri Lanka&apos;s premier endurance sports organiser — bringing world-class races to our island.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/sprint-colombo">Sprint Colombo</Button>
            <Button to="/#work" variant="ghost" icon={false}>
              Our Work
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  )
}
