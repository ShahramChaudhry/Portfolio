'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: "Barclays",
    role: "Technology Developer Intern",
    year: "2025",
    description:
      "Worked on the Site Reliability team in Barclays' Run the Bank group, building internal tools that made troubleshooting, impact analysis, and day-to-day operations smoother for engineering and support teams.",
    highlights: [
      "Built an AI incident assistant that matches new incidents to similar past cases using semantic similarity and rewrites the resolution steps with Barclays' internal foundation model. It replaced a lot of manual digging through old Confluence pages and became a tool teams actually relied on.",
      "Created AppMap, a visualization system that shows how applications across the Corporate and Payments division connect and depend on each other. It made impact analysis far more confident and helped teams understand what breaks when something changes.",
      "Developed a Support Management Console that centralizes resources, workflows, and project dependencies so project managers and teams no longer have to jump across scattered documents and tools.",
      "Led a group of four interns across these projects, won two Barclays hackathons and pitch competitions, was selected as Best Presenter for both events, and received the Most Valuable Intern award for overall contribution.",
      "Fun fact: became known as the 'coffee chatter intern' after getting access to internal ML models through many coffee chats, something interns usually do not get permission for."
    ]
  },

  {
    company: "Center for AI and Robotics, NYUAD",
    role: "Machine Learning Research Assistant – Driverless Car Project",
    year: "2025",
    description:
      "Working on Mubadala’s autonomous driving initiative, helping optimize the speed and efficiency of the car’s real-time perception system.",
    highlights: [
      "Reducing inference time for computer-vision models by applying dynamic/static quantization, pruning, and lightweight architecture strategies during both training and deployment.",
    ]
  },

  {
    company: "Enrichly",
    role: "Technical Product Manager",
    year: "2025",
    description:
      "Joined a behavioral-science startup focused on helping students build self-esteem, confidence, and overall well-being. I worked across engineering, content, and design to turn psychological insights into tools that felt supportive, intuitive, and genuinely helpful.",
    highlights: [
      "Originally joined as a Software Engineering Intern and was promoted to Technical Product Manager after taking ownership of core features and cross-team workflows.",
      "Designed an emotionally aware AI chatbot using Hume AI, built with both voice and text modes. It could detect emotional cues in speech, track sentiment over time, and adapt responses to support students in a more human, empathetic way.",
      "Oversaw the development of a psychological-assessment dashboard for healthcare providers—allowing doctors, counselors, and students to assign assessments, track progress, and review results in one place, streamlining the entire evaluation process."
    ]
  },

  {
    company: "LETSRISE",
    role: "Data Engineer Intern",
    year: "2024",
    description:
      "Joined an early-stage startup building a smarter way for founders to find the right co-founders, teammates, and collaborators. A lot of my work blended psychology, data engineering, and matching algorithms.",
    highlights: [
      "Designed a matching system that used Big Five personality traits, skills, and role preferences to help founders decide whether they needed complementary profiles or someone more similar - improving co-founder matches across roles like CTO, CFO, and COO.",
      "Built automated data pipelines and scoring logic that powered real-time recommendations for 100+ entrepreneurs, and developed dashboards that helped leadership understand user patterns and refine product direction."
    ]
  },

  {
    company: "eBrain Lab, NYUAD",
    role: "Machine Learning Research Assistant",
    year: "2023",
    description:
      "Worked on adversarial robustness research, focusing on how to make deep learning models more stable and less vulnerable to crafted attacks.",
    highlights: [
      "Implemented and tested attack and defense methods like FGSM and PGD using PyTorch and TensorFlow.",
      "Improved model stability under adversarial pressure by iterating on training loops and adjusting the defensive pipeline."
    ]
  }
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={ref}
      className="
        relative min-h-screen
        py-20 
        px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-[350px]
        bg-black text-white
      "
    >
      <motion.div style={{ y }} className="max-w-[1600px]">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-10 text-[#7D8CBA]"
        >
          Experience
        </motion.h2>

        {/* INTRO LINE */}
        <p className="text-white/70 text-xl sm:text-2xl max-w-4xl leading-relaxed mb-16">
          I have about 1 year of experience working across technical roles at startups and top companies.
        </p>

        {/* EXPERIENCE LIST */}
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border-l-2 border-white/10 pl-10 pb-10"
            >
              {/* TIMELINE DOT */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#7D8CBA] shadow-lg shadow-[#7D8CBA]/40" />

              {/* YEAR */}
              <span className="block text-[#7D8CBA] text-xl sm:text-2xl font-mono mb-4">
                {exp.year}
              </span>

              {/* COMPANY */}
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {exp.company}
              </h3>

              {/* ROLE */}
              <h4 className="text-xl sm:text-2xl md:text-3xl text-[#7D8CBA] mb-6">
                {exp.role}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 tracking-wide">
                {exp.description}
              </p>

              {/* BULLET POINTS */}
              <ul className="space-y-5 text-lg sm:text-xl leading-relaxed text-white/80">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#7D8CBA] mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}