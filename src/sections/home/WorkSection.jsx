import SectionHeading from '../../components/ui/SectionHeading'
import { RevealGroup } from '../../components/ui/Reveal'
import WorkCard from './WorkCard'
import { WORK } from '../../data/home'

export default function WorkSection() {
  return (
    <section id="work" className="relative scroll-mt-20 bg-night py-28 sm:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Events & movements" title="Our Work" accent="text-sky" />
          <p className="max-w-md text-white/60">
            From global IRONMAN racing to city-wide wellness movements — every event is built to unite athletes and
            inspire communities.
          </p>
        </div>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {WORK.map((item, i) => (
            <WorkCard key={item.title} item={item} index={i} />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
