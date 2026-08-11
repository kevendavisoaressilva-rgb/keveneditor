'use client'

import { motion } from 'motion/react'
import type { Project } from '@/lib/projects'
import { ProjectCard } from './project-card'

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export function Portfolio({ projects }: { projects: Project[] }) {
  const [featured, ...rest] = projects

  return (
    <section id="work" className="relative px-4 py-20 md:px-6 md:py-28">
      {/* section header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4 md:mb-16">
        <h2 className="font-display text-6xl leading-none text-foreground md:text-8xl">
          SELECTED<span className="text-rgb-red">/</span>WORK
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-widest text-concrete">
          [ {projects.length.toString().padStart(2, '0')} PROJETOS ] — CLIQUE PARA ASSISTIR
        </span>
      </div>

      {/* featured */}
      {featured && (
        <motion.div {...reveal} className="mb-20 md:mb-28">
          <ProjectCard project={featured} featured />
        </motion.div>
      )}

      {/* asymmetric editorial grid */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12 md:gap-y-32">
        {rest.map((p, i) => {
          // alternate widths + vertical offsets for an editorial rhythm
          const layouts = [
            'md:col-span-7',
            'md:col-span-5 md:mt-24',
            'md:col-span-5',
            'md:col-span-6 md:col-start-4 md:mt-16',
            'md:col-span-8',
          ]
          return (
            <motion.div key={p.vimeoId} {...reveal} className={layouts[i % layouts.length]}>
              <ProjectCard project={p} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
