import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/lgg.jpeg'

const WA = 'https://wa.me/254795429741?text=Hello%20Karanja%20JN%2C%20I%27d%20like%20to%20discuss%20your%20governance%20services.'

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropRef  = useRef(null)
  const location = useLocation()

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setMobileOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <>
      {/* ── Topbar ── */}
      <div className="topbar">
        <div className="wrap topbar__inner">
          <span className="topbar__hours">Mon – Fri &nbsp;9:00 am – 7:00 pm</span>
          <div className="topbar__contact">
            <a href="tel:+254795429741">+254 795 429 741</a>
            <span className="topbar__pipe">|</span>
            <a href="mailto:info@karanjajn.co.ke">info@karanjajn.co.ke</a>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="wrap navbar__row">

          {/* ── Logo ── */}
          <Link to="/" className="logo">
            <img
              src={logoImg}
              alt="Governance GOLD with Karanja JN"
              className="logo__img"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="nav-links" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* ── CTA (desktop) ── */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold navbar__cta"
          >
            Chat on WhatsApp
          </a>

          {/* ── Hamburger ── */}
          <button
            className={`nav-toggle${mobileOpen ? ' nav-toggle--open' : ''}`}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="nav-mobile" ref={dropRef}>
            <div className="wrap nav-mobile__inner">
              <NavLink to="/" end
                className={({ isActive }) => `nav-mobile__link${isActive ? ' nav-mobile__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about"
                className={({ isActive }) => `nav-mobile__link${isActive ? ' nav-mobile__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}>
                About
              </NavLink>
              <NavLink to="/services"
                className={({ isActive }) => `nav-mobile__link${isActive ? ' nav-mobile__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/portfolio"
                className={({ isActive }) => `nav-mobile__link${isActive ? ' nav-mobile__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}>
                Portfolio
              </NavLink>
              <NavLink to="/contact"
                className={({ isActive }) => `nav-mobile__link${isActive ? ' nav-mobile__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}>
                Contact
              </NavLink>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold nav-mobile__cta"
                onClick={() => setMobileOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Scoped styles ── */}
      <style>{`
        /* ── Topbar ── */
        .topbar {
          background: #0d2045;
          color: #cbd5e1;
          font-size: 0.82rem;
          padding: 0.45rem 0;
        }
        .topbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .topbar__contact {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .topbar__contact a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s;
        }
        .topbar__contact a:hover { color: #c9a84c; }
        .topbar__pipe { opacity: 0.4; }

        /* Hide contact details on mobile */
        @media (max-width: 900px) {
          .topbar__contact { display: none; }
          .topbar__hours   { width: 100%; text-align: center; }
        }

        /* ── Navbar shell ── */
        .navbar {
          background: #ffffff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          transition: box-shadow 0.3s;
        }
        .navbar--scrolled {
          box-shadow: 0 4px 24px rgba(0,0,0,0.14);
        }

        /* ── Row ── */
        .navbar__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0;
          gap: 1rem;
        }

        /* ── Logo ── */
        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo__img {
          height: 60px;          /* matches navbar row height — no overflow */
          width: auto;
          object-fit: contain;   /* never crop — show the whole image */
          display: block;
          border-radius: 10px;   /* soft rounded corners */
        }

        /* ── Desktop nav ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: #1e2d45;
          text-decoration: none;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .nav-link:hover { color: #c9a84c; background: rgba(201,168,76,0.07); }
        .nav-link--active { color: #c9a84c !important; }

        /* ── CTA button ── */
        .navbar__cta {
          white-space: nowrap;
          font-size: 0.85rem;
        }

        /* ── Hamburger ── */
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          flex-shrink: 0;
        }
        .nav-toggle span {
          display: block;
          width: 26px;
          height: 2.5px;
          background: #1e2d45;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .nav-toggle--open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .nav-toggle--open span:nth-child(2) { opacity: 0; }
        .nav-toggle--open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        /* ── Mobile menu ── */
        .nav-mobile {
          background: #0d2045;
          border-top: 2px solid #c9a84c;
        }
        .nav-mobile__inner {
          display: flex;
          flex-direction: column;
          padding: 1rem 0 1.5rem;
          gap: 0.15rem;
        }
        .nav-mobile__link {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.65rem 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: color 0.2s;
        }
        .nav-mobile__link:hover { color: #c9a84c; }
        .nav-mobile__link--active { color: #c9a84c !important; }
        .nav-mobile__cta {
          margin-top: 1rem;
          text-align: center;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nav-links   { display: none; }
          .navbar__cta { display: none; }
          .nav-toggle  { display: flex; }

          /* Tighten the navbar's own side padding on mobile so the
             hamburger doesn't get pushed far from the logo/content edge */
          .navbar .wrap {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .nav-toggle {
            padding: 6px 0;
            margin-right: -2px;
          }
        }

        @media (max-width: 480px) {
          .logo__img { height: 52px; border-radius: 8px; }
          .navbar .wrap {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </>
  )
}