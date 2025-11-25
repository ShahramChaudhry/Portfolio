'use client'

import { motion } from 'framer-motion'

const opportunities = [
  {
    title: 'AI Integration Engineer',
    description:
      'Extensive experience integrating AI into workflows (Barclays, Enrichly, multiple hackathons). Strong focus on measurable, reliable impact.'
  },
  {
    title: 'Machine Learning Engineer',
    description:
      'Currently working on reducing inference latency for driverless car perception systems at Mubadala’s autonomous driving initiative.'
  },
  {
    title: 'Data Science',
    description:
      'Experience with statistical modeling, analytics, Python, SQL, and building data-driven systems for insights and decision-making.'
  },
  {
    title: 'Full-Stack Developer',
    description:
      'Built several complete systems using React, Next.js, Node.js, and Python across personal and academic projects.'
  },
  {
    title: 'Product Management',
    description:
      'Experience leading features, managing stakeholders, and defining product direction at Enrichly and Barclays.'
  },
  {
    title: 'Consulting',
    description:
      'Strong analytical and strategic thinking. Skilled at turning complex systems into clear insights and actionable strategy.'
  }
]

export default function Opportunities() {
  return (
    <section
      className="
        relative min-h-screen
        py-20 sm:py-24 md:py-32
        px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64
        bg-black text-white
      "
    >
      {/* FULL-WIDTH CONTAINER — MATCHES PROJECTS + SKILLS */}
      <div className="w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-10 md:mb-12 text-[#7D8CBA]"
        >
          Opportunities I&apos;m Looking For
        </motion.h2>

        {/* Subtitle — REMOVE max-width restriction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 mb-16 md:mb-20 leading-relaxed"
        >
          I&apos;m currently exploring roles where engineering, AI systems, and thoughtful product design intersect.
        </motion.p>

        {/* GRID — REMOVE max-w-5xl so cards use the whole container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-40px' }}
              className="
                group relative 
                bg-white/5 
                rounded-xl p-8 
                border border-white/10 
                hover:border-[#7D8CBA] 
                transition-all duration-300 
                hover:shadow-[0_0_30px_-10px_rgba(125,140,186,0.2)]
              "
            >
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 group-hover:text-[#7D8CBA] transition-colors">
                {opp.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                {opp.description}
              </p>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7D8CBA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />
            </motion.div>
          ))}
        </div>

        {/* Closing line — can stay narrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-40px' }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 italic 
                    border-l-4 border-[#7D8CBA] pl-6 leading-relaxed w-full mb-0"
        >
          If your team is building something ambitious - especially at the
          intersection of AI, engineering, and product - I’d love to contribute.
        </motion.p>

      </div>
    </section>
  )
}