import { motion } from 'framer-motion'
import { Github, Sparkles } from 'lucide-react'
import { ProjectItem } from '../data/siteData'
import { HolographicCard } from './HolographicCard'

// ═══════════════════════════════════════════════════════════════════════════════
// PROJECT CARD - Year 3000 Holographic Showcase
// ═══════════════════════════════════════════════════════════════════════════════

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Year 3000 Holographic Card */}
      <HolographicCard className="relative h-full apple-card p-6 overflow-hidden">
        {/* Holographic glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gradient-pink/5 via-gradient-magenta/5 to-gradient-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-6 right-6 z-10">
            <div className="px-3 py-1.5 bg-apple-blue/10 dark:bg-apple-blue/20 rounded-full text-[11px] text-apple-blue font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" strokeWidth={1.5} />
              Featured
            </div>
          </div>
        )}

        {/* Category badge */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-apple-bg-secondary dark:bg-apple-dark-bg rounded-full text-[11px] text-apple-text-secondary dark:text-apple-dark-text-secondary font-normal border border-apple-border dark:border-apple-dark-border">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-apple-text dark:text-apple-dark-text mb-3 tracking-tight group-hover:text-apple-blue dark:group-hover:text-apple-blue transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-apple-text-secondary dark:text-apple-dark-text-secondary mb-5 leading-relaxed text-[15px]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-apple-bg-secondary dark:bg-apple-dark-bg-elevated rounded-full text-[12px] text-apple-text-secondary dark:text-apple-dark-text-secondary font-normal"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 border border-apple-border dark:border-apple-dark-border rounded-full hover:border-apple-blue dark:hover:border-apple-blue transition-all duration-200 text-[13px] font-normal text-apple-text dark:text-apple-dark-text w-fit mt-auto"
          >
            <Github className="w-4 h-4" strokeWidth={1.5} />
            View Code
          </motion.a>
        )}
      </HolographicCard>
    </motion.div>
  )
}
