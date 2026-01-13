import { motion } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════════════════════
// FUTURISTIC GRID - Cyberpunk Background Layer
// ═══════════════════════════════════════════════════════════════════════════════

export const FuturisticGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Vertical lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
            <stop offset="50%" stopColor="#f5a3d0" stopOpacity="1" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="gridGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#c026d3" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Vertical grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i + 1) * 5}%`}
            y1="0"
            x2={`${(i + 1) * 5}%`}
            y2="100%"
            stroke="url(#gridGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: i * 0.05, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
        
        {/* Horizontal grid lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${(i + 1) * 6.67}%`}
            x2="100%"
            y2={`${(i + 1) * 6.67}%`}
            stroke="url(#gridGradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: i * 0.05, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
        
        {/* Animated scan line */}
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#00ffff"
          strokeWidth="2"
          filter="blur(2px)"
          animate={{ y1: ['0%', '100%'], y2: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-500/50" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-magenta-500/50" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-magenta-500/50" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-500/50" />
    </div>
  )
}
