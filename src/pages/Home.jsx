import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SocialSection from '../components/SocialSection'
import heroBg1 from '../assets/karanja12.jpg'
import heroBg2 from '../assets/Home.jpg'
import heroBg3 from '../assets/karanja14.jpg'
import profilePhoto from '../assets/home.jpg'
import logoNita     from '../assets/nita.jpg'
import logoMathira  from '../assets/Mathira.jpeg'
import logoBunifu   from '../assets/bunifu (3).png'
import logoFkaranja from '../assets/fkaranja.png'
import logoHarambee from '../assets/harambee.png'
import logoryantechKe  from '../assets/ryantechKe.png' 
import logotunza from '../assets/tunzal.png'

const WA_LINK = 'https://wa.me/254795429741?text=Hello%20Karanja%20JN%2C%20I%27d%20like%20to%20discuss%20your%20governance%20services.'

const SLIDE_INTERVAL = 7000

const slides = [
  {
    eyebrow: 'Faith-Guided · Experience-Backed',
    line1: 'Governance that builds',
    accent: 'lasting legacies.',
    sub: 'Where God inspires Leadership, Order builds Trust, and Legacy meets Destiny across East Africa and beyond.',
    bg: heroBg1,
    pos: 'center 18%',
  },
  {
    eyebrow: 'Board Excellence · Strategic Advisory',
    line1: 'Empowering boards to',
    accent: 'shape futures.',
    sub: 'Expert governance consulting that transforms organizations from the boardroom outward — with purpose and precision.',
    bg: heroBg2,
    pos: 'center 20%',
  },
  {
    eyebrow: 'Leadership Coaching · Executive Development',
    line1: 'Developing leaders who',
    accent: 'endure.',
    sub: 'Coaching executives and emerging leaders to lead with integrity, wisdom, and lasting purpose — grounded in faith.',
    bg: heroBg3,
    pos: 'center 18%',
  },
]

const services = [
  { num: '01', title: 'Corporate Governance Training',   desc: 'Equipping boards and executives with principled governance frameworks and best practices.', to: '/services/corporate-governance' },
  { num: '02', title: 'Board Advisory Services',         desc: 'Strategic advisory for governance structure, board composition, and performance evaluation.', to: '/services/board-advisory' },
  { num: '03', title: 'Leadership Coaching',             desc: 'One-on-one and cohort coaching for senior executives and emerging organizational leaders.', to: '/services/leadership-coaching' },
  { num: '04', title: 'Compliance & Risk Management',    desc: 'Identifying governance risks and ensuring full regulatory compliance at every level.', to: '/services/compliance-risk' },
  { num: '05', title: 'Strategy & Policy Development',   desc: 'Crafting institutional strategies and governance policies aligned to your mission.', to: '/services/strategy-policy' },
  { num: '06', title: 'Faith-Based Leadership Programs', desc: 'Integrating biblical stewardship and ethical accountability into modern governance.', to: '/services/faith-leadership' },
]

const gold = [
  { letter: 'G', word: 'God',     body: 'The source of true wisdom, justice, and moral authority. Without Him, leadership loses its compass and governance loses its anchor.' },
  { letter: 'O', word: 'Order',   body: 'Structures, systems, and standards that build trust, enhance accountability, and create stability.' },
  { letter: 'L', word: 'Legacy',  body: 'Impact that outlives you — shaping culture, people, and institutions long after your season of leadership.' },
  { letter: 'D', word: 'Destiny', body: 'A higher calling that aligns gifts, purpose, and influence with divine intention.' },
]
const mandate = [
  'Lead with character, courage, and conviction.',
  'Strengthen institutions through governance excellence.',
  'Pursue purpose with diligence and discipline.',
]

const Davie = [
  'Mentor others and multiply impact.',
  'Live and lead with God, Order, Legacy, and Destiny in view.',
]

const partners = [
  {  name: 'Government of Kenya',                   logo: logoHarambee  },
  {  name: 'Mathira Technical & Vocational College', logo: logoMathira },
  {  name: 'Ryantech Solutions Limited',             logo: logoryantechKe  },
  {  name: 'Bunifu Branding',                        logo: logoBunifu },
  {  name: 'NITA Kenya',                             logo: logoNita },
  {  name: 'Tunza kids academy',                         logo: logotunza },
]

// Generic scroll-reveal hook
function useReveal(selector, options = {}) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: options.threshold ?? 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [selector])
}

export default function Home() {
  const [cur, setCur]         = useState(0)
  const [fading, setFading]   = useState(false)
  const [paused, setPaused]   = useState(false)
  const [showTop, setShowTop] = useState(false)
  const timerRef  = useRef(null)
  const heroRef    = useRef(null)
  const touchStart = useRef(null)

  const goTo = useCallback((i) => {
    setCur(prevCur => {
      if (i === prevCur) return prevCur
      setFading(true)
      setTimeout(() => setFading(false), 420)
      return i
    })
  }, [])

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo])
  const prev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, goTo])

  // Autoplay — paused while the hero is hovered/touched
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCur(p => (p + 1) % slides.length)
        setFading(false)
      }, 420)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused])

  // Keyboard navigation — left/right arrows move the hero slides
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    const node = heroRef.current
    node?.addEventListener('keydown', onKey)
    return () => node?.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Touch swipe support for mobile
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return
    const delta = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev()
    touchStart.current = null
  }

  // Show a back-to-top button once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToNext = () => {
    heroRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // Page-load event — fires once every asset (images, fonts, etc.) has
  // actually finished loading, not just when React mounts. Useful as a
  // hook for "everything is ready" behaviour (e.g. CSS can target
  // body.page-loaded to fade content in only once nothing will jump).
  useEffect(() => {
    const onPageLoad = () => {
      document.body.classList.add('page-loaded')
      console.log('%cGovernance GOLD — page fully loaded', 'color:#b8872a;font-weight:bold;')
    }
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
    }
    // Fresh visits should always start at the top of the page rather than
    // wherever the browser last left the scroll position.
    if (window.history.scrollRestoration) window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    return () => window.removeEventListener('load', onPageLoad)
  }, [])

  useReveal('.reveal-up')
  useReveal('.reveal-card')

  const s = slides[cur]

  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="hero"
        ref={heroRef}
        tabIndex={0}
        aria-label="Featured highlights, use arrow keys or swipe to navigate"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((sl, i) => (
          <div key={i} className="hero__photo" style={{
            backgroundImage: `url('${sl.bg}')`,
            backgroundPosition: sl.pos || 'center center',
            opacity: i === cur ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }} />
        ))}
        <div className="hero__vignette" />

        <div className="hero__center">
          <div className="hero__content" style={{
            opacity:    fading ? 0 : 1,
            transform:  fading ? 'translateY(18px)' : 'translateY(0)',
            transition: 'opacity .42s ease, transform .42s ease',
          }}>
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-line" />
              {s.eyebrow}
              <span className="hero__eyebrow-line" />
            </div>
            <h1 className="hero__title">
              {s.line1}<br /><em>{s.accent}</em>
            </h1>
            <p className="hero__sub">{s.sub}</p>
            <div className="hero__actions">
              <Link to="https://tunzachildhub.co.ke/" className="btn btn--gold hero__btn-primary" target='_blank'>Tunza Kids Academy</Link>
              <Link to="/services" className="btn btn--outline-light hero__btn-secondary">Explore Services</Link>
            </div>
            <p className="hero__trust">Trusted by boards, NGOs, corporations &amp; faith institutions across East Africa</p>
          </div>
        </div>

        <div className="hero__nav">
          <div className="hero__dots">
            {slides.map((_, i) => (
              <button key={i} className={`hero__dot${i === cur ? ' hero__dot--active' : ''}`}
                onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <div className="hero__arrows">
            <button className="hero__arrow" onClick={prev} aria-label="Previous slide">&#8592;</button>
            <button className="hero__arrow" onClick={next} aria-label="Next slide">&#8594;</button>
          </div>
        </div>

        <button className="hero__scroll" onClick={scrollToNext} aria-label="Scroll to next section">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </button>
      </section>

      {/* ══ PROFILE ══ */}
      <section className="section section--cream section--border-y">
        <div className="wrap">
          <div className="home-profile">
            <div className="home-profile__media reveal-up">
              <div className="home-profile__img-wrap">
                <img
                  src={profilePhoto}
                  alt="FCS Jeremiah N. Karanja, MBS"
                  className="home-profile__real-img"
                  loading="eager"
                  decoding="async" className="about-profile__photo "
                />
                <div className="home-profile__frame" />
              </div>
            </div>
            <div className="home-profile__body reveal-up" style={{ '--card-i': 1 }}>
              <p className="sh__label">Our Founder</p>
              <h2 className="home-profile__name">I am FCS Jeremiah N. K aranja, <em>MBS</em></h2>
              <div className="sh__bar" style={{ marginBottom: '1.5rem' }} />
              <p className="home-profile__lead">
                FCS Jeremiah N. Karanja is a born again Christian and governance expert, an Advocate of the High Court of Kenya, accredited governance auditor, transformational CEO, institutional reform champion, author, and inspirational speaker.
              </p>
              <p className="home-profile__para">
                His work spans public governance, private sector leadership, church governance, mentorship, and national policy contribution. His philosophy is built on stewardship, service, and wholehearted devotion to excellence.
              </p>
              <p className="home-profile__para">
                Grounded in faith-driven values and enriched by extensive governance experience, he empowers leaders to build strong institutions, cultivate moral authority, and pursue destinies that influence generations.
              </p>
              <div className="home-profile__actions">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Let's Connect ↗</a>
                <Link to="/about" className="btn btn--outline">Full Story</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--border-top">
              <div className="wrap">
                <h2 className="sh__title" style={{textAlign:"center", marginBottom:"40px" , width:"90%"}}>Our <em>Mandate</em></h2>
                <div className="about-mandate">
                  <div className="reveal-up">
                     <ul className="about-mandate__list reveal-up" style={{ '--card-i': 1 }}>
                    {mandate.map((m, i) => (
                      <li className="about-mandate__item" key={m} style={{ transitionDelay: `${i * 0.07}s` }}>
                        <span className="about-mandate__dot" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  </div>
                
                  <ul className="about-mandate__list reveal-up" style={{ '--card-i': 1 }}>
                    {Davie.map((m, i) => (
                      <li className="about-mandate__item" key={m} style={{ transitionDelay: `${i * 0.07}s` }}>
                        <span className="about-mandate__dot" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
      
      <section className="section section--border-y">
        <div className="wrap">
          <div className="sh sh--center reveal-up">
            <h2 className="sh__title">Governance GOLD with <em>Karanja JN</em></h2>
            <div className="sh__bar" />
            <p className="sh__desc" style={{ marginInline: 'auto' }}>
              GOLD = God · Order · Legacy · Destiny — Where God inspires leadership, Order builds trust, and Legacy meets Destiny.
            </p>
          </div>
          <div className="why-grid">
            {gold.map((g, i) => (
              <div className="why-card reveal-card" key={g.letter} style={{ '--card-i': i }}>
                <div className="why-card__num">{g.letter}</div>
                <div className="why-card__title">{g.word}</div>
                <p className="why-card__body">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNERS ══ */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="sh sh--center reveal-up">
            <p className="sh__label" style={{ justifyContent: 'center' }}>Trusted By</p>
            <h2 className="sh__title">Our <em>Partners</em></h2>
            <div className="sh__bar" />
          </div>
          <div className="home-partners">
            {partners.map((p, i) => (
              <div className="home-partner reveal-card" key={p.name} style={{ '--card-i': i }}>
                <div className="home-partner__inner">
                  <img src={p.logo} alt={p.name} className="home-partner__logo" />
                  <span className="home-partner__name">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialSection />

      {/* ══ BACK TO TOP ══ */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? 'auto' : 'none',
          transform: showTop ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        &#8593;
      </button>
    </>
  )
}