'use client'

import { motion } from 'motion/react'

const TOOLS = [
  'AFTER EFFECTS',
  'PREMIERE PRO',
  'PHOTOSHOP',
  'LIGHTROOM',
  'ELEMENT 3D',
  'DAVINCI RESOLVE',
]

export function Tools() {
  return (
    <section className="border-t border-border">
      <div className="container-site py-14 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <p className="eyebrow">TOOLKIT</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {TOOLS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-widest text-soft transition-colors hover:text-foreground"
              >
                <span className="text-[9px] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
