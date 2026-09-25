import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

/** Wraps a page: content fades in while a coloured curtain sweeps away. */
export default function PageTransition({ children }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] origin-top bg-electric"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
    </>
  )
}
