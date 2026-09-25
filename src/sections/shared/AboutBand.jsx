import { LogoMark } from '../../components/ui/Logo'
import { Reveal } from '../../components/ui/Reveal'
import { ABOUT_COPY } from '../../data/site'

/** Compact "who we are" band shown at the foot of event pages. */
export default function AboutBand() {
  return (
    <section className="bg-ink py-20">
      <Reveal className="container-x flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
        <LogoMark className="size-24 shrink-0 text-white" />
        <div className="max-w-3xl">
          <p className="text-xl font-semibold">{ABOUT_COPY.lead}</p>
          <p className="mt-3 text-white/60">{ABOUT_COPY.body}</p>
        </div>
      </Reveal>
    </section>
  )
}
