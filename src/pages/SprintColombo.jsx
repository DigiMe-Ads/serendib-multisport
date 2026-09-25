import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import SprintIntro from '../sections/sprint/SprintIntro'
import AudienceSection from '../sections/sprint/AudienceSection'
import RaceFormats from '../sections/sprint/RaceFormats'
import RegistrationCta from '../sections/sprint/RegistrationCta'
import AboutBand from '../sections/shared/AboutBand'
import { MEDIA } from '../data/site'

export default function SprintColombo() {
  usePageMeta(
    'Sprint Colombo Multi Sport Festival',
    "Sprint Colombo is Sri Lanka's most exciting multisport festival — aquathon, aquabike, duathlon and triathlon races in Colombo for beginners and IRONMAN hopefuls.",
  )

  return (
    <>
      <PageHero
        eyebrow="Multi Sport Festival"
        lines={[{ text: 'Sprint' }, { text: 'Colombo', className: 'text-volt' }]}
        subtitle="Swim. Bike. Run. Your structured pathway into the world of endurance sport."
        glow="bg-volt"
        image={MEDIA.bikeCourse}
        imageAlt="Cyclists racing on Colombo's waterfront road during a multisport event"
      >
        <Button href="#races">Explore races</Button>
      </PageHero>
      <SprintIntro />
      <AudienceSection />
      <RaceFormats />
      <RegistrationCta />
      <AboutBand />
    </>
  )
}
