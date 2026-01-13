import { useEffect, useState, RefObject } from 'react'

interface UseSectionInViewOptions {
  threshold?: number
  rootMargin?: string
}

// Hook: Tracks which section is in view - like a cosmic GPS for your scroll position
export const useSectionInView = (
  ref: RefObject<HTMLElement>,
  options: UseSectionInViewOptions = {}
): boolean => {
  const [isInView, setIsInView] = useState(false)
  const { threshold = 0.3, rootMargin = '0px' } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // IntersectionObserver: The event horizon detector for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, rootMargin])

  return isInView
}
