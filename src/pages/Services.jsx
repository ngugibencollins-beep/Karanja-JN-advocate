import { Link } from 'react-router-dom'
import legalPhoto      from '../assets/karanja11.jpg'
import speakingPhoto   from '../assets/karanja14.jpg'
import advocates from '../assets/adv.jpeg'
 
const WA = 'https://wa.me/254795429741?text=Hello%20Karanja%20JN%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.'
 
 
const delivers = [
  { title: 'Boardroom Wisdom',           body: 'Practical governance strategies for public, private, and non-profit leaders.' },
  { title: 'Faith-Driven Leadership',    body: 'Applying timeless spiritual principles to modern leadership challenges.' },
  { title: 'Institutional Excellence',   body: 'Building systems of order, trust, and sustainable impact.' },
  { title: 'Mentorship & Career Growth', body: 'Guiding emerging leaders with skills, values, and vision.' },
  { title: 'Life Lessons',               body: 'Real stories and reflections that inspire purposeful living.' },
]
 
// ── Ndung'u Karanja Advocates — commitments, directly from document ──
const legalCommitments = [
  'Upholding truth and fairness in all engagements',
  'Offering candid, well-reasoned legal advice',
  "Protecting clients' interests without compromising ethical standards",
  'Pursuing outcomes that are lawful, just, and sustainable',
]
 
// ── Speaking & Training themes — directly from document ───────
const speakingThemes = [
  'Purpose-Driven Leadership & Personal Effectiveness',
  'Ethics, Values, Compliance & Institutional Integrity',
  'Boards, Executives & Strategic Leadership Effectiveness',
  'Human Resource Leadership & People Management',
  'Employment & Labour Law, Workplace Justice & Discipline',
  'Organisational Development & Culture Change',
  'Faith, Mentorship & Intergenerational Leadership',
]
// ── Areas of Legal Practice — directly from document ──────────
const legalAreas = [
  {
    title: 'Corporate & Commercial Law',
    items: [
      'Business formation, restructuring, and corporate governance advisory',
      'Drafting and review of commercial contracts and agreements',
      'Mergers, acquisitions, joint ventures, and business transactions',
      'Regulatory compliance and general corporate advisory',
    ],
  },
  {
    title: 'Dispute Resolution',
    items: [
      'Civil and commercial litigation',
      'Contractual and business dispute management',
      'Negotiation, mediation, and alternative dispute resolution',
      'Representation in court, tribunals, and other dispute resolution forums',
    ],
  },
  {
    title: 'Employment & Labour Law',
    items: [
      'Employment contracts and HR policies',
      'Advisory on labour relations and disciplinary processes',
      'Employment dispute management',
      'Compliance with labour and employment legislation',
    ],
  },
  {
    title: 'Property & Conveyancing',
    items: [
      'Sale, purchase, and leasing of property',
      'Title due diligence and searches',
      'Land registration and conveyancing transactions',
      'Advisory on property-related disputes',
    ],
  },
  {
    title: 'Trusts, Estates & Succession',
    items: [
      'Wills and estate planning',
      'Succession causes and probate administration',
      'Trust formation and advisory',
      'Family wealth protection and intergenerational planning',
    ],
  },
  {
    title: 'Public & Administrative Law',
    items: [
      'Judicial review and constitutional litigation',
      'Public procurement and regulatory compliance advisory',
      'Advisory on public sector, regulatory, and administrative law matters',
      'Representation in disputes involving public bodies and administrative decisions',
    ],
  },
]
 
// ── Who engages FCS Jeremiah N. Karanja — directly from document ──
const whoEngages = [
  'Boards of Directors and Trustees',
  'CEOs and Senior Executives',
  'Professionals and Managers',
  'Faith Leaders and Church Institutions',
  'Schools, Universities and Youth Organisations',
  'Public and Private Institutions',
]
 
 
 
export default function Services() {
  return (
    <>
      <div className="svc-hero">
        <div className="wrap">
          <p className="svc-hero__label">What We Offer</p>
          <h1 className="svc-hero__title">
            Governance <em>Services</em>
          </h1>
          <p className="svc-hero__sub">
            Transformative governance solutions for organizations that want to lead with integrity and build enduring legacies.
          </p>
        </div>
      </div>
 
            <section className="section section--cream section--border-y">
        <div className="wrap">
          
          <div className="values-grid">
            {delivers.map((d, i) => (
              <div className="value-card reveal-card" key={d.title} style={{ '--card-i': i }}>
                <div className="value-card__title">{d.title}</div>
                <p className="value-card__body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Ndung'u Karanja Advocates ─────────────────────────── */}
            <section className="section section--cream section--border-top">
              <div className="wrap">
                <div className="about-profile" style={{ marginBottom: '3rem' }}>
                  <div className="about-profile__media reveal-up">
                    <div className="about-profile__img-wrap">
                      <img src={advocates} alt="FCS Jeremiah N. Karanja at Ndung'u Karanja Advocates" className="about-profile__photo" />
                      <div className="about-profile__frame" />
                    </div>
                  </div>
      
                  <div className="about-profile__body reveal-up" style={{ '--card-i': 1 }}>
                    <h2 className="about-profile__name" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                      Ndung'u Karanja <em>Advocates</em>
                    </h2>
                    <div className="sh__bar" style={{ marginBottom: '1.4rem' }} />
                    <p className="about-profile__lead">
                      Ndung'u Karanja Advocates is a professional law practice offering high-quality legal services grounded in integrity, diligence, and sound judgment. The firm provides practical, client-focused legal solutions to individuals, corporates, institutions, and organisations operating in complex legal and regulatory environments.
                    </p>
                    <p className="about-profile__para">
                      We practise law as a calling to serve justice, not merely as a commercial activity.
                    </p>
      
                    <ul className="about-mandate__list" style={{ marginTop: '1.2rem' }}>
                      {legalCommitments.map((c, i) => (
                        <li className="about-mandate__item" key={c} style={{ transitionDelay: `${i * 0.07}s` }}>
                          <span className="about-mandate__dot" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
 
            {/* ── Areas of Legal Practice ───────────────────────────── */}
            <section className="section section--border-top">
              <div className="wrap">
                <div className="sh sh--center reveal-up">
                  <p className="sh__label" style={{ justifyContent: 'center' }}>Legal, Regulatory &amp; Compliance Advisory</p>
                  <h2 className="sh__title">Areas of <em>Legal Practice</em></h2>
                  <div className="sh__bar" />
                  <p className="sh__desc" style={{ marginInline: 'auto' }}>
                    From obligation to assurance — helping organisations remain compliant, accountable and legally resilient.
                  </p>
                </div>
                <div className="legal-grid">
                  {legalAreas.map((a, i) => (
                    <div
                      className="legal-card reveal-card legal-card--detailed"
                      key={a.title}
                      style={{ '--card-i': i }}
                      tabIndex={0}
                    >
                      <span className="legal-card__index">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="legal-card__title">{a.title}</h3>
                      <ul className="legal-card__list">
                        {a.items.map((item, j) => (
                          <li key={j} style={{ '--li-i': j }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
 
                  {/* ── Speaking & Training ───────────────────────────────── */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="about-profile" style={{ marginBottom: '3rem' }}>
            <div className="about-profile__media reveal-up" style={{ order: 2 }}>
              
            </div>
 
            <div className="about-profile__body reveal-up" style={{ '--card-i': 1, order: 1 }}>
              <h2 className="about-profile__name" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                      Speaking & <em>Training</em>
                    </h2>
              <p className="about-profile__lead">
                FCS Jeremiah N. Karanja is a highly sought-after keynote speaker, trainer, and leadership facilitator, known for delivering compelling, thought-provoking, and practical sessions that challenge minds, shape character, and inspire purposeful action.
              </p>
              <p className="about-profile__para">
                His speaking and training engagements are distinguished by depth, clarity, moral authority, and relevance — combining real-world experience, strategic insight, and values-based leadership principles to help individuals and institutions navigate complexity with confidence and integrity.
              </p>
            </div>
            <div className="about-profile__img-wrap">
                <img src={legalPhoto} alt="FCS Jeremiah N. Karanja speaking and training" className="about-profile__photo" />
                <div className="about-profile__frame" />
              </div>
          </div>
 
          <div className="about-mandate">
            <div className="reveal-up">
              <p className="sh__label">Key Speaking & Training Themes</p>
              <ul className="about-mandate__list" style={{ marginTop: '1rem' }}>
                {speakingThemes.map((t, i) => (
                  <li className="about-mandate__item" key={t} style={{ transitionDelay: `${i * 0.07}s` }}>
                    <span className="about-mandate__dot" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
 
            <div className="reveal-up" style={{ '--card-i': 1 }}>
              <p className="sh__label">Who Engages FCS Jeremiah N. Karanja</p>
              <ul className="about-mandate__list" style={{ marginTop: '1rem' }}>
                {whoEngages.map((w, i) => (
                  <li className="about-mandate__item" key={w} style={{ transitionDelay: `${i * 0.07}s` }}>
                    <span className="about-mandate__dot" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--cream section--border-top">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 540, marginInline: 'auto' }}>
          <h2 className="sh__title" style={{ marginBottom: '.75rem' }}>
            Ready to discuss your <em>governance needs?</em>
          </h2>
          <div style={{ display: 'flex', gap: '.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--gold">Chat on WhatsApp</a>
            <Link to="/contact" className="btn btn--outline">Send a Message</Link>
          </div>
        </div>
      </section>
 
      {/* ── Scoped styles for the legal practice cards ──────────── */}
      <style>{`
        .legal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.4rem;
        }
        @media (max-width: 900px) {
          .legal-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .legal-grid { grid-template-columns: 1fr; }
        }
 
        .legal-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid rgba(13, 32, 69, 0.08);
          border-radius: 12px;
          padding: 1.9rem 1.7rem;
          min-height: 180px;
          overflow: hidden;
          transition: transform .35s cubic-bezier(.22,.61,.36,1),
                      box-shadow .35s ease,
                      border-color .35s ease;
        }
        .legal-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c9a84c, rgba(201,168,76,.2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .45s ease;
        }
        .legal-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(13, 32, 69, .10);
          border-color: rgba(201, 168, 76, .35);
        }
        .legal-card:hover::before { transform: scaleX(1); }
 
        .legal-card--simple {
          justify-content: center;
          text-align: center;
        }
 
        .legal-card--detailed .legal-card__title {
          padding-bottom: .85rem;
          margin-bottom: .95rem;
          border-bottom: 1px solid rgba(13, 32, 69, 0.08);
        }
 
        .legal-card__title {
          position: relative;
          font-size: 1.02rem;
          font-weight: 600;
          color: #0d2045;
          letter-spacing: -.01em;
          margin: 0;
        }
        .legal-card--detailed .legal-card__title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 26px;
          height: 2px;
          background: #c9a84c;
          transition: width .35s ease;
        }
        .legal-card:hover .legal-card__title::after { width: 48px; }
 
        .legal-card__list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .legal-card__list li {
          position: relative;
          font-size: .85rem;
          line-height: 1.6;
          color: var(--ink-soft);
          padding-left: 1rem;
          margin-bottom: .45rem;
        }
        .legal-card__list li:last-child { margin-bottom: 0; }

        /* ── Interactive hover / focus behaviour ── */
        .legal-card { cursor: default; outline: none; }
        .legal-card:focus-visible {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(13, 32, 69, .10);
          border-color: rgba(201, 168, 76, .55);
        }
        .legal-card:focus-visible::before { transform: scaleX(1); }

        /* Subtle navy wash that rises from the base of the card */
        .legal-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(201,168,76,0) 55%, rgba(201,168,76,.07) 100%);
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
        }
        .legal-card:hover::after,
        .legal-card:focus-visible::after { opacity: 1; }

        /* Index numeral */
        .legal-card__index {
          position: absolute;
          top: 1.1rem;
          right: 1.4rem;
          font-family: var(--serif);
          font-style: italic;
          font-size: 1.5rem;
          line-height: 1;
          color: #c9a84c;
          opacity: .35;
          transition: opacity .35s ease, transform .35s ease;
        }
        .legal-card:hover .legal-card__index,
        .legal-card:focus-visible .legal-card__index {
          opacity: .9;
          transform: translateY(-2px);
        }
        .legal-card__title { padding-right: 2.4rem; transition: color .3s ease; }
        .legal-card:hover .legal-card__title,
        .legal-card:focus-visible .legal-card__title { color: #9e7020; }

        /* List items: gentle staggered slide and gold marker growth */
        .legal-card__list li {
          transition: transform .35s cubic-bezier(.22,.61,.36,1),
                      color .3s ease;
          transition-delay: calc(var(--li-i, 0) * 0.05s);
        }
        .legal-card__list li::before {
          transition: transform .3s ease, background .3s ease;
          transition-delay: calc(var(--li-i, 0) * 0.05s);
        }
        .legal-card:hover .legal-card__list li,
        .legal-card:focus-visible .legal-card__list li {
          transform: translateX(4px);
          color: var(--ink-mid);
        }
        .legal-card:hover .legal-card__list li::before,
        .legal-card:focus-visible .legal-card__list li::before {
          transform: scale(1.5);
          background: #0d2045;
        }

        @media (hover: none) {
          .legal-card:hover { transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .legal-card, .legal-card *, .legal-card::before, .legal-card::after {
            transition: none !important;
          }
        }
        .legal-card__list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .55em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c9a84c;
        }
      `}</style>
    </>
  )
}





























































