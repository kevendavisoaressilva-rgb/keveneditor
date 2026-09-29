'use client'

import { motion } from 'motion/react'

const SERVICES = [
  {
    n: '01',
    t: 'Motion Design',
    d: 'intros · vts · identidade em movimento',
  },
  {
    n: '02',
    t: 'Edição de Vídeo',
    d: 'reels · cortes dinâmicos · ritmo · cor',
  },
  {
    n: '03',
    t: 'Fotografia',
    d: 'eventos · shows · retratos · produto',
  },
  {
    n: '04',
    t: 'Animação 2D · 3D',
    d: 'frame a frame · element 3d · loops',
  },
  {
    n: '05',
    t: 'Direção de Arte',
    d: 'conceito · estilo · visual identity',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="container-site py-24 md:py-36">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <div>
            <p className="eyebrow mb-5">03 — SERVIÇOS</p>
            <h2 className="text-[clamp(2.6rem,6.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.035em] text-foreground">
              O que eu <span className="serif-i font-normal text-accent">entrego</span>
            </h2>
          </div>
          <p className="max-w-[28ch] font-mono text-[11px] uppercase leading-relaxed tracking-widest text-soft">
            DO CONCEITO À RENDERIZAÇÃO FINAL — UM FLUXO COMPLETO
          </p>
        </div>

        <ul>
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid cursor-default grid-cols-12 items-center gap-3 border-t border-border py-6 transition-colors duration-300 last:border-b hover:bg-foreground md:py-8"
            >
              <span className="col-span-2 font-mono text-[11px] tracking-widest text-accent md:col-span-1">
                {s.n}
              </span>
              <h3 className="col-span-10 text-2xl font-bold uppercase tracking-[-0.025em] text-foreground transition-colors duration-300 group-hover:text-background md:col-span-6 md:text-4xl">
                {s.t}
              </h3>
              <span className="col-span-12 pl-[calc(16.67%+0.75rem)] font-mono text-[10px] uppercase tracking-widest text-soft transition-colors duration-300 group-hover:text-background/70 md:col-span-5 md:pl-0 md:text-right">
                {s.d}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
