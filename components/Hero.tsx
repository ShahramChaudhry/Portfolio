'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -60])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="
        relative 
        min-h-[92vh] 
        flex 
        items-start        /* <-- moves hero UP */
        px-[300px]        
        pt-[400px]         /* <-- THIS RAISES EVERYTHING BY ~100px */
        pb-32
      "
    >
      <div className="w-full max-w-[2000px]">

        {/* MAIN TITLE */}
        <h1
          className="
            font-heading 
            text-[10rem]   
            leading-[0.9] 
            font-bold 
            text-white 
            mb-12
            whitespace-normal
          "
        >
          <span className="text-[#7D8CBA]">Machine Learning</span>
          <br />
          and Software Engineer
        </h1>

        {/* LOCATION BAR */}
        <div className="relative w-full mt-10 mb-6">
          <div className="absolute top-1/2 left-0 w-full border-t border-white/10"></div>

          <div className="relative flex items-center justify-between w-full text-white/70 text-xl tracking-tight">
            <span className="whitespace-nowrap">Abu Dhabi, UAE</span>
            <span className="whitespace-nowrap">(GMT +4)</span>
            <span className="text-[#7D8CBA] whitespace-nowrap">Available</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          style={{ opacity }}
          className="
            text-white/70 
            max-w-3xl 
            text-2xl 
            mt-12 
            leading-relaxed 
            tracking-wide
          "
        >
          Shahram designs and develops intelligent, human-centered digital
          products – blending software engineering, machine learning, and
          thoughtful product design to solve complex problems at scale. His
          work spans AI-powered interfaces, automation systems, and fast,
          reliable ML pipelines.
        </motion.p>

      </div>
    </motion.section>
  )
}