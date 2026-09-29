'use client'

import type { Work } from '@/lib/projects'

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Work
  onOpen: () => void
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative block aspect-square w-full cursor-pointer overflow-hidden bg-paper text-left"
      aria-label={`Assistir ${project.title}`}
    >
      {/* thumbnail */}
      {project.thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.subtitle}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
          crossOrigin="anonymous"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-soft">
          KEVEN®
        </span>
      )}

      {/* legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />

      {/* top meta */}
      <span className="absolute left-4 top-4 font-mono text-[11px] tracking-widest text-accent">
        {project.index}
      </span>
      <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-white/60">
        {project.year}
      </span>

      {/* play */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full border border-white/70 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          ▶
        </span>
      </span>

      {/* bottom title */}
      <span className="absolute inset-x-4 bottom-4 block">
        <span className="block text-lg font-bold uppercase leading-tight tracking-[-0.02em] text-foreground md:text-2xl">
          {project.title}
        </span>
        <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest text-white/60 md:text-[10px]">
          {project.subtitle}
        </span>
      </span>
    </button>
  )
}
