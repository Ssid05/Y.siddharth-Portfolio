import { motion } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════════════════════
// ORBIT RINGS - Next Level 3D Rotating Arcs with Depth & Glow
// ═══════════════════════════════════════════════════════════════════════════════
// Enhanced with rotating arcs, depth layers, and futuristic glow effects

export const OrbitRings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '2000px' }}>
      {/* Rotating 3D arc rings - responsive sizes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer rotating arc - slowest */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(300px, 60vw, 600px)',
            height: 'clamp(300px, 60vw, 600px)',
            background: 'radial-gradient(circle at 50% 30%, rgba(245, 163, 208, 0.3) 0%, rgba(217, 70, 239, 0.2) 35%, rgba(192, 38, 211, 0.15) 60%, transparent 100%)',
            border: '2px solid rgba(245, 163, 208, 0.15)',
            boxShadow: '0 0 80px rgba(245, 163, 208, 0.3), inset 0 0 80px rgba(217, 70, 239, 0.2)',
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.7, 0.5],
            rotateX: [0, 15, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Large arc ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(240px, 48vw, 480px)',
            height: 'clamp(240px, 48vw, 480px)',
            background: 'radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.35) 0%, rgba(217, 70, 239, 0.25) 40%, rgba(126, 31, 134, 0.18) 70%, transparent 100%)',
            border: '2px solid rgba(236, 72, 153, 0.2)',
            boxShadow: '0 0 100px rgba(236, 72, 153, 0.4), inset 0 0 60px rgba(217, 70, 239, 0.3)',
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.85, 0.6],
            rotateX: [0, -12, 0],
            rotateZ: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Medium arc ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(180px, 35vw, 350px)',
            height: 'clamp(180px, 35vw, 350px)',
            background: 'radial-gradient(circle at 50% 30%, rgba(245, 163, 208, 0.4) 0%, rgba(236, 72, 153, 0.3) 40%, rgba(192, 38, 211, 0.22) 70%, transparent 100%)',
            border: '3px solid rgba(245, 163, 208, 0.25)',
            boxShadow: '0 0 120px rgba(245, 163, 208, 0.5), inset 0 0 80px rgba(236, 72, 153, 0.4)',
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.7, 0.9, 0.7],
            rotateX: [0, 20, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Inner arc ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(110px, 22vw, 220px)',
            height: 'clamp(110px, 22vw, 220px)',
            background: 'radial-gradient(circle at 50% 30%, rgba(245, 163, 208, 0.5) 0%, rgba(217, 70, 239, 0.35) 40%, rgba(126, 31, 134, 0.25) 70%, transparent 100%)',
            border: '3px solid rgba(245, 163, 208, 0.3)',
            boxShadow: '0 0 140px rgba(245, 163, 208, 0.6), inset 0 0 100px rgba(217, 70, 239, 0.5)',
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
            rotateX: [0, -18, 0],
            rotateZ: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Core glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(60px, 12vw, 120px)',
            height: 'clamp(60px, 12vw, 120px)',
            background: 'radial-gradient(circle, rgba(245, 163, 208, 0.6) 0%, rgba(217, 70, 239, 0.4) 50%, transparent 100%)',
            boxShadow: '0 0 160px rgba(245, 163, 208, 0.8), 0 0 80px rgba(217, 70, 239, 0.6)',
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Enhanced depth orbs with more glow */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full blur-[120px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(245, 163, 208, 0.4) 0%, rgba(217, 70, 239, 0.2) 70%, transparent 100%)',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full blur-[130px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(192, 38, 211, 0.25) 70%, transparent 100%)',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, rgba(126, 31, 134, 0.15) 70%, transparent 100%)',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating light particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `radial-gradient(circle, rgba(245, 163, 208, ${0.6 + Math.random() * 0.4}) 0%, transparent 100%)`,
              boxShadow: `0 0 ${10 + Math.random() * 15}px rgba(245, 163, 208, 0.8)`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Pulsing ring lines for extra depth */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${600 + i * 150}px`,
            height: `${600 + i * 150}px`,
            border: '1px solid rgba(245, 163, 208, 0.15)',
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
