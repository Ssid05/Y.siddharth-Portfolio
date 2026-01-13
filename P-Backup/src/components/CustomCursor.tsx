import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// CUSTOM CURSOR - Premium Gradient Trail Effect
// ═══════════════════════════════════════════════════════════════════════════════

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[200] mix-blend-difference"
        style={{
          background: 'linear-gradient(135deg, #f5a3d0, #d946ef)',
        }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 2000,
          damping: 60,
          mass: 0.1,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-gradient-pink/50 pointer-events-none z-[199]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 25,
          mass: 0.1,
        }}
      />

      {/* Trail effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[198]"
          style={{
            background: `rgba(245, 163, 208, ${0.6 - i * 0.2})`,
          }}
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            type: 'spring',
            stiffness: 600 - i * 50,
            damping: 35 + i * 5,
          }}
        />
      ))}
    </>
  )
}
