import { ArrowDown } from 'lucide-react'
import { company } from '../config/company'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="container hero-intro">
        <h1 id="hero-title">Building trust.<br />Creating tomorrow.</h1>
      </div>
      <picture className="hero-image">
        <source media="(max-width: 640px)" srcSet="/images/facade-mobile.webp" />
        <img src="/images/facade.webp" alt="Glass facade and timber-lined roof seen from below against a pale blue sky" fetchPriority="high" width="1500" height="703" />
      </picture>
      <div className="container hero-details">
        <p>{company.name} delivers professional construction solutions with a commitment to quality, reliability and excellence.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#expertise">Explore Our Expertise</a>
          <a className="text-link" href="#contact">Contact Us</a>
        </div>
        <a href="#about" className="scroll-link" aria-label="Scroll to About Us"><ArrowDown aria-hidden="true" size={22} /></a>
      </div>
      <ul className="container principles" aria-label="Our construction principles">
        <li>Professional expertise</li>
        <li>Quality at every step</li>
        <li>Precision in execution</li>
      </ul>
    </section>
  )
}
