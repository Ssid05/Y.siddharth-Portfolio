import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION CONTAINER - Apple-style clean sections
// ═══════════════════════════════════════════════════════════════════════════════
// Provides consistent spacing, subtle animations, and Apple-precise styling

interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
  id: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
}

export const Section = ({ id, children, className = '', fullHeight = false, ...props }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-24 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </motion.section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION HEADER - Apple-style section headers
// ═══════════════════════════════════════════════════════════════════════════════

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-display-xl md:text-display-2xl font-semibold text-apple-text dark:text-apple-dark-text tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-apple-text-secondary dark:text-apple-dark-text-secondary max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
