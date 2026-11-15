import { ArrowDown, ArrowUpRight, HardHat, ShieldCheck, Ruler } from 'lucide-react'
import { company } from '../config/company'

export function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
    <picture className="hero-image"><source media="(max-width: 640px)" srcSet="/images/hero-mobile.webp" /><img src="/images/hero.webp" alt="An upward view of modern glass and steel skyscrapers" fetchPriority="high" width="1800" height="1200" /></picture>
    <div className="hero-shade" />
    <div className="container hero-content">
      <p className="eyebrow hero-eyebrow"><span /> A strong foundation. A better future.</p>
      <h1 id="hero-title">BUILDING TRUST.<br /><span>CREATING TOMORROW.</span></h1>
      <p className="hero-description">{company.name} delivers professional construction solutions with a commitment to quality, reliability and excellence.</p>
      <div className="hero-actions"><a className="button button-primary" href="#expertise">Explore Our Expertise <ArrowUpRight size={19} /></a><a className="button button-outline" href="#contact">Contact Us <ArrowUpRight size={19} /></a></div>
    </div>
    <div className="container hero-bottom"><a href="#about" className="scroll-link"><span className="scroll-icon"><ArrowDown size={17} /></span> SCROLL TO EXPLORE</a><span className="hero-bottom-note">GROUNDED IN EXPERIENCE. BUILT WITH PURPOSE.</span><span className="hero-page"><b>01</b><span />06</span></div>
    <div className="hero-side-label" aria-hidden="true">SAI SRINIVAS / CONSTRUCTION & ENGINEERING</div>
    <div className="principles-bar"><div className="container principles-inner"><span><HardHat /> Professional Expertise</span><span><ShieldCheck /> Quality at Every Step</span><span><Ruler /> Precision in Execution</span><span className="principles-tag">YOUR VISION. OUR COMMITMENT. <ArrowUpRight size={18} /></span></div></div>
  </section>
}
