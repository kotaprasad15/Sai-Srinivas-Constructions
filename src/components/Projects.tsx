import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import { SectionLabel } from './SectionLabel'

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card reveal"><div className="project-card-image"><img src={project.image} alt={project.imageAlt} width="900" height="650" loading="lazy" /><span>{project.status}</span></div><p className="eyebrow">{project.category}{project.location ? ` / ${project.location}` : ''}</p><h3>{project.title}</h3><p>{project.description}</p></article>
}

export function Projects() {
  return <section id="projects" className="section projects" aria-labelledby="projects-title" tabIndex={-1}><div className="container"><div className="section-heading reveal"><div><SectionLabel number="04">WORK IN PROGRESS</SectionLabel><h2 id="projects-title">Our <span>Projects.</span></h2></div><span className="quiet-label">THE NEXT CHAPTER IS TAKING SHAPE</span></div>{projects.length ? <div className="projects-grid">{projects.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="project-placeholder reveal"><img src="/images/projects.webp" alt="" width="1500" height="800" loading="lazy" /><div className="project-overlay" /><div className="project-notice"><span className="project-status"><span /> PORTFOLIO UPDATES COMING SOON</span><h3>Good things are<br />being built.</h3><p>We are currently working on our project portfolio. Details and updates will be shared soon.</p><a className="text-link" href="#contact">Talk to Us About Your Project <ArrowUpRight size={19} /></a></div><span className="project-photo-caption">ARCHITECTURAL IMAGE FOR ILLUSTRATION</span></div>}</div></section>
}
