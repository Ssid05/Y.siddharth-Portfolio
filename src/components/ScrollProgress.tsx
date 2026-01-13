import { motion, useScroll, useSpring } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS INDICATOR - Premium Touch
// ═══════════════════════════════════════════════════════════════════════════════

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gradient-pink via-gradient-magenta to-gradient-purple z-50 origin-left"
      style={{ scaleX }}
    />
  )
}
