import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import FormField from '../ui/FormField'
import Button from '../ui/Button'
import useFormSubmit from '../../hooks/useFormSubmit'

export default function Newsletter() {
  const { status, handleSubmit } = useFormSubmit()

  return (
    <div>
      <h3 className="font-display text-3xl uppercase sm:text-4xl">
        Receive the latest news on our <span className="text-volt">upcoming events</span>
      </h3>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.p
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 flex items-center gap-3 text-lg text-volt"
          >
            <CheckCircle2 className="size-6" /> You're on the list. See you at the start line!
          </motion.p>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <FormField id="firstName" label="First name" required autoComplete="given-name" />
            <FormField id="lastName" label="Last name" required autoComplete="family-name" />
            <FormField id="email" type="email" label="Email" required autoComplete="email" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <Button type="submit" variant="light" disabled={status === 'loading'}>
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
