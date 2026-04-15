import Hero from '../components/sections/Hero'
import WhyThisProperty from '../components/sections/WhyThisProperty'
import Retail from '../components/sections/Retail'
import Luxury from '../components/sections/Luxury'
import Dining from '../components/sections/Dining'
import Entertainment from '../components/sections/Entertainment'
import Events from '../components/sections/Events'
import Sponsorship from '../components/sections/Sponsorship'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyThisProperty />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />
      <Sponsorship />

      <footer
        style={{
          padding: '48px',
          background: 'var(--bg)',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="max-w-screen-xl mx-auto"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}
        >
          <div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              letterSpacing: '0.18em',
              color: 'var(--text-primary)',
              marginBottom: 4,
            }}>
              THE DUBAI MALL
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'Syne, sans-serif' }}>
              Downtown Dubai, Financial Centre Road, Dubai, UAE
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 20, height: 1, background: 'var(--border-mid)' }} />
            <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'Syne, sans-serif', letterSpacing: '0.08em' }}>
              © 2025 Emaar Malls · Commercial Partnerships
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}