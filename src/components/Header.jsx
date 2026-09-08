import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Plane } from 'lucide-react'

const links = [
  ['Головна', '/'],
  ['Про нас', '/about'],
  ['Чому саме ми', '/#why-us'],
  ['Галерея турів', '/tours'],
  ['Контакти', '/contacts'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">М</span>
          <span>
            Мандри<span className="logo-accent">UA</span>
          </span>
        </Link>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основна навігація">
          {links.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              end={path === '/' || (typeof path === 'object' && path.pathname === '/')}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <Link className="nav-cta" to="/roulette" onClick={() => setMenuOpen(false)}>
            <Plane size={16} /> Куди полетіти?
          </Link>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
