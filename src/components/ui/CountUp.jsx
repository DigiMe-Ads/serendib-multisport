import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function CountUp({ to, suffix = '', duration = 2, grouping = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  const display = grouping ? value.toLocaleString('en-US') : String(value)

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}
