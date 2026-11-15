import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { WhyChooseUs } from './components/WhyChooseUs'
import Contact from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => { el.classList.add('will-reveal'); observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><About /><Expertise /><Experience /><Projects /><WhyChooseUs /><Contact /></main><Footer /></>
}
