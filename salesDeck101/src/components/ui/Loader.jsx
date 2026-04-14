import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const logoRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar
    const anim = anime({
      targets: { value: 0 },
      value: 100,
      duration: 2400,
      easing: 'easeInOutQuart',
      update: (anim) => {
        const val = Math.round(anim.animations[0].currentValue)
        setProgress(val)
        if (progressRef.current) {
          progressRef.current.style.width = `${val}%`
        }
      },
      complete: () => {
        // Logo fade in
        anime({
          targets: logoRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          easing: 'easeOutExpo',
          complete: () => {
            setTimeout(() => {
              // Exit: slide up
              anime({
                targets: loaderRef.current,
                translateY: [0, '-100%'],
                duration: 900,
                easing: 'easeInExpo',
                complete: onComplete,
              })
            }, 500)
          },
        })
      },
    })

    return () => anim.pause()
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: '#080808' }}
    >
      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Logo */}
      <div ref={logoRef} className="text-center opacity-0 mb-16 relative z-10">
        <p className="section-label mb-4" style={{ color: 'var(--red)', letterSpacing: '0.3em' }}>
          THE
        </p>
        <h1
          className="font-display text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, letterSpacing: '0.15em' }}
        >
          DUBAI MALL
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="gold-line" />
          <span className="section-label" style={{ color: 'var(--red-light)', fontSize: '0.6rem' }}>
            SALES EXPERIENCE
          </span>
          <div className="gold-line" />
        </div>
      </div>

      {/* Progress */}
      <div className="relative z-10 w-64">
        <div
          className="h-px mb-3 overflow-hidden"
          style={{ background: 'rgba(201,169,110,0.2)' }}
        >
          <div
            ref={progressRef}
            style={{
              height: '100%',
              width: '0%',
              background: 'linear-gradient(90deg, var(--red-dim), var(--red))',
              transition: 'width 0.05s linear',
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="section-label" style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>
            Loading
          </span>
          <span className="section-label" style={{ fontSize: '0.6rem', color: 'var(--red)' }}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}