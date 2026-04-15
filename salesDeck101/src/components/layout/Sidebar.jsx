// import { navItems } from '../../data/content'

// export default function Sidebar({ activeSection }) {
//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
//   }

// return (
//   <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-5">
//     {navItems.map((item) => {
//       const isActive = activeSection === item.id

//       return (
//         <button
//           key={item.id}
//           onClick={() => scrollTo(item.id)}
//           className="group flex items-center gap-3"
//         >
//           {/* TEXT */}
//           <span
//             className={`
//               text-[10px] tracking-[0.15em] font-semibold uppercase
//               transition-all duration-300
//               ${isActive 
//                 ? "text-red-500 opacity-100 translate-x-0" 
//                 : "text-white/30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
//               }
//             `}
//           >
//             {item.label}
//           </span>

//           {/* DOT */}
//           <div
//             className={`
//               w-2 h-2 rounded-full transition-all duration-300
//               ${isActive 
//                 ? "bg-red-500 scale-125 shadow-[0_0_8px_rgba(255,0,0,0.6)]" 
//                 : "bg-white/30 group-hover:bg-white"
//               }
//             `}
//           />
//         </button>
//       )
//     })}
//   </div>
// )
// }

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
            {/* Label — visible only when active */}
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

            {/* Dot */}
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