import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { Logo } from './Logo'
import ContactAction from './ContactAction'
import { company } from '../config/company'

export function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo /><p>Building Trust. Creating Tomorrow.</p></div><div className="footer-links"><h3>EXPLORE</h3>{[['Home', 'home'], ['About', 'about'], ['Expertise', 'expertise'], ['Projects', 'projects'], ['Contact', 'contact']].map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-links footer-connect"><h3>START A CONVERSATION</h3><ContactAction channel="whatsapp">WhatsApp <ArrowUpRight size={16} /></ContactAction><ContactAction channel="email">Email <ArrowUpRight size={16} /></ContactAction><span>Let’s bring your vision to life.</span></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p><a href="#home">BACK TO TOP <ArrowUp size={16} /></a></div></div></footer>
}
