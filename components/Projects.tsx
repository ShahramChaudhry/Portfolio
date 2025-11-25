'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import projectsData from '@/data/projects.json'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const shrink = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64 bg-black text-white"
    >
      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 md:mb-24"
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#7D8CBA] mb-4">
          Projects
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl">
          A selection of my recent work and contributions
        </p>
      </motion.div>

      {/* PROJECT LIST */}
      <div className="space-y-20 md:space-y-32">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            style={{ scale: shrink, opacity: fade }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row justify-between items-start w-full border-b border-white/10 pb-12 md:pb-20 gap-8 md:gap-12"
          >
            {/* LEFT SIDE — TEXT */}
            <div className="flex-1">
              <h3 className="font-heading text-3xl sm:text-5xl md:text-5xl font-bold mb-3 md:mb-4">
                {project.title}
              </h3>

              <h4 className="text-[#7D8CBA] text-xl sm:text-3xl mb-4 md:mb-6">
                {project.subtitle}
              </h4>

              <p className="text-white/70 text-base sm:text-lg md:text-2xl leading-relaxed max-w-3xl mb-6 md:mb-8">
                {project.description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-1.5 sm:py-2 border border-white/20 rounded-full text-white/90 text-sm sm:text-base md:text-lg hover:border-[#7D8CBA] hover:text-[#7D8CBA] transition-all"
                  >
                    View Project →
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-1.5 sm:py-2 border border-white/20 rounded-full text-white/90 text-sm sm:text-base md:text-lg hover:border-[#7D8CBA] hover:text-[#7D8CBA] transition-all"
                  >
                    Watch Demo →
                  </a>
                )}
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm md:text-base font-mono text-white/70 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="w-full lg:w-[420px] h-48 sm:h-64 md:h-72 lg:h-64 xl:h-72 2xl:h-80 rounded-xl bg-white/5 border border-white/10 overflow-hidden group">
              <img
                src={project.image ?? "/placeholder.jpg"}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}