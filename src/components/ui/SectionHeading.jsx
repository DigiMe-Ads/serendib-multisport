import { motion } from 'framer-motion'

const wordVariants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionHeading({ eyebrow, title, accent = 'text-volt', align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <motion.span
          className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${accent}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-10 bg-current" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className="font-display text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        {title.split(' ').map((word, i) => (
          <span key={`${word}-${i}`} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  )
}
