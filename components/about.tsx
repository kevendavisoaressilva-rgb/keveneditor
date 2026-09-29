'use client'

import { motion } from 'motion/react'

const FLOATERS = [
  { t: 'MOTION', c: 'spray-red', s: 'top-[10%] left-[6%] -rotate-6', o: 'opacity-25' },
  { t: 'CUT', c: 'outline-graffiti', s: 'top-[16%] right-[8%] rotate-3', o: 'opacity-20' },
  { t: 'LIGHT', c: 'spray-blue', s: 'top-[48%] left-[9%] rotate-2', o: 'opacity-25' },
  { t: 'FRAME', c: 'text-foreground', s: 'bottom-[22%] right-[12%] -rotate-3', o: 'opacity-10' },
  { t: 'SHUTTER', c: 'spray-green', s: 'bottom-[10%] left-[16%] rotate-6', o: 'opacity-25' },
  { t: 'RENDER', c: 'outline-graffiti', s: 'top-[62%] right-[6%] -rotate-6', o: 'opacity-20' },
]

export function About() {
  return (
    <section
      id="about"
      className="texture-concrete relative overflow-hidden px-5 py-24 md:px-8 md:py-36"
    >
      {/* scattered manifesto words */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {FLOATERS.map((f) => (
          <span
            key={f.t}
            className={`absolute font-display text-5xl leading-none ${f.o} ${f.c} ${f.s}`}
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
          className="font-display text-[16vw] leading-[0.85] text-foreground md:text-[9vw]"
        >
          <span className="spray-green">MOVIMENTO</span>
          <br />
          <span className="outline-red">CORTE</span>{' '}
          <span className="glitch rgb-split" data-text="& LUZ.">
            &amp; LUZ.
          </span>
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-pretty font-sans text-lg leading-relaxed text-foreground/90 md:col-span-8 md:col-start-4 md:text-2xl"
          >
            Sou <span className="spray-red font-semibold">Keven</span> — motion designer,
            editor de vídeo e fotógrafo de{' '}
            <span className="spray-green font-semibold">Timon — Maranhão</span>.
            Transformo ideias em animações, cortes e imagens que prendem o olhar:
            <span className="spray-blue font-semibold"> After Effects</span> e{' '}
            <span className="spray-blue font-semibold">Premiere</span> na tela, câmera na
            mão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-2 md:col-span-8 md:col-start-4"
          >
            {['MOTION DESIGN', 'EDIÇÃO DE VÍDEO', 'FOTOGRAFIA', 'DIREÇÃO DE ARTE'].map(
              (chip) => (
                <span
                  key={chip}
                  className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-concrete"
                >
                  {chip}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
