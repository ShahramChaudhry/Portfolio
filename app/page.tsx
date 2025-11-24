'use client'

import HeroTopIntro from '@/components/HeroTopIntro'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Opportunities from '@/components/Opportunities'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />

      <main className="relative">

        {/* TOP INTRO (small image + text) */}
        <HeroTopIntro />

        {/* MAIN HERO (big name section) */}
        <Hero />

        {/* SECTIONS */}
        <div id="experience">
          <Experience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="opportunities">
          <Opportunities />
        </div>

      

        <div id="contact">
          <Contact />
        </div>

      </main>
    </>
  )
}