import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from './Logo'

export const navigation = [ ['Home', 'home'], ['About Us', 'about'], ['Expertise', 'expertise'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact'] ] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const toggle = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-20% 0px -60% 0px' })
    navigation.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])
  useEffect(() => {
    if (!open) return
    const priorOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const closeOnResize = () => { if (window.innerWidth > 1050) setOpen(false) }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
      if (event.key === 'Tab') {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>('a')
        if (!links?.length) return
        if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); toggle.current?.focus() }
        else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); toggle.current?.focus() }
        else if (document.activeElement === toggle.current) { event.preventDefault(); links[event.shiftKey ? links.length - 1 : 0].focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', closeOnResize)
    return () => { document.body.style.overflow = priorOverflow; window.removeEventListener('keydown', onKey); window.removeEventListener('resize', closeOnResize) }
  }, [open])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
    <div className="container navbar"><Logo onClick={() => setOpen(false)} />
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
      <a className="button button-primary nav-cta" href="#contact">Get In Touch <ArrowUpRight size={17} /></a>
      <button ref={toggle} className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    <nav ref={menu} id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!open}>
      {navigation.map(([label, id], i) => <a key={id} href={`#${id}`} onClick={() => { setOpen(false); document.getElementById(id)?.focus({ preventScroll: true }) }}><span>0{i + 1}</span>{label}<ArrowUpRight size={20} /></a>)}
      <p>Building Trust. Creating Tomorrow.</p>
    </nav>
  </header>
}
