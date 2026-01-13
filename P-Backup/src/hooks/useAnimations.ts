import { useEffect } from 'react'

// Hook: Detects reduced motion preference - accessibility is not optional
// Disables fancy animations for users who prefer calm experiences
export const useReducedMotion = (): boolean => {
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return prefersReducedMotion
}

// Hook: Smooth scroll to section - because teleportation isn't invented yet
export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // Smooth like butter (or a frictionless quantum vacuum)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return { scrollToSection }
}
