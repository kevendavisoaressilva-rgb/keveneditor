const ACCENTS: Record<string, string> = {
  red: 'text-rgb-red',
  green: 'text-rgb-green',
  blue: 'text-rgb-blue',
}

export function Marquee({
  items,
  accent = 'red',
  reverse = false,
}: {
  items: string[]
  accent?: 'red' | 'green' | 'blue'
  reverse?: boolean
}) {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-2 md:py-3">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display text-2xl uppercase tracking-tight text-foreground md:text-4xl"
          >
            {item}
            <span className={`mx-5 text-xl md:mx-8 ${ACCENTS[accent]}`}>✱</span>
          </span>
        ))}
      </div>
    </div>
  )
}
