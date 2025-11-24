'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative min-h-screen py-32 px-6 md:px-12 bg-primary-black flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-gradient">
              About
            </h2>

            <div className="space-y-6 text-lg text-grey-300 leading-relaxed">
              <p>
                I'm a product engineer who moves between design, AI, and full-stack 
                development with ease.
              </p>

              <p>
                I care about craft, clarity, and building tools that make people feel 
                empowered — not overwhelmed.
              </p>

              <p>
                I've worked across research labs, startups, and global enterprises, and 
                I love turning ambiguous ideas into real, working, elegant products.
              </p>
            </div>

            {/* Skills/Tech Stack */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                'Machine Learning',
                'React & Next.js',
                'Python & Node.js',
                'UX Design',
                'Product Strategy',
                'System Architecture',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-3 bg-grey-900 rounded-lg border border-grey-700 hover:border-accent-purple transition-colors"
                >
                  <span className="font-mono text-sm text-accent-purple">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element - Floating Avatar/Silhouette */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Glowing circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-hover/20 rounded-full blur-3xl" />

              {/* Main circle with pattern */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-grey-800 to-grey-900 border-2 border-accent-purple/30 flex items-center justify-center overflow-hidden">
                {/* Geometric pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern
                      id="grid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-accent-purple"
                      />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Center initials */}
                <div className="relative z-10 font-heading text-8xl font-bold text-accent-purple">
                  SC
                </div>
              </div>

              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 border border-accent-purple/20 rounded-full"
                style={{ padding: '20px' }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 border border-accent-hover/10 rounded-full"
                style={{ padding: '40px' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

