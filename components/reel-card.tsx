'use client'

import type { Work } from '@/lib/projects'

const ACCENT_TEXT: Record<string, string> = {
  red: 'text-rgb-red',
  green: 'text-rgb-green',
  blue: 'text-rgb-blue',
}

export function ReelCard({
  work,
  onOpen,
}: {
  work: Work
  onOpen: () => void
}) {
  return (
    <figure className="group relative">
      {/* index */}
      <span
        className="outline-num pointer-events-none absolute -top-[0.32em] left-1 z-20 select-none font-display text-[16vw] leading-none sm:text-[10vw] md:text-[5.5vw]"
        aria-hidden
      >
        {work.index}
      </span>

      <button
        onClick={onOpen}
        className="relative mt-[10vw] block aspect-[9/16] w-full cursor-pointer overflow-hidden border border-border bg-muted text-left transition-colors duration-300 group-hover:border-foreground/40 sm:mt-[6vw] md:mt-[3.4vw]"
        aria-label={`Assistir ${work.title}`}
      >
        {/* scanlines + texture */}
        <div
          className="absolute inset-0 opacity-25"
          aria-hidden
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent 0, transparent 2px, oklch(0 0 0 / 45%) 3px, transparent 4px)',
          }}
        />
        <div className="texture-concrete absolute inset-0" aria-hidden />

        {/* top meta */}
        <span className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-widest text-concrete">
          IG / REEL
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-concrete">
          <span className="blink h-1.5 w-1.5 rounded-full bg-rgb-red" />
          REC
        </span>

        {/* center play */}
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <span className="ml-1 text-foreground">▶</span>
          </span>
          <span
            className="glitch font-display text-4xl leading-none text-foreground md:text-5xl"
            data-text={work.title}
          >
            {work.title}
          </span>
        </span>

        {/* bottom crop marks */}
        <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-widest text-concrete">
          {work.year}
        </span>
        <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-concrete">
          9:16
        </span>

        {/* crosshairs */}
        <span className="absolute left-1/2 top-6 -translate-x-1/2 text-[10px] text-concrete-dark" aria-hidden>
          +
        </span>
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-concrete-dark" aria-hidden>
          +
        </span>
      </button>

      {/* caption */}
      <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-t border-border pt-3">
        <div>
          <h3 className="font-display text-2xl leading-none text-foreground md:text-3xl">
            {work.title}
          </h3>
          <p
            className={`mt-1.5 font-mono text-[10px] uppercase tracking-widest ${ACCENT_TEXT[work.accent]}`}
          >
            {work.subtitle}
          </p>
        </div>
        <span
          className={`hidden font-mono text-[10px] uppercase tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inline ${ACCENT_TEXT[work.accent]}`}
        >
          ASSISTIR →
        </span>
      </figcaption>
    </figure>
  )
}
