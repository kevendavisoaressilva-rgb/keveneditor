'use client'

import { motion } from 'motion/react'

const TOOLS = [
  { t: 'AFTER EFFECTS', d: 'motion / composição' },
  { t: 'PREMIERE PRO', d: 'edição / cortes' },
  { t: 'PHOTOSHOP', d: 'tratamento / arte' },
  { t: 'LIGHTROOM', d: 'cor / fotografia' },
  { t: 'ELEMENT 3D', d: '3d no after' },
  { t: 'RESOLVE', d: 'grade / cor' },
]

export function Tools() {
  return (
    <section className="border-y border-border px-5 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-concrete">
          / TOOLKIT
        </p>
        <span className="font-mono text-[10px] uppercase tracking-widest text-concrete-dark">
          {String(TOOLS.length).padStart(2, '0')} FERRAMENTAS
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {TOOLS.map((t, i) => (
          <motion.div
            key={t.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group border-l border-border pl-4 transition-colors hover:border-rgb-red"
          >
            <span className="font-mono text-[10px] tracking-widest text-rgb-green">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-1 font-display text-3xl leading-none text-foreground md:text-4xl">
              {t.t}
            </h3>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-concrete">
              {t.d}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
