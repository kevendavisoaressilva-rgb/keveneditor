'use client'

import { motion } from 'motion/react'
import { PHOTOS } from '@/lib/projects'

export function PhotoGrid() {
  return (
    <div>
      <div className="columns-2 gap-4 md:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
            className="group break-inside-avoid"
          >
            <div className={`relative overflow-hidden bg-paper ${p.ratio}`}>
              {p.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.src}
                  alt={`${p.title} — ${p.sub} · fotografia por Keven`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              )}
            </div>

            <figcaption className="flex items-baseline justify-between gap-2 pt-2.5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-[10px] text-accent">{p.index}</span>
                <h3 className="text-sm font-semibold uppercase tracking-[-0.01em] text-foreground md:text-base">
                  {p.title}
                  <span className="ml-2 font-mono text-[9px] font-normal uppercase tracking-widest text-soft">
                    {p.sub}
                  </span>
                </h3>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <a
        href="https://linktr.ee/keveneditor"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex flex-wrap items-center justify-between gap-3 border border-border px-5 py-4 transition-colors hover:border-foreground/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-soft transition-colors group-hover:text-foreground">
          MAIS SÉRIES FOTOGRÁFICAS — SHOWS · EVENTOS · RETRATOS
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          VER NO INSTAGRAM ↗
        </span>
      </a>
    </div>
  )
}
