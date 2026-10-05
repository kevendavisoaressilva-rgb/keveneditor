'use client'

import type { Work } from '@/lib/projects'

export function ReelCard({
  work,
  onOpen,
}: {
  work: Work
  onOpen: () => void
}) {
  const hasFrame = Boolean(work.thumbnail)

  return (
    <figure className="group">
      <button
        onClick={onOpen}
        className="relative block aspect-[9/16] w-full cursor-pointer overflow-hidden border border-border bg-paper text-left transition-colors duration-300 hover:border-foreground/30"
        aria-label={`Assistir ${work.title}`}
      >
        {hasFrame ? (
          <>
            {/* video frame cover */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={work.thumbnail!}
              alt={`Frame do vídeo ${work.title}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              loading="lazy"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

            {/* top meta */}
            <span className="absolute left-4 top-4 font-mono text-[10px] tracking-widest text-accent">
              {work.index}
            </span>
            <span className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-widest text-white/60">
              {work.vimeoId ? 'VIMEO' : 'REEL'} · {work.year}
            </span>

            {/* hover play */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full border border-white/70 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                ▶
              </span>
            </span>

            {/* bottom title */}
            <span className="absolute inset-x-4 bottom-4 block">
              <span className="block text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-foreground md:text-2xl">
                {work.title}
              </span>
            </span>
          </>
        ) : (
          <>
            {/* branded cover (Instagram — sem thumbnail disponível) */}
            <span className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[9px] uppercase tracking-widest text-soft">
              <span>IG / REEL</span>
              <span>{work.year}</span>
            </span>

            <span className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <span
                className="num-stroke font-sans text-7xl font-extrabold uppercase tracking-[-0.04em] md:text-8xl"
                aria-hidden
              >
                {work.index}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/40 text-sm text-foreground transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
                ▶
              </span>
            </span>

            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
              <span className="text-2xl font-bold uppercase tracking-[-0.03em] text-foreground md:text-3xl">
                {work.title}
              </span>
              <span className="mb-1 font-mono text-[9px] uppercase tracking-widest text-soft">
                9:16
              </span>
            </span>
          </>
        )}
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
