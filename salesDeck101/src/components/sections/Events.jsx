import { useState } from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'

export default function Events() {
  const { events } = mallData
  const [activeVenue, setActiveVenue] = useState(0)

  return (
    <SectionWrapper
      id="events"
      className="py-32 px-6 md:px-16 lg:px-24 relative"
      style={{ background: 'var(--surface)' }}
    >
   
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--red), transparent)',
          opacity: 0.6,
        }}
      />

      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
          <span className="section-reveal-label section-label" style={{ opacity: 0 }}>Events & Platform</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <h2
            className="reveal font-display text-white opacity-0"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            {events.headline}
          </h2>
          <p
            className="reveal font-body opacity-0 self-end"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
          >
            {events.subheadline}
          </p>
        </div>

        <div className="reveal opacity-0 mb-16">
          <p className="section-label mb-6" style={{ fontSize: '0.6rem' }}>Activation Venues</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,169,110,0.08)' }}>
            {events.venues.map((venue, i) => (
              <button
                key={i}
                onClick={() => setActiveVenue(i)}
                style={{
                  background: activeVenue === i ? 'rgba(201,169,110,0.1)' : 'var(--surface)',
                  padding: '28px 24px',
                  textAlign: 'left',
                  border: 'none',
                  borderTop: activeVenue === i ? '1px solid var(--red)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: '1.2rem', fontWeight: 300, color: activeVenue === i ? 'var(--red)' : 'white' }}
                >
                  {venue.name}
                </p>
                <p
                  className="font-body"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}
                >
                  {venue.type}
                </p>
              </button>
            ))}
          </div>

    
          <div
            key={activeVenue}
            style={{
              background: 'rgba(201,169,110,0.04)',
              border: '1px solid rgba(201,169,110,0.15)',
              borderTop: 'none',
              padding: '32px',
              animation: 'fadePanel 0.4s ease',
            }}
          >
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: 'Floor Area', value: `${events.venues[activeVenue].sqft} sq ft` },
                { label: 'Capacity', value: `${events.venues[activeVenue].capacity} guests` },
                { label: 'Event Type', value: events.venues[activeVenue].type },
              ].map((item, i) => (
                <div key={i}>
                  <p className="section-label mb-1" style={{ fontSize: '0.55rem' }}>{item.label}</p>
                  <p
                    className="font-display text-white"
                    style={{ fontSize: '1.1rem', fontWeight: 300, color: i === 0 ? 'var(--red)' : 'white' }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="reveal opacity-0 mb-20">
          <p className="section-label mb-6" style={{ fontSize: '0.6rem' }}>Past Activations</p>
          <div className="space-y-0">
            {events.pastEvents.map((event, i) => (
              <div
                key={i}
                className="group flex items-center gap-6 py-5"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <span
                  className="font-display"
                  style={{ fontSize: '0.75rem', color: 'var(--red-dim)', fontStyle: 'italic', minWidth: 20 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-body"
                  style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}
                >
                  {event}
                </p>
                <span
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: 'var(--red)', fontSize: '0.8rem' }}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        
        <div
          className="reveal opacity-0 relative overflow-hidden p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.04) 100%)',
            border: '1px solid rgba(201,169,110,0.25)',
          }}
        >
  
          {[
            'top-0 left-0 border-t border-l',
            'top-0 right-0 border-t border-r',
            'bottom-0 left-0 border-b border-l',
            'bottom-0 right-0 border-b border-r',
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-8 h-8 ${pos}`}
              style={{ borderColor: 'var(--red)' }}
            />
          ))}

          <p className="section-label mb-4" style={{ fontSize: '0.6rem' }}>
            {events.cta.headline}
          </p>
          <h3
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 300 }}
          >
            Let's Build Something{' '}
            <em style={{ color: 'var(--red)' }}>Unforgettable Together.</em>
          </h3>
          <p
            className="font-body mb-10 mx-auto"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}
          >
            {events.cta.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:commercial@thedubaimall.com"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'var(--red)',
                color: '#080808',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
            >
              Start a Conversation
            </a>
            <a
              href="tel:+97144480000"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'transparent',
                color: 'var(--red)',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: '1px solid rgba(201,169,110,0.4)',
                textDecoration: 'none',
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
              +971 4 448 0000
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadePanel {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </SectionWrapper>
  )
}