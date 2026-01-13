import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { siteData } from '../data/siteData'
import { Sparkles } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT SECTION - Bold Gradient Style
// ═══════════════════════════════════════════════════════════════════════════════

export const About = () => {
  const { about } = siteData

  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Gradient background glow - optimized */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-bg via-apple-bg-secondary to-apple-bg">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-purple/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-pink/15 rounded-full blur-[70px]" />
      </div>

      <div className="relative z-10">
        <SectionHeader 
          title="About Me"
          subtitle="Exploring the frontiers of artificial intelligence"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Bio paragraphs */}
          <div className="space-y-6">
            {about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-apple-text-secondary leading-relaxed text-[17px]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Interest cards - Apple style */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="apple-card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-apple-text dark:text-apple-dark-text tracking-tight">
              <Sparkles className="w-6 h-6 text-apple-blue" strokeWidth={1.5} />
              What Excites Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-apple-bg-secondary dark:bg-apple-dark-bg-elevated rounded-xl px-4 py-3 border border-apple-border dark:border-apple-dark-border hover:border-apple-blue dark:hover:border-apple-blue transition-all duration-200"
                >
                  <span className="text-apple-text dark:text-apple-dark-text font-normal text-[15px]">{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </Section>
  )
}
