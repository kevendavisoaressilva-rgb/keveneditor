'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const FLOATERS = [
  { t: 'MOTION', c: 'spray-red', s: 'top-[8%] left-[6%] -rotate-6', o: 'opacity-40' },
  { t: 'DESIGN', c: 'outline-graffiti', s: 'top-[18%] right-[8%] rotate-3', o: 'opacity-30' },
  { t: 'MOVEMENT', c: 'spray-blue', s: 'top-[46%] left-[10%] rotate-2', o: 'opacity-40' },
  { t: 'FRAME', c: 'text-foreground', s: 'bottom-[24%] right-[14%] -rotate-3', o: 'opacity-15' },
  { t: 'TIME', c: 'spray-green', s: 'bottom-[10%] left-[18%] rotate-6', o: 'opacity-40' },
  { t: 'SPACE', c: 'outline-graffiti', s: 'top-[60%] right-[6%] -rotate-6', o: 'opacity-25' },
  { t: '3D', c: 'spray-red', s: 'top-[34%] left-[42%] rotate-12', o: 'opacity-45' },
  { t: '2D', c: 'spray-blue', s: 'bottom-[38%] left-[4%] -rotate-12', o: 'opacity-45' },
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
            className={`absolute font-display text-5xl leading-none ${f.o} ${f.c} ${f.s}`}
          >
            {f.t}
          </span>
        ))}
      </div>

      {/* floating 3D object w/ chromatic aberration */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-[30%] z-0 hidden h-[30vmin] w-[30vmin] md:block"
      >
        <div className="chromatic-3d relative h-full w-full opacity-80">
          <Image
            src="/object-3d-2.png"
            alt=""
            fill
            sizes="30vmin"
            className="object-contain mix-blend-screen"
          />
        </div>
      </div>

      {/* spray mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[6%] right-[-6%] z-0 h-[30vmin] w-[42vmin] rotate-6"
      >
        <Image
          src="/spray-mark.png"
          alt=""
          fill
          sizes="42vmin"
          className="spray-asset object-contain"
        />
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
          <span className="spray-green">WHO</span>{' '}
          <span className="outline-red">IS</span>{' '}
          <span className="glitch rgb-split" data-text="KEVEN">
            KEVEN
          </span>
          <span className="spray-blue">?</span>
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 md:col-start-4 text-pretty font-mono text-lg leading-relaxed text-foreground md:text-2xl"
          >
            Sou <span className="spray-red font-bold">Keven</span>, Motion Designer de{' '}
            <span className="spray-green font-bold">Timon — Maranhão</span>, especializado
            em criar animações, identidades visuais em movimento e experiências digitais
            utilizando <span className="spray-blue font-bold">After Effects</span> e{' '}
            <span className="spray-blue font-bold">Element 3D</span>.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
