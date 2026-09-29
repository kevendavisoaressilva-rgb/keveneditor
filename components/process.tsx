'use client'

import { motion } from 'motion/react'

const STEPS = [
  { k: 'Briefing', d: 'escuta · referências · conceito' },
  { k: 'Direção', d: 'storyboard · roteiro · arte' },
  { k: 'Produção', d: 'animação · captação · edição' },
  { k: 'Entrega', d: 'render · grade · formatos' },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="container-site py-24 md:py-36">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-5">04 — PROCESSO</p>
          <h2 className="text-[clamp(2.6rem,6.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.035em] text-foreground">
            Do briefing ao <span className="serif-i font-normal text-accent">render</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="border-t border-border pt-5"
            >
              <span className="num-stroke block text-6xl font-extrabold tracking-[-0.04em] md:text-7xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-bold uppercase tracking-[-0.02em] text-foreground md:text-2xl">
                {s.k}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-soft">
                {s.d}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
