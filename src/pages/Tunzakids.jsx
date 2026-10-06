import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/tunza.png'

const programmes = [
  {
    name: 'Daycare',
    desc: 'A safe, caring, and nurturing environment for infants and young children.',
    age: 'Ages 0 – 2',
    // Free Lottie JSON URLs (lottie.host public)
    lottie: 'https://lottie.host/9b6e2b3e-6b3a-4b0e-8f3a-1b2c3d4e5f6a/baby-sleeping.json',
    // Fallback: inline SVG animation scene
    scene: 'baby',
    color: '#e8f5e9',
    accent: '#1a4a3a',
  },
  {
    name: 'Playgroup',
    desc: 'Learning through play, interaction, and guided discovery.',
    age: 'Ages 2 – 3',
    lottie: null,
    scene: 'play',
    color: '#fff8e1',
    accent: '#d4951a',
  },
  {
    name: 'Pre-Primary 1 (PP1)',
    desc: 'Building early literacy, numeracy, and social skills.',
    age: 'Ages 3 – 4',
    lottie: null,
    scene: 'books',
    color: '#e3f2fd',
    accent: '#1565c0',
  },
  {
    name: 'Pre-Primary 2 (PP2)',
    desc: 'Preparing children confidently for primary school.',
    age: 'Ages 4 – 6',
    lottie: null,
    scene: 'graduate',
    color: '#fce4ec',
    accent: '#b71c1c',
  },
]

// Each env card uses a fully CSS-animated SVG scene — no icons
const envCards = [
  { scene: 'school',    label: 'Secure & child-friendly facilities',          color: '#1a4a3a', bg: '#e8f5e9' },
  { scene: 'teacher',   label: 'Caring and trained teachers and caregivers',   color: '#d4951a', bg: '#fff8e1' },
  { scene: 'classroom', label: 'Clean, safe, and stimulating learning spaces', color: '#1565c0', bg: '#e3f2fd' },
  { scene: 'bus',       label: 'Reliable school transport services',           color: '#b71c1c', bg: '#fce4ec' },
]

const philosophy = [
  { title: 'Holistic Development', desc: 'We nurture the whole child — academically, socially, emotionally, physically, and morally.' },
  { title: 'Play & Exploration',   desc: 'Learning through play, exploration, and guided instruction tailored to each child.' },
  { title: 'Character Formation',  desc: 'Positive discipline and values such as respect, responsibility, kindness, and cooperation.' },
  { title: 'Partnership',          desc: 'A strong partnership between school, parents, and caregivers at every stage.' },
]

const whyUs = [
  'A nurturing and disciplined learning environment',
  'Individual attention and child-focused care',
  'Balanced academic and co-curricular development',
  'Strong values and character formation',
  'Safe and reliable school transport',
]

const shapes = [
  { size: 60, top: '12%', left: '8%',  delay: '0s',   dur: '6s',  opacity: .12 },
  { size: 40, top: '68%', left: '5%',  delay: '1.5s', dur: '8s',  opacity: .08 },
  { size: 80, top: '25%', left: '88%', delay: '0.8s', dur: '7s',  opacity: .10 },
  { size: 30, top: '75%', left: '82%', delay: '2.2s', dur: '5s',  opacity: .14 },
  { size: 50, top: '45%', left: '50%', delay: '1.1s', dur: '9s',  opacity: .06 },
  { size: 25, top: '88%', left: '42%', delay: '0.4s', dur: '6.5s',opacity: .10 },
]

/* ── Inline CSS-animated SVG scenes (no external deps) ── */
function SceneBaby() {
  return (
    <svg viewBox="0 0 120 100" className="prog-scene">
      {/* Crib */}
      <rect x="20" y="58" width="80" height="30" rx="6" fill="#c8e6c9" />
      <line x1="20" y1="58" x2="20" y2="88" stroke="#1a4a3a" strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="58" x2="100" y2="88" stroke="#1a4a3a" strokeWidth="3" strokeLinecap="round"/>
      {/* Baby head */}
      <circle cx="60" cy="52" r="14" fill="#ffe0b2" className="prog-scene__baby-head"/>
      {/* Eyes closed */}
      <path d="M54 52 Q56 54 58 52" stroke="#5d4037" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M62 52 Q64 54 66 52" stroke="#5d4037" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M56 56 Q60 59 64 56" stroke="#e57373" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Blanket */}
      <rect x="30" y="64" width="60" height="14" rx="4" fill="#a5d6a7"/>
      {/* Stars */}
      <text x="12" y="30" fontSize="10" className="prog-scene__star1">★</text>
      <text x="90" y="22" fontSize="8" className="prog-scene__star2">★</text>
      <text x="50" y="18" fontSize="6" className="prog-scene__star3">✦</text>
    </svg>
  )
}

function ScenePlay() {
  return (
    <svg viewBox="0 0 120 100" className="prog-scene">
      {/* Ground */}
      <rect x="0" y="80" width="120" height="20" fill="#c8e6c9" rx="4"/>
      {/* Kid body */}
      <circle cx="60" cy="35" r="12" fill="#ffe0b2" className="prog-scene__kid"/>
      <rect x="52" y="47" width="16" height="18" rx="4" fill="#ef9a9a"/>
      <rect x="44" y="48" width="10" height="4" rx="2" fill="#ef9a9a"/>
      <rect x="66" y="48" width="10" height="4" rx="2" fill="#ef9a9a"/>
      <rect x="53" y="65" width="6" height="14" rx="3" fill="#90a4ae"/>
      <rect x="61" y="65" width="6" height="14" rx="3" fill="#90a4ae"/>
      {/* Ball */}
      <circle cx="95" cy="75" r="9" fill="#ef5350" className="prog-scene__ball"/>
      <path d="M89 70 Q95 78 101 70" stroke="white" strokeWidth="1" fill="none"/>
      <path d="M86 77 Q95 72 104 77" stroke="white" strokeWidth="1" fill="none"/>
      {/* Smile */}
      <path d="M54 37 Q60 42 66 37" stroke="#e57373" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Eyes */}
      <circle cx="56" cy="33" r="2" fill="#5d4037"/>
      <circle cx="64" cy="33" r="2" fill="#5d4037"/>
      {/* Sparkles */}
      <text x="8" y="25" fontSize="12" className="prog-scene__spark1">✦</text>
      <text x="100" y="35" fontSize="10" className="prog-scene__spark2">✦</text>
    </svg>
  )
}

function SceneBooks() {
  return (
    <svg viewBox="0 0 120 100" className="prog-scene">
      {/* Desk */}
      <rect x="15" y="68" width="90" height="8" rx="3" fill="#bcaaa4"/>
      <rect x="25" y="76" width="8" height="18" rx="2" fill="#a1887f"/>
      <rect x="87" y="76" width="8" height="18" rx="2" fill="#a1887f"/>
      {/* Books stack */}
      <rect x="30" y="52" width="24" height="16" rx="2" fill="#ef5350"/>
      <rect x="32" y="48" width="22" height="16" rx="2" fill="#42a5f5"/>
      <rect x="34" y="44" width="20" height="16" rx="2" fill="#66bb6a"/>
      {/* Open book */}
      <rect x="62" y="50" width="30" height="20" rx="2" fill="#fffde7"/>
      <line x1="77" y1="50" x2="77" y2="70" stroke="#bdbdbd" strokeWidth="1"/>
      <line x1="65" y1="55" x2="75" y2="55" stroke="#bdbdbd" strokeWidth="1"/>
      <line x1="65" y1="59" x2="75" y2="59" stroke="#bdbdbd" strokeWidth="1"/>
      <line x1="65" y1="63" x2="75" y2="63" stroke="#bdbdbd" strokeWidth="1"/>
      <line x1="79" y1="55" x2="89" y2="55" stroke="#bdbdbd" strokeWidth="1"/>
      <line x1="79" y1="59" x2="89" y2="59" stroke="#bdbdbd" strokeWidth="1"/>
      {/* Pencil */}
      <rect x="90" y="30" width="5" height="28" rx="2" fill="#ffd54f" className="prog-scene__pencil"/>
      <polygon points="90,58 95,58 92.5,66" fill="#ffb300"/>
      <rect x="90" y="30" width="5" height="5" rx="1" fill="#ef9a9a"/>
      {/* Stars */}
      <text x="8" y="22" fontSize="11" className="prog-scene__star1">★</text>
      <text x="105" y="28" fontSize="9" className="prog-scene__star2">★</text>
    </svg>
  )
}

function SceneGraduate() {
  return (
    <svg viewBox="0 0 120 100" className="prog-scene">
      {/* Ground */}
      <rect x="0" y="82" width="120" height="18" fill="#c8e6c9" rx="4"/>
      {/* Kid */}
      <circle cx="60" cy="34" r="13" fill="#ffe0b2" className="prog-scene__kid"/>
      {/* Cap */}
      <rect x="47" y="22" width="26" height="5" rx="2" fill="#1a4a3a"/>
      <rect x="54" y="18" width="12" height="5" rx="1" fill="#1a4a3a"/>
      <line x1="73" y1="24" x2="80" y2="32" stroke="#f4c430" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="80" cy="33" r="3" fill="#f4c430" className="prog-scene__tassel"/>
      {/* Gown */}
      <rect x="48" y="47" width="24" height="22" rx="4" fill="#1a4a3a"/>
      {/* Arms */}
      <rect x="36" y="48" width="14" height="5" rx="2" fill="#1a4a3a"/>
      <rect x="70" y="48" width="14" height="5" rx="2" fill="#1a4a3a"/>
      {/* Certificate */}
      <rect x="72" y="50" width="16" height="12" rx="2" fill="#fffde7" className="prog-scene__cert"/>
      <line x1="74" y1="54" x2="86" y2="54" stroke="#bdbdbd" strokeWidth="1"/>
      <line x1="74" y1="57" x2="86" y2="57" stroke="#bdbdbd" strokeWidth="1"/>
      {/* Legs */}
      <rect x="52" y="69" width="7" height="13" rx="3" fill="#546e7a"/>
      <rect x="61" y="69" width="7" height="13" rx="3" fill="#546e7a"/>
      {/* Smile + eyes */}
      <path d="M54 36 Q60 41 66 36" stroke="#e57373" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="56" cy="32" r="2" fill="#5d4037"/>
      <circle cx="64" cy="32" r="2" fill="#5d4037"/>
      {/* Confetti */}
      <rect x="20" y="20" width="5" height="5" rx="1" fill="#ef5350" className="prog-scene__conf1" transform="rotate(20 22 22)"/>
      <rect x="90" y="15" width="5" height="5" rx="1" fill="#42a5f5" className="prog-scene__conf2" transform="rotate(-15 92 17)"/>
      <rect x="105" y="40" width="4" height="4" rx="1" fill="#f4c430" className="prog-scene__conf3" transform="rotate(35 107 42)"/>
      <rect x="10" y="45" width="4" height="4" rx="1" fill="#66bb6a" className="prog-scene__conf4" transform="rotate(-25 12 47)"/>
    </svg>
  )
}

// Environment animated SVG scenes
function SceneSchool() {
  return (
    <svg viewBox="0 0 140 110" className="env-scene">
      {/* Sky */}
      <rect width="140" height="110" fill="#e8f5e9" rx="12"/>
      {/* Sun */}
      <circle cx="115" cy="22" r="12" fill="#ffd54f" className="env-scene__sun"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i}
          x1={115 + Math.cos(a*Math.PI/180)*14}
          y1={22  + Math.sin(a*Math.PI/180)*14}
          x2={115 + Math.cos(a*Math.PI/180)*19}
          y2={22  + Math.sin(a*Math.PI/180)*19}
          stroke="#ffd54f" strokeWidth="2" strokeLinecap="round"
          style={{transformOrigin:'115px 22px', animation:`tunza-spin-slow 8s linear infinite`}}
        />
      ))}
      {/* Building */}
      <rect x="25" y="45" width="90" height="55" rx="3" fill="#a5d6a7"/>
      <rect x="40" y="30" width="60" height="20" rx="3" fill="#81c784"/>
      {/* Roof triangle */}
      <polygon points="30,45 110,45 70,18" fill="#66bb6a"/>
      {/* Door */}
      <rect x="57" y="70" width="26" height="30" rx="3" fill="#1a4a3a"/>
      <circle cx="80" cy="85" r="2" fill="#f4c430"/>
      {/* Windows */}
      <rect x="35" y="55" width="18" height="14" rx="2" fill="#b3e5fc"/>
      <rect x="87" y="55" width="18" height="14" rx="2" fill="#b3e5fc"/>
      {/* Flag */}
      <line x1="70" y1="5" x2="70" y2="18" stroke="#1a4a3a" strokeWidth="1.5"/>
      <rect x="70" y="5" width="14" height="9" rx="1" fill="#ef5350" className="env-scene__flag"/>
      {/* Clouds */}
      <ellipse cx="25" cy="18" rx="14" ry="8" fill="white" opacity=".8" className="env-scene__cloud1"/>
      <ellipse cx="33" cy="14" rx="10" ry="7" fill="white" opacity=".8" className="env-scene__cloud1"/>
      {/* Ground */}
      <rect x="0" y="97" width="140" height="13" rx="4" fill="#4caf50" opacity=".4"/>
      {/* Kids outside */}
      <circle cx="18" cy="88" r="6" fill="#ffe0b2" className="env-scene__kid1"/>
      <rect x="14" y="94" width="8" height="8" rx="2" fill="#ef9a9a"/>
      <circle cx="122" cy="88" r="6" fill="#ffe0b2" className="env-scene__kid2"/>
      <rect x="118" y="94" width="8" height="8" rx="2" fill="#90caf9"/>
    </svg>
  )
}

function SceneTeacher() {
  return (
    <svg viewBox="0 0 140 110" className="env-scene">
      <rect width="140" height="110" fill="#fff8e1" rx="12"/>
      {/* Blackboard */}
      <rect x="20" y="20" width="100" height="55" rx="4" fill="#1a4a3a"/>
      <rect x="25" y="25" width="90" height="45" rx="2" fill="#2e7d32"/>
      {/* Writing on board */}
      <text x="35" y="43" fontSize="9" fill="white" fontFamily="sans-serif" className="env-scene__text1">A B C</text>
      <text x="35" y="57" fontSize="9" fill="white" fontFamily="sans-serif" className="env-scene__text2">1 + 1 = 2</text>
      {/* Teacher */}
      <circle cx="110" cy="52" r="10" fill="#ffe0b2" className="env-scene__teacher"/>
      <rect x="103" y="62" width="14" height="18" rx="3" fill="#5c6bc0"/>
      <rect x="96" y="63" width="9" height="4" rx="2" fill="#5c6bc0"/>
      {/* Pointer arm */}
      <rect x="114" y="60" width="9" height="3" rx="1" fill="#5c6bc0" className="env-scene__arm"/>
      <line x1="122" y1="61" x2="113" y2="53" stroke="#ffd54f" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Hair bun */}
      <circle cx="110" cy="43" r="6" fill="#5d4037"/>
      <circle cx="110" cy="38" r="5" fill="#5d4037"/>
      {/* Chalk */}
      <rect x="98" y="76" width="44" height="5" rx="2" fill="#bcaaa4"/>
      {/* Stars */}
      <text x="10" y="20" fontSize="12" fill="#f4c430" className="env-scene__star1">★</text>
      <text x="125" y="15" fontSize="9" fill="#f4c430" className="env-scene__star2">★</text>
    </svg>
  )
}

function SceneClassroom() {
  return (
    <svg viewBox="0 0 140 110" className="env-scene">
      <rect width="140" height="110" fill="#e3f2fd" rx="12"/>
      {/* Table 1 */}
      <rect x="10" y="65" width="50" height="7" rx="3" fill="#bcaaa4"/>
      <rect x="18" y="72" width="6" height="18" rx="2" fill="#a1887f"/>
      <rect x="46" y="72" width="6" height="18" rx="2" fill="#a1887f"/>
      {/* Table 2 */}
      <rect x="80" y="65" width="50" height="7" rx="3" fill="#bcaaa4"/>
      <rect x="88" y="72" width="6" height="18" rx="2" fill="#a1887f"/>
      <rect x="116" y="72" width="6" height="18" rx="2" fill="#a1887f"/>
      {/* Kid 1 */}
      <circle cx="25" cy="55" r="9" fill="#ffe0b2" className="env-scene__kid1"/>
      <rect x="18" y="64" width="14" height="12" rx="3" fill="#ef9a9a"/>
      <circle cx="22" cy="52" r="2" fill="#5d4037"/>
      <circle cx="28" cy="52" r="2" fill="#5d4037"/>
      <path d="M22 57 Q25 60 28 57" stroke="#e57373" strokeWidth="1.2" fill="none"/>
      {/* Kid 2 */}
      <circle cx="115" cy="55" r="9" fill="#ffe0b2" className="env-scene__kid2"/>
      <rect x="108" y="64" width="14" height="12" rx="3" fill="#90caf9"/>
      <circle cx="112" cy="52" r="2" fill="#5d4037"/>
      <circle cx="118" cy="52" r="2" fill="#5d4037"/>
      <path d="M112 57 Q115 60 118 57" stroke="#e57373" strokeWidth="1.2" fill="none"/>
      {/* Pencils on desks */}
      <rect x="28" y="62" width="12" height="3" rx="1" fill="#ffd54f" className="env-scene__pencil1"/>
      <rect x="100" y="62" width="12" height="3" rx="1" fill="#ffd54f" className="env-scene__pencil2"/>
      {/* Window */}
      <rect x="55" y="15" width="30" height="25" rx="3" fill="#b3e5fc"/>
      <line x1="70" y1="15" x2="70" y2="40" stroke="#90caf9" strokeWidth="1.5"/>
      <line x1="55" y1="27" x2="85" y2="27" stroke="#90caf9" strokeWidth="1.5"/>
      {/* Plant */}
      <rect x="6" y="80" width="7" height="15" rx="2" fill="#8d6e63"/>
      <ellipse cx="9" cy="76" rx="8" ry="9" fill="#66bb6a" className="env-scene__plant"/>
      {/* Decorations */}
      <text x="100" y="20" fontSize="10" fill="#1565c0" className="env-scene__star1">★</text>
    </svg>
  )
}

function SceneBus() {
  return (
    <svg viewBox="0 0 140 110" className="env-scene">
      <rect width="140" height="110" fill="#fce4ec" rx="12"/>
      {/* Road */}
      <rect x="0" y="78" width="140" height="20" fill="#616161" rx="2"/>
      <rect x="0" y="85" width="140" height="4" fill="#757575"/>
      {/* Road markings */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={i*32} y={86} width="18" height="2" rx="1" fill="white" opacity=".6" className="env-scene__road-line"/>
      ))}
      {/* Bus body */}
      <rect x="12" y="42" width="100" height="38" rx="6" fill="#ffd54f" className="env-scene__bus"/>
      {/* Front */}
      <rect x="100" y="48" width="18" height="30" rx="6" fill="#ffca28"/>
      {/* Windshield */}
      <rect x="104" y="50" width="12" height="14" rx="3" fill="#b3e5fc"/>
      {/* Windows */}
      <rect x="18" y="48" width="16" height="12" rx="2" fill="#b3e5fc"/>
      <rect x="40" y="48" width="16" height="12" rx="2" fill="#b3e5fc"/>
      <rect x="62" y="48" width="16" height="12" rx="2" fill="#b3e5fc"/>
      <rect x="84" y="48" width="12" height="12" rx="2" fill="#b3e5fc"/>
      {/* Kids in windows */}
      <circle cx="26" cy="52" r="5" fill="#ffe0b2"/>
      <circle cx="48" cy="52" r="5" fill="#ffe0b2"/>
      <circle cx="70" cy="52" r="5" fill="#ffe0b2"/>
      {/* Smiley faces */}
      <circle cx="24" cy="51" r="1.2" fill="#5d4037"/>
      <circle cx="28" cy="51" r="1.2" fill="#5d4037"/>
      <path d="M24 54 Q26 56 28 54" stroke="#e57373" strokeWidth="1" fill="none"/>
      {/* Wheels */}
      <circle cx="35" cy="80" r="11" fill="#424242" className="env-scene__wheel1"/>
      <circle cx="35" cy="80" r="5" fill="#9e9e9e"/>
      <circle cx="95" cy="80" r="11" fill="#424242" className="env-scene__wheel2"/>
      <circle cx="95" cy="80" r="5" fill="#9e9e9e"/>
      {/* Exhaust */}
      <circle cx="8" cy="68" r="4" fill="#bdbdbd" opacity=".5" className="env-scene__puff1"/>
      <circle cx="2" cy="62" r="3" fill="#bdbdbd" opacity=".3" className="env-scene__puff2"/>
      {/* Door */}
      <rect x="18" y="62" width="16" height="18" rx="2" fill="#ffca28"/>
      <line x1="26" y1="62" x2="26" y2="80" stroke="#ffa000" strokeWidth="1"/>
      {/* SCHOOL BUS text */}
      <text x="28" y="78" fontSize="6" fill="#e65100" fontWeight="bold" fontFamily="sans-serif">SCHOOL BUS</text>
      {/* Road trees */}
      <rect x="5" y="52" width="5" height="26" rx="2" fill="#6d4c41"/>
      <ellipse cx="7" cy="48" rx="9" ry="11" fill="#4caf50" className="env-scene__tree1"/>
      <rect x="128" y="55" width="5" height="23" rx="2" fill="#6d4c41"/>
      <ellipse cx="130" cy="51" rx="9" ry="10" fill="#4caf50" className="env-scene__tree2"/>
    </svg>
  )
}

const sceneMap = { baby: SceneBaby, play: ScenePlay, books: SceneBooks, graduate: SceneGraduate }
const envSceneMap = { school: SceneSchool, teacher: SceneTeacher, classroom: SceneClassroom, bus: SceneBus }

export default function TunzaKids() {
  const [count, setCount] = useState({ kids: 0, years: 0, teachers: 0 })
  const statsRef = useRef(null)
  const countDone = useRef(false)

  useEffect(() => {
    const els = document.querySelectorAll('.tunza-reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('tunza-in'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !countDone.current) {
        countDone.current = true
        animateCount('kids', 120, 1800)
        animateCount('years', 8, 1200)
        animateCount('teachers', 15, 1500)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const animateCount = (key, target, duration) => {
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(prev => ({ ...prev, [key]: Math.floor(eased * target) }))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <>
      {/* ══ HERO — real photo background ══ */}
      <div className="tunza-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        {/* floating soft circles */}
        {shapes.map((s, i) => (
          <div key={i} className="tunza-shape" style={{
            width: s.size, height: s.size,
            top: s.top, left: s.left,
            opacity: s.opacity,
            animationDuration: s.dur,
            animationDelay: s.delay,
          }} />
        ))}
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tunza-hero__badge tunza-reveal"><span>🌟</span> Early Childhood Education</div>
          <h1 className="tunza-hero__title tunza-reveal">Tunza Kids <em>Academy</em></h1>
          <p className="tunza-hero__tag tunza-reveal">Nurturing for Wholesome Growth</p>
          <p className="tunza-hero__sub tunza-reveal">A child-centred early learning institution committed to nurturing the whole child — academically, socially, emotionally, physically, and morally.</p>
          <div className="tunza-hero__stats tunza-reveal" ref={statsRef}>
            <div className="tunza-hero__stat"><span className="tunza-hero__stat-num">{count.kids}+</span><span className="tunza-hero__stat-label">Happy Children</span></div>
            <div className="tunza-hero__stat-div" />
            <div className="tunza-hero__stat"><span className="tunza-hero__stat-num">{count.years}+</span><span className="tunza-hero__stat-label">Years Serving</span></div>
            <div className="tunza-hero__stat-div" />
            <div className="tunza-hero__stat"><span className="tunza-hero__stat-num">{count.teachers}+</span><span className="tunza-hero__stat-label">Trained Staff</span></div>
          </div>
          <div className="tunza-hero__actions tunza-reveal">
            <a href="tel:0723051405" className="tunza-btn-primary">📞 Call to Enrol: 0723 051 405</a>
            <a href="#programmes" className="tunza-btn-secondary">Our Programmes ↓</a>
          </div>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="tunza-about">
            <div className="tunza-about__text tunza-reveal">
              <p className="sh__label">About Us</p>
              <h2 className="sh__title">A Safe Place Where <em>Children Thrive</em></h2>
              <div className="sh__bar" style={{ marginBottom: '1.4rem' }} />
              <p className="tunza-about__lead">Tunza Kids Academy provides a safe, caring, and stimulating environment where children are guided to discover their potential, build confidence, and develop a love for learning from an early age.</p>
              <p className="tunza-about__para">Our approach recognises that every child is unique and thrives best when learning is grounded in care, structure, play, and positive values.</p>
              <p className="tunza-about__para">Children learn best when they feel safe, valued, and loved — and this is at the heart of everything we do.</p>
            </div>
            <div className="tunza-about__promise tunza-reveal">
              <div className="tunza-promise-card">
                <div className="tunza-promise-card__icon">✦</div>
                <h3 className="tunza-promise-card__title">Our Promise</h3>
                <p className="tunza-promise-card__body">At Tunza Kids Academy, we are committed to nurturing young minds and hearts, laying a firm foundation for lifelong learning, character, and purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROGRAMMES — SVG animated scene cards ══ */}
      <section className="section" id="programmes" style={{ background: '#f4fbf7' }}>
        <div className="wrap">
          <div className="sh sh--center tunza-reveal">
            <p className="sh__label" style={{ justifyContent: 'center' }}>What We Offer</p>
            <h2 className="sh__title">Our Learning <em>Programmes</em></h2>
            <div className="sh__bar" />
            <p className="sh__desc" style={{ marginInline: 'auto' }}>Structured early childhood programmes designed to support children at every foundational stage.</p>
          </div>
          <div className="tunza-prog-grid">
            {programmes.map((p, i) => {
              const Scene = sceneMap[p.scene]
              return (
                <div className="tunza-prog-card tunza-reveal" key={p.name} style={{ '--card-i': i, '--prog-color': p.accent, '--prog-bg': p.color }}>
                  <div className="tunza-prog-card__scene">
                    <Scene />
                  </div>
                  <div className="tunza-prog-card__body">
                    <span className="tunza-prog-card__age">{p.age}</span>
                    <h3 className="tunza-prog-card__title">{p.name}</h3>
                    <p className="tunza-prog-card__desc">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY ══ */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="sh tunza-reveal">
            <p className="sh__label">How We Learn</p>
            <h2 className="sh__title">Our Learning <em>Philosophy</em></h2>
            <div className="sh__bar" />
            <p className="sh__desc">Strong foundations shape strong futures. Our philosophy is built around four core pillars.</p>
          </div>
          <div className="tunza-phil-grid">
            {philosophy.map((p, i) => (
              <div className="tunza-phil-card tunza-reveal" key={p.title} style={{ '--card-i': i }}>
                <h3 className="tunza-phil-card__title">{p.title}</h3>
                <p className="tunza-phil-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="section" style={{ background: '#f4fbf7' }}>
        <div className="wrap">
          <div className="tunza-why">
            <div className="tunza-why__left tunza-reveal">
              <p className="sh__label">Our Advantage</p>
              <h2 className="sh__title">Why Parents Choose <em>Tunza Kids</em></h2>
              <div className="sh__bar" style={{ marginBottom: '1.4rem' }} />
              <p className="tunza-why__sub">A nurturing environment where every child is seen, known, and celebrated.</p>
            </div>
            <ul className="tunza-why__list">
              {whyUs.map((w, i) => (
                <li className="tunza-why__item tunza-reveal" key={w} style={{ '--card-i': i }}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ ENVIRONMENT — Full animated SVG scene cards ══ */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="sh sh--center tunza-reveal">
            <p className="sh__label" style={{ justifyContent: 'center' }}>Our Environment</p>
            <h2 className="sh__title">Safe, Supportive &amp; <em>Child-Friendly</em></h2>
            <div className="sh__bar" />
          </div>
          <div className="tunza-env-grid">
            {envCards.map((e, i) => {
              const EnvScene = envSceneMap[e.scene]
              return (
                <div className={`tunza-env-card tunza-env-card--${i+1} tunza-reveal`} key={e.label}
                  style={{ '--card-i': i, '--env-color': e.color, '--env-bg': e.bg }}>
                  <div className="tunza-env-card__scene-wrap">
                    <EnvScene />
                  </div>
                  <p className="tunza-env-card__label">{e.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ ADMISSIONS CTA ══ */}
      <section className="section tunza-cta-section">
        <div className="wrap">
          <div className="tunza-cta">
            <div className="tunza-cta__text tunza-reveal">
              <p className="tunza-cta__label">Admissions &amp; Enrolment</p>
              <h2 className="tunza-cta__title">Admissions are open across <em>all programmes.</em></h2>
              <p className="tunza-cta__sub">We warmly invite parents and guardians to visit the school, meet our team, and experience the Tunza Kids Academy environment firsthand.</p>
              <div className="tunza-cta__info">
                <p className="tunza-cta__info-row"><span className="tunza-cta__info-icon">📍</span> 7th Riverview Avenue, Imani Estate, along Ruiru-Githunguri Road</p>
                <p className="tunza-cta__info-row"><span className="tunza-cta__info-icon">📞</span> 0723 051 405</p>
              </div>
            </div>
            <div className="tunza-cta__actions tunza-reveal" style={{ '--card-i': 1 }}>
              <a href="tel:0723051405" className="tunza-btn-primary">Call Now</a>
              <Link to="/" className="tunza-btn-outline">Back to Main Site</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}