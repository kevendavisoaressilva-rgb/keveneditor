'use client'

import { motion } from 'motion/react'

const STEPS = [
  { k: 'BRIEFING', d: 'escuta · referências · conceito', c: 'spray-red' },
  { k: 'DIREÇÃO', d: 'storyboard · roteiro · arte', c: 'text-foreground' },
  { k: 'PRODUÇÃO', d: 'animação · captação · edição', c: 'spray-blue' },
  { k: 'ENTREGA', d: 'render · grade · formatos', c: 'spray-green' },
]

export function Process() {
  return (
    <section id="process" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
        <h2 className="font-display text-[14vw] leading-none text-foreground md:text-[7vw]">
          PRO<span className="spray-blue">CESS</span>
        </h2>
        <span className="hidden font-mono text-[11px] uppercase tracking-widest text-concrete md:block">
          / STORYBOARD
        </span>
      </div>

      <ol className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-0">
        {STEPS.map((s, i) => (
          <motion.li
            key={s.k}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative border border-border p-5 transition-colors hover:bg-muted md:min-h-[42vh] md:border-r-0 md:last:border-r"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-concrete">
                STEP {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`font-mono text-lg ${s.c}`}>
                {i < STEPS.length - 1 ? '→' : '■'}
              </span>
            </div>

            <div className="mt-10 md:mt-24">
              <h3 className={`font-display text-5xl leading-none md:text-6xl ${s.c}`}>
                {s.k}
              </h3>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-concrete">
                {s.d}
              </p>
            </div>

            <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-concrete-dark">
              ▮▮▮▯▯
            </span>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
