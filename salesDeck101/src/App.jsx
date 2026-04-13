import { useEffect, useRef, useState } from 'react'
import Loader from './components/ui/Loader'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Home from './pages/Home'
import { useActiveSection } from './hooks/useScrollAnimation'
import { navItems } from './data/content'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(true)
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const activeSection = useActiveSection(navItems.map((n) => n.id))

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let fx = 0, fy = 0
    let mx = 0, my = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = `${mx}px`
      cursor.style.top = `${my}px`
    }

    const animate = () => {
      fx += (mx - fx) * 0.12
      fy += (my - fy) * 0.12
      follower.style.left = `${fx}px`
      follower.style.top = `${fy}px`
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.classList.add('hovering')
      follower.classList.add('hovering')
    }
    const onLeave = () => {
      cursor.classList.remove('hovering')
      follower.classList.remove('hovering')
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [loaded])

  const handleLoadComplete = () => {
    setVisible(false)
    setTimeout(() => setLoaded(true), 100)
  }

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-follower" ref={followerRef} />

      {/* Loader */}
      {visible && <Loader onComplete={handleLoadComplete} />}

      {/* Main app */}
      {loaded && (
        <div className="fade-in">
          <Navbar activeSection={activeSection} />
          <Sidebar activeSection={activeSection} />
          <Home />
        </div>
      )}
    </>
  )
}