import { Phone, PlayCircle } from 'lucide-react'
import { Reveal } from '../../components/ui/Reveal'
import { KAYA_COPY, KAYA_HEADLINE, KAYA_LINKS, KAYA_PHONES } from '../../data/kaya'

export default function KayaStory() {
  return (
    <section className="overflow-hidden bg-white py-24 text-ink sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <p className="font-display text-3xl uppercase leading-tight sm:text-4xl">{KAYA_HEADLINE}</p>
          </Reveal>
          {KAYA_COPY.map((text, i) => (
            <Reveal key={text} delay={0.1 * (i + 1)}>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">{text}</p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <Reveal direction="left" className="rounded-3xl bg-kaya p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">For stalls & sponsorships</p>
            <ul className="mt-5 flex flex-col gap-3">
              {KAYA_PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3 font-display text-3xl tracking-wide"
                  >
                    <Phone className="size-5 transition-transform group-hover:rotate-12" /> {phone}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <a
              href={KAYA_LINKS.video}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl bg-ink p-8 text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <PlayCircle className="size-14 shrink-0 text-kaya transition-transform duration-500 group-hover:scale-110" />
              <span>
                <span className="block text-xs uppercase tracking-[0.3em] text-white/60">Watch on YouTube</span>
                <span className="mt-1 block text-lg font-semibold">KAYA | Wellness & Active Lifestyle Expo 2026</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
