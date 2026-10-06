import { Link } from 'react-router-dom'
import logoImg from '../assets/logoD.png'

const WA = 'https://wa.me/254795429741?text=Hello%20Karanja%20JN%2C%20I%27d%20like%20to%20get%20in%20touch.'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="wrap">
          <div className="footer__grid">

            {/* ── Brand ── */}
            <div>
              <img
                src={logoImg}
                alt="Governance GOLD with Karanja JN"
                style={{
                  height: '90px',       
                  width: 'auto',         
                  objectFit: 'contain',  
                  borderRadius: '10px',  
                  display: 'block',
                  marginBottom: '1rem',
                }}
              />
             
              <p className="footer__tagline">
                Where God inspires leadership, order builds trust, and legacy meets destiny.
              </p>
            </div>

            {/* ── Navigation ── */}
            <div>
              <div className="footer__col-heading">Navigation</div>
              <nav className="footer__nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            {/* ── Connect ── */}
            <div>
              <div className="footer__col-heading">Connect With Us</div>
              <nav className="footer__nav">
                <a href="http://www.youtube.com/@KaranjaJN" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://tinyurl.com/FCS-Jeremiah-Karanja" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://web.facebook.com/karanja.jn" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://x.com/KaranjaJN" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                <Link to="/portfolio">View Portfolio</Link>
              </nav>
            </div>

            {/* ── Contact ── */}
            <div>
              <div className="footer__col-heading">Contact</div>
              <div className="footer__details">
                <div>
                  <div className="footer__detail-label">WhatsApp / Phone</div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="footer__detail-value">
                    +254 795 429 741
                  </a>
                </div>
                <div>
                  <div className="footer__detail-label">Email</div>
                  <a href="mailto:info@karanjajn.co.ke" className="footer__detail-value">
                    info@karanjajn.co.ke
                  </a>
                </div>
                <div>
                  <div className="footer__detail-label">Office Hours</div>
                  <span className="footer__detail-value">Mon – Fri, 9am – 7pm</span>
                </div>
                <div>
                  <div className="footer__detail-label">Location</div>
                  <span className="footer__detail-value">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Base bar ── */}
      <div className="wrap footer__base">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Governance Gold with Karanja JN. All rights reserved.
        </p>
        <p className="footer__credit">
          Designed &amp; Developed by{' '}
          <a href="https://ryantech.co.ke" target="_blank" rel="noopener noreferrer">
            Ryantech Solutions Limited
          </a>
        </p>
      </div>
    </footer>
  )
}