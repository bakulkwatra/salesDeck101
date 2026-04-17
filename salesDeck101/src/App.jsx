
import { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from './components/ui/ThemeContext'
import Loader from './components/ui/Loader'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'

import Home from './pages/Home'
import { useActiveSection } from './hooks/useScrollAnimation'
import { navItems } from './data/content'

function AppInner() {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(true)
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const sectionIds = navItems.map((n) => n.id)
  const activeSection = useActiveSection(sectionIds)


  useEffect(() => {
    if (!loaded) return
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let fx = 0, fy = 0, mx = 0, my = 0
    let rafId

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
      rafId = requestAnimationFrame(animate)
    }

    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('hovering')
          follower.classList.add('hovering')
        })
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hovering')
          follower.classList.remove('hovering')
        })
      })
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    addHover()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [loaded])

  const handleLoadComplete = () => {
    setVisible(false)
    setTimeout(() => setLoaded(true), 100)
  }

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-follower" ref={followerRef} />

      {visible && <Loader onComplete={handleLoadComplete} />}

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

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}