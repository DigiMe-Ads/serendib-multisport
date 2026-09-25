import { Check } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal'
import { AUDIENCE, AUDIENCE_INTRO } from '../../data/sprint'

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-blaze py-28 text-ink sm:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who is it for?" title="Built for every starter" accent="text-ink" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/80">{AUDIENCE_INTRO}</p>
          </Reveal>
        </div>

        <RevealGroup as="ul" className="flex flex-col gap-3 self-end" stagger={0.08}>
          <RevealItem as="li" className="mb-2 text-sm font-semibold uppercase tracking-[0.25em]">
            It is for:
          </RevealItem>
          {AUDIENCE.map((who) => (
            <RevealItem
              as="li"
              key={who}
              className="group flex items-center gap-4 rounded-2xl bg-ink/90 px-6 py-5 text-white transition-all duration-300 hover:translate-x-2 hover:bg-ink"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-volt text-ink transition-transform duration-300 group-hover:scale-110">
                <Check className="size-4" />
              </span>
              <span className="text-lg font-medium">{who}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
