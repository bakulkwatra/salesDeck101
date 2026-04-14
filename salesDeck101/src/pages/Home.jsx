import Hero from '../components/sections/Hero'
import WhyThisProperty from '../components/sections/WhyThisProperty'
import Retail from '../components/sections/Retail'
import Luxury from '../components/sections/Luxury'
import Dining from '../components/sections/Dining'
import Entertainment from '../components/sections/Entertainment'
import Events from '../components/sections/Events'

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

      {/* Footer */}
      <footer
        className="py-12 px-6 md:px-16 lg:px-24"
        style={{
          background: 'var(--bg)',
          borderTop: '1px solid rgba(201,169,110,0.1)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="font-display text-white mb-1"
              style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.15em' }}
            >
              THE DUBAI MALL
            </p>
            <p className="font-body" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
              Downtown Dubai, Financial Centre Road, Dubai, UAE
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div style={{ width: 24, height: 1, background: 'rgba(201,169,110,0.4)' }} />
            <p className="font-body" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
              © 2025 Emaar Malls · Commercial Partnerships
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}