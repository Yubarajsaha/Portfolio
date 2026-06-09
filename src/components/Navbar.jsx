import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const links = ['#about', '#experience', '#education', '#projects', '#resume',]

  return (
    <nav className={`sticky top-0 z-50 flex items-center justify-between px-[8%] py-4 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5' : ''}`}>

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(255,100,20,0.15)', border: '1px solid rgba(255,100,20,0.3)' }}>
          <span style={{ color: '#ff6414', fontSize: '14px', fontWeight: 700 }}>Y</span>
        </div>
        <span className="text-white font-bold text-lg">Yubaraj Saha</span>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex gap-6 list-none">
        {links.map(link => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className="bg-transparent border-none text-[#f7f7f7] text-sm cursor-pointer capitalize transition-all duration-300 hover:text-[#ff6414]"
            >
              {link.replace('#', '')}
            </button>
          </li>
        ))}
      </ul>

      {/* CONTACT BUTTON */}
      <button
        onClick={() => scrollTo('#contact')}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #ff6414, #ff8c42)',
          boxShadow: '0 0 20px rgba(255,100,20,0.3)'
        }}
      >
        Contact Me
      </button>

      {/* HAMBURGER */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
      >
        <span className={`block w-6 h-[2px] bg-[#ff6414] rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block w-6 h-[2px] bg-[#ff6414] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[2px] bg-[#ff6414] rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="absolute top-[65px] left-0 w-full glass flex flex-col items-center gap-6 py-8 list-none md:hidden border-b border-white/5">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="bg-transparent border-none text-[#f5f4f4f0] text-base cursor-pointer capitalize hover:text-[#ff6414] transition-colors duration-300"
              >
                {link.replace('#', '')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar