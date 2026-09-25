export const CONTACT_EMAIL = 'info@serendibmultisport.com'
export const LOCATION = 'Colombo, Sri Lanka'

export const NAV_LINKS = [
  { label: 'About', to: '/#about' },
  { label: 'Work', to: '/#work' },
  { label: 'Sprint Colombo', to: '/sprint-colombo' },
  { label: 'KAYA Expo', to: '/kaya-expo' },
  { label: 'Active Colombo', to: '/active-colombo' },
  { label: 'Partners', to: '/partners' },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/serendibmultisport', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/serendibmultisport', icon: 'instagram' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@serendibmultisport', icon: 'tiktok' },
]

export const ABOUT_COPY = {
  lead: "Serendib Multisport (Pvt) Ltd is Sri Lanka's premier endurance sports organiser.",
  body: 'As the official licensee of IRONMAN, we bring world-class races to our island. Events that unite athletes, inspire communities, and showcase Sri Lanka as a destination for global sport.',
}

const BASE = import.meta.env.BASE_URL

export const MEDIA = {
  heroVideo: `${BASE}videos/serendib-multisport-endurance-runner-training-sri-lanka.mp4`,
  heroPoster: `${BASE}images/serendib-multisport-endurance-runner-training-poster.webp`,
  finishLine: `${BASE}images/ironman-70-3-colombo-triathlete-finish-line-run.webp`,
  bikeCourse: `${BASE}images/ironman-70-3-colombo-cyclists-bike-course-galle-face.webp`,
  ironkids: `${BASE}images/ironkids-colombo-2026-children-running-race-start.webp`,
  kayaMap: `${BASE}images/sri-lanka-wellness-active-lifestyle-illustrated-map.webp`,
}
