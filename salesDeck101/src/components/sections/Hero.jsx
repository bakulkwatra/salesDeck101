import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { mallData } from '../../data/content'

export default function Hero() {
  const taglineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' })

    tl.add({
      targets: labelRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    }, 800)

    const chars = taglineRef.current?.querySelectorAll('.char')
    if (chars?.length) {
      tl.add({
        targets: chars,
        opacity: [0, 1],
        translateY: [80, 0],
        rotateX: [20, 0],
        duration: 1000,
        delay: anime.stagger(22),
      }, 1100)
    }

    tl.add({ targets: subRef.current, opacity: [0, 1], translateY: [30, 0], duration: 700 }, 1600)
    tl.add({ targets: ctaRef.current?.children, opacity: [0, 1], translateY: [20, 0], duration: 600, delay: anime.stagger(120) }, 1900)
    tl.add({ targets: statsRef.current?.children, opacity: [0, 1], translateY: [20, 0], duration: 600, delay: anime.stagger(80) }, 2000)

    return () => tl.pause()
  }, [])

  const quickStats = [
    { value: '105M', label: 'Annual Visitors' },
    { value: '1,300+', label: 'Stores' },
    { value: '#1', label: 'Most Visited Mall' },
    { value: '5.9M', label: 'Sq Ft' },
  ]

  return (
    <section id="hero" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 700, overflow: 'hidden' }}>

      {/* ── VIDEO BACKGROUND ──
          Option A (recommended): Download a free video from pexels.com/videos
          search "Dubai aerial" or "luxury mall" — download MP4, place in /public/hero-bg.mp4
          Then uncomment the <video> tag below and comment out the fallback div.

          Option B: Uses a gradient fallback (works right now, no setup needed)
      */}

      {/* OPTION A — local video file (uncomment when you have the file) */}
      
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        poster="/images/hero-poster.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
     

      {/* OPTION B — Gradient background (active by default) */}
      {/* <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, #0a0808 0%, #1a0e0a 40%, #0a0808 100%)',
      }} /> */}

      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(196,75,42,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(196,75,42,0.07) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.6,
      }} />

      {/* Dark overlay for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(8,8,8,0) 0%, rgba(8,8,8,0) 30%, rgba(8,8,8,0.65) 65%, rgba(8,8,8,0.98) 100%)',
      }} />

      {/* Main content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 clamp(24px, 6vw, 96px) clamp(64px, 10vh, 120px)',
      }}>
        {/* Location label */}
        <div ref={labelRef} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, opacity: 0 }}>
          <div style={{ width: 32, height: 1, background: 'var(--red)' }} />
          <span className="section-label" style={{ fontSize: '0.58rem' }}>
            Downtown Dubai · United Arab Emirates
          </span>
        </div>

        {/* Main tagline — char by char */}
        <div
          ref={taglineRef}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.6rem, 6.5vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            maxWidth: 900,
            perspective: '1200px',
            marginBottom: 24,
          }}
        >
          {mallData.tagline.split('').map((char, i) => (
            <span
              key={i}
              className="char"
              style={{
                display: 'inline-block',
                opacity: 0,
                color: char === '.' ? 'var(--red)' : '#ffffff',
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
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 500,
            lineHeight: 1.7,
            marginBottom: 40,
            opacity: 0,
          }}
        >
          {mallData.subTagline}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56, flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 32px',
              background: 'var(--red)',
              color: '#fff',
              fontFamily: 'Syne, sans-serif',
              fontSize: '0.62rem',
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
            onClick={() => document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: 'var(--red)',
              fontFamily: 'Syne, sans-serif',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(196,75,42,0.4)',
              opacity: 0,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196,75,42,0.1)'; e.currentTarget.style.borderColor = 'var(--red)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(196,75,42,0.4)' }}
          >
            Partnership Opportunities
          </button>
        </div>

        {/* Quick stats */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(24px, 4vw, 48px)',
            borderTop: '1px solid rgba(196,75,42,0.15)',
            paddingTop: 24,
            flexWrap: 'wrap',
          }}
        >
          {quickStats.map((stat, i) => (
            <div key={i} style={{ opacity: 0 }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                fontWeight: 300,
                color: 'var(--red)',
                lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>
                {stat.label}
              </p>
            </div>
          ))}

          {/* Scroll indicator */}
          <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.4 }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              Scroll
            </span>
            <div style={{ width: 1, height: 40, background: 'rgba(196,75,42,0.2)', overflow: 'hidden' }}>
              <div style={{
                width: '100%',
                height: '40%',
                background: 'var(--red)',
                animation: 'scrollLine 2s ease-in-out infinite',
              }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
      `}</style>
    </section>
  )
}