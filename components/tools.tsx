'use client'

import { motion } from 'motion/react'

const TOOLS = ['AFTER EFFECTS', 'ELEMENT 3D']

export function Tools() {
  return (
    <section className="border-y border-border px-4 py-16 md:px-6 md:py-24">
      <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.4em] text-concrete">
        / TOOLS I USE
      </p>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-16">
        {TOOLS.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-baseline gap-4"
          >
            <span className="font-mono text-sm text-rgb-green">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-display text-5xl leading-none text-foreground md:text-7xl">
              {t}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
