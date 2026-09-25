import { Bike, Footprints, Waves } from 'lucide-react'

const ICONS = { swim: Waves, bike: Bike, run: Footprints }
const LABELS = { swim: 'Swim', bike: 'Bike', run: 'Run' }

export default function DisciplineIcon({ type, className = 'size-5' }) {
  const Icon = ICONS[type]
  return <Icon className={className} aria-label={LABELS[type]} />
}
