// import { useEffect, useState } from 'react'
// import { navItems } from '../../data/content'

// export default function Navbar({ activeSection }) {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60)
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <nav
//       className="fixed top-0 left-0 right-0 z-40 transition-all duration-700"
//       style={{
//         padding: scrolled ? '16px 48px' : '28px 48px',
//         background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
//         backdropFilter: scrolled ? 'blur(20px)' : 'none',
//         borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : '1px solid transparent',
//       }}
//     >
//       <div className="flex items-center justify-between max-w-screen-xl mx-auto">
//         {/* Logo */}
//         <button
//           onClick={() => scrollTo('hero')}
//           className="flex items-center gap-3"
//         >
//           <div
//             style={{
//               width: 1,
//               height: 32,
//               background: 'var(--red)',
//               opacity: 0.7,
//             }}
//           />
//           <div className="text-left">
//             <p
//               className="font-body text-white"
//               style={{ fontSize: '0.6rem', letterSpacing: '0.25em', opacity: 0.5 }}
//             >
//               THE
//             </p>
//             <p
//               className="font-display text-white"
//               style={{ fontSize: '1rem', letterSpacing: '0.2em', fontWeight: 400, lineHeight: 1 }}
//             >
//               DUBAI MALL
//             </p>
//           </div>
//         </button>

//         {/* Nav links */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.slice(1).map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollTo(item.id)}
//               className="hover-underline transition-colors duration-300"
//               style={{
//                 fontSize: '0.65rem',
//                 letterSpacing: '0.2em',
//                 fontWeight: 600,
//                 fontFamily: 'Syne, sans-serif',
//                 color: activeSection === item.id ? 'var(--red)' : 'rgba(255,255,255,0.5)',
//                 textTransform: 'uppercase',
//                 background: 'none',
//                 border: 'none',
//               }}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>

//         {/* CTA */}
//         <button
//           onClick={() => scrollTo('events')}
//           className="hidden md:flex items-center gap-2 transition-all duration-300"
//           style={{
//             fontSize: '0.65rem',
//             letterSpacing: '0.2em',
//             fontWeight: 600,
//             fontFamily: 'Syne, sans-serif',
//             color: 'var(--red)',
//             background: 'transparent',
//             border: '1px solid rgba(201,169,110,0.4)',
//             padding: '10px 20px',
//             textTransform: 'uppercase',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = 'var(--red)'
//             e.currentTarget.style.color = '#080808'
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = 'transparent'
//             e.currentTarget.style.color = 'var(--red)'
//           }}
//         >
//           Book a Conversation
//         </button>
//       </div>
//     </nav>
//   )
// }

import { useEffect, useState } from 'react'
import { navItems } from '../../data/content'
import { useTheme } from '../ui/ThemeContext'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
)

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-700"
        style={{
          padding: scrolled ? '14px 0' : '24px 0',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div
          className="navbar-inner flex items-center justify-between max-w-screen-xl mx-auto"
          style={{ padding: '0 48px' }}
        >
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3" style={{ background: 'none', border: 'none' }}>
            <div style={{ width: 1, height: 32, background: 'var(--red)', opacity: 0.7 }} />
            <div className="text-left">
              <p style={{ fontFamily: 'Syne,sans-serif', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--text-muted)' }}>THE</p>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1rem', letterSpacing: '0.2em', fontWeight: 400, lineHeight: 1, color: 'var(--text-primary)' }}>
                DUBAI MALL
              </p>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="navbar-links hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover-underline transition-colors duration-300"
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  fontFamily: 'Syne,sans-serif',
                  color: activeSection === item.id ? 'var(--red)' : 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button className="theme-toggle" onClick={toggle} title="Toggle theme">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo('events')}
              className="navbar-cta hidden md:flex items-center gap-2 transition-all duration-300"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                fontWeight: 600,
                fontFamily: 'Syne,sans-serif',
                color: 'var(--red)',
                background: 'transparent',
                border: '1px solid var(--border-mid)',
                padding: '10px 20px',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)' }}
            >
              Book a Conversation
            </button>

            {/* Mobile hamburger */}
            <button
              className="navbar-hamburger md:hidden flex flex-col gap-1.5 p-2"
              style={{ background: 'none', border: 'none' }}
              onClick={() => setMenuOpen(p => !p)}
            >
              <span style={{ display: 'block', width: 22, height: 1, background: menuOpen ? 'var(--red)' : 'var(--text-primary)', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 1, background: menuOpen ? 'var(--red)' : 'var(--text-primary)', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 1, background: menuOpen ? 'var(--red)' : 'var(--text-primary)', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="absolute top-6 right-6"
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', fontFamily: 'Syne,sans-serif' }}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {navItems.map((item) => (
          <button key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('events')}
          style={{
            marginTop: 16,
            padding: '14px 40px',
            background: 'var(--red)',
            color: '#fff',
            fontFamily: 'Syne,sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            fontWeight: 700,
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: 0,
          }}
        >
          Book a Conversation
        </button>
      </div>
    </>
  )
}