'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'WORK', href: '#work' },
  { label: 'WHO', href: '#about' },
  { label: 'DO', href: '#services' },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] flex items-center justify-between px-4 py-3 transition-colors md:px-6 ${
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-sm' : ''
      }`}
    >
      <a
        href="#top"
        data-cursor="TOPO"
        className="font-display text-xl leading-none tracking-tight text-foreground"
      >
        KEVEN<span className="text-rgb-red">.</span>
      </a>

      <span className="hidden font-mono text-[10px] uppercase tracking-widest text-concrete md:block">
        MOTION DESIGNER — TIMON / MA
      </span>

      {/* desktop links */}
      <nav className="hidden items-center gap-6 md:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-cursor="IR"
            className="font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:text-rgb-green"
          >
            {l.label}
          </a>
        ))}
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

      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-4 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl leading-none text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
