import SectionHeading from '../../components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal'
import { VIDEOS } from '../../data/active'

export default function VideoGallery() {
  return (
    <section className="bg-ink py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="All videos" title="Race day moments" accent="text-leaf" />

        <RevealGroup className="mt-14 grid gap-8 md:grid-cols-2" stagger={0.15}>
          {VIDEOS.map(({ title, image, alt }) => (
            <RevealItem as="figure" key={title} className="group">
              <div className="relative aspect-video overflow-hidden rounded-3xl">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
              </div>
              <figcaption className="mt-5 font-display text-3xl uppercase">{title}</figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
