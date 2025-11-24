'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="relative min-h-screen py-32 px-[350px] bg-black flex items-start text-white">
      <div className="w-full mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-7xl font-bold mb-10 text-[#7D8CBA]"
        >
          Contact
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl text-white/70 mb-16 leading-relaxed max-w-2xl"
        >
          Let’s build something meaningful together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 max-w-xl"
        >
          {/* Book a call */}
          <a
            href="https://calendly.com/sc9425/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-[#7D8CBA] text-white font-heading font-bold text-2xl rounded-xl 
                       overflow-hidden transition-all hover:scale-[1.03]"
          >
            <span className="relative z-10">Book a call →</span>
            <div className="absolute inset-0 bg-[#9AA6D9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>

          {/* Email */}
          <a
            href="mailto:sc9425@nyu.edu"
            className="group px-10 py-5 bg-transparent text-[#7D8CBA] font-heading font-bold text-2xl rounded-xl
                       border-2 border-[#7D8CBA] hover:bg-[#7D8CBA] hover:text-white transition-all hover:scale-[1.03]"
          >
            Send an email →
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shahram-chaudhry/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-transparent text-[#7D8CBA] font-heading font-bold text-2xl rounded-xl
                       border-2 border-[#7D8CBA] hover:bg-[#7D8CBA] hover:text-white transition-all hover:scale-[1.03]"
          >
            Connect on LinkedIn →
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-28 pt-12 border-t border-white/10 text-center text-white/40 font-mono text-sm"
        >
          <p>© Shahram Chaudhry 2025</p>
        </motion.footer>
      </div>
    </section>
  )
}