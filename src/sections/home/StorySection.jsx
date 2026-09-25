import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../../components/ui/SectionHeading'
import { Reveal } from '../../components/ui/Reveal'
import { STORY } from '../../data/home'

export default function StorySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const clip = useTransform(scrollYProgress, [0.1, 0.4], ['inset(20% 20% 20% 20% round 2rem)', 'inset(0% 0% 0% 0% round 2rem)'])

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute left-0 top-1/3 size-[30rem] rounded-full bg-electric/25 blur-[140px]" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Since 2018" title="Our Story" />
          {STORY.paragraphs.map((text, i) => (
            <Reveal key={text} delay={0.15 * (i + 1)}>
              <p className={`mt-6 text-lg leading-relaxed ${i ? 'text-xl font-semibold text-white' : 'text-white/70'}`}>
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <motion.figure style={{ clipPath: clip }} className="relative aspect-[4/3.6] overflow-hidden">
          <motion.img
            style={{ y: imageY }}
            src={STORY.image}
            alt={STORY.imageAlt}
            loading="lazy"
            className="absolute inset-0 size-full scale-110 object-cover"
          />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-ink/70 px-4 py-2 text-xs uppercase tracking-widest backdrop-blur">
            IRONMAN 70.3 Colombo finish line
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
