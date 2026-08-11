'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function Hero({ active }: { active: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const fine =
      typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setParallax({ x, y })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const show = active

  return (
    <section
      id="top"
      ref={ref}
      className="texture-concrete relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-4 pb-6 pt-20 md:px-6"
    >
      {/* central abstract object */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.1 }}
        animate={show ? { opacity: 0.85, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(-50%, -50%) translate(${parallax.x * 18}px, ${parallax.y * 18}px)`,
        }}
      >
        <Image
          src="/hero-object.png"
          alt="Escultura metálica abstrata em movimento"
          fill
          priority
          sizes="70vmin"
          className="object-contain"
        />
      </motion.div>

      {/* faux technical markings */}
      <div className="pointer-events-none absolute inset-0 z-10 font-mono text-[10px] uppercase tracking-widest text-concrete">
        <span className="absolute left-4 top-24 md:left-6">
          <span className="text-rgb-green">LAT</span> -5.0938 /{' '}
          <span className="text-rgb-blue">LON</span> -42.8367
        </span>
        <span className="absolute right-4 top-24 md:right-6">FILE / KEVEN_REEL_2026.aep</span>
        <span className="absolute bottom-24 left-4 md:left-6">
          <span className="text-rgb-red">FPS 24</span> — RES 3840×2160
        </span>
        <span className="absolute bottom-24 right-4 rotate-90 origin-bottom-right md:right-6">
          AFTER EFFECTS · ELEMENT 3D
        </span>
        {/* crosshair */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rgb-red">
          +
        </span>
      </div>

      {/* TOP layer words */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-20 flex items-start justify-between"
        style={{ transform: `translateX(${parallax.x * -10}px)` }}
      >
        <span className="spray-green font-display text-[13vw] leading-[0.8] md:text-[9vw]">
          MOTION
        </span>
        <span className="mt-2 hidden font-mono text-xs uppercase tracking-widest text-concrete md:block">
          / 01 — REEL
          <br />/ EXPERIMENTAL
          <br />/ 2D · 3D
        </span>
      </motion.div>

      {/* CENTER — giant KEVEN cropped */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
        animate={show ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
        className="relative z-20 select-none"
        style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }}
      >
        <span
          className="glitch rgb-split-lg block font-display text-[34vw] leading-[0.72] text-foreground md:text-[24vw]"
          data-text="KEVEN"
        >
          KEVEN
        </span>
      </motion.h1>

      {/* BOTTOM layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-20 flex items-end justify-between gap-4"
        style={{ transform: `translateX(${parallax.x * 10}px)` }}
      >
        <div className="max-w-[16ch] font-mono text-xs uppercase leading-relaxed tracking-widest text-concrete">
          <span className="text-rgb-green">■</span> DESIGNER DE MOVIMENTO
          <br />
          BASEADO EM TIMON — MARANHÃO, BRASIL
        </div>
        <span className="spray-blue font-display text-[13vw] leading-[0.8] md:text-[9vw]">
          DESIGN
        </span>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-concrete"
      >
        ↓ role para explorar
      </motion.div>
    </section>
  )
}
