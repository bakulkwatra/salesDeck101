export default function Button({ children, variant = 'primary', onClick, className = '', href }) {
  const base = `
    inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase
    transition-all duration-500 cursor-none relative overflow-hidden
  `
  const styles = {
    primary: `
      px-8 py-4 bg-gold text-obsidian font-semibold
      hover:bg-gold-light
      before:absolute before:inset-0 before:bg-white/10
      before:translate-x-[-100%] hover:before:translate-x-[100%]
      before:transition-transform before:duration-500
    `,
    outline: `
      px-8 py-4 border border-gold text-gold
      hover:bg-gold hover:text-obsidian
    `,
    ghost: `
      px-0 py-2 text-muted hover:text-gold
      border-b border-transparent hover:border-gold
    `,
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}