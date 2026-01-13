import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { siteData } from '../data/siteData'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// EDUCATION SECTION - Apple-style academic cards
// ═══════════════════════════════════════════════════════════════════════════════

export const Education = () => {
  const { education } = siteData

  return (
    <Section id="education" className="bg-apple-bg dark:bg-apple-dark-bg">
      <SectionHeader 
        title="Education"
        subtitle="Academic excellence in technology"
      />

      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="apple-card p-8 h-full"
            >
              {/* Institution icon */}
              <div className="w-14 h-14 mb-5 bg-apple-blue/10 dark:bg-apple-blue/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-apple-blue" strokeWidth={1.5} />
              </div>

              {/* Degree */}
              {edu.degree && (
                <h3 className="text-xl font-semibold text-apple-text dark:text-apple-dark-text mb-2 tracking-tight">
                  {edu.degree}
                </h3>
              )}

              {/* Institution */}
              <p className="text-base text-apple-blue font-medium mb-4">
                {edu.institution}
              </p>

              {/* Meta info */}
              {(edu.location || edu.period) && (
                <div className="flex flex-wrap gap-4 text-[13px] text-apple-text-secondary dark:text-apple-dark-text-secondary mb-4">
                  {edu.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {edu.location}
                    </span>
                  )}
                  {edu.period && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {edu.period}
                    </span>
                  )}
                </div>
              )}

              {/* Description */}
              {edu.description && (
                <p className="text-apple-text-secondary dark:text-apple-dark-text-secondary text-[15px] leading-relaxed">
                  {edu.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
