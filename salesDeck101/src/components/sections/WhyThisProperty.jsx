import { useEffect, useRef } from 'react'
import anime from 'animejs'
import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function StatCard({ value, suffix, label, description, index }) {
  const numRef = useRef(null)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const animated = useRef(false)

  useEffect(() => {
    if (!isVisible || animated.current) return
    animated.current = true

    anime({
      targets: { val: 0 },
      val: value,
      duration: 2000,
      easing: 'easeOutExpo',
      delay: index * 120,
      update: (anim) => {
        if (numRef.current) {
          const v = anim.animations[0].currentValue
          numRef.current.textContent = value % 1 !== 0
            ? v.toFixed(1)
            : Math.round(v).toLocaleString()
        }
      },
    })
  }, [isVisible, value, index])

  return (
    <div
      ref={ref}
      className="reveal group relative p-8 opacity-0"
      style={{
        borderTop: '1px solid rgba(201,169,110,0.15)',
        transition: 'border-color 0.4s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.5)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)')}
    >
      {/* Number */}
      <div className="flex items-end gap-1 mb-3">
        <span
          ref={numRef}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
            fontWeight: 300,
            color: 'var(--red)',
            lineHeight: 1,
          }}
        >
          0
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 300,
            color: 'var(--red)',
            lineHeight: 1,
            paddingBottom: '0.3rem',
          }}
        >
          {suffix}
        </span>
      </div>

      <p
        className="font-body mb-1"
        style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white' }}
      >
        {label}
      </p>
      <p
        className="font-body"
        style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}
      >
        {description}
      </p>

      {/* Hover glow dot */}
      <div
        className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--red)', boxShadow: '0 0 12px var(--red)' }}
      />
    </div>
  )
}

export default function WhyThisProperty() {
  return (
    <SectionWrapper id="why" className="py-32 px-6 md:px-16 lg:px-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
            <span className="section-reveal-label section-label" style={{ opacity: 0 }}>
              Why The Dubai Mall
            </span>
          </div>

          <h2
            className="reveal font-display text-white opacity-0"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              maxWidth: 700,
            }}
          >
            The Most Visited
            <br />
            <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>Destination on Earth.</em>
          </h2>

          <p
            className="reveal font-body mt-6 opacity-0"
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 560,
              lineHeight: 1.8,
            }}
          >
            Dubai Mall is not measured against other malls. It is measured against cities.
            With 105 million annual visitors, it surpasses the combined annual footfall
            of Disneyland Paris and Universal Studios Hollywood.
          </p>
        </div>

        {/* Stats grid */}
        <div
          className="grid gap-0"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {mallData.stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>

        {/* Pull quote */}
        <div
          className="reveal mt-20 p-10 opacity-0"
          style={{
            borderLeft: '1px solid var(--red)',
            background: 'linear-gradient(90deg, rgba(201,169,110,0.05) 0%, transparent 100%)',
          }}
        >
          <p
            className="font-display text-white"
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            "The question is no longer whether your brand should be in Dubai Mall.
            The question is what it costs you not to be."
          </p>
          <p className="section-label mt-4" style={{ fontSize: '0.6rem' }}>
            Commercial Partnerships Team
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}