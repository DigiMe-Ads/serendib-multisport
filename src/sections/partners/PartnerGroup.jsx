import { RevealGroup, RevealItem, Reveal } from '../../components/ui/Reveal'

function normalise(partner) {
  return typeof partner === 'string' ? { name: partner } : partner
}

export default function PartnerGroup({ title, partners, index }) {
  return (
    <div className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2.5fr]">
      <Reveal>
        <p className="font-display text-5xl text-white/15">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">{title}</h3>
      </Reveal>

      <RevealGroup as="ul" className="grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.05}>
        {partners.map(normalise).map(({ name, role }) => (
          <RevealItem
            as="li"
            key={name}
            className="group relative flex min-h-28 flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-volt/60"
          >
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-volt transition-transform duration-500 group-hover:scale-x-100" />
            {role && <span className="text-[0.65rem] uppercase tracking-[0.2em] text-volt">{role}</span>}
            <span className="mt-1 text-lg font-semibold leading-tight">{name}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}
