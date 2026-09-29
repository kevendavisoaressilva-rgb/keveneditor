'use client'

import { motion } from 'motion/react'
import { PHOTOS } from '@/lib/projects'

export function PhotoGrid() {
  return (
    <div>
      <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-concrete">
        [ {String(PHOTOS.length).padStart(2, '0')} CAPTURAS ] — EVENTOS · SHOWS ·
        DETALHES
      </p>

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group break-inside-avoid"
          >
            <div
              className={`relative overflow-hidden border border-border bg-muted transition-colors duration-300 group-hover:border-foreground/40 ${p.ratio}`}
            >
              {p.src ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={`${p.title} — ${p.sub} · fotografia por Keven`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* corner viewfinder marks on hover */}
                  <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                </>
              ) : (
                <div className="texture-concrete absolute inset-0 flex items-center justify-center">
                  <span className="outline-num font-display text-4xl md:text-6xl">
                    {p.index}
                  </span>
                </div>
              )}
            </div>

            <figcaption className="flex items-baseline justify-between gap-2 pt-2">
              <div>
                <h3 className="font-display text-lg leading-none text-foreground md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-concrete">
                  {p.sub}
                </p>
              </div>
              <span className="font-mono text-[9px] tracking-widest text-concrete-dark">
                {p.index} / {String(PHOTOS.length).padStart(2, '0')}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <a
        href="https://linktr.ee/keveneditor"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 flex flex-wrap items-center justify-between gap-3 border border-dashed border-border px-4 py-4 transition-colors hover:border-foreground/50"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-concrete transition-colors group-hover:text-foreground">
          <span className="text-rgb-blue">■</span> MAIS SÉRIES FOTOGRÁFICAS — SHOWS ·
          EVENTOS · RETRATOS
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
          VER NO INSTAGRAM ↗
        </span>
      </a>
    </div>
  )
}
