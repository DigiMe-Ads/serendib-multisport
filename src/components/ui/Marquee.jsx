export default function Marquee({ items, className = '', separator = '✦', reverse = false }) {
  const loop = [...items, ...items]

  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap ${className}`} aria-hidden>
      <div
        className="flex shrink-0 animate-marquee items-center"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="px-6">{item}</span>
            <span className="opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
