import { useEffect, useRef } from 'react'

/**
 * VideoBackground
 * Props:
 *   src: string — video URL or YouTube embed (use direct video file for best results)
 *   fallbackImage: string — image URL if video fails or on mobile
 *   overlay: boolean — dark gradient overlay
 *   overlayIntensity: 'light'|'medium'|'heavy'
 */
export default function VideoBackground({
  src,
  fallbackImage,
  overlay = true,
  overlayIntensity = 'medium',
  children,
  className = '',
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  const overlayStyles = {
    light: 'rgba(8,8,8,0.4)',
    medium: 'rgba(8,8,8,0.55)',
    heavy: 'rgba(8,8,8,0.75)',
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video */}
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImage}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : fallbackImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      ) : (
        // Gradient placeholder when no video/image
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1408 50%, #0a0a0a 100%)',
          }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 video-overlay"
          style={{ background: `linear-gradient(to bottom, ${overlayStyles[overlayIntensity].replace('0.55', '0.2')} 0%, transparent 30%, transparent 60%, ${overlayStyles[overlayIntensity]} 100%)` }}
        />
      )}

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}