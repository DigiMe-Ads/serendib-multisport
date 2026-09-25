import CountUp from '../../components/ui/CountUp'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal'
import { STATS } from '../../data/home'

export default function StatsSection() {
  return (
    <section aria-label="Serendib Multisport in numbers" className="border-y border-white/10 bg-night">
      <RevealGroup className="container-x grid grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ value, suffix, label }, i) => (
          <RevealItem
            key={label}
            className={`group relative px-4 py-12 sm:px-8 ${i > 0 ? 'lg:border-l' : ''} ${
              i % 2 ? 'border-l' : ''
            } ${i > 1 ? 'border-t lg:border-t-0' : ''} border-white/10`}
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-electric/20 transition-all duration-500 group-hover:h-full" />
            <p className="relative font-display text-5xl text-white sm:text-6xl lg:text-7xl">
              <CountUp to={value} suffix={suffix} grouping={value !== 2026} />
            </p>
            <p className="relative mt-3 text-sm uppercase tracking-widest text-white/60">{label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
