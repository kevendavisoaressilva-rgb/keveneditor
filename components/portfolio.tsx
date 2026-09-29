'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Discipline, Work } from '@/lib/projects'
import { PHOTOS } from '@/lib/projects'
import { ProjectCard } from './project-card'
import { ReelCard } from './reel-card'
import { ReelModal } from './reel-modal'
import { PhotoGrid } from './photo-grid'

const TABS: { id: Discipline; label: string }[] = [
  { id: 'motion', label: 'MOTION' },
  { id: 'edicao', label: 'EDIÇÃO' },
  { id: 'foto', label: 'FOTO' },
]

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const tabAnim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
}

export function Portfolio({ works }: { works: Work[] }) {
  const [tab, setTab] = useState<Discipline>('motion')
  const [activeReel, setActiveReel] = useState<Work | null>(null)

  const motionWorks = works.filter((w) => w.discipline === 'motion')
  const reelWorks = works.filter((w) => w.discipline === 'edicao')

  const counts: Record<Discipline, number> = {
    motion: motionWorks.length,
    edicao: reelWorks.length,
    foto: PHOTOS.length,
  }

  const [featured, ...rest] = motionWorks

  return (
    <section id="work" className="relative px-5 py-20 md:px-8 md:py-28">
      {/* section header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-5 md:mb-14">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.4em] text-concrete">
            / ÍNDICE — TRABALHOS
          </p>
          <h2 className="font-display text-[14vw] leading-none text-foreground md:text-[7vw]">
            SELECTED<span className="spray-red">/</span>
            <span className="spray-red">WORK</span>
          </h2>
        </div>

        {/* discipline tabs */}
        <div className="flex items-center gap-1 border border-border p-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors md:text-[11px] ${
                tab === t.id
                  ? 'bg-foreground text-background'
                  : 'text-concrete hover:text-foreground'
              }`}
            >
              {t.label}{' '}
              <span className={tab === t.id ? 'text-rgb-red' : ''}>
                {String(counts[t.id]).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ---------------------------------------------------------- MOTION */}
        {tab === 'motion' && (
          <motion.div key="motion" {...tabAnim}>
            {featured && (
              <motion.div {...reveal} className="mb-20 md:mb-24">
                <ProjectCard project={featured} featured />
              </motion.div>
            )}

            <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12 md:gap-y-28">
              {rest.map((p, i) => {
                const layouts = [
                  'md:col-span-7',
                  'md:col-span-5 md:mt-24',
                  'md:col-span-5',
                  'md:col-span-6 md:col-start-4 md:mt-16',
                  'md:col-span-8',
                ]
                return (
                  <motion.div key={p.id} {...reveal} className={layouts[i % layouts.length]}>
                    <ProjectCard project={p} />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* ---------------------------------------------------------- EDIÇÃO */}
        {tab === 'edicao' && (
          <motion.div key="edicao" {...tabAnim}>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-concrete">
              [ {String(reelWorks.length).padStart(2, '0')} REELS ] — EDIÇÃO / GRAVAÇÃO
              — CLIQUE PARA ASSISTIR
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
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
          </motion.div>
        )}

        {/* ------------------------------------------------------------ FOTO */}
        {tab === 'foto' && (
          <motion.div key="foto" {...tabAnim}>
            <PhotoGrid />
          </motion.div>
        )}
      </AnimatePresence>

      {/* reel lightbox */}
      <ReelModal work={activeReel} onClose={() => setActiveReel(null)} />
    </section>
  )
}
