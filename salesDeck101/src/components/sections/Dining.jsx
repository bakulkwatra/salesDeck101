import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'

export default function Dining() {
  const { dining } = mallData

  return (
    <SectionWrapper
      id="dining"
      className="py-32 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--surface-2)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
          <span className="section-reveal-label section-label" style={{ opacity: 0 }}>Dining & Lifestyle</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <h2
            className="reveal font-display text-white opacity-0"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            {dining.headline}
          </h2>
          <p
            className="reveal font-body opacity-0 self-end"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
          >
            {dining.subheadline}
          </p>
        </div>

        {/* Dining zones grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(201,169,110,0.08)' }}>
          {dining.zones.map((zone, i) => (
            <div
              key={i}
              className="reveal opacity-0 group relative overflow-hidden"
              style={{
                background: 'var(--surface-2)',
                padding: '40px',
                transition: 'background 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,169,110,0.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
            >
              {/* Top line reveal */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, var(--red), transparent)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.parentElement.style.transform = 'scaleX(1)')}
              />

              <span
                className="font-body mb-3 block"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}
              >
                Zone 0{i + 1}
              </span>
              <h3
                className="font-display text-white mb-3"
                style={{ fontSize: '1.6rem', fontWeight: 300 }}
              >
                {zone.name}
              </h3>
              <p
                className="font-body mb-4"
                style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
              >
                {zone.description}
              </p>
              <div
                className="inline-block"
                style={{
                  padding: '6px 14px',
                  border: '1px solid rgba(201,169,110,0.2)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                {zone.capacity}
              </div>
            </div>
          ))}
        </div>

        {/* Burj Khalifa view callout */}
        <div
          className="reveal mt-16 opacity-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10"
          style={{
            background: 'linear-gradient(90deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))',
            border: '1px solid rgba(201,169,110,0.15)',
          }}
        >
          <div>
            <p className="font-display text-white mb-2" style={{ fontSize: '1.8rem', fontWeight: 300 }}>
              Dining with a{' '}
              <em style={{ color: 'var(--red)' }}>view no other mall can offer.</em>
            </p>
            <p className="font-body" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              Outdoor terrace restaurants overlooking the Burj Khalifa and the
              world-famous Dubai Fountain. This view converts curious visitors into
              loyal customers — and loyal customers into brand advocates.
            </p>
          </div>
          <div style={{ flexShrink: 0, textAlign: 'right' }}>
            <p className="font-display" style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--red)' }}>200+</p>
            <p className="section-label" style={{ fontSize: '0.6rem' }}>F&B concepts</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}