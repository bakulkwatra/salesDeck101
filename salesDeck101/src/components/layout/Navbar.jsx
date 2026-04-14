import { useEffect, useState } from 'react'
import { navItems } from '../../data/content'

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-700"
      style={{
        padding: scrolled ? '16px 48px' : '28px 48px',
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3"
        >
          <div
            style={{
              width: 1,
              height: 32,
              background: 'var(--red)',
              opacity: 0.7,
            }}
          />
          <div className="text-left">
            <p
              className="font-body text-white"
              style={{ fontSize: '0.6rem', letterSpacing: '0.25em', opacity: 0.5 }}
            >
              THE
            </p>
            <p
              className="font-display text-white"
              style={{ fontSize: '1rem', letterSpacing: '0.2em', fontWeight: 400, lineHeight: 1 }}
            >
              DUBAI MALL
            </p>
          </div>
        </button>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover-underline transition-colors duration-300"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                fontWeight: 600,
                fontFamily: 'Syne, sans-serif',
                color: activeSection === item.id ? 'var(--red)' : 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('events')}
          className="hidden md:flex items-center gap-2 transition-all duration-300"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            fontWeight: 600,
            fontFamily: 'Syne, sans-serif',
            color: 'var(--red)',
            background: 'transparent',
            border: '1px solid rgba(201,169,110,0.4)',
            padding: '10px 20px',
            textTransform: 'uppercase',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--red)'
            e.currentTarget.style.color = '#080808'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--red)'
          }}
        >
          Book a Conversation
        </button>
      </div>
    </nav>
  )
}