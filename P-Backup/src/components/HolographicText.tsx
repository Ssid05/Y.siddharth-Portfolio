import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// HOLOGRAPHIC TEXT - Iridescent Shimmer Effect
// ═══════════════════════════════════════════════════════════════════════════════

interface HolographicTextProps {
  children: ReactNode
  className?: string
}

export const HolographicText = ({ children, className = '' }: HolographicTextProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        background: 'linear-gradient(90deg, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ffff)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
      
      {/* Holographic glow */}
      <motion.span
        className="absolute inset-0"
        style={{
          filter: 'blur(10px)',
          background: 'linear-gradient(90deg, #ff00ff, #00ffff, #ffff00)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.5,
        }}
        animate={{
          backgroundPosition: ['0% center', '200% center'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
