import usePageMeta from '../hooks/usePageMeta'
import HomeHero from '../sections/home/HomeHero'
import AboutSection from '../sections/home/AboutSection'
import StatsSection from '../sections/home/StatsSection'
import StorySection from '../sections/home/StorySection'
import WorkSection from '../sections/home/WorkSection'
import ContactCta from '../sections/shared/ContactCta'

export default function Home() {
  usePageMeta(
    "Sri Lanka's Premier Endurance Sports Organiser",
    "Serendib Multisport is Sri Lanka's premier endurance sports organiser and official IRONMAN licensee, bringing IRONMAN 70.3 Colombo, Sprint Colombo and Active Colombo to the island.",
  )

  return (
    <>
      <HomeHero />
      <AboutSection />
      <StatsSection />
      <StorySection />
      <WorkSection />
      <ContactCta />
    </>
  )
}
