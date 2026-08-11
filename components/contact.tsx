'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function Contact() {
  return (
    <section
      id="contact"
      className="texture-concrete relative overflow-hidden px-4 py-24 md:px-6 md:py-40"
    >
      {/* floating 3D object w/ chromatic aberration */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[3%] top-[8%] z-0 hidden h-[32vmin] w-[32vmin] md:block"
      >
        <div className="chromatic-3d relative h-full w-full opacity-80">
          <Image
            src="/object-3d-2.png"
            alt=""
            fill
            sizes="32vmin"
            className="object-contain mix-blend-screen"
          />
        </div>
      </div>

      {/* spray mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[4%] left-[-6%] z-0 h-[32vmin] w-[46vmin] -rotate-3"
      >
        <Image
          src="/spray-mark.png"
          alt=""
          fill
          sizes="46vmin"
          className="spray-asset object-contain"
        />
      </div>

      <p className="relative z-10 mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-concrete">
        / CONTATO — FIM DA TRANSMISSÃO
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 font-display text-[15vw] leading-[0.82] text-foreground md:text-[13vw]"
      >
        VAMOS <span className="spray-green">CRIAR</span>{' '}
        <span className="glitch rgb-split-lg" data-text="ALGO">
          ALGO
        </span>{' '}
        <span className="outline-graffiti">FORA DA</span>{' '}
        <span className="spray-red">CURVA</span>?
      </motion.h2>

      <div className="relative z-10 mt-14 flex flex-col gap-4 md:mt-20 md:flex-row md:gap-6">
        <a
          href="https://w.app/keveneditor"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="ABRIR"
          className="group flex flex-1 items-center justify-between border border-border bg-rgb-green px-6 py-6 text-background transition-transform hover:-translate-y-1 md:px-8 md:py-8"
        >
          <span className="font-display text-4xl leading-none md:text-6xl">
            FALAR NO WHATSAPP
          </span>
          <span className="font-mono text-2xl md:text-4xl">↗</span>
        </a>

        <a
          href="https://linktr.ee/keveneditor"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="ABRIR"
          className="group flex flex-1 items-center justify-between border border-border px-6 py-6 text-foreground transition-transform hover:-translate-y-1 hover:bg-foreground hover:text-background md:px-8 md:py-8"
        >
          <span className="font-display text-4xl leading-none md:text-6xl">
            MINHAS REDES
          </span>
          <span className="font-mono text-2xl md:text-4xl">↗</span>
        </a>
      </div>

      <p className="relative z-10 mt-12 max-w-[40ch] font-mono text-xs uppercase leading-relaxed tracking-widest text-concrete">
        <span className="text-rgb-blue">■</span> Disponível para projetos de motion
        design, animação 2D/3D e identidade visual em movimento — de qualquer lugar,
        direto de Timon — MA.
      </p>
    </section>
  )
}
