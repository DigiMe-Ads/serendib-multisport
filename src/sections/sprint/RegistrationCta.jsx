import { motion } from 'framer-motion'
import Button from '../../components/ui/Button'
import { CONTACT_EMAIL } from '../../data/site'

export default function RegistrationCta() {
  return (
    <section className="relative overflow-hidden bg-sky py-24 text-ink sm:py-32">
      <motion.div
        aria-hidden
        className="absolute inset-y-0 -left-1/4 w-1/2 -skew-x-12 bg-white/20"
        animate={{ x: ['0%', '300%'] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', repeatDelay: 1 }}
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2.8rem,8vw,7rem)] uppercase leading-[0.9]"
        >
          Registration opening soon.
        </motion.h2>
        <p className="mt-6 max-w-xl text-lg text-ink/80">
          The Sprint Colombo Series is your gateway to endurance sport — and your pathway into a global performance
          community.
        </p>
        <Button
          href={`mailto:${CONTACT_EMAIL}?subject=Sprint%20Colombo%20registration`}
          variant="dark"
          className="mt-10"
        >
          Sign up now
        </Button>
      </div>
    </section>
  )
}
