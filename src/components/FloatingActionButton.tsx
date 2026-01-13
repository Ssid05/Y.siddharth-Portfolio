import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// FLOATING ACTION BUTTON - Scroll to Top
// ═══════════════════════════════════════════════════════════════════════════════

export const FloatingActionButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center shadow-lg hover:bg-white/20 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  )
}
