import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { siteData } from '../data/siteData'

// ═══════════════════════════════════════════════════════════════════════════════
// APPLE-STYLE FOOTER - Clean and minimal
// ═══════════════════════════════════════════════════════════════════════════════

export const Footer = () => {
  const { contact } = siteData

  const socialLinks = [
    { icon: Github, href: contact.github, label: 'GitHub' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
    ...(contact.twitter ? [{ icon: Twitter, href: contact.twitter, label: 'Twitter' }] : []),
  ]

  return (
    <footer className="relative border-t border-apple-border dark:border-apple-dark-border bg-apple-bg dark:bg-apple-dark-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links - Apple minimal style */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-apple-text-secondary dark:text-apple-dark-text-secondary hover:text-apple-blue dark:hover:text-apple-blue transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>

          {/* Footer text - Apple minimal */}
          <div className="text-center space-y-2">
            <p className="text-apple-text-tertiary dark:text-apple-dark-text-tertiary text-[13px] flex items-center justify-center gap-2">
              Crafted with care
            </p>
            <p className="text-apple-text-tertiary dark:text-apple-dark-text-tertiary text-[11px]">
              © {new Date().getFullYear()} {siteData.personal.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
