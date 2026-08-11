'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    // only on fine pointers (desktop)
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)')
    if (!fine.matches) return
    setEnabled(true)

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
      }
      const el = e.target as HTMLElement
      const interactive = el.closest('a, button, [data-cursor]')
      if (interactive) {
        setHovering(true)
        setLabel(interactive.getAttribute('data-cursor'))
      } else {
        setHovering(false)
        setLabel(null)
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* RGB trailing ring */}
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full mix-blend-difference transition-[width,height] duration-200"
        style={{
          width: hovering ? 74 : 30,
          height: hovering ? 74 : 30,
          boxShadow:
            '0 0 0 1px oklch(0.78 0.24 142 / 0.9), 2px 0 0 1px oklch(0.58 0.25 264 / 0.8), -2px 0 0 1px oklch(0.6 0.245 27.5 / 0.8)',
          borderRadius: '9999px',
        }}
      >
        {label && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-foreground">
            {label}
          </span>
        )}
      </div>
      {/* solid dot */}
      <div
        ref={dot}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[91] h-1.5 w-1.5 rounded-full bg-foreground mix-blend-difference"
      />
    </>
  )
}
