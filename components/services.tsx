'use client'

import { motion } from 'motion/react'

const SERVICES = [
  {
    n: '01',
    t: 'MOTION DESIGN',
    d: 'intros · vts · identidade em movimento',
    tag: 'AFTER EFFECTS',
    accent: 'spray-red',
  },
  {
    n: '02',
    t: 'EDIÇÃO DE VÍDEO',
    d: 'reels · cortes dinâmicos · ritmo · cor',
    tag: 'PREMIERE / RESOLVE',
    accent: 'text-foreground',
  },
  {
    n: '03',
    t: 'FOTOGRAFIA',
    d: 'eventos · retratos · bastidores',
    tag: 'LIGHTROOM / PHOTOSHOP',
    accent: 'spray-blue',
  },
  {
    n: '04',
    t: 'ANIMAÇÃO 2D · 3D',
    d: 'frame a frame · element 3d · loop',
    tag: 'AE + ELEMENT 3D',
    accent: 'spray-green',
  },
  {
    n: '05',
    t: 'DIREÇÃO DE ARTE',
    d: 'conceito · estilo · visual identity',
    tag: 'BRANDING',
    accent: 'outline-graffiti',
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
        <h2 className="font-display text-[14vw] leading-none text-foreground md:text-[7vw]">
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
            className="group grid grid-cols-12 items-center gap-3 border-b border-border py-5 md:py-7"
          >
            <span className="col-span-2 font-mono text-xs tracking-widest text-concrete md:col-span-1">
              {s.n}
            </span>
            <div className="col-span-10 md:col-span-7">
              <h3
                className={`font-display text-4xl leading-none transition-transform duration-300 group-hover:translate-x-2 md:text-6xl ${s.accent} group-hover:rgb-split`}
              >
                {s.t}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-concrete">
                {s.d}
              </p>
            </div>
            <span className="hidden text-right font-mono text-[10px] uppercase tracking-widest text-concrete-dark transition-colors group-hover:text-foreground md:col-span-4 md:block">
              {s.tag}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
