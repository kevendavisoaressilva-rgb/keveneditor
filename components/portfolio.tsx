'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import type { Work } from '@/lib/projects'
import { PHOTOS } from '@/lib/projects'
import { ProjectCard } from './project-card'
import { ReelCard } from './reel-card'
import { ReelModal } from './reel-modal'
import { VideoModal } from './video-modal'
import { PhotoGrid } from './photo-grid'

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

function GroupHeader({
  ghost,
  label,
  count,
  note,
}: {
  ghost: string
  label: React.ReactNode
  count: string
  note: string
}) {
  return (
    <div className="relative mb-10 md:mb-14">
      {/* ghost numeral */}
      <span
        className="num-stroke pointer-events-none absolute -top-[0.45em] right-0 select-none text-[clamp(5rem,12vw,10rem)] font-extrabold leading-none tracking-[-0.04em]"
        aria-hidden
      >
        {ghost}
      </span>
      <h3 className="relative text-3xl font-bold uppercase tracking-[-0.03em] text-foreground md:text-5xl">
        {label}
      </h3>
      <p className="relative mt-2 font-mono text-[11px] uppercase tracking-widest text-soft">
        {count} — {note}
      </p>
    </div>
  )
}

function Band({
  id,
  tint = false,
  children,
}: {
  id: string
  tint?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-8 border-t border-border py-16 md:py-24 ${tint ? 'bg-paper/50' : ''}`}
    >
      <div className="container-site">{children}</div>
    </section>
  )
}

export function Portfolio({ works }: { works: Work[] }) {
  const [activeReel, setActiveReel] = useState<Work | null>(null)
  const [activeVideo, setActiveVideo] = useState<Work | null>(null)

  const motionWorks = works.filter((w) => w.discipline === 'motion')
  const reelWorks = works.filter((w) => w.discipline === 'edicao')

  return (
    <div id="work" className="relative pt-24 md:pt-36">
      {/* section header */}
      <div className="container-site">
        <motion.div {...reveal} className="mb-4 md:mb-6">
          <p className="eyebrow mb-5">01 — TRABALHOS</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[14ch] text-[clamp(2.6rem,6.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.035em] text-foreground">
              Trabalhos{' '}
              <span className="serif-i font-normal text-accent">selecionados</span>
            </h2>
            <div className="flex gap-5 font-mono text-[11px] uppercase tracking-widest text-soft">
              <a href="#work-motion" className="transition-colors hover:text-foreground">
                MOTION ·{String(motionWorks.length).padStart(2, '0')}
              </a>
              <a href="#work-edicao" className="transition-colors hover:text-foreground">
                EDIÇÃO ·{String(reelWorks.length).padStart(2, '0')}
              </a>
              <a href="#work-foto" className="transition-colors hover:text-foreground">
                FOTO ·{String(PHOTOS.length).padStart(2, '0')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------ MOTION */}
      <Band id="work-motion">
        <GroupHeader
          ghost="01"
          label={
            <>
              Motion <span className="serif-i font-normal text-soft">design</span>
            </>
          }
          count={`${String(motionWorks.length).padStart(2, '0')} PROJETOS`}
          note="CLICA PRA ASSISTIR"
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {motionWorks.map((p, i) => (
            <motion.div
              key={p.id}
              {...reveal}
              transition={{ ...reveal.transition, delay: (i % 3) * 0.07 }}
            >
              <ProjectCard project={p} onOpen={() => setActiveVideo(p)} />
            </motion.div>
          ))}
        </div>
      </Band>

      {/* ------------------------------------------------ EDIÇÃO */}
      <Band id="work-edicao" tint>
        <GroupHeader
          ghost="02"
          label={
            <>
              Edição <span className="serif-i font-normal text-soft">de vídeo</span>
            </>
          }
          count={`${reelWorks.length.toString().padStart(2, '0')} REELS`}
          note="FORMATO 9:16 · INSTAGRAM"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
          {reelWorks.map((p, i) => (
            <motion.div
              key={p.id}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.08 }}
            >
              <ReelCard work={p} onOpen={() => setActiveReel(p)} />
            </motion.div>
          ))}
        </div>
      </Band>

      {/* ------------------------------------------------ FOTO */}
      <Band id="work-foto">
        <GroupHeader
          ghost="03"
          label={
            <>
              Foto<span className="serif-i font-normal text-soft">grafia</span>
            </>
          }
          count={`${String(PHOTOS.length).padStart(2, '0')} CAPTURAS`}
          note="ARQUIVO FOTOGRÁFICO"
        />
        <PhotoGrid />
      </Band>

      {/* lightboxes */}
      <ReelModal work={activeReel} onClose={() => setActiveReel(null)} />
      <VideoModal work={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  )
}
