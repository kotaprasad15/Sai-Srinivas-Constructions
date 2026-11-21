import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import './editorial-sections.css'

export function Expertise() {
  return (
    <section id="expertise" className="section editorial-section" aria-labelledby="expertise-title" tabIndex={-1}>
      <div className="container">
        <header className="editorial-introduction reveal">
          <h2 id="expertise-title">Our expertise</h2>
          <p>From the first conversation to on-site execution, our areas of work reflect a practical understanding of construction.</p>
        </header>
        <ul className="expertise-index">
          {services.map(({ title, description, icon: Icon }) => (
            <li key={title} className="reveal">
              <a href="#contact" aria-label={`Discuss ${title.toLowerCase()}`}>
                <div className="expertise-entry-title">
                  <Icon size={23} strokeWidth={1.25} aria-hidden="true" />
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <ArrowUpRight className="expertise-arrow" size={21} strokeWidth={1.3} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
