import { Sprout } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal'
import { COMMITMENTS, SHADE_THE_ROAD } from '../../data/active'

export default function ShadeTheRoad() {
  return (
    <section className="bg-ink py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="Active Colombo to" title="#ShadeTheRoad" accent="text-leaf" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-white/70">
            {SHADE_THE_ROAD.map((text, i) => (
              <Reveal key={text} delay={i * 0.08}>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <div className="h-fit rounded-3xl border border-leaf/30 bg-leaf/10 p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf">#ShadeTheRoad commitment</p>
            <RevealGroup as="ol" className="mt-6 flex flex-col gap-4" stagger={0.1}>
              {COMMITMENTS.map((item, i) => (
                <RevealItem as="li" key={item} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-leaf font-display text-lg text-ink">
                    {i + 1}
                  </span>
                  <span className="pt-2 font-medium">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
            <Sprout className="mt-8 size-10 animate-float text-leaf" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
