import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import HeadlinePartners from '../sections/partners/HeadlinePartners'
import PartnerDirectory from '../sections/partners/PartnerDirectory'
import AboutBand from '../sections/shared/AboutBand'
import { IRONMAN_TAGLINE } from '../data/partners'
import { MEDIA } from '../data/site'

export default function Partners() {
  usePageMeta(
    'IRONMAN 70.3 Colombo Partners',
    'Meet the partners of IRONMAN 70.3 Colombo — government bodies, Colombo Port City, Shangri-La Colombo, Walkers Tours and the brands and media powering endurance sport in Sri Lanka.',
  )

  return (
    <>
      <PageHero
        eyebrow="IRONMAN 70.3 Colombo"
        lines={[{ text: 'A race' }, { text: 'like no', className: 'text-sky' }, { text: 'other' }]}
        subtitle={IRONMAN_TAGLINE}
        image={MEDIA.finishLine}
        imageAlt="Triathlete approaching the IRONMAN 70.3 Colombo finish"
      />
      <HeadlinePartners />
      <PartnerDirectory />
      <AboutBand />
    </>
  )
}
