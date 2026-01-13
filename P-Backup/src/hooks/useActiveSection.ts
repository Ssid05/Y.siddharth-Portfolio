import { useEffect, useState } from 'react'

// Hook: Returns current active section ID based on scroll position
// Powers the navbar's glowing active indicator - like a neural pathway lighting up
export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '')

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is most visible in viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const { offsetTop, offsetHeight } = element

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id)
          break
        }
      }
    }

    // Throttle scroll events - we're fast, but not wasteful
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeSection
}
