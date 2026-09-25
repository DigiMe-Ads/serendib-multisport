import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import FormField from '../../components/ui/FormField'
import Button from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'
import useFormSubmit from '../../hooks/useFormSubmit'
import { KAYA_ORGANISERS } from '../../data/kaya'

export default function KayaContact() {
  const { status, handleSubmit } = useFormSubmit()

  return (
    <section className="overflow-hidden bg-[#fbf3ea] py-24 text-ink sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kaya">Get involved</p>
          <h2 className="mt-4 font-display text-6xl uppercase leading-none sm:text-7xl">Contact us</h2>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Exhibitors, sponsors, artisans and wellness brands — tell us about yourself and the KAYA team will be in
            touch.
          </p>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">Presented by</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {KAYA_ORGANISERS.map((name) => (
              <li key={name} className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="left" className="rounded-3xl bg-white p-8 shadow-xl shadow-kaya/10 sm:p-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 text-lg font-semibold text-kaya"
              >
                <CheckCircle2 className="size-6" /> Thank you! We&apos;ll get back to you shortly.
              </motion.p>
            ) : (
              <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
                <FormField theme="light" id="name" label="Name" required autoComplete="name" />
                <FormField theme="light" id="kayaEmail" type="email" label="Email" required autoComplete="email" />
                <FormField theme="light" id="company" label="Company" autoComplete="organization" />
                <FormField theme="light" id="phone" type="tel" label="Phone" placeholder="+94" autoComplete="tel" />
                <div className="sm:col-span-2">
                  <Button type="submit" variant="dark" className="w-full bg-kaya" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Submit'}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
