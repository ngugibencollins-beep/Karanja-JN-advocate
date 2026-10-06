import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Footer    from './components/Footer'
import Home      from './pages/Home'
import About     from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact   from './pages/Contact'
import TunzaKids from './pages/Tunzakids'
import Services from './pages/Services'


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                              element={<Home />} />
          <Route path="/about"                         element={<About />} />
          <Route path="/services"                       element={<Services />} />
          <Route path="/portfolio"                     element={<Portfolio />} />
          <Route path="/contact"                       element={<Contact />} />
          <Route path="/tunza-kids"                    element={<TunzaKids />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}