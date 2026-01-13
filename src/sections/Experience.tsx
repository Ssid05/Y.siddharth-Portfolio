import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { siteData } from '../data/siteData'
import { Briefcase, MapPin, Calendar, Apple, Laptop, Brain, LucideIcon } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// EXPERIENCE SECTION - Apple-style timeline
// ═══════════════════════════════════════════════════════════════════════════════
// Clean vertical timeline with minimal design

const iconMap: Record<string, LucideIcon> = {
  Apple,
  Laptop,
  Brain,
  Briefcase
}

export const Experience = () => {
  const { experience } = siteData

  return (
    <Section id="experience" className="relative overflow-hidden">
      {/* Gradient background glow - optimized */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-bg-secondary via-apple-bg to-apple-bg-secondary">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-magenta/12 rounded-full blur-[70px]" />
      </div>

      <div className="relative z-10">
      <SectionHeader 
        title="Experience"
        subtitle="Building the future of AI"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline connector - Apple minimal style */}
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-apple-border dark:bg-apple-dark-border" />

        <div className="space-y-12">
          {experience.map((exp, index) => {
            const IconComponent = exp.icon ? iconMap[exp.icon] || Briefcase : Briefcase
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-8 ml-20"
              >
                {/* Timeline node with company icon */}
                <div className="absolute left-[-3.55rem] top-1.5 w-7 h-7 bg-apple-blue rounded-full border-2 border-apple-bg dark:border-apple-dark-bg z-10 flex items-center justify-center">
                  <IconComponent className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>

                {/* Experience card - Apple style */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="apple-card p-6"
                  >
                    {/* Title & Company */}
                    <h3 className="text-xl font-semibold text-apple-text dark:text-apple-dark-text mb-1 tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-apple-blue font-medium mb-3 text-[15px]">
                      <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                      {exp.company}
                    </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-[13px] text-apple-text-secondary dark:text-apple-dark-text-secondary mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-apple-text-secondary dark:text-apple-dark-text-secondary text-[15px] leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills - Apple minimal */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-apple-bg-secondary dark:bg-apple-dark-bg-elevated rounded-full text-[12px] text-apple-text-secondary dark:text-apple-dark-text-secondary font-normal border border-apple-border dark:border-apple-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
      </div>
    </Section>
  )
}
