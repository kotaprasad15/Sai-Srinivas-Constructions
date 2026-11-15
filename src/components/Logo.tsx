import { company } from '../config/company'

export function Logo({ onClick }: { onClick?: () => void }) {
  return <a className="brand" href="#home" onClick={onClick} aria-label={`${company.name} home`}>
    <svg className="brand-mark" viewBox="0 0 56 60" fill="none" aria-hidden="true"><path d="M5 49V22L20 13V49M24 49V5L40 14V49M44 49V28L52 33V49M1 55H55" stroke="currentColor" strokeWidth="2.8" /><path d="M29 17L35 20M29 25L35 28M29 33L35 36M10 27L15 24M10 35L15 32" stroke="currentColor" strokeWidth="2" /></svg>
    <span className="brand-wordmark"><span>{company.name.replace(' CONSTRUCTIONS', '')}</span><span>CONSTRUCTIONS</span></span>
  </a>
}
