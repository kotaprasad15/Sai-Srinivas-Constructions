import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import { SectionLabel } from './SectionLabel'

export function Expertise() {
  return <section id="expertise" className="section expertise" aria-labelledby="expertise-title" tabIndex={-1}><div className="container"><div className="section-heading reveal"><div><SectionLabel number="02">OUR EXPERTISE</SectionLabel><h2 id="expertise-title">Built around<br /><span>your requirements.</span></h2></div><p>From the first conversation to on-site execution, our areas of work reflect a practical understanding of construction.</p></div><div className="services-grid">{services.map(({ title, description, icon: Icon }, i) => <a className="service-card reveal" key={title} href={`#contact`} aria-label={`Discuss ${title.toLowerCase()}`}><div className="service-top"><Icon size={34} strokeWidth={1.35} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{description}</p><span className="service-bottom">LET’S DISCUSS YOUR REQUIREMENT <ArrowUpRight size={20} /></span></a>)}</div></div></section>
}
