import { navItems } from '../../data/content'

export default function Sidebar({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-3 transition-all duration-300"
            title={item.label}
            style={{ background: 'none', border: 'none' }}
          >
            {/* Label */}
            <span
              className="text-right transition-all duration-300"
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.15em',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.25)',
                opacity: isActive ? 1 : 0,
                transform: `translateX(${isActive ? '0' : '8px'})`,
                transition: 'all 0.3s ease',
              }}
            >
              {item.label}
            </span>
            {/* Dot */}
            <div
              style={{
                width: isActive ? 6 : 4,
                height: isActive ? 6 : 4,
                borderRadius: '50%',
                background: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 0 8px rgba(201,169,110,0.6)' : 'none',
              }}
            />
          </button>
        )
      })}
    </div>
  )
}