import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { siteData } from '../data/siteData'
import { useState } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// PROJECTS SECTION - Apple-style portfolio grid
// ═══════════════════════════════════════════════════════════════════════════════
// Clean grid layout with category filtering

export const Projects = () => {
  const { projects } = siteData
  const [filter, setFilter] = useState<string>('All')

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* Gradient background glow - optimized */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-bg via-apple-bg-elevated to-apple-bg">
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-rose/12 rounded-full blur-[70px]" />
      </div>

      <div className="relative z-10">
      <SectionHeader 
        title="Projects"
        subtitle="Innovative AI solutions"
      />

      {/* Category filters - Apple minimal style */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`px-5 py-2 rounded-full font-normal text-[13px] transition-all duration-200 ${
              filter === category
                ? 'bg-apple-blue text-white shadow-apple'
                : 'bg-apple-bg-secondary dark:bg-apple-dark-bg-elevated text-apple-text-secondary dark:text-apple-dark-text-secondary border border-apple-border dark:border-apple-dark-border hover:border-apple-blue dark:hover:border-apple-blue'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects grid - Apple bento style */}
      <motion.div 
        layout
        className="grid grid-cols-1 gap-5 max-w-4xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-apple-text-secondary dark:text-apple-dark-text-secondary text-[15px]">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
    </Section>
  )
}
