import { MEDIA } from './site'

export const STATS = [
  { value: 1600, suffix: '', label: 'Athletes hosted' },
  { value: 60, suffix: '+', label: 'Countries represented' },
  { value: 2, suffix: '', label: 'IRONMAN editions (2018 & 2019)' },
  { value: 2026, suffix: '', label: 'IRONMAN 70.3 Colombo returns' },
]

export const STORY = {
  paragraphs: [
    'From hosting 1,600 athletes from 60+ countries in 2018 and 2019, to preparing for the return of IRONMAN 70.3 Colombo in 2026, our journey is built on passion, precision, and professionalism. We are more than organisers.',
    'We are athletes, supporters, storytellers, and believers in the power of sport to inspire.',
  ],
  image: MEDIA.finishLine,
  imageAlt: 'Triathlete running down the red carpet to the IRONMAN 70.3 Colombo finish line',
}

export const WORK = [
  {
    title: 'IRONMAN 70.3 Colombo',
    tag: 'Flagship',
    blurb: 'Swim the Indian Ocean, bike through Port City, run along the waterfront. A race like no other.',
    to: '/partners',
    image: MEDIA.bikeCourse,
    alt: 'IRONMAN 70.3 Colombo cyclists racing along the Galle Face bike course',
    accent: 'from-electric',
  },
  {
    title: 'Sprint Colombo',
    tag: 'Multisport Festival',
    blurb: "Sri Lanka's most exciting multisport festival — swim, bike and run your way into endurance sport.",
    to: '/sprint-colombo',
    accent: 'from-volt',
  },
  {
    title: 'KAYA Expo',
    tag: 'Wellness & Lifestyle',
    blurb: 'Move • Heal • Explore • Create • Connect. Sri Lanka’s only Wellness & Active Lifestyle International Expo.',
    to: '/kaya-expo',
    image: MEDIA.kayaMap,
    alt: 'Illustrated map of Sri Lanka celebrating wellness and active lifestyle',
    accent: 'from-kaya',
  },
  {
    title: 'Active Colombo',
    tag: 'City Movement',
    blurb: 'Shade the road to move, play, breathe, and belong. Transforming Colombo into South Asia’s most active city.',
    to: '/active-colombo',
    image: MEDIA.ironkids,
    alt: 'Children sprinting from the start line at IRONKIDS Colombo 2026',
    accent: 'from-leaf',
  },
]

export const DISCIPLINES = ['Swim', 'Bike', 'Run', 'Endure', 'Inspire', 'Belong']
