'use client'

import type { Work } from '@/lib/projects'

export function ReelCard({
  work,
  onOpen,
}: {
  work: Work
  onOpen: () => void
}) {
  return (
    <figure className="group">
      <button
        onClick={onOpen}
        className="relative block aspect-[9/16] w-full cursor-pointer overflow-hidden border border-border bg-paper text-left transition-colors duration-300 hover:border-foreground/30"
        aria-label={`Assistir ${work.title}`}
      >
        {/* top row */}
        <span className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[9px] uppercase tracking-widest text-soft">
          <span>{work.vimeoId ? 'VIMEO / 9:16' : 'IG / REEL'}</span>
          <span>{work.year}</span>
        </span>

        {/* center */}
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <span
            className="num-stroke font-sans text-7xl font-extrabold uppercase tracking-[-0.04em] transition-colors duration-300 md:text-8xl"
            aria-hidden
          >
            {work.index}
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/40 text-sm text-foreground transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
            ▶
          </span>
        </span>

        {/* bottom title */}
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
          <span className="text-2xl font-bold uppercase tracking-[-0.03em] text-foreground md:text-3xl">
            {work.title}
          </span>
          <span className="mb-1 font-mono text-[9px] uppercase tracking-widest text-soft">
            9:16
          </span>
        </span>
      </button>

      <figcaption className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-soft">
          {work.subtitle}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          ASSISTIR ↗
        </span>
      </figcaption>
    </figure>
  )
}
