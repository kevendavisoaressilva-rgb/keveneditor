'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Work } from '@/lib/projects'

export function ReelModal({
  work,
  onClose,
}: {
  work: Work | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!work) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [work, onClose])

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-background/92 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Assistir ${work.title}`}
        >
          <motion.figure
            initial={{ scale: 0.95, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[85vh] max-h-[900px] w-auto max-w-[92vw] overflow-hidden border border-border bg-paper"
            style={{ aspectRatio: '9 / 16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={
                work.vimeoId
                  ? `https://player.vimeo.com/video/${work.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`
                  : `https://www.instagram.com/reel/${work.reelCode}/embed`
              }
              title={`${work.title} — vídeo`}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.figure>

          <figcaption className="pointer-events-none absolute bottom-6 left-1/2 w-full -translate-x-1/2 text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-soft">
              {work.title} — {work.subtitle} · {work.year}
            </span>
          </figcaption>

          <button
            onClick={onClose}
            className="absolute right-5 top-5 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:text-accent md:right-8 md:top-8"
            aria-label="Fechar"
          >
            FECHAR ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
