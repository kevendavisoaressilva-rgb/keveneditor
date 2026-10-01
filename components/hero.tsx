'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

/* Live SMPTE-style timecode ticking at 24fps */
function useTimecode() {
  const [tc, setTc] = useState('00:00:00:00')
  useEffect(() => {
    const start = performance.now()
    const id = setInterval(() => {
      const elapsed = (performance.now() - start) / 1000
      const totalFrames = Math.floor(elapsed * 24)
      const ff = totalFrames % 24
      const s = Math.floor(totalFrames / 24) % 60
      const m = Math.floor(totalFrames / (24 * 60)) % 60
      const h = Math.floor(totalFrames / (24 * 3600))
      const p = (n: number) => String(n).padStart(2, '0')
      setTc(`${p(h)}:${p(m)}:${p(s)}:${p(ff)}`)
    }, 1000 / 24)
    return () => clearInterval(id)
  }, [])
  return tc
}

const TRACKS: {
  label: string
  clips: { t: string; w: string; kind: 'm' | 'e' | 'f' }[]
}[] = [
  {
    label: 'V1',
    clips: [
      { t: 'ALOK_TRANSMISSÃO', w: '24%', kind: 'm' },
      { t: 'CAST_TV_INTRO', w: '17%', kind: 'm' },
      { t: '2D_FRAME_BY_FRAME', w: '13%', kind: 'm' },
    ],
  },
  {
    label: 'V2',
    clips: [
      { t: 'REC_001', w: '11%', kind: 'e' },
      { t: 'REC_002', w: '14%', kind: 'e' },
      { t: 'REC_003', w: '9%', kind: 'e' },
    ],
  },
  {
    label: 'A1',
    clips: [
      { t: 'MIX_FINAL', w: '8%', kind: 'f' },
      { t: 'SHOW_ÁUDIO', w: '20%', kind: 'f' },
      { t: '', w: '16%', kind: 'f' },
    ],
  },
]

const CLIP_STYLE: Record<string, string> = {
  m: 'bg-paper text-soft border-foreground/15',
  e: 'bg-accent/15 text-accent border-accent/40',
  f: 'bg-paper/60 text-soft/70 border-foreground/10',
}

export function Hero({ active }: { active: boolean }) {
  const tc = useTimecode()
  const show = active

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-[-30%] h-[80vmin] w-[80vmin] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: 'var(--accent)' }}
      />

      <div className="container-site flex flex-1 flex-col justify-between pt-28 md:pt-32">
        {/* eyebrow + indices */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <p className="eyebrow">OI! — PORTFÓLIO © 2026</p>
          <p className="eyebrow hidden md:block">TIMON — MA, BRASIL</p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-soft tabular-nums">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            {tc}
          </p>
        </motion.div>

        {/* headline */}
        <div className="py-14 md:py-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.5rem,15vw,14rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em] text-foreground"
          >
            KEVEN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="mt-6 max-w-[58ch] text-lg leading-relaxed text-soft md:mt-8 md:text-2xl"
          >
            Motion designer, <span className="serif-i text-foreground">editor de vídeo</span>{' '}
            e fotógrafo — apaixonado por criar narrativas com{' '}
            <span className="serif-i text-foreground">ritmo, movimento e luz</span> (e
            uma boa dose de experimentação).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.54, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group flex items-center gap-3 bg-foreground px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-white"
            >
              VER TRABALHOS
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href="https://w.app/keveneditor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border px-6 py-3.5 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:border-foreground/50"
            >
              FALAR COMIGO ↗
            </a>
          </motion.div>
        </div>
      </div>

      {/* ——— editor timeline strip ——— */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative border-t border-border"
        aria-hidden
      >
        {/* ruler */}
        <div className="container-site relative flex items-end justify-between">
          <div className="ruler h-4 w-full" />
          <div className="ruler-minor absolute inset-x-10 top-0 h-2" />
          <span className="absolute right-10 -top-5 font-mono text-[9px] uppercase tracking-widest text-soft/70">
            ROLA PRA BAIXO ↓
          </span>
        </div>

        {/* playhead */}
        <div className="pointer-events-none absolute inset-y-0 left-[42%] z-10 w-px bg-accent">
          <span className="playhead-tip absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-accent" />
        </div>

        {/* tracks */}
        <div className="container-site flex flex-col gap-1 pb-1.5">
          {TRACKS.map((track) => (
            <div key={track.label} className="flex items-center gap-2">
              <span className="w-6 shrink-0 font-mono text-[9px] uppercase tracking-widest text-soft/60">
                {track.label}
              </span>
              <div className="flex h-7 flex-1 items-stretch gap-1 overflow-hidden md:h-8">
                {track.clips.map((c, i) => (
                  <span
                    key={i}
                    style={{ width: c.w }}
                    className={`flex items-center truncate border px-2 font-mono text-[8px] tracking-wider md:text-[9px] ${CLIP_STYLE[c.kind]}`}
                  >
                    {c.t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
