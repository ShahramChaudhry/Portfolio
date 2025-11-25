'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
  className="
    relative 
    py-20 sm:py-24 md:py-28
    px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64
    bg-black text-white
  "
>
  <div className="w-full max-w-[1600px]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="mb-10 sm:mb-12"
    >
      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#7D8CBA] mb-4">
        Contact
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl">
        Let's build something meaningful together.
      </p>
    </motion.div>

    {/* Inline Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, margin: '-40px' }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
    >
      <a
        href="https://calendly.com/sc9425/30min"
        target="_blank"
        className="group flex-1 text-center px-8 py-5 bg-[#7D8CBA] text-white font-heading text-xl md:text-2xl rounded-xl hover:scale-[1.02] transition"
      >
        Book a call →
      </a>

      <a
        href="mailto:sc9425@nyu.edu"
        className="group flex-1 text-center px-8 py-5 border-2 border-[#7D8CBA] text-[#7D8CBA] font-heading text-xl md:text-2xl rounded-xl hover:bg-[#7D8CBA] hover:text-white transition"
      >
        Send an email →
      </a>

      <a
        href="https://www.linkedin.com/in/shahram-chaudhry/"
        target="_blank"
        className="group flex-1 text-center px-8 py-5 border-2 border-[#7D8CBA] text-[#7D8CBA] font-heading text-xl md:text-2xl rounded-xl hover:bg-[#7D8CBA] hover:text-white transition"
      >
        Connect on LinkedIn →
      </a>
    </motion.div>

    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 pt-10 border-t border-white/10 text-center text-white/40 text-sm"
    >
      © Shahram Chaudhry 2025
    </motion.footer>
  </div>
</section>
  )
}

