import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { siteData } from '../data/siteData'
import { SkillBar } from '../components/SkillBar'

// ═══════════════════════════════════════════════════════════════════════════════
// SKILLS SECTION - Premium Animated Visualization
// ═══════════════════════════════════════════════════════════════════════════════

export const Skills = () => {
  const { skills } = siteData

  return (
    <Section id="skills" className="bg-apple-bg-secondary dark:bg-apple-dark-bg-elevated">
      <SectionHeader 
        title="Skills & Technologies"
        subtitle="The tools that power innovation"
      />

      <div className="space-y-12 max-w-6xl mx-auto">
        {skills.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category header - Apple style */}
            <h3 className="text-xl font-semibold mb-6 text-apple-text dark:text-apple-dark-text flex items-center gap-3 tracking-tight">
              {category.category}
              {category.featured && (
                <span className="px-3 py-1 bg-apple-blue/10 dark:bg-apple-blue/20 rounded-full text-[11px] text-apple-blue font-normal">
                  Core
                </span>
              )}
            </h3>

            {/* Skills with animated progress bars */}
            <div className="apple-card p-8 space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level || 85}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
