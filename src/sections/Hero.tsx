import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { siteData } from '../data/siteData'
import { useSmoothScroll } from '../hooks/useAnimations'
import { MagneticButton } from '../components/MagneticButton'
import { OrbitRings } from '../components/OrbitRings'

// ═══════════════════════════════════════════════════════════════════════════════
// HERO - Bold Gradient Style with 3D Effects
// ═══════════════════════════════════════════════════════════════════════════════

export const Hero = () => {
  const { personal, contact } = siteData
  const { scrollToSection } = useSmoothScroll()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background with optimized glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-bg via-apple-bg-secondary to-apple-bg-elevated">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-purple/25 rounded-full blur-[100px]"
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-pink/25 rounded-full blur-[100px]"
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* 3D Orbital Rings */}
      <OrbitRings />

      {/* Content container with glow */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Name - Massive with gradient and glow */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 tracking-tighter leading-[0.95]"
        >
          {/* First Name */}
          <span className="inline-block text-white text-glow">
            {personal.name.split(' ')[0].split('').map((letter, index) => (
              <motion.span
                key={`first-${letter}-${index}`}
                initial={{ opacity: 0, y: -100, rotateX: -90 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          {' '}
          {/* Last Name with gradient */}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gradient-pink via-gradient-magenta to-gradient-purple text-glow">
            {personal.name.split(' ')[1].split('').map((letter, index) => (
              <motion.span
                key={`last-${letter}-${index}`}
                initial={{ opacity: 0, y: -100, rotateX: -90 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: (personal.name.split(' ')[0].length + index) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Title - Glowing subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl text-apple-text-secondary mb-4 font-normal tracking-tight max-w-3xl mx-auto"
        >
          {personal.title}
        </motion.h2>

        {/* Tagline - Gradient accent */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-white mb-12 font-normal"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons - Magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          {/* Download CV button - Magnetic with gradient glow */}
          <MagneticButton className="px-7 py-3.5 bg-gradient-to-r from-gradient-pink to-gradient-magenta text-white rounded-full font-semibold text-[14px] tracking-tight shadow-glow-pink transition-all duration-300 flex items-center gap-2">
            <a
              href={personal.resume}
              download
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" strokeWidth={1.5} />
              Download CV
            </a>
          </MagneticButton>

          {/* View Projects button - Magnetic glass effect */}
          <MagneticButton 
            onClick={() => scrollToSection('projects')}
            className="px-7 py-3.5 apple-glass text-white rounded-full font-semibold text-[14px] tracking-tight hover:border-gradient-pink transition-all duration-300 flex items-center gap-2"
          >
            View Projects
          </MagneticButton>
        </motion.div>

        {/* Social Links - Clean, minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center"
        >
          {contact.github && (
            <motion.a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              className="text-apple-text-secondary dark:text-apple-dark-text-secondary hover:text-apple-blue dark:hover:text-apple-blue transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" strokeWidth={1.5} />
            </motion.a>
          )}
          {contact.linkedin && (
            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              className="text-apple-text-secondary dark:text-apple-dark-text-secondary hover:text-apple-blue dark:hover:text-apple-blue transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.5} />
            </motion.a>
          )}
        </motion.div>

        {/* Scroll indicator - subtle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-apple-text-tertiary dark:text-apple-dark-text-tertiary" strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  )
}
