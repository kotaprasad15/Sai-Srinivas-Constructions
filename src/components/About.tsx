import { company } from '../config/company'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container about-grid">
        <div className="about-copy reveal">
          <h2 id="about-title">Building with experience. Delivering with commitment.</h2>
          <p>{company.name} is an independently operated construction business focused on delivering reliable and professional construction services.</p>
          <p>With previous professional experience associated with ESSAR and experience handling MES (Military Engineer Services) contracts, the business brings valuable industry exposure and practical understanding to its independent contracting operations.</p>
          <p>Today, {company.name} undertakes private construction contracts with a focus on quality workmanship, professional execution and client satisfaction.</p>
          <a href="#experience" className="text-link">Discover Our Experience</a>
        </div>
        <div className="about-image reveal">
          <img src="/images/about.webp" alt="White structural ribs along a curved building facade" width="1000" height="1415" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
