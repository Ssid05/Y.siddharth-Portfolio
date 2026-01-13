import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { useSmoothScroll } from '../hooks/useAnimations'
import { navigationSections } from '../data/siteData'

// ═══════════════════════════════════════════════════════════════════════════════
// GLASSMORPHIC NAVBAR - Bold Gradient Style
// ═══════════════════════════════════════════════════════════════════════════════

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(navigationSections.map(s => s.id))
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Glassmorphic navbar with heavy blur */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-apple-bg/20 border-b border-gradient-purple/20"
        style={{
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
          willChange: 'transform',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Gradient text */}
            <motion.button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold apple-gradient-text tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              YS
            </motion.button>

            {/* Desktop Navigation - Glowing links */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`relative text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-gradient-pink'
                      : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }}
                  transition={{ duration: 0.2 }}
                >
                  {section.label}
                  {/* Active indicator - subtle Apple underline */}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-apple-blue"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              {/* Theme toggle - Apple-style subtle button */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-apple-bg-secondary dark:hover:bg-apple-dark-bg-elevated transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-[18px] h-[18px] text-apple-text-secondary dark:text-apple-dark-text-secondary" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-[18px] h-[18px] text-apple-text-secondary" strokeWidth={1.5} />
                )}
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-apple-bg-secondary dark:hover:bg-apple-dark-bg-elevated transition-all duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-[18px] h-[18px] text-apple-text-secondary dark:text-apple-dark-text-secondary" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-[18px] h-[18px] text-apple-text-secondary dark:text-apple-dark-text-secondary" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Apple-style clean dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-apple-border dark:border-apple-dark-border bg-white/95 dark:bg-apple-dark-bg-elevated/95 backdrop-blur-apple"
          >
            <div className="px-4 py-3 space-y-1">
              {navigationSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-[13px] font-normal transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-apple-blue/10 text-apple-blue dark:text-apple-blue'
                      : 'text-apple-text-secondary dark:text-apple-dark-text-secondary hover:bg-apple-bg-secondary dark:hover:bg-apple-dark-bg-elevated'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-14" />
    </>
  )
}
