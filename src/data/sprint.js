export const SPRINT_INTRO = [
  "Sprint Colombo is Sri Lanka's most exciting multisport festival, built around the three core endurance disciplines of swimming, cycling, and running.",
  "As a cornerstone of the #ActiveColombo initiative, the Series supports the vision of transforming Colombo into South Asia's leading active outdoor lifestyle hub. A city that encourages movement, performance, and healthy living.",
  'Designed for challenge-seekers, health and fitness enthusiasts, and individuals ready to set progressive goals and achieve them. Sprint Colombo creates a structured pathway into the world of endurance sport.',
]

export const SPRINT_TAGLINE =
  "Whether you're starting your first race or building toward IRONMAN 70.3, this is where your journey begins."

export const AUDIENCE_INTRO =
  "Whether you're just discovering multisport, looking for a fun challenge or training for serious race, the Sprint Colombo inspires goal-setting and delivers structured challenges that enhance skills, strategy, and race-day readiness."

export const AUDIENCE = [
  'Runners exploring swimming and cycling',
  'Cyclists seeking competitive structure',
  'Fitness enthusiasts chasing new goals',
  'Corporate teams and community groups',
  'Ones looking to join the triathlon lifestyle',
]

export const RACES = [
  {
    id: 'aquathon',
    name: 'Aquathon',
    legs: ['swim', 'run'],
    format: 'Swim + Run',
    distance: [['Swim', '600m'], ['Run', '5km']],
    summary: 'The perfect introduction to multisport.',
    detail: 'Aquathon removes the cycling leg to simplify the experience, making it ideal for beginners or runners eager to explore open water swimming.',
    why: ['A friendly first race experience', 'Learn pacing across two disciplines', 'Experience race-day transitions'],
    color: 'sky',
  },
  {
    id: 'aquabike',
    name: 'Aquabike',
    legs: ['swim', 'bike'],
    format: 'Swim + Bike',
    distance: [['Swim', '600m'], ['Bike', '20km']],
    summary: 'For swimmers and cyclists stepping into multisport.',
    detail: 'Aquabike removes the run leg, making it a great option for swimmers and cyclists who want to experience multisport.',
    why: ['A great introduction to multisport', 'Build confidence across two disciplines', 'Experience open water swimming and race-day transitions'],
    color: 'electric',
  },
  {
    id: 'duathlon',
    name: 'Duathlon',
    legs: ['run', 'bike', 'run'],
    format: 'Run + Bike + Run',
    distance: [['Run', '2.5km'], ['Bike', '20km']],
    summary: 'For those not ready for open water swimming — but ready for speed.',
    detail: 'Duathlon builds endurance, power, and race strategy through a dynamic run-bike-run format.',
    why: ['Introduction to bike handling, road awareness, and basic mechanical confidence', 'Builds transition confidence with two transition phases', 'A true taste of race intensity and strategy'],
    color: 'blaze',
  },
  {
    id: 'triathlon',
    name: 'Triathlon',
    legs: ['swim', 'bike', 'run'],
    format: 'Swim + Bike + Run',
    distance: [['Swim', '600m'], ['Bike', '20km'], ['Run', '5km']],
    summary: 'The complete multisport experience.',
    detail: 'Triathlon within the Sprint Colombo Series is designed as a stepping stone — not an elite-only challenge — offering athletes a structured pathway to longer endurance events.',
    why: ['Discover balance across all three endurance disciplines', 'Simulated race conditions to develop race flow', 'A stepping stone to the global stage of multisport'],
    color: 'volt',
  },
]
