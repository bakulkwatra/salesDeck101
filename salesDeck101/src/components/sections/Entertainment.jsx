import { useRef } from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'

export default function Entertainment() {
  const { entertainment } = mallData

  return (
    <SectionWrapper
      id="entertainment"
      className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
     
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,169,110,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
          <span className="section-reveal-label section-label" style={{ opacity: 0 }}>Entertainment</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <h2
            className="reveal font-display text-white opacity-0"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            {entertainment.headline}
          </h2>
          <p
            className="reveal font-body opacity-0 self-end"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
          >
            {entertainment.subheadline}
          </p>
        </div>

        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {entertainment.attractions.map((item, i) => (
            <div
              key={i}
              className="reveal opacity-0 group relative"
              style={{
                background: 'var(--bg)',
                padding: '40px 32px',
                transition: 'background 0.5s ease',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,169,110,0.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
            >
   
              <div
                className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  borderTop: '1px solid var(--red)',
                  borderLeft: '1px solid var(--red)',
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  borderBottom: '1px solid var(--red)',
                  borderRight: '1px solid var(--red)',
                }}
              />

              <div
                className="inline-block mb-6"
                style={{
                  padding: '5px 12px',
                  background: 'rgba(201,169,110,0.1)',
                  border: '1px solid rgba(201,169,110,0.2)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                {item.stat}
              </div>

              <h3
                className="font-display text-white mb-3"
                style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.2 }}
              >
                {item.name}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

   
        <div
          className="reveal mt-16 opacity-0 flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-10"
          style={{ borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}
        >
          <p
            className="font-display text-white"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: 300, maxWidth: 500 }}
          >
            Your brand, surrounded by experiences{' '}
            <em style={{ color: 'var(--red)' }}>people travel the world to see.</em>
          </p>
          <button
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              flexShrink: 0,
              padding: '14px 32px',
              background: 'transparent',
              color: 'var(--red)',
              fontFamily: 'Syne, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(201,169,110,0.4)',
              transition: 'all 0.3s ease',
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
            Book an Activation →
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}