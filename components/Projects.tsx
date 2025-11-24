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
      className="relative min-h-screen py-32 px-[350px] bg-black text-white"
    >
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-heading text-7xl font-bold mb-24 text-[#7D8CBA]"
      >
        Projects
      </motion.h2>

      {/* PROJECT LIST */}
      <div className="space-y-32">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            style={{ scale: shrink, opacity: fade }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex justify-between items-start w-full border-b border-white/10 pb-20"
          >
            {/* LEFT SIDE — TEXT */}
            <div className="flex flex-col">
              <h3 className="font-heading text-5xl font-bold mb-4">
                {project.title}
              </h3>

              <h4 className="text-[#7D8CBA] text-2xl mb-6">
                {project.subtitle}
              </h4>

              <p className="text-white/70 text-2xl leading-relaxed max-w-2xl mb-8">
                {project.description}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mb-10">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white/20 rounded-full text-white/90 text-lg hover:border-[#7D8CBA] hover:text-[#7D8CBA] transition-all"
                  >
                    View Project →
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white/20 rounded-full text-white/90 text-lg hover:border-[#7D8CBA] hover:text-[#7D8CBA] transition-all"
                  >
                    Watch Demo →
                  </a>
                )}
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-lg font-mono text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="w-[420px] h-[260px] rounded-xl bg-white/5 border border-white/10 overflow-hidden">
              <img
                src={project.image ?? "/placeholder.jpg"}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}