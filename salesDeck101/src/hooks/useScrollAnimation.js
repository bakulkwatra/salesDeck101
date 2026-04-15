// import { useEffect, useRef, useState } from 'react'

// export function useScrollAnimation(options = {}) {
//   const ref = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)
//   const [hasTriggered, setHasTriggered] = useState(false)

//   const {
//     threshold = 0.15,
//     rootMargin = '0px 0px -80px 0px',
//     once = true,
//   } = options

//   useEffect(() => {
//     const element = ref.current
//     if (!element) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           if (!hasTriggered) setHasTriggered(true)
//           if (once) observer.unobserve(element)
//         } else if (!once) {
//           setIsVisible(false)
//         }
//       },
//       { threshold, rootMargin }
//     )

//     observer.observe(element)
//     return () => observer.disconnect()
//   }, [threshold, rootMargin, once, hasTriggered])

//   return { ref, isVisible, hasTriggered }
// }

// export function useParallax(speed = 0.3) {
//   const ref = useRef(null)

//   useEffect(() => {
//     const element = ref.current
//     if (!element) return

//     const handleScroll = () => {
//       const rect = element.getBoundingClientRect()
//       const scrolled = window.scrollY
//       const rate = scrolled * speed
//       if (element) {
//         element.style.transform = `translateY(${rate}px)`
//       }
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [speed])

//   return ref
// }

// export function useActiveSection(sectionIds) {
//   const [activeSection, setActiveSection] = useState(sectionIds[0])

//   useEffect(() => {
//     const observers = []

//     sectionIds.forEach((id) => {
//       const element = document.getElementById(id)
//       if (!element) return

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveSection(id)
//           }
//         },
//         { threshold: 0.4 }
//       )
//       observer.observe(element)
//       observers.push(observer)
//     })

//     return () => observers.forEach((o) => o.disconnect())
//   }, [sectionIds])

//   return activeSection
// }

import { useEffect, useRef, useState, useCallback } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  const {
    threshold = 0.15,
    rootMargin = '0px 0px -80px 0px',
    once = true,
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!hasTriggered) setHasTriggered(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, hasTriggered])

  return { ref, isVisible, hasTriggered }
}

export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * speed
      if (element) {
        element.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}

// Scroll-position based detection — reliable at any screen size or zoom level
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  const findActive = useCallback(() => {
    const scrollY = window.scrollY
    const windowH = window.innerHeight
    // Trigger point: 35% down from top of viewport
    const trigger = scrollY + windowH * 0.35

    let current = sectionIds[0]
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + scrollY
      if (trigger >= top) current = id
    }
    setActiveSection(current)
  }, [sectionIds])

  useEffect(() => {
    findActive()
    window.addEventListener('scroll', findActive, { passive: true })
    window.addEventListener('resize', findActive, { passive: true })
    return () => {
      window.removeEventListener('scroll', findActive)
      window.removeEventListener('resize', findActive)
    }
  }, [findActive])

  return activeSection
}