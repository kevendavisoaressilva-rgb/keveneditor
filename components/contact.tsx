'use client'

import { motion } from 'motion/react'

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="container-site flex flex-col items-center py-28 text-center md:py-44">
        <p className="eyebrow mb-8">05 — CONTATO</p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.8rem,8vw,8rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground"
        >
          Tem um projeto
          <br />
          <span className="serif-i font-normal text-accent">em mente?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5599981705754"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-2xl font-bold uppercase tracking-[-0.03em] text-foreground md:text-4xl"
          >
            CHAMAR NO WHATSAPP ↗
            <span className="absolute -bottom-1.5 left-0 h-[3px] w-full origin-left scale-x-100 bg-accent transition-transform duration-300 group-hover:scale-x-0" />
            <span className="absolute -bottom-1.5 left-0 h-[3px] w-full origin-right scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
          </a>

          <a
            href="https://linktr.ee/keveneditor"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-soft transition-colors hover:text-foreground"
          >
            TODAS AS REDES ↗
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-[52ch] font-mono text-[10px] uppercase leading-relaxed tracking-widest text-soft"
        >
          Disponível para motion design, edição de vídeo e fotografia — de qualquer
          lugar, direto de Timon — MA · resposta rápida no horário comercial (BRT)
        </motion.p>
      </div>
    </section>
  )
}
