import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'


function AudienceStat({ label, value, sub, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const animated = useRef(false)
  const elRef = useRef(null)

  useEffect(() => {
    if (!isVisible || animated.current) return
    animated.current = true
    anime({
      targets: elRef.current,
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 700,
      delay: index * 80,
      easing: 'easeOutExpo',
    })
  }, [isVisible, index])

  return (
    <div
      ref={ref}
      style={{
        padding: '28px 24px',
        borderTop: '1px solid var(--border-subtle)',
        transition: 'border-color 0.4s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
    >
      <div ref={elRef} style={{ opacity: 0 }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 300,
          color: 'var(--red)',
          lineHeight: 1,
          marginBottom: 6,
        }}>
          {value}
        </p>
        <p style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          marginBottom: 4,
        }}>
          {label}
        </p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
          {sub}
        </p>
      </div>
    </div>
  )
}

// Tier card
function TierCard({ tier, index, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="reveal"
      style={{
        textAlign: 'left',
        background: isActive
          ? 'var(--card-hover-bg)'
          : 'var(--card-bg)',
        border: isActive
          ? '1px solid var(--red)'
          : '1px solid var(--border-subtle)',
        padding: '32px',
        transition: 'all 0.35s ease',
        opacity: 0,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.borderColor = 'var(--border-mid)'
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.borderColor = 'var(--border-subtle)'
      }}
    >
 
      {tier.highlight && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 2,
          background: 'var(--red)',
        }} />
      )}

      <div style={{
        display: 'inline-block',
        fontSize: '0.55rem',
        letterSpacing: '0.18em',
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        color: tier.highlight ? 'var(--red)' : 'var(--text-muted)',
        border: `1px solid ${tier.highlight ? 'var(--border-mid)' : 'var(--border-subtle)'}`,
        padding: '3px 10px',
        marginBottom: 16,
        textTransform: 'uppercase',
      }}>
        {tier.tag}
      </div>

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.6rem',
        fontWeight: 300,
        color: 'var(--text-primary)',
        marginBottom: 4,
        lineHeight: 1.1,
      }}>
        {tier.name}
      </p>

      <p style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '0.72rem',
        color: 'var(--red)',
        letterSpacing: '0.08em',
        marginBottom: 16,
        fontWeight: 600,
      }}>
        {tier.price}
      </p>

      <p style={{
        fontSize: '0.82rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        marginBottom: 20,
      }}>
        {tier.description}
      </p>

      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: '0.6rem',
        fontFamily: 'Syne, sans-serif',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: isActive ? 'var(--red)' : 'var(--text-muted)',
        transition: 'color 0.3s ease',
      }}>
        <div style={{ width: 16, height: 1, background: 'currentColor' }} />
        {isActive ? 'Benefits shown below' : 'View benefits'}
      </div>
    </button>
  )
}

export default function Sponsorship() {
  const { sponsorship } = mallData
  const [activeTier, setActiveTier] = useState(0)

  return (
    <SectionWrapper
      id="sponsorship"
      className="py-32 px-6 md:px-16 lg:px-24 relative"
      style={{ background: 'var(--bg)' }}
    >
      
      <div style={{
        position: 'absolute',
        top: 0, left: '10%', right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--red), transparent)',
        opacity: 0.5,
      }} />

      
      <div style={{
        position: 'absolute',
        top: 32, right: 48,
        fontSize: '0.55rem',
        fontFamily: 'Syne, sans-serif',
        letterSpacing: '0.2em',
        color: 'var(--text-muted)',
        border: '1px solid var(--border-subtle)',
        padding: '4px 10px',
        textTransform: 'uppercase',
      }}>
        Phase 2 · Partner Module
      </div>

      <div className="max-w-screen-xl mx-auto">

        
        <div className="flex items-center gap-4 mb-6">
          <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
          <span className="section-reveal-label section-label" style={{ opacity: 0 }}>
            Sponsorship & Partnerships
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
        }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              opacity: 0,
            }}
          >
            {sponsorship.headline}
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              opacity: 0,
              alignSelf: 'end',
            }}
          >
            {sponsorship.subheadline}
          </p>
        </div>

       
        <div className="reveal" style={{ marginBottom: '5rem', opacity: 0 }}>
          <p className="section-label" style={{ fontSize: '0.58rem', marginBottom: '1.5rem' }}>
            Audience Intelligence
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            background: 'var(--surface)',
          }}>
            {sponsorship.audience.map((item, i) => (
              <AudienceStat key={i} {...item} index={i} />
            ))}
          </div>
        </div>

        
        <div style={{ marginBottom: '5rem' }}>
          <p className="section-label reveal" style={{ fontSize: '0.58rem', marginBottom: '1.5rem', opacity: 0 }}>
            Partnership Tiers
          </p>

      
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 1,
            background: 'var(--border-subtle)',
            marginBottom: 0,
          }}>
            {sponsorship.tiers.map((tier, i) => (
              <TierCard
                key={i}
                tier={tier}
                index={i}
                isActive={activeTier === i}
                onClick={() => setActiveTier(i)}
              />
            ))}
          </div>


          <div
            key={activeTier}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-subtle)',
              borderTop: '2px solid var(--red)',
              padding: '36px 40px',
              animation: 'panelReveal 0.4s ease',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px 32px',
            }}>
              {sponsorship.tiers[activeTier].benefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--red)',
                    marginTop: 7,
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontFamily: 'Syne, sans-serif',
                  }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
              <button
                onClick={() => document.getElementById('sponsorship-cta')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '12px 28px',
                  background: 'var(--red)',
                  color: '#fff',
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  border: 'none',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
              >
                Enquire About {sponsorship.tiers[activeTier].name}
              </button>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'Syne, sans-serif' }}>
                {sponsorship.tiers[activeTier].price}
              </span>
            </div>
          </div>
        </div>

        
        <div style={{ marginBottom: '5rem' }}>
          <p className="section-label reveal" style={{ fontSize: '0.58rem', marginBottom: '1.5rem', opacity: 0 }}>
            Activation Case Studies
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 1,
            background: 'var(--border-subtle)',
          }}>
            {sponsorship.activationExamples.map((ex, i) => (
              <div
                key={i}
                className="reveal group"
                style={{
                  background: 'var(--surface)',
                  overflow: 'hidden',
                  opacity: 0,
                }}
              >
                
                <div style={{
                  height: 200,
                  overflow: 'hidden',
                  background: 'var(--surface-2)',
                  position: 'relative',
                }}>
                  <img
                    src={ex.image}
                    alt={ex.brand}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    onError={(e) => {
                      // Fallback gradient if image not found
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, var(--surface-2), var(--surface))'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
                  }} />
                  <span style={{
                    position: 'absolute',
                    bottom: 12, left: 16,
                    fontSize: '0.58rem',
                    fontFamily: 'Syne, sans-serif',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--red)',
                    fontWeight: 700,
                  }}>
                    {ex.type}
                  </span>
                </div>

                <div style={{ padding: '24px' }}>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: 8,
                  }}>
                    {ex.brand}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontFamily: 'Syne, sans-serif',
                  }}>
                    {ex.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div
          id="sponsorship-cta"
          className="reveal"
          style={{
            position: 'relative',
            padding: '64px 48px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--card-hover-bg) 0%, var(--card-bg) 100%)',
            border: '1px solid var(--border-subtle)',
            opacity: 0,
          }}
        >
          
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: 28, height: 28,
                top: pos.includes('top') ? 0 : 'auto',
                bottom: pos.includes('bottom') ? 0 : 'auto',
                left: pos.includes('left') ? 0 : 'auto',
                right: pos.includes('right') ? 0 : 'auto',
                borderTop: pos.includes('top') ? '1px solid var(--red)' : 'none',
                borderBottom: pos.includes('bottom') ? '1px solid var(--red)' : 'none',
                borderLeft: pos.includes('left') ? '1px solid var(--red)' : 'none',
                borderRight: pos.includes('right') ? '1px solid var(--red)' : 'none',
              }}
            />
          ))}

          <p className="section-label" style={{ fontSize: '0.58rem', marginBottom: 16 }}>
            Start the Conversation
          </p>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 300,
            color: 'var(--text-primary)',
            marginBottom: 12,
          }}>
            {sponsorship.cta.headline}
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            maxWidth: 480,
            margin: '0 auto 36px',
            lineHeight: 1.7,
            fontFamily: 'Syne, sans-serif',
          }}>
            {sponsorship.cta.subheadline}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a
              href={`mailto:${sponsorship.cta.email}`}
              style={{
                padding: '14px 36px',
                background: 'var(--red)',
                color: '#fff',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--red-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--red)')}
            >
              Email Partnerships Team
            </a>
            <a
              href={`tel:${sponsorship.cta.phone}`}
              style={{
                padding: '14px 36px',
                background: 'transparent',
                color: 'var(--red)',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: '1px solid var(--border-mid)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)' }}
            >
              {sponsorship.cta.phone}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes panelReveal {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </SectionWrapper>
  )
}