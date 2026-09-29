'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const LINKS = [
  { label: 'TRABALHOS', href: '#work' },
  { label: 'SOBRE', href: '#about' },
  { label: 'SERVIÇOS', href: '#services' },
  { label: 'PROCESSO', href: '#process' },
  { label: 'CONTATO', href: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] flex items-center justify-between px-5 py-3 transition-colors duration-300 md:px-8 ${
          scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : ''
        }`}
      >
        <a
          href="#top"
          className="font-display text-xl leading-none tracking-tight text-foreground"
        >
          KEVEN<span className="text-rgb-red">®</span>
        </a>

        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-concrete lg:block">
          MOTION / EDIÇÃO / FOTO — TIMON·MA
        </span>

        {/* desktop links */}
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:text-rgb-green"
            >
              {l.label}
            </a>
          ))}
          <span className="flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-concrete">
            <span className="blink h-1.5 w-1.5 rounded-full bg-rgb-green" />
            DISPONÍVEL
          </span>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-[11px] uppercase tracking-widest text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? '[ FECHAR ]' : '[ MENU ]'}
        </button>
      </header>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[75] flex flex-col justify-between bg-background px-5 pb-8 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                  className="flex items-baseline gap-3 border-b border-border pb-2"
                >
                  <span className="font-mono text-[10px] tracking-widest text-concrete">
                    0{i + 1}
                  </span>
                  <span className="font-display text-[13vw] leading-[0.9] text-foreground">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-concrete">
              <div className="flex flex-col gap-1">
                <a
                  href="https://w.app/keveneditor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground"
                >
                  WHATSAPP ↗
                </a>
                <a
                  href="https://linktr.ee/keveneditor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground"
                >
                  LINKTREE ↗
                </a>
              </div>
              <span>TIMON — MA · 2026</span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
