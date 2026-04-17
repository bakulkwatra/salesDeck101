import SectionWrapper from '../layout/SectionWrapper'
import { mallData } from '../../data/content'

export default function Retail() {
  const { retail } = mallData

  return (
    <SectionWrapper
      id="retail"
      className="py-32 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="section-reveal-line gold-line" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />
              <span className="section-reveal-label section-label" style={{ opacity: 0 }}>Retail</span>
            </div>
            <h2
              className="reveal font-display text-white opacity-0"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1 }}
            >
              {retail.headline}
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="reveal font-body opacity-0"
              style={{ fontSize: '1rem', color: 'rgba(255,255,255)', lineHeight: 1.8 }}
            >
              {retail.subheadline}
            </p>
          </div>
        </div>

       
        <div
          className="grid gap-px mb-24"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            background: 'rgba(201,169,110,0.06)',
          }}
        >
          {retail.categories.map((cat, i) => (
            <div
              key={i}
              className="reveal opacity-0 group"
              style={{
                background: 'var(--surface)',
                padding: '32px 24px',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface)')}
            >
              <div
                className="mb-4"
                style={{ width: 24, height: 1, background: 'var(--red)', opacity: 0.5 }}
              />
              <p
                className="font-display text-white mb-2"
                style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--red)' }}
              >
                {cat.count}
              </p>
              <p
                className="font-body"
                style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}
              >
                {cat.name}
              </p>
            </div>
          ))}
        </div>

       
        <div className="reveal opacity-0 overflow-hidden">
          <p className="section-label mb-6" style={{ fontSize: '0.6rem' }}>
            Featured Brands
          </p>
          <div
            style={{
              display: 'flex',
              gap: '48px',
              animation: 'marquee 20s linear infinite',
              whiteSpace: 'nowrap',
            }}
          >
            {[...retail.featuredBrands, ...retail.featuredBrands].map((brand, i) => (
              <span
                key={i}
                className="font-display"
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: i % 3 === 0 ? 'var(--red)' : 'rgba(255,255,255,0.3)',
                  flexShrink: 0,
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </SectionWrapper>
  )
}