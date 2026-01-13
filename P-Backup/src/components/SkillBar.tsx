import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// SKILL BAR - Animated Progress Visualization
// ═══════════════════════════════════════════════════════════════════════════════

interface SkillBarProps {
  name: string
  level: number
  index: number
}

export const SkillBar = ({ name, level, index }: SkillBarProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white">{name}</span>
        <motion.span
          className="text-xs text-gradient-pink font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-apple-bg-elevated rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gradient-pink via-gradient-magenta to-gradient-purple rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            delay: 0.2 + index * 0.1,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: 1 + index * 0.1
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
