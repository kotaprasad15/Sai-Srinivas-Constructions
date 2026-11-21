import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="portfolio-entry reveal">
      <div className="portfolio-image">
        <img src={project.image} alt={project.imageAlt} width="900" height="650" loading="lazy" />
      </div>
      <h3>{project.title}</h3>
      <p className="portfolio-details">{[project.status, project.category, project.location].filter(Boolean).join(' / ')}</p>
      <p>{project.description}</p>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section editorial-section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <header className="editorial-introduction reveal">
          <h2 id="projects-title">Our projects</h2>
          <div>
            {projects.length === 0 && (
              <p>We are currently working on our project portfolio. Details and updates will be shared soon.</p>
            )}
            <a className="text-link" href="#contact">
              Talk to us about your project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </header>
        {projects.length > 0 ? (
          <div className="portfolio-gallery">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        ) : (
          <figure className="portfolio-study reveal">
            <div className="portfolio-image">
              <img src="/images/projects.webp" alt="Curved facade of a modern building" width="1200" height="1796" loading="lazy" />
            </div>
            <figcaption>Architectural photograph for illustration.</figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}
