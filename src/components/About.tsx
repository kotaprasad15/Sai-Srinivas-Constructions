import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import { SectionLabel } from './SectionLabel'
import { company } from '../config/company'

export function About() {
  return <section id="about" className="section about" aria-labelledby="about-title" tabIndex={-1}>
    <div className="container about-grid">
      <div className="about-visual reveal"><div className="image-frame"><img src="/images/about.webp" alt="Architectural perspective of concrete and structural building details" width="900" height="1050" loading="lazy" /></div><div className="about-image-note"><MoveUpRight size={34} strokeWidth={1.4} /><span>Strong foundations.<br /><b>Lasting relationships.</b></span></div><span className="image-caption">A commitment to thoughtful construction.</span></div>
      <div className="about-copy reveal"><SectionLabel number="01">ABOUT THE COMPANY</SectionLabel><h2 id="about-title">Building with Experience.<br /><span>Delivering with Commitment.</span></h2><p className="lead">{company.name} is an independently operated construction business focused on delivering reliable and professional construction services.</p><p>With previous professional experience associated with ESSAR and experience handling MES (Military Engineer Services) contracts, the business brings valuable industry exposure and practical understanding to its independent contracting operations.</p><p>Today, {company.name} undertakes private construction contracts with a focus on quality workmanship, professional execution and client satisfaction.</p><a href="#experience" className="text-link">Discover Our Experience <ArrowUpRight size={19} /></a></div>
    </div>
  </section>
}
