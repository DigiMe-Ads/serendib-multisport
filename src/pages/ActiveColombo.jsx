import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ActiveIntro from '../sections/active/ActiveIntro'
import GardenCity from '../sections/active/GardenCity'
import ShadeTheRoad from '../sections/active/ShadeTheRoad'
import JoinCta from '../sections/active/JoinCta'
import NewsSection from '../sections/active/NewsSection'
import VideoGallery from '../sections/active/VideoGallery'
import AboutBand from '../sections/shared/AboutBand'
import { MEDIA } from '../data/site'

export default function ActiveColombo() {
  usePageMeta(
    'Active Colombo & #ShadeTheRoad',
    "Active Colombo is a city-wide movement by Serendib Multisport to make Colombo South Asia's most active, walkable and liveable city through #ShadeTheRoad tree planting, walks and cycling.",
  )

  return (
    <>
      <PageHero
        eyebrow="Shade the road to"
        lines={[{ text: 'Active' }, { text: 'Colombo', className: 'text-leaf' }]}
        subtitle="Move, Play, Breathe, and Belong."
        glow="bg-leaf"
        image={MEDIA.ironkids}
        imageAlt="Children running together at IRONKIDS Colombo, part of the Active Colombo movement"
      >
        <Button href="#learn-more" className="bg-leaf">
          Learn more
        </Button>
      </PageHero>
      <div id="learn-more" className="scroll-mt-16">
        <ActiveIntro />
      </div>
      <GardenCity />
      <ShadeTheRoad />
      <JoinCta />
      <NewsSection />
      <VideoGallery />
      <AboutBand />
    </>
  )
}
