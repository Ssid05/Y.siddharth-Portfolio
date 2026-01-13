import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE LOADER - Premium Loading Animation
// ═══════════════════════════════════════════════════════════════════════════════

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-apple-bg via-apple-bg-secondary to-apple-bg-elevated"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gradient-pink/30"
              style={{ width: '120px', height: '120px' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
                rotate: 360
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gradient-magenta/30"
              style={{ width: '120px', height: '120px' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: -360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            {/* Center logo/text */}
            <div className="w-32 h-32 flex items-center justify-center">
              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-gradient-pink via-gradient-magenta to-gradient-purple bg-clip-text text-transparent"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                YS
              </motion.div>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="absolute bottom-20 text-white/60 text-sm tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
