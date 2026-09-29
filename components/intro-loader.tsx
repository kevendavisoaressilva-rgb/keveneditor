'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const counter = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.floor(Math.random() * 9) + 4))
    }, 70)

    const t = setTimeout(() => {
      setGone(true)
      onDone()
    }, 1500)

    return () => {
      clearInterval(counter)
      clearTimeout(t)
    }
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-extrabold uppercase tracking-[-0.03em]"
          >
            KEVEN<sup className="font-mono text-[10px] font-normal text-accent">®</sup>
          </motion.span>

          <span className="absolute bottom-6 left-6 font-mono text-[11px] tracking-widest text-soft">
            PORTFÓLIO — 2026
          </span>
          <span className="absolute bottom-6 right-6 font-mono text-[11px] tracking-widest text-soft tabular-nums">
            {String(progress).padStart(3, '0')}%
          </span>
          <span className="absolute inset-x-6 bottom-12 h-px bg-border">
            <span
              className="block h-px bg-accent transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
