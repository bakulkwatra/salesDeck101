import { navItems } from '../../data/content'

export default function Sidebar({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

return (
  <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-5">
    {navItems.map((item) => {
      const isActive = activeSection === item.id

      return (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group flex items-center gap-3"
        >
          {/* TEXT */}
          <span
            className={`
              text-[10px] tracking-[0.15em] font-semibold uppercase
              transition-all duration-300
              ${isActive 
                ? "text-red-500 opacity-100 translate-x-0" 
                : "text-white/30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }
            `}
          >
            {item.label}
          </span>

          {/* DOT */}
          <div
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${isActive 
                ? "bg-red-500 scale-125 shadow-[0_0_8px_rgba(255,0,0,0.6)]" 
                : "bg-white/30 group-hover:bg-white"
              }
            `}
          />
        </button>
      )
    })}
  </div>
)
}