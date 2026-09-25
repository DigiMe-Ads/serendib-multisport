import SectionHeading from '../../components/ui/SectionHeading'
import { Reveal } from '../../components/ui/Reveal'
import { SPRINT_INTRO, SPRINT_TAGLINE } from '../../data/sprint'

export default function SprintIntro() {
  return (
    <section className="relative overflow-hidden bg-volt py-28 text-ink sm:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 font-display text-[22vw] leading-none text-ink/5"
      >
        SPRINT
      </span>

      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="The festival" title="What is Sprint Colombo?" accent="text-ink" />

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink/80">
          {SPRINT_INTRO.map((text, i) => (
            <Reveal key={text} delay={i * 0.1}>
              <p>{text}</p>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <p className="border-l-4 border-ink pl-5 text-2xl font-semibold text-ink">{SPRINT_TAGLINE}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
