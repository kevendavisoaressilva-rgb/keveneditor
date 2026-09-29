'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const LINKS = [
  { label: 'TRABALHOS', href: '#work' },
  { label: 'SOBRE', href: '#about' },
  { label: 'SERVIÇOS', href: '#services' },
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
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-300 ${
          scrolled ? 'border-b border-border bg-background/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="container-site flex items-center justify-between py-4">
          <a
            href="#top"
            className="text-lg font-extrabold uppercase tracking-[-0.03em] text-foreground"
          >
            KEVEN<span className="text-accent">®</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-widest text-soft transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-soft">
              DISPONÍVEL P/ PROJETOS
            </span>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-[11px] uppercase tracking-widest text-foreground md:hidden"
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? 'FECHAR' : 'MENU'}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[75] flex flex-col justify-between bg-background px-5 pb-8 pt-24 md:hidden"
          >
            <div className="flex flex-col">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="group flex items-baseline justify-between border-b border-border py-4"
                >
                  <span className="text-4xl font-bold uppercase tracking-[-0.03em] text-foreground">
                    {l.label}
                  </span>
                  <span className="font-mono text-[11px] text-soft">0{i + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-soft">
              <div className="flex flex-col gap-1.5">
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
