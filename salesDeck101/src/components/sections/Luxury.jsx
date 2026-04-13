import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'

export default function Luxury() {
  const { luxury } = mallData

  return (
    <SectionWrapper
      id="luxury"
      className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.85) 50%, rgba(8,8,8,0.75) 100%)' }}
      />

      <div className="relative max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
              <span className="section-reveal-label section-label" style={{ opacity: 0 }}>Luxury</span>
            </div>
            <h2
              className="reveal font-display text-white opacity-0 mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1 }}
            >
              {luxury.headline}
            </h2>
            <p
              className="reveal font-body opacity-0 mb-12"
              style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
            >
              {luxury.subheadline}
            </p>

            {/* Fashion Avenue callout */}
            <div
              className="reveal opacity-0 p-8"
              style={{
                background: 'rgba(201,169,110,0.07)',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              <p
                className="font-display text-gold-gradient mb-2"
                style={{ fontSize: '2rem', fontWeight: 300 }}
              >
                400,000
              </p>
              <p className="section-label" style={{ fontSize: '0.6rem' }}>
                Square feet of dedicated luxury retail
              </p>
              <p
                className="font-body mt-3"
                style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}
              >
                Fashion Avenue — a destination within a destination.
                The world's leading luxury houses anchor their regional presence here.
              </p>
            </div>
          </div>

          {/* Right — feature list */}
          <div className="space-y-0">
            {luxury.features.map((feature, i) => (
              <div
                key={i}
                className="reveal opacity-0 group py-8"
                style={{
                  borderBottom: '1px solid rgba(201,169,110,0.1)',
                  transition: 'border-color 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.1)')}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="font-display"
                    style={{ fontSize: '0.8rem', color: 'var(--gold)', fontStyle: 'italic', minWidth: 24 }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p
                      className="font-body mb-2"
                      style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white' }}
                    >
                      {feature.title}
                    </p>
                    <p
                      className="font-body"
                      style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}