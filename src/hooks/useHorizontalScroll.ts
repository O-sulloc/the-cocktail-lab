import { useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

interface UseHorizontalScrollProps {
  sectionRef: React.RefObject<HTMLDivElement>
  wrapperRef: React.RefObject<HTMLDivElement>
}

export const useHorizontalScroll = ({ sectionRef, wrapperRef }: UseHorizontalScrollProps) => {
  const initScrollAnimation = useCallback(() => {
    const wrapper = wrapperRef.current
    const section = sectionRef.current

    if (!wrapper || !section) return

    // Calculate the scroll distance: total width of cards - viewport width
    const updateScroll = () => {
      const wrapperWidth = wrapper.scrollWidth
      const viewportWidth = window.innerWidth
      const extraMargin = 40 // Add extra margin space to ensure the last card's margin is visible
      const scrollDistance = wrapperWidth - viewportWidth + extraMargin

      gsap.to(wrapper, {
        x: `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "center center",
          scrub: 1,
          end: `+=${scrollDistance}`,
          invalidateOnRefresh: true
        }
      })
    }

    // Run on mount and on resize
    updateScroll()
    window.addEventListener('resize', updateScroll)

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateScroll)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [sectionRef, wrapperRef])

  const cleanupScrollAnimation = useCallback(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return {
    initScrollAnimation,
    cleanupScrollAnimation
  }
} 