import { motion } from 'framer-motion'
import { EASE_OUT as EASE, itemVariants } from '../../lib/motion'

const OFFSETS = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 60 },
  right: { x: -60 },
  none: {},
}

export function Reveal({ as = 'div', direction = 'up', delay = 0, className, children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({ as = 'div', stagger = 0.1, className, children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ as = 'div', className, children }) {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  )
}
