import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/** 
 * note for self :Children with class 'reveal' will animate in on scroll
 */
export default function SectionWrapper({ id, children, className = '' }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const section = ref.current
    if (!section) return

    
    const label = section.querySelector('.section-reveal-label')
    if (label) {
      anime({
        targets: label,
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        easing: 'easeOutExpo',
      })
    }

    
    const line = section.querySelector('.section-reveal-line')
    if (line) {
      anime({
        targets: line,
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 100,
      })
    }


    const revealEls = section.querySelectorAll('.reveal')
    if (revealEls.length) {
      anime({
        targets: revealEls,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 900,
        delay: anime.stagger(120, { start: 200 }),
        easing: 'easeOutExpo',
      })
    }


    const leftEls = section.querySelectorAll('.reveal-left')
    if (leftEls.length) {
      anime({
        targets: leftEls,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 900,
        delay: anime.stagger(100, { start: 200 }),
        easing: 'easeOutExpo',
      })
    }
  }, [isVisible, ref])

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      {children}
    </section>
  )
}