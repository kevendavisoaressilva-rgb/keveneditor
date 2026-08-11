'use client'

import { useState } from 'react'
import type { Project } from '@/lib/projects'
import { IntroLoader } from './intro-loader'
import { Nav } from './nav'
import { Hero } from './hero'
import { Portfolio } from './portfolio'
import { About } from './about'
import { Tools } from './tools'
import { Services } from './services'
import { Process } from './process'
import { Contact } from './contact'
import { Footer } from './footer'
import { Marquee } from './marquee'

export function Experience({ projects }: { projects: Project[] }) {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <IntroLoader onDone={() => setIntroDone(true)} />

      {/* global texture overlays */}
      <div className="grain-overlay" aria-hidden />
      <div className="scanlines" aria-hidden />

      <Nav />

      <main className="relative">
        <Hero active={introDone} />
        <Marquee
          items={['MOTION DESIGN', 'AFTER EFFECTS', 'ELEMENT 3D', '3D', '2D', 'TIMON — MA', '2026']}
          accent="red"
        />
        <Portfolio projects={projects} />
        <About />
        <Marquee
          items={['MOVEMENT', 'FRAME', 'TIME', 'SPACE', 'LOOP', 'RENDER', 'KEYFRAME']}
          accent="blue"
          reverse
        />
        <Services />
        <Tools />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
