'use client'

import { motion } from 'motion/react'

const STEPS = [
  { k: 'IDEA', d: 'briefing · referências · conceito', c: 'text-rgb-red' },
  { k: 'DESIGN', d: 'frames · estilo · direção de arte', c: 'text-foreground' },
  { k: 'ANIMATION', d: 'keyframes · 3d · timing', c: 'text-rgb-blue' },
  { k: 'FINAL', d: 'render · grade · entrega', c: 'text-rgb-green' },
]

export function Process() {
  return (
    <section className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
        <h2 className="font-display text-6xl leading-none text-foreground md:text-8xl">
          PROCESS
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
            className="relative border border-border p-5 md:min-h-[42vh] md:border-r-0 md:last:border-r"
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

            {/* faux frame ticks */}
            <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-concrete-dark">
              ▮▮▮▯▯
            </span>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
