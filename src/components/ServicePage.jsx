import { Link, useLocation } from 'react-router-dom'

const WA = 'https://wa.me/254795429741?text=Hello%20Karanja%20JN%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.'

const allServices = [
  { to: '/services/corporate-governance', label: 'Corporate Governance Training' },
  { to: '/services/board-advisory',       label: 'Board Advisory Services' },
  { to: '/services/leadership-coaching',  label: 'Leadership Coaching' },
  { to: '/services/compliance-risk',      label: 'Compliance & Risk Management' },
  { to: '/services/strategy-policy',      label: 'Strategy & Policy Development' },
  { to: '/services/faith-leadership',     label: 'Faith-Based Leadership Programs' },
]

export default function ServicePage({ current, eyebrow, title, titleEm, intro, sections, outcomes, who, img }) {
  const { pathname } = useLocation()

  return (
    <>
      {/* ── Compact hero ── */}
      <div className="svc-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb__sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb__sep">/</span>
            <span>{eyebrow}</span>
          </nav>
          <p className="svc-hero__label">{eyebrow}</p>
          <h1 className="svc-hero__title">
            {title} <em>{titleEm}</em>
          </h1>
          <p className="svc-hero__sub">{intro}</p>
        </div>
      </div>

      {/* ── Main layout ── */}
      <section className="section section--border-top">
        <div className="wrap svc-detail__layout">

          {/* Sidebar */}
          <aside className="svc-detail__sidebar">
            <div className="svc-sidebar__box">
              <p className="svc-sidebar__heading">All Services</p>
              <nav className="svc-sidebar__nav">
                {allServices.map(s => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className={`svc-sidebar__link${pathname === s.to ? ' svc-sidebar__link--active' : ''}`}
                  >
                    <span className="svc-sidebar__link-dot" />
                    {s.label}
                    <span className="svc-sidebar__arrow">&#8594;</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="svc-sidebar__cta">
              <p className="svc-sidebar__cta-eyebrow">Ready to get started?</p>
              <p className="svc-sidebar__cta-title">Let's talk about your organization</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener norefe   rrer"
                className="btn btn--gold svc-sidebar__btn"
              >
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn--outline svc-sidebar__btn">
                Send a Message
              </Link>
            </div>
          </aside>

          {/* Content */}
          <div className="svc-detail__content">

            {img && (
              <div className="svc-detail__img-wrap">
                <img src={img} alt={current} className="svc-detail__img" />
                <div className="svc-detail__img-overlay" />
              </div>
            )}

            {sections.map((s, i) => (
              <div className="svc-detail__section" key={i}>
                <h2 className="svc-detail__section-title">{s.title}</h2>
                {s.body && <p className="svc-detail__body">{s.body}</p>}
                {s.items && (
                  <ul className="svc-detail__list">
                    {s.items.map((item, j) => (
                      <li key={j} className="svc-detail__list-item">
                        <span className="svc-detail__bullet" />
                        <div>
                          {typeof item === 'string'
                            ? <span>{item}</span>
                            : <><strong>{item.t}</strong><span> — {item.d}</span></>
                          }
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

           
            {outcomes && (
              <div className="svc-detail__outcomes">
                <h2 className="svc-detail__section-title">Expected Outcomes</h2>
                <div className="svc-outcomes__grid">
                  {outcomes.map((o, i) => (
                    <div className="svc-outcome" key={i}>
                      <span className="svc-outcome__num">{String(i+1).padStart(2,'0')}</span>
                      <strong className="svc-outcome__title">{o.t}</strong>
                      <p className="svc-outcome__body">{o.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Who is it for */}
            {who && (
              <div className="svc-detail__section svc-detail__who">
                <h2 className="svc-detail__section-title">Who Is This For?</h2>
                <div className="svc-who__grid">
                  {who.map((w, i) => <span key={i} className="svc-who__tag">{w}</span>)}
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="svc-detail__bottom-cta">
              <div className="svc-detail__bottom-cta-inner">
                <div>
                  <h3 className="svc-detail__cta-title">Interested in this service?</h3>
                  <p className="svc-detail__cta-body">Get in touch and let's explore how we can work together.</p>
                </div>
                <div className="svc-detail__cta-actions">
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Chat on WhatsApp</a>
                  <Link to="/contact" className="btn btn--outline">Send a Message</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}