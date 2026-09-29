'use client'

import { useState } from 'react'
import type { Work } from '@/lib/projects'
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

export function Experience({ works }: { works: Work[] }) {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <IntroLoader onDone={() => setIntroDone(true)} />

      {/* whisper of film grain */}
      <div className="grain" aria-hidden />

      <Nav />

      <main className="relative">
        <Hero active={introDone} />
        <Portfolio works={works} />
        <About />
        <Services />
        <Tools />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
