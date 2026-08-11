'use client'

import { motion } from 'motion/react'

const SERVICES = [
  { n: 'A', t: 'MOTION DESIGN', accent: 'spray-red' },
  { n: 'B', t: 'ANIMATION', accent: 'text-foreground' },
  { n: 'C', t: '3D MOTION', accent: 'spray-blue' },
  { n: 'D', t: '2D MOTION', accent: 'spray-green' },
  { n: 'E', t: 'VISUAL IDENTITY', accent: 'outline-graffiti' },
]

export function Services() {
  return (
    <section id="services" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
        <h2 className="font-display text-6xl leading-none text-foreground md:text-8xl">
          WHAT I <span className="spray-green">DO</span>
        </h2>
        <span className="hidden font-mono text-[11px] uppercase tracking-widest text-concrete md:block">
          / SERVIÇOS
        </span>
      </div>

      <ul>
        {SERVICES.map((s, i) => (
          <motion.li
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            data-cursor="✱"
            className="group flex items-center justify-between gap-4 border-b border-border py-5 md:py-7"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-concrete">
              {s.n}
            </span>
            <span
              className={`flex-1 text-right font-display text-5xl leading-none transition-transform duration-300 group-hover:-translate-x-2 md:text-8xl ${s.accent} group-hover:rgb-split`}
            >
              {s.t}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
