import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// TEXT REVEAL - Cinematic Text Animation
// ═══════════════════════════════════════════════════════════════════════════════

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export const TextReveal = ({ children, className = '', delay = 0 }: TextRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i !== words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
