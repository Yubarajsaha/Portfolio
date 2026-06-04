import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Resume from './components/resume'
import Contact from './components/contact'
import Footer from './components/footer'

function ParallaxBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const el = ref.current
      if (!el) return
      const shapes = el.querySelectorAll('[data-speed]')
      shapes.forEach(shape => {
        const speed = parseFloat(shape.getAttribute('data-speed'))
        shape.style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* big orange orb top left */}
      <div
        data-speed="0.15"
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,100,20,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* orange orb bottom right */}
      <div
        data-speed="-0.1"
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,140,50,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* small white orb center */}
      <div
        data-speed="0.2"
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }}
      />

      {/* floating rotating square */}
      <div
        data-speed="0.25"
        className="absolute top-[20%] right-[10%] w-24 h-24 rounded-xl"
        style={{
          border: '1px solid rgba(255,100,20,0.2)',
          animation: 'spin-slow 15s linear infinite',
          background: 'rgba(255,100,20,0.03)'
        }}
      />

      {/* floating diamond */}
      <div
        data-speed="0.3"
        className="absolute top-[60%] left-[8%] w-16 h-16"
        style={{
          border: '1px solid rgba(255,100,20,0.15)',
          transform: 'rotate(45deg)',
          animation: 'float 8s ease-in-out infinite',
          background: 'rgba(255,100,20,0.02)'
        }}
      />

      {/* floating triangle (border only) */}
      <div
        data-speed="-0.15"
        className="absolute top-[35%] left-[15%] w-20 h-20"
        style={{
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '4px',
          animation: 'float2 10s ease-in-out infinite',
        }}
      />

      {/* scan line */}
      <div
        className="absolute left-0 w-full h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,100,20,0.3), transparent)',
          animation: 'scan 8s linear infinite',
          top: 0
        }}
      />

      {/* ring pulse top right */}
      <div
        data-speed="0.1"
        className="absolute top-[15%] right-[25%] w-40 h-40 rounded-full"
        style={{
          border: '1px solid rgba(255,100,20,0.2)',
          animation: 'pulse-ring 4s ease-out infinite'
        }}
      />

      {/* small dots scattered */}
      {[
        { top: '25%', left: '30%', size: 3 },
        { top: '70%', left: '60%', size: 2 },
        { top: '45%', left: '75%', size: 4 },
        { top: '80%', left: '25%', size: 2 },
        { top: '15%', left: '55%', size: 3 },
      ].map((dot, i) => (
        <div
          key={i}
          data-speed={0.1 * (i + 1)}
          className="absolute rounded-full"
          style={{
            top: dot.top, left: dot.left,
            width: dot.size, height: dot.size,
            background: 'rgba(255,100,20,0.5)'
          }}
        />
      ))}

    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App