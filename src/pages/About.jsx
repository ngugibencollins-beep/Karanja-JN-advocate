import { useEffect } from 'react'
import { Link } from 'react-router-dom'


import profilePhoto    from '../assets/home.jpg'

import logoHarambee    from '../assets/harambee.png'       
import logoMathira     from '../assets/Mathira.jpeg'        
import logoryantechKe  from '../assets/ryantechKe.png'      
import logoBunifu      from '../assets/bunifu (3).png'      
import logoNita        from '../assets/nita.jpg'            

const WA = 'https://wa.me/254795429741?text=Hello%20FCS%20Jeremiah%20Karanja%2C%20I%27d%20like%20to%20connect%20and%20learn%20more.'


const gold = [
  { letter: 'G', word: 'God',     body: 'The source of true wisdom, justice, and moral authority. Without Him, leadership loses its compass and governance loses its anchor.' },
  { letter: 'O', word: 'Order',   body: 'Structures, systems, and standards that build trust, enhance accountability, and create stability.' },
  { letter: 'L', word: 'Legacy',  body: 'Impact that outlives you — shaping culture, people, and institutions long after your season of leadership.' },
  { letter: 'D', word: 'Destiny', body: 'A higher calling that aligns gifts, purpose, and influence with divine intention.' },
]




// ── Partners — 5 cards, same as Home page ─────────────────────
const partners = [
  { name: 'Institute of Certified Secretaries',      abbr: 'ICS',  logo: logoHarambee   },
  { name: 'Mathira Technical & Vocational College',  abbr: 'MTVC', logo: logoMathira    },
  { name: 'Ryantech Solutions Limited',              abbr: 'RSL',  logo: logoryantechKe },
  { name: 'Bunifu Branding',                         abbr: 'BVF',  logo: logoBunifu     },
  { name: 'NITA Kenya',                              abbr: 'NITA', logo: logoNita       },
]



export default function About() {

  // ── Scroll reveal — adds .revealed class when element enters viewport ──
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-up, .reveal-card')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="svc-hero">
        <div className="wrap">
          <h1 className="svc-hero__title">
            Our <em>Promise</em>
          </h1>
          <p className="svc-hero__sub">
           Our promise is to shape leaders of GOLD—God-led, Order-rooted, Legacy-minded, Destiny-driven.
          </p>
        </div>
      </div>

      {/* ── Profile split ─────────────────────────────────────── */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="about-profile">
            {/* Photo — fades up on scroll */}
            <div className="about-profile__media reveal-up">
              <div className="about-profile__img-wrap">
                <img src={profilePhoto} alt="FCS Jeremiah N. Karanja, MBS" className="about-profile__photo" />
                <div className="about-profile__frame" />
              </div>
            </div>

            {/* Bio — fades up slightly delayed */}
            <div className="about-profile__body reveal-up" style={{ '--card-i': 1 }}>
               <p className="svc-hero__label">About Us</p>
              
              <p className="about-profile__lead">
               Governance GOLD with Karanja JN is a leadership, governance, and transformation platform dedicated to equipping leaders with the wisdom, principles, and strategies to lead with integrity, clarity, and impact. It is founded on the conviction that leadership is a calling, governance is a stewardship, and every leader must cultivate a life of purpose anchored in higher values.
              </p>
              <p className="about-profile__para">
                At the core of this platform is a guiding principle drawn from Colossians 3:23–24:
“Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.”

              </p>
              <p className="about-profile__para">
                This commitment to wholehearted service defines our approach to leadership, work done faithfully, excellently, and honorably becomes an offering, not just an obligation.
              </p>
              <p className="about-profile__para">
                Grounded in faith-driven values and enriched by extensive governance experience, Governance GOLD empowers leaders to build strong institutions, cultivate moral authority, and pursue destinies that influence generations. Through transformative insights, practical frameworks, and reflective stories, the platform blends inspiration with strategy to shape leaders who serve with conviction and lead with clarity.
              </p>
              <p className="about-profile__para">
                Our work draws deep inspiration from the Bible, recognising it as a rich source of timeless wisdom. We reflect on biblical characters, stories, and principles to demonstrate how they can be practically applied to everyday leadership, governance, and strategic decision-making in contemporary institutions and professional life.
              </p>
              <p className="about-profile__para">
                Karanja JN is led by FCS Jeremiah N. Karanja — a borne again Christian and governance expert, an Advocate of the High Court of Kenya, accredited governance auditor, transformational CEO, institutional reform champion, author, and inspirational speaker. His work spans public governance, private sector leadership, church governance, mentorship, and national policy contribution. His philosophy is built on stewardship, service, and wholehearted devotion to excellence.
              </p>
              <div className="about-profile__actions">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Connect on WhatsApp</a>
                <Link to="/contact" className="btn btn--outline">Send a Message</Link>
              </div>
            </div>
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
      {/* <section className="section section--cream section--border-top">
        <div className="wrap">
          <div className="sh sh--center reveal-up">
            <p className="sh__label" style={{ justifyContent: 'center' }}>Trusted By</p>
            <h2 className="sh__title">Our <em>Partners</em></h2>
            <div className="sh__bar" />
          </div>
          <div className="partners-grid">
            {partners.map((p, i) => (
              <div className="partner-card reveal-card" key={p.name} style={{ '--card-i': i }}>
                {p.logo
                  ? <img src={p.logo} alt={p.name} className="partner-card__logo" />
                  : <div className="partner-card__abbr">{p.abbr}</div>
                }
                <span className="partner-card__name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section section--border-top">
        <div className="wrap reveal-up" style={{ textAlign: 'center', maxWidth: 540, marginInline: 'auto' }}>
          <h2 className="sh__title" style={{ marginBottom: '.75rem' }}>
            Ready to start your governance <em>journey?</em>
          </h2>
          <p className="sh__desc" style={{ marginInline: 'auto', marginBottom: '2rem' }}>
            Reach out directly and let's have a conversation about where you are and where you want to be.
          </p>
          <div style={{ display: 'flex', gap: '.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Chat on WhatsApp</a>
            <Link to="/contact" className="btn btn--outline">Send a Message</Link>
          </div>
        </div>
      </section> */}
    </>
  )
}