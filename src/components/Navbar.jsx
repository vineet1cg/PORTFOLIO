import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { name: 'Home', path: '#hero' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Figma', path: '#figma' },
  { name: 'Certificates', path: '#certificates' },
  { name: 'Hackathon', path: '#hackathon' },
  { name: 'Achievements', path: '#achievements' },
  { name: 'Resume', path: '#resume' },
  { name: 'Contact', path: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, path) => {
    e.preventDefault()
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Portfolio</span>
        </Link>

        <button 
          className={styles.menuToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}></span>
        </button>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className={styles.navLink}
                onClick={(e) => handleClick(e, link.path)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar