'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('pt-BR', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'America/Fortaleza',
        }),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function Hero({ active }: { active: boolean }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const time = useLocalTime()

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
      className="texture-concrete relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-5 pb-6 pt-20 md:px-8"
    >
      {/* central abstract gradient */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.1 }}
        animate={show ? { opacity: 0.55, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute inset-0 rounded-full mix-blend-screen blur-[60px]"
          style={{
            background:
              'radial-gradient(circle at 38% 42%, var(--rgb-red) 0%, transparent 55%)',
            transform: `translate(${parallax.x * -14 + parallax.x * 18}px, ${
              parallax.y * -14 + parallax.y * 18
            }px)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full mix-blend-screen blur-[60px]"
          style={{
            background:
              'radial-gradient(circle at 62% 58%, var(--rgb-blue) 0%, transparent 55%)',
            transform: `translate(${parallax.x * 14 + parallax.x * 18}px, ${
              parallax.y * 14 + parallax.y * 18
            }px)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full mix-blend-screen blur-[70px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, var(--rgb-green) 0%, transparent 42%)',
            opacity: 0.5,
            transform: `translate(${parallax.x * 18}px, ${parallax.y * 18}px)`,
          }}
        />
        <div
          className="absolute inset-[14%] rounded-full opacity-70 blur-[24px]"
          style={{
            background:
              'conic-gradient(from 140deg, oklch(0.28 0 0), oklch(0.05 0 0), oklch(0.32 0 0), oklch(0.05 0 0), oklch(0.28 0 0))',
          }}
        />
      </motion.div>

      {/* faux technical markings */}
      <div className="pointer-events-none absolute inset-0 z-10 font-mono text-[10px] uppercase tracking-widest text-concrete">
        <span className="absolute left-5 top-24 md:left-8">
          <span className="text-rgb-green">LAT</span> -5.0938 /{' '}
          <span className="text-rgb-blue">LON</span> -42.8367
        </span>
        <span className="absolute right-5 top-24 md:right-8">
          FILE / KEVEN_PORTFOLIO_2026
        </span>
        <span className="absolute bottom-28 left-5 md:left-8">
          <span className="text-rgb-red">FPS 24</span> — RES 3840×2160
        </span>
        <span className="absolute bottom-28 right-5 origin-bottom-right rotate-90 md:right-8">
          AE · PR · PS · LR
        </span>
        {/* crosshair */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rgb-red">
          +
        </span>
      </div>

      {/* TOP row */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-20 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-concrete"
        style={{ transform: `translateX(${parallax.x * -8}px)` }}
      >
        <span>
          PORTFÓLIO <span className="text-foreground">© 2026</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="blink h-1.5 w-1.5 rounded-full bg-rgb-red" />
          REC — AO VIVO
        </span>
      </motion.div>

      {/* CENTER — giant KEVEN cropped */}
      <motion.div
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(10px)' }}
        animate={show ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
        className="relative z-20"
      >
        <h1 className="select-none" style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }}>
          <span
            className="glitch rgb-split-lg block text-center font-display text-[34vw] leading-[0.72] text-foreground md:text-[23vw]"
            data-text="KEVEN"
          >
            KEVEN
          </span>
        </h1>

        {/* roles strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-border pt-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-concrete md:text-[11px]"
        >
          <span className="text-foreground">MOTION DESIGNER</span>
          <span className="text-rgb-red">✱</span>
          <span className="text-foreground">EDITOR DE VÍDEO</span>
          <span className="text-rgb-blue">✱</span>
          <span className="text-foreground">FOTÓGRAFO</span>
        </motion.div>
      </motion.div>

      {/* BOTTOM row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-20 flex items-end justify-between gap-4"
        style={{ transform: `translateX(${parallax.x * 8}px)` }}
      >
        <div className="max-w-[20ch] font-mono text-[11px] uppercase leading-relaxed tracking-widest text-concrete">
          <span className="text-rgb-green">■</span> DESIGNER DE MOVIMENTO
          <br />
          TIMON — MARANHÃO, BRASIL
        </div>
        <div className="text-right font-mono text-[11px] uppercase tracking-widest text-concrete">
          <span className="block text-[9px] text-concrete-dark">HORA LOCAL</span>
          <span className="text-foreground tabular-nums">{time || '00:00:00'}</span>
        </div>
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
