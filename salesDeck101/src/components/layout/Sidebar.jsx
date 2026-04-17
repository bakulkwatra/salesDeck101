
import { navItems } from '../../data/content'

export default function Sidebar({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="sidebar-nav"
      style={{
        position: 'fixed',
        right: 28,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 16,
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            title={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
       
            <span
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: isActive ? 'var(--red)' : 'transparent',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0)' : 'translateX(6px)',
                transition: 'all 0.35s ease',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </span>

     
            <div
              style={{
                width: isActive ? 7 : 4,
                height: isActive ? 7 : 4,
                borderRadius: '50%',
                background: isActive ? 'var(--red)' : 'var(--text-muted)',
                transition: 'all 0.35s ease',
                boxShadow: isActive ? '0 0 10px var(--red)' : 'none',
                flexShrink: 0,
              }}
            />
          </button>
        )
      })}
    </div>
  )
}