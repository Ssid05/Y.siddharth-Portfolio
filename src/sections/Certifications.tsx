import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { siteData } from '../data/siteData'
import { Award, Calendar } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// CERTIFICATIONS SECTION - Apple-style certification grid
// ═══════════════════════════════════════════════════════════════════════════════

export const Certifications = () => {
  const { certifications } = siteData

  return (
    <Section id="certifications" className="bg-apple-bg-secondary dark:bg-apple-dark-bg-elevated">
      <SectionHeader 
        title="Certifications"
        subtitle="Validated expertise"
      />

      {/* Certification grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.05,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="apple-card p-6 h-full"
            >
              {/* Icon */}
              <div className="w-11 h-11 mb-4 bg-apple-blue/10 dark:bg-apple-blue/20 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-apple-blue" strokeWidth={1.5} />
              </div>

              {/* Certification name */}
              <h3 className="text-base font-semibold text-apple-text dark:text-apple-dark-text mb-2 leading-snug tracking-tight">
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="text-apple-blue font-medium mb-3 text-[14px]">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-[12px] text-apple-text-secondary dark:text-apple-dark-text-secondary">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                {cert.date}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
