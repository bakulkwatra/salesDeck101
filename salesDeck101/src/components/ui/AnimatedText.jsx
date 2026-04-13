import { useEffect, useRef } from 'react'
import anime from 'animejs'

/**
 * AnimatedText — staggered character/word reveal using anime.js
 * Props:
 *   text: string
 *   tag: 'h1'|'h2'|'h3'|'p' (default 'div')
 *   className: string
 *   type: 'chars'|'words'|'lines' (default 'chars')
 *   delay: number ms before animation starts
 *   stagger: number ms between each unit
 *   trigger: boolean — when true, animation fires
 *   duration: number ms
 */
export default function AnimatedText({
  text = '',
  tag: Tag = 'div',
  className = '',
  type = 'chars',
  delay = 0,
  stagger = 30,
  trigger = true,
  duration = 800,
  easing = 'easeOutExpo',
}) {
  const containerRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!trigger || hasAnimated.current) return
    const container = containerRef.current
    if (!container) return

    hasAnimated.current = true

    const units = container.querySelectorAll('.anim-unit')
    anime({
      targets: units,
      opacity: [0, 1],
      translateY: ['60px', '0px'],
      rotateX: ['15deg', '0deg'],
      delay: anime.stagger(stagger, { start: delay }),
      duration,
      easing,
    })
  }, [trigger, delay, stagger, duration, easing])

  const splitText = () => {
    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          className="anim-unit"
          style={{
            display: 'inline-block',
            opacity: 0,
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    }
    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <span
            className="anim-unit"
            style={{ display: 'inline-block', opacity: 0 }}
          >
            {word}
            {i < text.split(' ').length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))
    }
    // lines
    return text.split('\n').map((line, i) => (
      <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
        <span className="anim-unit" style={{ display: 'block', opacity: 0 }}>
          {line}
        </span>
      </span>
    ))
  }

  return (
    <Tag
      ref={containerRef}
      className={className}
      style={{ perspective: '1000px' }}
    >
      {splitText()}
    </Tag>
  )
}