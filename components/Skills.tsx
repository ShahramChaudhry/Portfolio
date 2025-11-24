'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Engineering',
    skills: [
      'React', 'Next.js', 'TypeScript', 'Node.js', 'APIs',
      'Python', 'SQL', 'Firebase'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },

  {
    title: 'AI & Machine Learning',
    skills: [
      'Computer Vision', 'PyTorch', 'TensorFlow',
      'Model Optimization', 'Quantization', 'NLP',
      'Adversarial Robustness'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },

  {
    title: 'Data Engineering',
    skills: [
      'ETL Pipelines', 'Real-time Processing', 'PostgreSQL',
      'Matching Algorithms', 'Dashboards', 'Analytics'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6h16M4 10h16M4 14h8" />
      </svg>
    )
  },

  {
    title: 'Cloud & Infra',
    skills: [
      'CI/CD', 'Docker', 'Linux', 'Monitoring',
      'Reliability Engineering', 'Systems Debugging'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    )
  },

  {
    title: 'Product & Design',
    skills: [
      'Product Strategy', 'PRDs', 'UX Flows', 'Prototyping',
      'User Research', 'AI UX Design'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },

  {
    title: 'Behavioral & Emotional AI',
    skills: [
      'Behavioral Design', 'Emotion Recognition',
      'Hume AI', 'Assessment Systems',
      'Psychological Insights'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V5m0 9v3m7-6h3M2 11H5m12.364 5.364l2.121 2.121M4.515 6.515L6.636 8.636" />
      </svg>
    )
  },

  {
    title: 'Consulting & Soft Skills',
    skills: [
      'Team Leadership', 'Communication', 'Stakeholder Management',
      'Cross-functional Collaboration', 'Presenting & Pitching',
      'Rapid Ideation'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 9h8M8 13h6m5 8H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v7l3 3v6a2 2 0 01-2 2z" />
      </svg>
    )
  }
]

export default function Skills() {
  return (
    <section className="relative min-h-screen py-32 px-[350px] bg-black mt-0">
  <div className="w-full">   {/* <-- MATCHES PROJECTS EXACTLY */}

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="font-heading text-7xl font-bold mb-20 text-[#7D8CBA]"
    >
      Skills
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group relative bg-black rounded-2xl p-10 border border-white/10 hover:border-[#7D8CBA] transition-all duration-300 hover:shadow-lg hover:shadow-[#7D8CBA]/20"
        >
          <div className="mb-6 text-white/40 group-hover:text-[#7D8CBA] transition-colors">
            {group.icon}
          </div>

          <h3 className="font-heading text-3xl font-bold mb-6 group-hover:text-[#7D8CBA] transition-colors">
            {group.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {group.skills.map(skill => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-white/70 border border-white/10 group-hover:border-[#7D8CBA]/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7D8CBA]/0 to-[#A3B4FF]/0 group-hover:from-[#7D8CBA]/5 group-hover:to-[#A3B4FF]/5 transition-all duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </div>

  </div>
</section>
  )
}