import { useEffect, useRef } from 'react'
import anime from 'animejs'
import VideoBackground from '../ui/VideoBackground'
import Button from '../ui/Button'
import { mallData } from '../../data/content'

export default function Hero() {
  const taglineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' })

    // Label
    tl.add({
      targets: labelRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    }, 800)

    // Tagline — char by char
    const chars = taglineRef.current?.querySelectorAll('.char')
    if (chars) {
      tl.add({
        targets: chars,
        opacity: [0, 1],
        translateY: [80, 0],
        rotateX: [20, 0],
        duration: 1000,
        delay: anime.stagger(22),
      }, 1100)
    }

    // Sub
    tl.add({
      targets: subRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 700,
    }, 1600)

    // CTAs
    tl.add({
      targets: ctaRef.current?.children,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: anime.stagger(120),
    }, 1900)

    // Stats row
    tl.add({
      targets: statsRef.current?.children,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: anime.stagger(80),
    }, 2000)

    return () => tl.pause()
  }, [])

  const quickStats = [
    { value: '105M', label: 'Annual Visitors' },
    { value: '1,300+', label: 'Stores' },
    { value: '#1', label: 'Most Visited Mall' },
    { value: '5.9M', label: 'Sq Ft' },
  ]

  return (
    <section id="hero" className="relative w-full" style={{ height: '100vh', minHeight: 700 }}>
      <VideoBackground
        fallbackImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
        overlay={true}
        overlayIntensity="medium"
        className="w-full h-full"
      >
        {/* Extra bottom gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,8,8,0) 0%, rgba(8,8,8,0) 35%, rgba(8,8,8,0.6) 65%, rgba(8,8,8,0.98) 100%)',
          }}
        />

        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Main content */}
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{ padding: '0 6vw 10vh' }}
        >
          {/* Location label */}
          <div ref={labelRef} className="flex items-center gap-4 mb-6 opacity-0">
            <div style={{ width: 32, height: 1, background: 'var(--red)' }} />
            <span className="section-label" style={{ fontSize: '0.6rem' }}>
              Downtown Dubai · United Arab Emirates
            </span>
          </div>

          {/* Main tagline */}
          <div
            ref={taglineRef}
            className="font-display text-white mb-6"
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 6rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              maxWidth: '900px',
              perspective: '1200px',
            }}
          >
            {mallData.tagline.split('').map((char, i) => (
              <span
                key={i}
                className="char"
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  color: char === '.' ? 'var(--red)' : 'white',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

          {/* Sub tagline */}
          <p
            ref={subRef}
            className="font-body mb-10 opacity-0"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 520,
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            {mallData.subTagline}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex items-center gap-4 mb-16">
            <button
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                background: 'var(--red)',
                color: '#080808',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: 'none',
                opacity: 0,
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
            >
              Book a Conversation
            </button>
            <button
              onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'var(--red)',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: '1px solid rgba(201,169,110,0.4)',
                opacity: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201,169,110,0.1)'
                e.currentTarget.style.borderColor = 'var(--red)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'
              }}
            >
              Explore the Property
            </button>
          </div>

          {/* Quick stats row */}
          <div
            ref={statsRef}
            className="flex items-center gap-10 border-t"
            style={{ borderColor: 'rgba(201,169,110,0.15)', paddingTop: '24px' }}
          >
            {quickStats.map((stat, i) => (
              <div key={i} style={{ opacity: 0 }}>
                <p
                  className="font-display"
                  style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-body mt-1"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Scroll indicator */}
            <div className="ml-auto flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
              <span className="font-body" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                Scroll
              </span>
              <div
                className="overflow-hidden"
                style={{ width: 1, height: 40, background: 'rgba(201,169,110,0.2)' }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '40%',
                    background: 'var(--red)',
                    animation: 'scrollLine 2s ease-in-out infinite',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </VideoBackground>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
      `}</style>
    </section>
  )
}