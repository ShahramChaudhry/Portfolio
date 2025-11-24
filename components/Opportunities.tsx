// 'use client'

// import { motion } from 'framer-motion'

// const opportunities = [
//   {
//     title: 'AI Integration Engineer',
//     description:
//       'Extensive experience integrating AI into workflows (Barclays, Enrichly, multiple hackathons). Strong focus on measurable, reliable impact.'
//   },
//   {
//     title: 'Machine Learning Engineer',
//     description:
//       'Currently working on reducing inference latency for driverless car perception systems as part of Mubadala’s autonomous driving initiative.'
//   },
//   {
//     title: 'Data Science',
//     description:
//       'Experience with statistical modeling, analytics, Python, SQL, and building data-driven systems for insights and decision-making.'
//   },
//   {
//     title: 'Full-Stack Developer',
//     description:
//       'Built several complete systems using React, Next.js, Node.js, and Python across personal and academic projects.'
//   },
//   {
//     title: 'Product Management',
//     description:
//       'Experience leading features, managing stakeholders, and defining product direction at Enrichly and Barclays.'
//   },
//   {
//     title: 'Consulting',
//     description:
//       'Strong analytical communication skills. Skilled at turning complex systems into clear insights and actionable strategy.'
//   }
// ]

// export default function Opportunities() {
//   return (
//     <section className="relative min-h-screen py-32 px-[350px] bg-black text-white">
//       <div className="w-full relative">   {/* <-- FIXED: MATCHES SKILLS & PROJECTS */}

//         {/* Left accent line */}
//         <div className="absolute left-[-40px] top-0 bottom-0 w-[2px] bg-[#7D8CBA]/40" />

//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="font-heading text-7xl font-bold mb-12 text-[#7D8CBA]"
//         >
//           Opportunities I'm Looking For
//         </motion.h2>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-2xl text-white/70 mb-20 leading-relaxed max-w-[900px]"
//         >
//           I'm currently exploring roles where engineering, AI systems, and thoughtful product design intersect.
//         </motion.p>

//         {/* Cards */}
//         <div className="space-y-8 mb-20 max-w-[900px]">  {/* <-- matches subtitle width */}
//           {opportunities.map((opp, index) => (
//             <motion.div
//               key={opp.title}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.08 }}
//               viewport={{ once: true }}
//               className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/10 hover:border-[#7D8CBA] transition-all duration-300 shadow-[0_0_40px_-15px_rgba(125,140,186,0.15)]"
//             >
//               <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#7D8CBA] transition-colors">
//                 {opp.title}
//               </h3>

//               <p className="text-white/70 leading-relaxed text-lg">
//                 {opp.description}
//               </p>

//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7D8CBA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Closing line */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-2xl text-white/70 italic border-l-4 border-[#7D8CBA] pl-6 max-w-[800px] leading-relaxed"
//         >
//           If your team is building something ambitious - especially at the intersection of AI, engineering, and product - I'd love to contribute.
//         </motion.p>

//       </div>
//     </section>
//   )
// }

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
    <section className="relative min-h-screen py-32 px-[350px] bg-black text-white">
    <div className="w-full mx-auto relative">   {/* MATCHES SKILLS + PROJECTS */}

        {/* Left accent line */}
        <div className="absolute left-[-40px] top-0 bottom-0 w-[2px] bg-[#7D8CBA]/40" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-7xl font-bold mb-12 text-[#7D8CBA]"
        >
          Opportunities I'm Looking For
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl text-white/70 mb-20 leading-relaxed max-w-[900px]"
        >
          I'm currently exploring roles where engineering, AI systems, and thoughtful product design intersect.
        </motion.p>

        {/* Grid (2 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#7D8CBA] transition-all duration-300"
            >
              <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#7D8CBA] transition-colors">
                {opp.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-xl">
                {opp.description}
              </p>

              {/* Hover accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7D8CBA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl text-white/70 italic border-l-4 border-[#7D8CBA] pl-6 max-w-[800px] leading-relaxed"
        >
          If your team is building something ambitious - especially at the intersection of AI, engineering, and product - I'd love to contribute.
        </motion.p>

      </div>
    </section>
  )
}