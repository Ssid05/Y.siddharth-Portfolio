import { motion } from 'framer-motion'
import { Section, SectionHeader } from '../components/Section'
import { siteData } from '../data/siteData'
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT SECTION - Apple-style contact card
// ═══════════════════════════════════════════════════════════════════════════════

export const Contact = () => {
  const { contact } = siteData

  const socialLinks = [
    { 
      icon: Mail, 
      href: `mailto:${contact.email}`, 
      label: 'Email',
      display: contact.email
    },
    { 
      icon: Github, 
      href: contact.github, 
      label: 'GitHub',
      display: 'View Profile'
    },
    { 
      icon: Linkedin, 
      href: contact.linkedin, 
      label: 'LinkedIn',
      display: 'Connect'
    },
    ...(contact.twitter ? [{ 
      icon: Twitter, 
      href: contact.twitter, 
      label: 'Twitter/X',
      display: '@handle'
    }] : []),
  ]

  return (
    <Section id="contact" className="bg-apple-bg dark:bg-apple-dark-bg">
      <SectionHeader 
        title="Get In Touch"
        subtitle="Let's connect"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="apple-card p-10 text-center"
        >
          {/* Main message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[17px] text-apple-text-secondary dark:text-apple-dark-text-secondary mb-10 leading-relaxed"
          >
            Whether you want to discuss AI research, collaborate on a project, 
            or just say hello — I'd love to hear from you.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-apple-text-secondary dark:text-apple-dark-text-secondary mb-10 text-[14px]"
          >
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            <span>{contact.location}</span>
          </motion.div>

          {/* Social links - Apple minimal style */}
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2 }}
                className="apple-card p-5 text-center hover:border-apple-blue dark:hover:border-apple-blue transition-all duration-200"
              >
                <div className="w-10 h-10 mx-auto mb-3 bg-apple-blue/10 dark:bg-apple-blue/20 rounded-xl flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-apple-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-apple-text dark:text-apple-dark-text font-medium text-[13px] mb-1">{link.label}</h3>
                <p className="text-apple-text-secondary dark:text-apple-dark-text-secondary text-[11px]">{link.display}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
