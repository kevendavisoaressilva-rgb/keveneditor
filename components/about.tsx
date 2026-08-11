'use client'

import { motion } from 'motion/react'

const FLOATERS = [
  { t: 'MOTION', c: 'text-rgb-red', s: 'top-[8%] left-[6%] -rotate-6' },
  { t: 'DESIGN', c: 'text-foreground', s: 'top-[18%] right-[8%] rotate-3' },
  { t: 'MOVEMENT', c: 'text-rgb-blue', s: 'top-[46%] left-[10%] rotate-2' },
  { t: 'FRAME', c: 'text-foreground', s: 'bottom-[24%] right-[14%] -rotate-3' },
  { t: 'TIME', c: 'text-rgb-green', s: 'bottom-[10%] left-[18%] rotate-6' },
  { t: 'SPACE', c: 'text-foreground', s: 'top-[60%] right-[6%] -rotate-6' },
  { t: '3D', c: 'text-rgb-red', s: 'top-[34%] left-[42%] rotate-12' },
  { t: '2D', c: 'text-rgb-blue', s: 'bottom-[38%] left-[4%] -rotate-12' },
]

export function About() {
  return (
    <section
      id="about"
      className="texture-concrete relative overflow-hidden px-4 py-24 md:px-6 md:py-36"
    >
      {/* scattered manifesto words */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {FLOATERS.map((f) => (
          <span
            key={f.t}
            className={`absolute font-display text-5xl leading-none opacity-20 ${f.c} ${f.s}`}
          >
            {f.t}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-concrete"
        >
          / MANIFESTO — 01
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[19vw] leading-[0.8] text-foreground md:text-[12vw]"
        >
          WHO IS{' '}
          <span className="glitch rgb-split" data-text="KEVEN">
            KEVEN
          </span>
          ?
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 md:col-start-4 text-pretty font-mono text-lg leading-relaxed text-foreground md:text-2xl"
          >
            Sou <span className="text-rgb-red">Keven</span>, Motion Designer de{' '}
            <span className="text-rgb-green">Timon — Maranhão</span>, especializado em
            criar animações, identidades visuais em movimento e experiências digitais
            utilizando <span className="text-rgb-blue">After Effects</span> e{' '}
            <span className="text-rgb-blue">Element 3D</span>.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
