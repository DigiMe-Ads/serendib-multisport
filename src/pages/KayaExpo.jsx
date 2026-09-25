import usePageMeta from '../hooks/usePageMeta'
import KayaHero from '../sections/kaya/KayaHero'
import KayaStory from '../sections/kaya/KayaStory'
import KayaContact from '../sections/kaya/KayaContact'

export default function KayaExpo() {
  usePageMeta(
    'KAYA Wellness & Active Lifestyle International Expo 2026',
    "KAYA is Sri Lanka's only Wellness & Active Lifestyle International Expo — a living expo of wellness, fitness, travel and craftsmanship with visitors from over 40 countries.",
  )

  return (
    <>
      <KayaHero />
      <KayaStory />
      <KayaContact />
    </>
  )
}
