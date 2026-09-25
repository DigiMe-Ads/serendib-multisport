import SectionHeading from '../../components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal'
import { HEADLINE_PARTNERS } from '../../data/partners'

export default function HeadlinePartners() {
  return (
    <section className="py-28 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="IRONMAN 70.3 Colombo" title="Headline Partners" accent="text-sky" />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {HEADLINE_PARTNERS.map(({ role, name, sub }) => (
            <RevealItem
              key={name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-night p-8 transition-colors duration-500 hover:border-sky/50"
            >
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-electric/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-sky">{role}</p>
              <p className="relative mt-10 font-display text-4xl uppercase leading-none sm:text-5xl">{name}</p>
              <p className="relative mt-2 text-sm uppercase tracking-widest text-white/50">{sub}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
