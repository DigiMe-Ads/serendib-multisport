import Marquee from '../../components/ui/Marquee'
import Button from '../../components/ui/Button'
import { CONTACT_EMAIL } from '../../data/site'

export default function JoinCta() {
  return (
    <section className="overflow-hidden bg-leaf py-16 text-ink">
      <Marquee
        items={['Be part of Active Colombo', 'Move', 'Play', 'Breathe', 'Belong']}
        className="font-display text-5xl uppercase sm:text-7xl"
        separator="●"
      />
      <div className="mt-10 flex justify-center">
        <Button href={`mailto:${CONTACT_EMAIL}?subject=Join%20Active%20Colombo`} variant="dark">
          Sign up
        </Button>
      </div>
    </section>
  )
}
