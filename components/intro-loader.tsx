'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0) // 0 noise, 1 line, 2 name, 3 flash-out
  const [gone, setGone] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)

  useEffect(() => {
    const counter = setInterval(() => {
      progressRef.current = Math.min(
        100,
        progressRef.current + Math.floor(Math.random() * 11) + 5,
      )
      setProgress(progressRef.current)
      if (progressRef.current >= 100) clearInterval(counter)
    }, 95)

    const t1 = setTimeout(() => setPhase(1), 350)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1700)
    const t4 = setTimeout(() => {
      setGone(true)
      onDone()
    }, 2050)
    return () => {
      clearInterval(counter)
      ;[t1, t2, t3, t4].forEach(clearTimeout)
    }
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          {/* noise plate */}
          <div className="grain-overlay !opacity-[0.15]" />
          <div className="scanlines scanlines-strong" />

          {/* thin scan line */}
          {phase >= 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute h-px w-[70vw] origin-left bg-rgb-red"
            />
          )}

          {/* name reveal */}
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <span
                className="glitch font-display text-[18vw] leading-none text-foreground md:text-[12vw]"
                data-text="KEVEN"
              >
                KEVEN
              </span>
            </motion.div>
          )}

          {/* white flash on exit */}
          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{ duration: 0.35, times: [0, 0.3, 1] }}
              className="absolute inset-0 bg-foreground"
            />
          )}

          {/* corner ticks */}
          <span className="absolute left-4 top-4 font-mono text-[10px] tracking-widest text-concrete md:left-6">
            LOADING / TIMON—MA
          </span>
          <span className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-concrete md:right-6">
            PORTFÓLIO — V2.0
          </span>
          <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest text-concrete tabular-nums md:left-6">
            {String(progress).padStart(3, '0')}%
          </span>
          <span className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-concrete md:right-6">
            © 2026
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
