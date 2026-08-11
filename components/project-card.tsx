'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import type { Project } from '@/lib/projects'

const ACCENT_TEXT: Record<string, string> = {
  red: 'text-rgb-red',
  green: 'text-rgb-green',
  blue: 'text-rgb-blue',
}
const ACCENT_BG: Record<string, string> = {
  red: 'bg-rgb-red',
  green: 'bg-rgb-green',
  blue: 'bg-rgb-blue',
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const [hover, setHover] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x, y })
  }

  const embed = `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`

  return (
    <figure
      className="group relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setTilt({ x: 0, y: 0 })
      }}
    >
      {/* giant cropped index number */}
      <span
        className={`pointer-events-none absolute -top-[0.35em] z-20 select-none font-display leading-none text-foreground ${
          featured
            ? 'left-2 text-[24vw] md:text-[13vw]'
            : 'left-1 text-[18vw] md:text-[8vw]'
        }`}
        aria-hidden
      >
        {project.index}
      </span>

      <div
        ref={cardRef}
        onMouseMove={onMove}
        data-cursor={playing ? undefined : 'ASSISTIR'}
        onClick={() => !playing && setPlaying(true)}
        className="relative mt-[8vw] aspect-video w-full overflow-hidden border border-border bg-concrete-dark md:mt-[5vw]"
        style={{
          transform: hover
            ? `perspective(1000px) rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg)`
            : 'none',
          transition: 'transform 0.2s ease-out',
        }}
      >
        {playing ? (
          <iframe
            src={embed}
            title={`${project.title} — ${project.subtitle}`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            {/* thumbnail with parallax + rgb split on hover */}
            <div
              className="absolute inset-0 scale-105"
              style={{
                transform: hover
                  ? `translate(${tilt.x * -14}px, ${tilt.y * -14}px) scale(1.12)`
                  : 'scale(1.05)',
                transition: 'transform 0.25s ease-out',
              }}
            >
              {project.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.subtitle}`}
                  className="h-full w-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                  loading="lazy"
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="texture-concrete flex h-full w-full items-center justify-center bg-concrete-dark">
                  <span className="font-display text-6xl text-concrete">KEVEN</span>
                </div>
              )}
            </div>

            {/* RGB split copies on hover */}
            {project.thumbnail && hover && (
              <>
                <span
                  aria-hidden
                  className="absolute inset-0 mix-blend-screen"
                  style={{
                    background: `url(${project.thumbnail}) center/cover`,
                    transform: `translateX(${-6 + tilt.x * -10}px)`,
                    filter: 'sepia(1) hue-rotate(-50deg) saturate(6)',
                    opacity: 0.35,
                  }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 mix-blend-screen"
                  style={{
                    background: `url(${project.thumbnail}) center/cover`,
                    transform: `translateX(${6 + tilt.x * 10}px)`,
                    filter: 'sepia(1) hue-rotate(160deg) saturate(6)',
                    opacity: 0.35,
                  }}
                />
              </>
            )}

            {/* scanline veil */}
            <div
              className="absolute inset-0 opacity-25"
              aria-hidden
              style={{
                background:
                  'repeating-linear-gradient(to bottom, transparent 0, transparent 2px, oklch(0 0 0 / 45%) 3px, transparent 4px)',
              }}
            />

            {/* play marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full border border-foreground/60 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${ACCENT_BG[project.accent]}/10`}
              >
                <span className="ml-1 text-foreground">▶</span>
              </div>
            </div>

            {/* sticker tag */}
            <span
              className={`sticker absolute right-3 top-3 z-10 rotate-3 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-background ${ACCENT_BG[project.accent]}`}
            >
              {project.category}
            </span>
          </>
        )}
      </div>

      {/* caption */}
      <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-t border-border pt-2">
        <div>
          <h3 className="font-display text-3xl leading-none text-foreground md:text-5xl">
            {project.title}
          </h3>
          <p className={`mt-1 font-mono text-[11px] uppercase tracking-widest ${ACCENT_TEXT[project.accent]}`}>
            {project.subtitle}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-concrete">
          {project.year}
        </span>
      </figcaption>
    </figure>
  )
}
