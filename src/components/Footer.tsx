import { ArrowUp } from 'lucide-react'
import { company } from '../config/company'
import { getPhoneHref } from '../lib/contact'
import { Logo } from './Logo'
import ContactAction from './ContactAction'
import './footer.css'

const footerLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

export function Footer() {
  const phoneHref = getPhoneHref()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-columns">
          <div className="site-footer-brand">
            <Logo />
            <p>{company.tagline}</p>
          </div>
          <nav className="site-footer-links" aria-label="Footer navigation">
            {footerLinks.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
          </nav>
          <address className="site-footer-address">
            <p>{company.address}</p>
            {phoneHref && <a href={phoneHref}>{company.phone}</a>}
            <ContactAction channel="email">{company.email || 'Email'}</ContactAction>
            <ContactAction channel="whatsapp">WhatsApp</ContactAction>
          </address>
        </div>
        <div className="site-footer-base">
          <p>© {new Date().getFullYear()} {company.name}.</p>
          <a href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
