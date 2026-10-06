import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialSection from '../components/SocialSection'
import heroBg from '../assets/karanja11.jpg'

const WA = 'https://wa.me/254795429741?text=Hello%20Karanja%20JN%2C%20I%27d%20like%20to%20enquire%20about%20a%20governance%20topic.'

const videos = [
  {
    id: 'WsZCWVowyDA',
    title: 'Governance Leadership Masterclass',
    category: 'Masterclass',
    desc: 'A deep-dive into the principles of effective governance and what separates high-performing boards from the rest.',
  },
  {
    id: 'XjMtdGd4ies',
    title: 'Faith-Led Governance: Biblical Foundations',
    category: 'Teaching',
    desc: 'Exploring how biblical principles of stewardship and servant leadership translate into modern organizational governance.',
  },
  {
    id: 'l0IV2fmc5NU',
    title: 'Board Excellence & Director Responsibilities',
    category: 'Training',
    desc: 'Understanding the fiduciary duties of directors and how boards can hold themselves to the highest standards.',
  },
  {
    id: 'CYpgkDCH7XU',
    title: 'Compliance, Risk & Organizational Resilience',
    category: 'Workshop',
    desc: 'Why compliance culture — not just compliance systems — is the true foundation of organizational resilience.',
  },
  {
    id: 'mHwcRuQs8Tk',
    title: 'Leadership Coaching: Developing Enduring Leaders',
    category: 'Coaching',
    desc: 'The principles behind coaching leaders who lead with integrity, clarity, and lasting purpose.',
  },
  {
    id: 'pvEHigSbiz4',
    title: 'Strategy, Policy & Governance Alignment',
    category: 'Seminar',
    desc: 'How to craft institutional strategies and policies genuinely aligned to your governance framework.',
  },
  {
    id: 'e-uN0cPpFsw',
    title: 'Corporate Governance in Africa: Context & Practice',
    category: 'Conference',
    desc: 'Examining the unique governance realities of African institutions and how global best practices must be locally adapted.',
  },
  {
    id: '1i-qfOV_H5E',
    title: 'Live: Governance GOLD Webinar Series',
    category: 'Live',
    desc: 'A live governance webinar covering board effectiveness, compliance trends, and leadership transformation in East Africa.',
    isLive: true,
  },
  {
    id: 'cPt5knDiaTg',
    title: 'Live: Leadership & Ethics Roundtable',
    category: 'Live',
    desc: 'A live roundtable on ethical leadership, governance failures, and how organizations can rebuild institutional trust.',
    isLive: true,
  },
  {
    id: 'e-uN0cPpFsw',
    title: 'FCS Jeremiah N. Karanja, MBS',
    category: 'Story',
    desc: 'The remarkable personal journey of Jeremiah N. Karanja — a story of faith, resilience, and purpose that shaped a governance career.',
    featured: true,
  },
]

const pressItem = {
  title: 'From Mud-Walled Home to the High Court: The Remarkable Journey of Jeremiah Karanja',
  source: 'The Star Kenya',
  date: 'November 20, 2025',
  url: 'https://www.the-star.co.ke/news/2025-11-20-from-mud-walled-home-to-the-high-court-remarkable-journey-of-jeremiah-karanja',
  excerpt: "A compelling profile of Karanja JN's extraordinary life journey — from humble beginnings to becoming one of Kenya's foremost governance experts, advocates, and leadership coaches.",
}

const cats = ['All', 'Masterclass', 'Teaching', 'Training', 'Workshop', 'Coaching', 'Seminar', 'Conference', 'Live', 'Story']

function thumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

/* Inline player — replaces thumbnail on click */
function VideoCard({ v, active, onSelect }) {
  const isPlaying = active === v.id

  return (
    <div className={`pf-card${v.featured ? ' pf-card--featured' : ''}`}>
      <div className="pf-card__media">
        {isPlaying ? (
          <iframe
            className="pf-card__iframe"
            src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button className="pf-card__thumb-btn" onClick={() => onSelect(v.id)} aria-label={`Play ${v.title}`}>
            <img src={thumb(v.id)} alt={v.title} loading="lazy" />
            <div className="pf-card__thumb-overlay">
              <div className="pf-card__play">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" fill="rgba(13,30,60,.72)" stroke="rgba(255,255,255,.35)" strokeWidth="1.2"/>
                  <path d="M24 20l16 10-16 10V20z" fill="white"/>
                </svg>
              </div>
            </div>
            <span className={`pf-card__badge${v.isLive ? ' pf-card__badge--live' : v.featured ? ' pf-card__badge--story' : ''}`}>
              {v.isLive ? '● Live' : v.category}
            </span>
          </button>
        )}
      </div>

      <div className="pf-card__body">
        <h3 className="pf-card__title">{v.title}</h3>
        <p className="pf-card__desc">{v.desc}</p>
        <div className="pf-card__actions">
          {isPlaying ? (
            <>
              <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="btn btn--gold pf-card__btn">
                Full Screen on YouTube
              </a>
              <button className="btn btn--outline pf-card__btn" onClick={() => onSelect(null)}>Close</button>
            </>
          ) : (
            <>
              <button className="btn btn--gold pf-card__btn" onClick={() => onSelect(v.id)}>Play Video</button>
              <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="btn btn--text">
                Watch on YouTube &#8599;
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* Featured hero player */
function FeaturedPlayer({ v, active, onSelect }) {
  const isPlaying = active === v.id
  return (
    <div className="pf-featured">
      <div className="pf-featured__media">
        {isPlaying ? (
          <iframe
            className="pf-featured__iframe"
            src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button className="pf-featured__thumb-btn" onClick={() => onSelect(v.id)} aria-label="Play featured video">
            <img src={thumb(v.id)} alt={v.title} />
            <div className="pf-featured__overlay">
              <div className="pf-featured__play">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="38" fill="rgba(13,30,60,.65)" stroke="rgba(255,255,255,.3)" strokeWidth="1.5"/>
                  <path d="M32 26l22 14-22 14V26z" fill="white"/>
                </svg>
              </div>
              <span className="pf-featured__label">Click to play</span>
            </div>
          </button>
        )}
      </div>
      <div className="pf-featured__body">
        <span className="pf-card__badge pf-card__badge--story" style={{ position: 'static', marginBottom: '1rem', display: 'inline-block' }}>Personal Story</span>
        <h3 className="pf-featured__title">{v.title}</h3>
        <p className="pf-featured__desc">{v.desc}</p>
        <div className="pf-featured__actions">
          {isPlaying ? (
            <>
              <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
                Open Fullscreen on YouTube
              </a>
              <button className="btn btn--outline" onClick={() => onSelect(null)}>Close Player</button>
            </>
          ) : (
            <>
              <button className="btn btn--gold" onClick={() => onSelect(v.id)}>Play Now</button>
              <a href="https://www.youtube.com/@KaranjaJN" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Subscribe on YouTube
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [cat, setCat]       = useState('All')
  const [playing, setPlaying] = useState(null)

  const featuredVideo = videos.find(v => v.featured)
  const filtered = videos.filter(v => !v.featured && (cat === 'All' || v.category === cat))

  const handleSelect = (id) => {
    // stop any playing video before starting new one
    setPlaying(prev => prev === id ? null : id)
  }

  return (
    <>
      {/* ── Hero with background image ── */}
      <div className="pf-hero">
        <div className="pf-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="pf-hero__vignette" />
        <div className="wrap pf-hero__body">
          <p className="page-hero__label">Portfolio</p>
          <h1 className="pf-hero__title">
            Speaking, teaching, and <em>leading in public.</em>
          </h1>
          <p className="pf-hero__sub">
            Watch Karanja JN in masterclasses, governance webinars, live roundtables, and conference keynotes.
          </p>
          <div className="pf-hero__stats">
            <div className="pf-hero__stat"><strong>10+</strong><span>Videos</span></div>
            <div className="pf-hero__divider" />
            <div className="pf-hero__stat"><strong>4</strong><span>Platforms</span></div>
            <div className="pf-hero__divider" />
            <div className="pf-hero__stat"><strong>15+</strong><span>Years Speaking</span></div>
          </div>
        </div>
      </div>

      {/* ── Featured ── */}
      <section className="section section--border-top" style={{ padding: 'clamp(1.8rem, 3.5vw, 2.8rem) 0' }}>
        <div className="wrap">
          <div className="sh" style={{ marginBottom: '1.2rem' }}>
            <p className="sh__label">Featured</p>
            <h2 className="sh__title">The <em>Story Behind</em> the Work</h2>
            <div className="sh__bar" />
          </div>
          <FeaturedPlayer v={featuredVideo} active={playing} onSelect={handleSelect} />
        </div>
      </section>

      {/* ── Video library ── */}
      <section className="section section--cream section--border-y" style={{ padding: 'clamp(1.8rem, 3.5vw, 2.8rem) 0' }}>
        <div className="wrap">
          <div className="sh">
            <p className="sh__label">Video Library</p>
            <h2 className="sh__title">Watch <em>Karanja JN</em> in Action</h2>
            <div className="sh__bar" />
            <p className="sh__desc">Click any video to play it directly here. For fullscreen, open on YouTube.</p>
          </div>

          {/* Filter */}
          <div className="pf-filter">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => { setCat(c); setPlaying(null) }}
                className={`pf-filter__btn${cat === c ? ' pf-filter__btn--active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="pf-grid">
            {filtered.map((v, i) => (
              <VideoCard key={v.id} v={v} active={playing} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Press ── */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="sh">
            <p className="sh__label">In the Press</p>
            <h2 className="sh__title">Media <em>Coverage</em></h2>
            <div className="sh__bar" />
          </div>
          <a href={pressItem.url} target="_blank" rel="noopener noreferrer" className="pf-press">
            <div className="pf-press__accent" />
            <div className="pf-press__body">
              <div className="pf-press__meta">
                <span className="pf-press__source">{pressItem.source}</span>
                <span className="pf-press__date">{pressItem.date}</span>
              </div>
              <h3 className="pf-press__title">{pressItem.title}</h3>
              <p className="pf-press__excerpt">{pressItem.excerpt}</p>
              <span className="btn btn--text">Read Article &#8599;</span>
            </div>
          </a>
        </div>
      </section>

      <SocialSection />
    </>
  )
}