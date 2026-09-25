import { motion } from 'framer-motion'
import Button from '../../components/ui/Button'
import { KAYA_LINKS, KAYA_PILLARS } from '../../data/kaya'
import { MEDIA } from '../../data/site'

const EASE = [0.22, 1, 0.36, 1]

export default function KayaHero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf3ea] pb-24 pt-36 text-ink">
      <div className="absolute -left-40 top-20 size-[32rem] rounded-full bg-kaya/25 blur-[120px]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-kaya"
          >
            International Expo 2026
          </motion.p>
          <h1 className="mt-4 font-display uppercase leading-[0.9]">
            {['Kaya', 'Wellness &', 'Active Lifestyle'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 0 ? 'text-[clamp(4.5rem,14vw,11rem)] text-kaya' : 'text-[clamp(2.2rem,5.5vw,4.5rem)]'}`}
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="KAYA pillars">
            {KAYA_PILLARS.map((pillar, i) => (
              <motion.li
                key={pillar}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08, type: 'spring', stiffness: 300 }}
                whileHover={{ y: -4 }}
                className="rounded-full border border-kaya/40 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-widest text-kaya"
              >
                {pillar}
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={KAYA_LINKS.brochureDownload} variant="dark">
              Download brochure
            </Button>
            <Button href={KAYA_LINKS.brochureView} variant="light" className="border border-ink/15">
              View brochure
            </Button>
          </div>
        </div>

        <motion.img
          src={MEDIA.kayaMap}
          alt="Illustrated map of Sri Lanka filled with wellness, culture and active lifestyle icons"
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
          className="mx-auto w-64 animate-float mix-blend-multiply sm:w-80"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
