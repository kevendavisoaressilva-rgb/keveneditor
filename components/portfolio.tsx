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
  id,
  label,
  count,
  note,
}: {
  id: string
  label: React.ReactNode
  count: string
  note: string
}) {
  return (
    <div id={id} className="mb-10 flex flex-wrap items-baseline justify-between gap-3 md:mb-14">
      <h3 className="text-3xl font-bold uppercase tracking-[-0.03em] text-foreground md:text-5xl">
        {label}
      </h3>
      <p className="font-mono text-[11px] uppercase tracking-widest text-soft">
        {count} — {note}
      </p>
    </div>
  )
}

export function Portfolio({ works }: { works: Work[] }) {
  const [activeReel, setActiveReel] = useState<Work | null>(null)
  const [activeVideo, setActiveVideo] = useState<Work | null>(null)

  const motionWorks = works.filter((w) => w.discipline === 'motion')
  const reelWorks = works.filter((w) => w.discipline === 'edicao')

  return (
    <section id="work" className="container-site relative py-24 md:py-36">
      {/* section header */}
      <motion.div {...reveal} className="mb-16 md:mb-24">
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

      {/* ------------------------------------------------ MOTION */}
      <div className="scroll-mt-28">
        <GroupHeader
          id="work-motion"
          label={
            <>
              Motion <span className="serif-i font-normal text-soft">design</span>
            </>
          }
          count={`${String(motionWorks.length).padStart(2, '0')} PROJETOS`}
          note="2D · 3D · VIMEO"
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
      </div>

      {/* ------------------------------------------------ EDIÇÃO */}
      <div className="mt-28 scroll-mt-28 md:mt-40">
        <GroupHeader
          id="work-edicao"
          label={
            <>
              Edição <span className="serif-i font-normal text-soft">de vídeo</span>
            </>
          }
          count={`${reelWorks.length.toString().padStart(2, '0')} REELS`}
          note="9:16 · CLIQUE PARA ASSISTIR"
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
      </div>

      {/* ------------------------------------------------ FOTO */}
      <div className="mt-28 scroll-mt-28 md:mt-40">
        <GroupHeader
          id="work-foto"
          label={
            <>
              Foto<span className="serif-i font-normal text-soft">grafia</span>
            </>
          }
          count={`${String(PHOTOS.length).padStart(2, '0')} CAPTURAS`}
          note="EVENTOS · SHOWS · DETALHES"
        />
        <PhotoGrid />
      </div>

      {/* lightboxes */}
      <ReelModal work={activeReel} onClose={() => setActiveReel(null)} />
      <VideoModal work={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  )
}
