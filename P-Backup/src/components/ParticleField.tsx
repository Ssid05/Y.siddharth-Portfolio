import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// 3D PARTICLE FIELD - Futuristic Floating Elements
// ═══════════════════════════════════════════════════════════════════════════════

interface Particle {
  id: number
  x: number
  y: number
  z: number
  size: number
  color: string
  speed: number
}

export const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const particleCount = 50
    const colors = ['#ffffff']
    
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 1000,
      size: Math.random() * 4 + 1,
      color: '#ffffff',
      speed: Math.random() * 3 + 2,
    }))
    
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            transform: `translateZ(${particle.z}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0.03, 0.12, 0.03],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.id * 0.1,
          }}
        />
      ))}
    </div>
  )
}
