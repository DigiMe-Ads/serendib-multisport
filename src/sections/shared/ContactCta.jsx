import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { CONTACT_EMAIL } from '../../data/site'

/** Big animated call-to-action inviting enquiries by email. */
export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-electric py-24 sm:py-32">
      <div className="absolute -left-20 top-0 size-96 animate-spin-slow rounded-full border-[40px] border-white/5" />
      <div className="absolute -right-10 -bottom-20 size-72 animate-float rounded-full bg-volt/30 blur-3xl" />

      <div className="container-x relative text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-white/80"
        >
          We are here to help with any of your inquiries
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03 }}
          className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 break-all font-display text-[clamp(2rem,6vw,5.5rem)] uppercase leading-none hover:text-volt"
        >
          <Mail className="size-[0.8em] shrink-0" aria-hidden />
          Contact us
        </motion.a>
        <p className="mt-6 text-lg text-white/80">{CONTACT_EMAIL}</p>
      </div>
    </section>
  )
}
