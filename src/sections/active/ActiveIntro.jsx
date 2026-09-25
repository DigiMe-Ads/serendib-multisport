import SectionHeading from '../../components/ui/SectionHeading'
import { Reveal } from '../../components/ui/Reveal'
import { ACTIVE_INTRO } from '../../data/active'

export default function ActiveIntro() {
  return (
    <section className="bg-white py-28 text-ink sm:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeading eyebrow="The movement" title="What is Active Colombo?" accent="text-leaf" />
        <Reveal delay={0.2} className="self-end">
          <p className="text-xl leading-relaxed text-ink/75 sm:text-2xl">{ACTIVE_INTRO}</p>
        </Reveal>
      </div>
    </section>
  )
}
