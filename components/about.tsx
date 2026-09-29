'use client'

import { motion } from 'motion/react'

const STATS = [
  { k: '03', v: 'DISCIPLINAS' },
  { k: '24', v: 'FRAMES / SEG' },
  { k: '4K', v: 'RESOLUÇÃO' },
  { k: '16', v: 'TRABALHOS' },
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="container-site grid gap-14 py-24 md:grid-cols-12 md:py-36">
        {/* statement */}
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">02 — SOBRE</p>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-pretty text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-foreground md:text-4xl"
          >
            Sou Keven — motion designer,{' '}
            <span className="serif-i font-normal text-accent">editor de vídeo</span> e
            fotógrafo de Timon, Maranhão. Transformo ideias em narrativas com{' '}
            <span className="serif-i font-normal">ritmo</span>,{' '}
            <span className="serif-i font-normal">movimento</span> e{' '}
            <span className="serif-i font-normal">luz</span> — da animação 3D ao corte
            seco de um reel, do palco à mesa de edição.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {['MOTION DESIGN', 'EDIÇÃO DE VÍDEO', 'FOTOGRAFIA', 'DIREÇÃO DE ARTE'].map(
              (chip) => (
                <span
                  key={chip}
                  className="border border-border px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-soft"
                >
                  {chip}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* portrait + stats */}
        <div className="md:col-span-4 md:col-start-9">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="group relative aspect-[3/4] overflow-hidden border border-border bg-paper"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/retrato.jpg"
              alt="Retrato de Keven — motion designer, editor de vídeo e fotógrafo"
              className="absolute inset-0 h-full w-full object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <span className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-widest text-white/70 mix-blend-difference">
              TIMON — MA
            </span>
            <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-white/70 mix-blend-difference">
              KEVEN®
            </span>
          </motion.div>

          <div className="mt-6 grid grid-cols-2 border border-border">
            {STATS.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="border-border p-4 [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b"
              >
                <p className="text-3xl font-extrabold tracking-[-0.03em] text-foreground">
                  {s.k}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-soft">
                  {s.v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
